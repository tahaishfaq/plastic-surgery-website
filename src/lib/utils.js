export function isExternalUrl(url) {
  return /^https?:\/\//i.test(url);
}

export function isPlaceholderValue(value) {
  return !value || /to be confirmed|x{2,}/i.test(value);
}
