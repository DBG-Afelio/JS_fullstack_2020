Insert Into ingredient (id,label,isCheked,measure)
	values
	(1,'Saumon',false,'G'),
	(2,'Boeuf',false,'G'),
	(3,'Pousse de Soja',false,'G'),
	(4,'Sauce Soja',false,'ML'),
	(5,'Dashi',false,'MG'),
	(6,'Feuille De Nori',false,'P'),
	(7,'Poulet',false,'G'),
	(8,'Riz',false,'G'),
	(9,'Shiitake',false,'G'),
	(10,'Mirin',false,'ML'),
	(11,'Graine de Sésame',false,'G'),
	(12,'Algue Wakame',false,'G'),
	(13,'Thon',false,'G'),
	(14,'Soba',false,'G'),
	(15,'Oeuf',false,'P'),
	(16,'Eau',false,'ML'),
	(17,'Pâte Miso',false,'TBS'),
	(18,'Soja',false,'G')
	
Insert into tag (id,label)
	Values
	(1,'Soupe'),
	(2,'Epicée'),
	(3,'Viande'),
	(4,'Poisson'),
	(5,'Pâte'),
	(6,'Riz'),
	(7,'Végétarien');
	
Insert into step (id,description,recipesId)
	Values
	(1,'Faire bouillir un demi-litre d''eau, ajouter le dashi (se reporter aux instructions de l''emballage, le dashi peut etre plus ou moins salé).',1),
	(2,'Couper le tofu en petits cubes si on souhaite en utiliser.',1),
	(3,'Verser un peu de notre bouillon de dashi chaud dans une tasse, et y incorporer le miso (ne pas l''incorporer dans la casserole car il ne s''y dissoudrait pas convenablement)',1),
	(4,'Mélanger dans la casserole. Ajouter de la même facon une deuxième cuillérée de miso. ',1),
	(5,'Goûter. Le mélange doit etre peu salé, mais pas trop fade.',1),
	(6,'Dans des bols individuels, disposer d''une belle manière des légumes cuits, wakame (une pincée par personne) et tofu. Verser par dessus doucement la soupe.',1);
	
Insert into recipe (id,name,preparationTime,cookingTime,level,people,evaluation,userId,isPublic)
	Values
	(1,'Soupe Miso',10,10,1,4,0,1,true);
	
Insert into picture (id,src,recipeId)
	Values
	(1,'https://assets.afcdn.com/recipe/20161114/63302_w300h200c1.jpg',1),
	(1,'https://res.cloudinary.com/serdy-m-dia-inc/image/upload/f_auto/fl_lossy/q_auto:eco/x_0,y_0,w_1279,h_720,c_crop/w_1200,h_630,c_fill/v1507091708/foodlavie/prod/recettes/soupe-miso-97b50ed2',1),
	(1,'https://storenotrefamilleprod.blob.core.windows.net/images/cms/recette/34956/34956_large.jpg',1);
	

Insert into recipe_ingredients_ingredient (recipeId,IngredientId)
	Values
	(1,16),
	(1,17),
	(1,5),
	(1,12),
	(1,18);

Insert Into recipe_tags_tag (recipeId,tagId)
	Values
	(1,1),
	(1,7)



	
	