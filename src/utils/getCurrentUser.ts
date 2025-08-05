import { createClient } from "./supabase/server";

export async function getCurrentUser() {
  const supabase = await createClient();

  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser();

  if (userError || !user) {
    console.warn("auth.user取得に失敗", userError)
    return null
  }

  const { data: userProfile, error: profileError } = await supabase
    .from("User")
    .select("displayName, avatarUrl, role")
    .eq("id", user.id)
    .single();

  if (profileError || !userProfile) {
    console.warn("Userテーブルから取得失敗", profileError)
    return null
  }
  return {
    ...userProfile,
    email: user.email,
  };
}
