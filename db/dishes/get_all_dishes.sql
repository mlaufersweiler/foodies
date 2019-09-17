-- select * from dishes

select r.rest_id, r.rest_city, d.dish_id, d.dish_name, d.dish_category, d.dish_description, d.img_url, d.img_cred
from restaurant r
join dishes d on r.rest_id= d.rest_id
where r.rest_city = ${city}