-- create the function
create or replace function public.handle_new_user()
returns trigger as $$
declare
  email_prefix text;
begin
  email_prefix := split_part(new.email, '@', 1);
  insert into public."User" (id, displayName, createdAt)
  values (new.id, email_prefix, now());

  return new;

end;
$$ language plpgsql;

-- drop the trigger if it already exists
drop trigger if exists on_auth_user_created on auth.users;

create trigger on_auth_user_created
after insert on auth.users
for each row
execute function public.handle_new_user();
