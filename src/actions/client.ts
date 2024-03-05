import { getSession } from "@auth0/nextjs-auth0";

export async function createClient(data: any) {
  const session = await getSession();
  const userId = session?.user.sub;

  console.log(userId);
}
