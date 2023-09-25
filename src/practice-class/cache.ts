class CacheClass<K, V> {
  private cache: Map<K, V>;
  constructor(key: K, value: V) {
    this.cache = new Map<K, V>();
  }

  set(key: K, value: V) {
    this.cache.set(key, value);
  }

  get(key: K): V | undefined {
    return this.cache.get(key);
  }
}
