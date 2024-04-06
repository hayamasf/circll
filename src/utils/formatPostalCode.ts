export function formatPostalCode(code: string): string {
  const formattedCode = "〒" + code.slice(0, 3) + "-" + code.slice(3);
  return formattedCode;
}
