-- drop the function if it already exists
drop function if exists public.handle_new_user cascade;

-- create the function
create function public.handle_new_user()
returns trigger as $$
declare
  email_prefix text;
begin
  email_prefix := split_part(new.email, '@', 1);
  insert into public."User" (id, displayName, createdAt);
  values (new.id, email_prefix, now());

-- drop the trigger if it already exists
create trigger on_auth_user_created
after insert into auth.users
for each row
execute function public.handle_new_user();
