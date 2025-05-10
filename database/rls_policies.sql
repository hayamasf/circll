-- policyが存在しなければ作成する
drop policy if exists "Users can view their own profile" on public."User";
drop policy if exists "Users can update their own profile" on public."User";

-- RLSの有効化
alter table public."User" enable row level security;

-- select用のpolicyを作成
create policy "Users can view their own profile"
on public."User"
for select
using (id = auth.uid());

-- update用のpolicyを作成
create policy "Users can update their own profile"
on public."User"
for update
using (id = auth.uid())
with check (id = auth.uid());
