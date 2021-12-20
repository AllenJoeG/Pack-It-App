
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
-- CREATE TABLE "user" (
--     "id" SERIAL PRIMARY KEY,
--     "username" VARCHAR (80) UNIQUE NOT NULL,
--     "password" VARCHAR (1000) NOT NULL
-- );

CREATE TABLE "user" (
	"id" serial NOT NULL,
	"username" varchar(80) NOT NULL UNIQUE,
	"password" varchar(1000) NOT NULL,
	"weight" integer,
	CONSTRAINT "user_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "categories" (
	"id" serial NOT NULL,
	"category" varchar(255) NOT NULL,
	CONSTRAINT "categories_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "consumables" (
	"id" serial NOT NULL,
	"food_category_id" integer NOT NULL,
	"consumable" varchar(255) NOT NULL,
	"weight" DECIMAL(5,2) NOT NULL,
	"description" varchar(255),
	"calories" integer,
	"food_image" varchar(255),
	CONSTRAINT "consumables_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "packs" (
	"id" serial NOT NULL,
	"pack_name" varchar(255) NOT NULL,
	"capacity" varchar(16),
	CONSTRAINT "packs_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "gear" (
	"id" serial NOT NULL,
	"gear_category_id" integer NOT NULL,
	"gear" varchar(255) NOT NULL,
	"weight" DECIMAL(5,2) NOT NULL,
	"details" varchar(255),
	"gear_image" varchar(255),
	CONSTRAINT "gear_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "headouts" (
	"id" serial NOT NULL,
	"user_id" integer NOT NULL,
	"trip_name" varchar(255) NOT NULL,
	"trip_date" DATE NOT NULL,
	"trip_notes" varchar(255),
	"pack_id" integer NOT NULL,
	CONSTRAINT "headouts_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "user_custom" (
	"id" serial NOT NULL,
	"user_id_custom" integer NOT NULL,
	"gear_id_custom" integer,
	"consumable_id_custom" integer,
	"trip_id" integer NOT NULL,
	"required" BOOLEAN NOT NULL DEFAULT 'FALSE',
	"custom_category" varchar(64),
	"custom_weight" DECIMAL(5,2) NOT NULL,
	"custom_pack_note" varchar(255),
	"custom_gear_note" varchar(255),
	CONSTRAINT "user_custom_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "headout_prompts" (
	"id" serial NOT NULL,
	"duration" varchar(32) NOT NULL,
	"transportation" varchar(32) NOT NULL,
	"weather" varchar(32) NOT NULL,
	"shopping" BOOLEAN NOT NULL,
	"kids" integer NOT NULL,
	"pokemon" BOOLEAN NOT NULL,
	"cycle" BOOLEAN NOT NULL,
	CONSTRAINT "headout_prompts_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);





ALTER TABLE "consumables" ADD CONSTRAINT "consumables_fk0" FOREIGN KEY ("food_category_id") REFERENCES "categories"("id");


ALTER TABLE "gear" ADD CONSTRAINT "gear_fk0" FOREIGN KEY ("gear_category_id") REFERENCES "categories"("id");

ALTER TABLE "headouts" ADD CONSTRAINT "headouts_fk0" FOREIGN KEY ("user_id") REFERENCES "user"("id");
ALTER TABLE "headouts" ADD CONSTRAINT "headouts_fk1" FOREIGN KEY ("pack_id") REFERENCES "packs"("id");

ALTER TABLE "user_custom" ADD CONSTRAINT "user_custom_fk0" FOREIGN KEY ("user_id_custom") REFERENCES "user"("id");
ALTER TABLE "user_custom" ADD CONSTRAINT "user_custom_fk1" FOREIGN KEY ("gear_id_custom") REFERENCES "gear"("id");
ALTER TABLE "user_custom" ADD CONSTRAINT "user_custom_fk2" FOREIGN KEY ("consumable_id_custom") REFERENCES "consumables"("id");
ALTER TABLE "user_custom" ADD CONSTRAINT "user_custom_fk3" FOREIGN KEY ("trip_id") REFERENCES "headouts"("id");

-- Categories
INSERT INTO "public"."categories"("id", "category") VALUES(1, 'Hiking') RETURNING "id", "category";
INSERT INTO "public"."categories"("id", "category") VALUES(2, 'Navigation') RETURNING "id", "category";
INSERT INTO "public"."categories"("id", "category") VALUES(3, 'Shelter') RETURNING "id", "category";
INSERT INTO "public"."categories"("id", "category") VALUES(4, 'Cooking') RETURNING "id", "category";
INSERT INTO "public"."categories"("id", "category") VALUES(5, 'Water') RETURNING "id", "category";
INSERT INTO "public"."categories"("id", "category") VALUES(6, 'Clothing') RETURNING "id", "category";
INSERT INTO "public"."categories"("id", "category") VALUES(7, 'Hygiene') RETURNING "id", "category";
INSERT INTO "public"."categories"("id", "category") VALUES(8, 'Emergency') RETURNING "id", "category";
INSERT INTO "public"."categories"("id", "category") VALUES(9, 'Miscellaneous') RETURNING "id", "category";
INSERT INTO "public"."categories"("id", "category") VALUES(10, 'Food') RETURNING "id", "category";
INSERT INTO "public"."categories"("id", "category") VALUES(11, 'Flavor') RETURNING "id", "category";
INSERT INTO "public"."categories"("id", "category") VALUES(11, 'Consumable') RETURNING "id", "category";

-- Consumables
INSERT INTO "public"."consumables"("id", "food_category_id", "consumable", "weight", "calories") VALUES(1, 10, 'Pro-Pak Beef Stroganoff', 5.5, 600) RETURNING "id", "food_category_id", "consumable", "weight", "description", "calories", "food_image";
INSERT INTO "public"."consumables"("id", "food_category_id", "consumable", "weight", "calories") VALUES(2, 10, 'Mountain House Biscuits & gravy', 5.3, 560) RETURNING "id", "food_category_id", "consumable", "weight", "description", "calories", "food_image";
INSERT INTO "public"."consumables"("id", "food_category_id", "consumable", "weight", "calories") VALUES(3, 10, 'Mountain House Breakfast Skillet', 4.6, 510) RETURNING "id", "food_category_id", "consumable", "weight", "description", "calories", "food_image";
INSERT INTO "public"."consumables"("id", "food_category_id", "consumable", "weight", "calories") VALUES(4, 10, 'Mountain House Mac & Cheese', 5.4, 620) RETURNING "id", "food_category_id", "consumable", "weight", "description", "calories", "food_image";
INSERT INTO "public"."consumables"("id", "food_category_id", "consumable", "weight", "calories") VALUES(5, 10, 'Mountain House Scrambled Eggs', 2.9, 350) RETURNING "id", "food_category_id", "consumable", "weight", "description", "calories", "food_image";
INSERT INTO "public"."consumables"("id", "food_category_id", "consumable", "weight", "calories") VALUES(6, 10, 'Backpacker''s Pantry Chana Masala', 8.9, 860) RETURNING "id", "food_category_id", "consumable", "weight", "description", "calories", "food_image";
INSERT INTO "public"."consumables"("id", "food_category_id", "consumable", "weight", "calories") VALUES(7, 10, 'Backpacker''s Pantry Cuban Beans & Rice', 8.9, '750 ') RETURNING "id", "food_category_id", "consumable", "weight", "description", "calories", "food_image";
INSERT INTO "public"."consumables"("id", "food_category_id", "consumable", "weight", "calories") VALUES(8, 10, 'Backpacker''s Pantry Three Sister''s Stew', 9, 820) RETURNING "id", "food_category_id", "consumable", "weight", "description", "calories", "food_image";
INSERT INTO "public"."consumables"("id", "food_category_id", "consumable", "weight", "calories") VALUES(9, 10, 'Backpacker''s Pantry Three Cheese Mac', 8.1, 860) RETURNING "id", "food_category_id", "consumable", "weight", "description", "calories", "food_image";
INSERT INTO "public"."consumables"("id", "food_category_id", "consumable", "weight", "calories") VALUES(10, 10, 'Backpacker''s Pantry Creme Brulee', 5.6, 610) RETURNING "id", "food_category_id", "consumable", "weight", "description", "calories", "food_image";
INSERT INTO "public"."consumables"("id", "food_category_id", "consumable", "weight", "calories") VALUES(11, 10, 'Backpacker''s Pantry Mango Sticky Rice', 6.2, 620) RETURNING "id", "food_category_id", "consumable", "weight", "description", "calories", "food_image";
INSERT INTO "public"."consumables"("id", "food_category_id", "consumable", "weight", "calories") VALUES(12, 10, 'Backpacker''s Pantry Pad Thai', 9.1, 930) RETURNING "id", "food_category_id", "consumable", "weight", "description", "calories", "food_image";
INSERT INTO "public"."consumables"("id", "food_category_id", "consumable", "weight", "calories") VALUES(13, 10, 'Peak Refuel Sweet Pork & Rice', 7.4, 800) RETURNING "id", "food_category_id", "consumable", "weight", "description", "calories", "food_image";
INSERT INTO "public"."consumables"("id", "food_category_id", "consumable", "weight") VALUES(14, 10, 'Apple', 8) RETURNING "id", "food_category_id", "consumable", "weight", "description", "calories", "food_image";
INSERT INTO "public"."consumables"("id", "food_category_id", "consumable", "weight") VALUES(15, 10, 'Seaweed Pouch', 1.4) RETURNING "id", "food_category_id", "consumable", "weight", "description", "calories", "food_image";
INSERT INTO "public"."consumables"("id", "food_category_id", "consumable", "weight") VALUES(16, 11, 'Via Coffee', 0.14) RETURNING "id", "food_category_id", "consumable", "weight", "description", "calories", "food_image";
INSERT INTO "public"."consumables"("id", "food_category_id", "consumable", "weight") VALUES(17, 11, 'Teabag', 0.23) RETURNING "id", "food_category_id", "consumable", "weight", "description", "calories", "food_image";
INSERT INTO "public"."consumables"("id", "food_category_id", "consumable", "weight") VALUES(18, 11, 'Hot Sauce', 2.15) RETURNING "id", "food_category_id", "consumable", "weight", "description", "calories", "food_image";
INSERT INTO "public"."consumables"("id", "food_category_id", "consumable", "weight") VALUES(19, 10, 'Oatmeal', 1.39) RETURNING "id", "food_category_id", "consumable", "weight", "description", "calories", "food_image";
INSERT INTO "public"."consumables"("id", "food_category_id", "consumable", "weight") VALUES(20, 10, 'Clif Bar', 2.5) RETURNING "id", "food_category_id", "consumable", "weight", "description", "calories", "food_image";
INSERT INTO "public"."consumables"("id", "food_category_id", "consumable", "weight") VALUES(21, 11, 'Fizz Endurolytes', 2.5) RETURNING "id", "food_category_id", "consumable", "weight", "description", "calories", "food_image";
INSERT INTO "public"."consumables"("id", "food_category_id", "consumable", "weight") VALUES(22, 10, 'Hershey''s Chocolate Bar', 1.5) RETURNING "id", "food_category_id", "consumable", "weight", "description", "calories", "food_image";
