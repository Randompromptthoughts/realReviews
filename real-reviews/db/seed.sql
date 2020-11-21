--users table

create table users (
  user_id serial primary key,
  username varchar(50),
  password varchar(250),
  email varchar(50),
  profile_pic text
);

--testing values to make sure they work

insert into users (username, password, email, profile_pic
)
values ('John doe','password stuff', 'johndoe@randommail.com', 'a lot of text');

--posts table

create table posts (
  id serial primary key,
  title varchar(50),
  img text,
  content text,
  author_id integer references users (user_id)
);

--more testing

insert into posts (title, img, content, author_id)
values (' 4/10 Amoung Us is Overrated', 'astronaunt guy url..', 'i thought this game was... blah blah', 1);