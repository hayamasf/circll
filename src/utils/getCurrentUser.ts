import { createClient } from "./supabase/server";

export async function getCurrentUser() {
  const supabase = await createClient();

  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser();

  if (userError) {
    throw new Error("ユーザー情報の取得に失敗しました.");
  }

  if (!user) {
    throw new Error("該当するユーザーがいません.");
  }

  const { data: userProfile, error: profileError } = await supabase
    .from("User")
    .select("displayName, avatarUrl, role")
    .eq("id", user.id)
    .single();

  if (profileError) {
    throw new Error("プロフィール情報の取得に失敗しました.");
  }
  return {
    ...userProfile,
    email: user.email,
  };
}
