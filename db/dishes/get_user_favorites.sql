select r.rest_id, r.rest_name, r.rest_address, r.rest_state, r.rest_zip, r.rest_rating, d.dish_id, d.dish_name, d.dish_category, d.dish_description, d.img_url, d.img_cred from restaurant r
join dishes d on r.rest_id = d.dish_id
join favorites f on d.dish_id = f.dish
where f.user_id = $1;