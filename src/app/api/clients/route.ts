export async function GET() {
  const res = { name: "hayama", first: "kazuyuki" };
  return Response.json({ res });
}
