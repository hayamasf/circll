import { getCurrentUser } from "@/utils/getCurrentUser";
import { prisma } from "@/lib/prisma";
import Navigation from "@/components/Navigation";

export default async function AuthenticatedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  let displayName = "ゲスト";

  try {
    const currentUser = await getCurrentUser();
    displayName = currentUser.displayName;
  } catch (error) {
    console.error("ユーザー取得に失敗しました.", error);
  }

  return (
    <div>
      <Navigation displayName={displayName} />
      <div className="min-h-screen bg-white lg:pl-72">
        <main className="py-10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
