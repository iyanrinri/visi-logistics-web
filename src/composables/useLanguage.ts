import { computed, ref, watch } from 'vue';
import { content, type Language } from '@/data/content';

const storageKey = 'visi-language';

function getInitialLanguage(): Language {
  if (typeof window === 'undefined') {
    return 'id';
  }

  const stored = window.localStorage.getItem(storageKey);
  return stored === 'en' ? 'en' : 'id';
}

const language = ref<Language>(getInitialLanguage());

watch(
  language,
  (value) => {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(storageKey, value);
      document.documentElement.lang = value;
    }
  },
  { immediate: true },
);

function resolvePath(source: unknown, path: string): unknown {
  return path.split('.').reduce<unknown>((current, key) => {
    if (current && typeof current === 'object' && key in current) {
      return (current as Record<string, unknown>)[key];
    }

    return undefined;
  }, source);
}

export function useLanguage() {
  const dictionary = computed(() => content[language.value]);

  function setLanguage(value: Language) {
    language.value = value;
  }

  function t(path: string): string {
    const resolved = resolvePath(dictionary.value, path);
    return typeof resolved === 'string' ? resolved : path;
  }

  return {
    language,
    dictionary,
    setLanguage,
    t,
  };
}
