export function formatDateTime(date: Date) {
  return date.toLocaleTimeString("ja-JP", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    timeZone: "Asia/Tokyo",
  });
}

export function formatDate(date: Date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

export function getDaysUntilExpiration(expirationDate:Date): number {

  const today = new Date();
  const expiration = new Date(expirationDate);

  const timeDiff = expiration.getTime() - today.getTime();

  const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24))

  return daysDiff;
}