select * from dishes
join restaurant on dishes.rest_id= restaurant.rest_id 
where dishes.dish_id= ${id}