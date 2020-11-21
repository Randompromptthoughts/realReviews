insert into posts (
content,
author_id
) values (
${content},
${author_id}) returning id, title, img, content;