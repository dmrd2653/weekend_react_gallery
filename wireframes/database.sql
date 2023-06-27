CREATE TABLE "galleryItems" (
	"id" serial primary key,
	"path" varchar(120) not null,
	"description" varchar(80) not null,
	"likes" integer DEFAULT 0
	);

INSERT INTO "galleryItems" ("path", "description", "likes")
VALUES ('images/art.jpg', 'Van Gogh artpiece in Cleveland', 0), 
('images/baking.jpg', 'French Apple Tart', 0), 
('images/gardening.jpg', 'A garden in St. Cloud', 0),
('images/my_cat.jpg', 'Psyche my cat', 0);