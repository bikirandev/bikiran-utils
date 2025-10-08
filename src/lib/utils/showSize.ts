export function showSize(value: number, fromUnit: string = "bytes"): string {
  const units = ["bytes", "KB", "MB", "GB", "TB"];
  const normalizedUnit = fromUnit.toLowerCase();

  // Convert units array to lowercase for comparison
  const unitIndex = units.map((u) => u.toLowerCase()).indexOf(normalizedUnit);

  if (unitIndex === -1) {
    console.error(`Invalid unit: ${fromUnit}. Using 'bytes' as default.`);
    return showSize(value, "bytes"); // Recursively call with default unit
  }

  // Convert the input value to bytes first
  const bytes = value * Math.pow(1024, unitIndex);

  // Then convert bytes to the most appropriate unit
  if (bytes === 0) return "0 bytes";

  const k = 1024;
  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + units[i];
}
