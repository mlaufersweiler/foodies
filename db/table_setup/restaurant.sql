create table restaurant(
rest_id serial primary key,
rest_name varchar(200),
rest_address varchar(200),
rest_city varchar(200),
rest_state varchar(200),
rest_zip integer,
rest_rating integer);