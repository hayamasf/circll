-- drop the function if it already exists
drop function if exists public.handle_delete_user cascade;

-- create the function
create function public.handle_delete_user()
returns trigger as $$
begin
  delete from public."User" where id = old.id;
  return old;
end;
$$ language plpgsql security definer;

-- drop the trigger if it already exits
drop trigger if exists on_auth_user_deleted on auth.users;

-- create the trigger
create trigger on_auth_user_deleted
after delete on auth.users
for each row execute function public.handle_delete_user();
