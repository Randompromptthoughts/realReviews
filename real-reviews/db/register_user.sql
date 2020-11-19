insert into users (
  username,
  email,
  password
  --profile_pic
) values (
  ${username},
  ${email},
  ${hash}
)
returning user_id, username, email;--, profile_pic