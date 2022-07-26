type Variant = 'localStorage' | 'sessionStorage';
type LocalStorage = typeof window.localStorage;
type SessionStorage = typeof window.sessionStorage;

class Storage {
  private readonly storage: LocalStorage | SessionStorage;

  constructor(variant: Variant = 'localStorage') {
    this.storage =
      variant === 'localStorage' ? window.localStorage : window.sessionStorage;
  }

  getItem<T>(key: string, initialValue: T) {
    try {
      const value = JSON.parse(this.storage.getItem(key) || '') as T;

      if (!value) {
        return initialValue;
      }

      return value;
    } catch {
      return initialValue;
    }
  }

  setItem<T>(key: string, value: T) {
    this.storage.setItem(key, JSON.stringify(value));
  }

  removeItem(key: string) {
    this.storage.removeItem(key);
  }
}

export default Storage;
