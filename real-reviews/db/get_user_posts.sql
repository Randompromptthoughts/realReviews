select id, title, img, content from posts
where author_id = $1;