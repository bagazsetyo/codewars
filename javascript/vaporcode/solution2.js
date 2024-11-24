function vaporcode(string) {
    return Array.from(string.replace(/\s+/g, "").toUpperCase()).join("  ")
  }