class CacheClass<K, V> {
  key: K;
  value: V;

  constructor(key: K, value: V) {
    this.key = key;
    this.value = value;
  }

  set(key: K, value: V) {
    this.key = key;
    this.value = value;
  }

  get(key: K): V | undefined {
    if (this.key === key) {
      return this.value;
    }
  }
}
