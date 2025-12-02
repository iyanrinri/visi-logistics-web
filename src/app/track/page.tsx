import { Suspense } from 'react';
import TrackView from './view';

export default function TrackPage() {
  return (
    <Suspense fallback={<div>loading...</div>}>
      <TrackView />
    </Suspense>
  );
}
