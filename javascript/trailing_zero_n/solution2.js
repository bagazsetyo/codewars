function zeros(n) {
  n = ~~(n / 5);
  return n + (n < 5 ? 0 : zeros(n));
}
