function zeros(n) {
  return n / 5 < 1 ? 0 : Math.floor(n / 5) + zeros(n / 5);
}
