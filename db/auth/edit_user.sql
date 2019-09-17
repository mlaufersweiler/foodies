update users
set user_name = ${user_name}
where user_id= ${id}
returning *