export default function convertToBoolean(value: string | boolean): boolean {
  if (value === "true") return true;
  if (value === "false") return false;
  return Boolean(value);
}
