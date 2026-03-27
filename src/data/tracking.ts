import type { Language } from '@/data/content';

export interface TrackingTimelineEvent {
  date: string;
  time: string;
  status: string;
  location: string;
  description: string;
}

export interface TrackingResult {
  id: string;
  status: string;
  origin: string;
  destination: string;
  service: string;
  weight: string;
  estimatedDelivery: string;
  timeline: TrackingTimelineEvent[];
}

const LOCATIONS = ['Jakarta', 'Surabaya', 'Bandung', 'Semarang', 'Medan', 'Makassar', 'Denpasar', 'Balikpapan'];
const DEMO_IDS = ['VLI240327001', 'VLI240327002', 'VLI240327003', 'VLI240327004'];

function hashString(value: string) {
  return value.split('').reduce((acc, char) => (acc * 31 + char.charCodeAt(0)) % 100000, 7);
}

function formatDate(date: Date, language: Language) {
  return new Intl.DateTimeFormat(language === 'id' ? 'id-ID' : 'en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  }).format(date);
}

function formatTime(date: Date) {
  return new Intl.DateTimeFormat('en-GB', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  }).format(date);
}

export function isDemoTrackingId(id: string) {
  return DEMO_IDS.includes(id.toUpperCase());
}

export function createTrackingResult(
  trackingId: string,
  language: Language,
  labels: {
    statuses: Record<'delivered' | 'outForDelivery' | 'inTransit' | 'processing' | 'pickedUp', string>;
    events: Record<'packageDelivered' | 'outForDelivery' | 'inTransit' | 'processing' | 'pickedUp', string>;
    serviceNames: readonly string[];
  },
): TrackingResult | null {
  const normalizedId = trackingId.trim().toUpperCase();

  if (!isDemoTrackingId(normalizedId)) {
    return null;
  }

  const seed = hashString(normalizedId);
  const origin = LOCATIONS[seed % LOCATIONS.length];
  const destination = LOCATIONS[(seed + 3) % LOCATIONS.length];
  const statusKeys = ['delivered', 'outForDelivery', 'inTransit', 'processing'] as const;
  const statusKey = statusKeys[seed % statusKeys.length];
  const baseDate = new Date('2026-03-27T14:00:00');
  baseDate.setDate(baseDate.getDate() - (seed % 2));

  const stepDates = [0, 1, 2, 3].map((offset) => {
    const value = new Date(baseDate);
    value.setHours(baseDate.getHours() - offset * 9);
    return value;
  });

  const timeline: TrackingTimelineEvent[] = [
    {
      date: formatDate(stepDates[3], language),
      time: formatTime(stepDates[3]),
      status: labels.statuses.pickedUp,
      location: origin,
      description: labels.events.pickedUp,
    },
    {
      date: formatDate(stepDates[2], language),
      time: formatTime(stepDates[2]),
      status: labels.statuses.processing,
      location: `${origin} Hub`,
      description: labels.events.processing,
    },
    {
      date: formatDate(stepDates[1], language),
      time: formatTime(stepDates[1]),
      status: labels.statuses.inTransit,
      location: `${destination} Gateway`,
      description: labels.events.inTransit,
    },
  ];

  if (statusKey === 'outForDelivery' || statusKey === 'delivered') {
    timeline.push({
      date: formatDate(stepDates[0], language),
      time: formatTime(stepDates[0]),
      status: labels.statuses.outForDelivery,
      location: destination,
      description: labels.events.outForDelivery,
    });
  }

  if (statusKey === 'delivered') {
    const deliveredDate = new Date(stepDates[0]);
    deliveredDate.setHours(deliveredDate.getHours() + 4);
    timeline.push({
      date: formatDate(deliveredDate, language),
      time: formatTime(deliveredDate),
      status: labels.statuses.delivered,
      location: destination,
      description: labels.events.packageDelivered,
    });
  }

  const estimatedDelivery = new Date(baseDate);
  estimatedDelivery.setDate(estimatedDelivery.getDate() + (statusKey === 'delivered' ? 0 : 1));

  return {
    id: normalizedId,
    status: labels.statuses[statusKey],
    origin,
    destination,
    service: labels.serviceNames[seed % labels.serviceNames.length],
    weight: `${((seed % 180) / 10 + 2).toFixed(1)} kg`,
    estimatedDelivery: formatDate(estimatedDelivery, language),
    timeline: timeline.reverse(),
  };
}
