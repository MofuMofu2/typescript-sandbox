function getValueWithType(value: string | number) {
  return typeof value === "string" ? value.length : value * 2;
}
