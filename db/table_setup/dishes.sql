create table dishes(
dish_id serial PRIMARY KEY, 
dish_name varchar(200),
dish_description varchar(200),
dish_category varchar(200),
img_url varchar(200),
img_cred varchar(200),
rest_id int REFERENCES restaurant(rest_id)
)