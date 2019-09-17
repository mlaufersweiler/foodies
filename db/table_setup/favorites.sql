create table favorites(
favorite_id serial primary key,
user_id int references users(user_id),
dish int references dishes(dish_id)
);