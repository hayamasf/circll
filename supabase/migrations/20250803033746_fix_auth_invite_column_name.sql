--  drop the function if it already exists
drop function if exists public.handle_new_user cascade;

-- create the function
create function public.handle_new_user()
returns trigger as $$
declare
  email_prefix text;
begin
  email_prefix := split_part(new.email, '@', 1);
  insert into public."User" (id, "displayName", "createdAt")
  values (new.id, email_prefix, now());

  return new;

end;
$$ language plpgsql security definer;

-- drop the trigger if it already exists
drop trigger if exists on_auth_user_created on auth.users;

-- create the trigger
create trigger on_auth_user_created
after insert on auth.users
for each row
execute function public.handle_new_user();
