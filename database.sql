
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!

-- CREATE TABLES --
CREATE TABLE categories (
    id SERIAL PRIMARY KEY,
    category character varying(255) NOT NULL
);

CREATE TABLE consumables (
    id SERIAL PRIMARY KEY,
    category_id integer NOT NULL REFERENCES categories(id),
    name character varying(255) NOT NULL,
    weight numeric(5,2) NOT NULL,
    details character varying(255),
    calories integer,
    image character varying(255)
);

CREATE TABLE gear (
    id SERIAL PRIMARY KEY,
    category_id integer NOT NULL REFERENCES categories(id),
    name character varying(255) NOT NULL,
    weight numeric(5,2) NOT NULL,
    details character varying(255),
    image character varying(255)
);

CREATE TABLE headouts (
    id SERIAL PRIMARY KEY,
    user_id integer NOT NULL REFERENCES "user"(id),
    trip_name character varying(255) NOT NULL,
    trip_date date NOT NULL,
    trip_notes character varying(255),
    pack_id integer NOT NULL REFERENCES packs(id)
);

CREATE TABLE packs (
    id SERIAL PRIMARY KEY,
    pack_name character varying(255) NOT NULL,
    capacity character varying(16)
);

CREATE TABLE "user" (
    id SERIAL PRIMARY KEY,
    username character varying(80) NOT NULL UNIQUE,
    password character varying(1000) NOT NULL,
    weight integer
);

CREATE TABLE user_custom (
    id SERIAL PRIMARY KEY,
    user_id integer NOT NULL REFERENCES "user"(id),
    gear_id integer REFERENCES gear(id),
    consumable_id integer REFERENCES consumables(id),
    required boolean NOT NULL DEFAULT false,
    weight numeric(5,2) NOT NULL,
    pack_note character varying(255),
    gear_note character varying(255),
    name character varying(255),
    category_id integer,
    trip_id integer REFERENCES headouts(id)
);

-- Indices and FK --
CREATE UNIQUE INDEX user_custom_pk ON user_custom(id int4_ops);
CREATE UNIQUE INDEX user_pk ON "user"(id int4_ops);
CREATE UNIQUE INDEX user_username_key ON "user"(username text_ops);
CREATE UNIQUE INDEX packs_pk ON packs(id int4_ops);
CREATE UNIQUE INDEX headouts_pk ON headouts(id int4_ops);
CREATE UNIQUE INDEX gear_pk ON gear(id int4_ops);
CREATE UNIQUE INDEX consumables_pk ON consumables(id int4_ops);
CREATE UNIQUE INDEX categories_pk ON categories(id int4_ops);






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
INSERT INTO "public"."categories"("id", "category") VALUES(12, 'Consumable') RETURNING "id", "category";

-- Consumables 25 items
INSERT INTO "public"."consumables"("id", "category_id", "name", "weight", "calories") VALUES(1, 10, 'Pro-Pak Beef Stroganoff', 5.5, 600) RETURNING "id", "category_id", "name", "weight", "details", "calories", "image";
INSERT INTO "public"."consumables"("id", "category_id", "name", "weight", "calories") VALUES(2, 10, 'Mountain House Biscuits & gravy', 5.3, 560) RETURNING "id", "category_id", "name", "weight", "details", "calories", "image";
INSERT INTO "public"."consumables"("id", "category_id", "name", "weight", "calories") VALUES(3, 10, 'Mountain House Breakfast Skillet', 4.6, 510) RETURNING "id", "category_id", "name", "weight", "details", "calories", "image";
INSERT INTO "public"."consumables"("id", "category_id", "name", "weight", "calories") VALUES(4, 10, 'Mountain House Mac & Cheese', 5.4, 620) RETURNING "id", "category_id", "name", "weight", "details", "calories", "image";
INSERT INTO "public"."consumables"("id", "category_id", "name", "weight", "calories") VALUES(5, 10, 'Mountain House Scrambled Eggs', 2.9, 350) RETURNING "id", "category_id", "name", "weight", "details", "calories", "image";
INSERT INTO "public"."consumables"("id", "category_id", "name", "weight", "calories") VALUES(6, 10, 'Backpacker''s Pantry Chana Masala', 8.9, 860) RETURNING "id", "category_id", "name", "weight", "details", "calories", "image";
INSERT INTO "public"."consumables"("id", "category_id", "name", "weight", "calories") VALUES(7, 10, 'Backpacker''s Pantry Cuban Beans & Rice', 8.9, '750 ') RETURNING "id", "category_id", "name", "weight", "details", "calories", "image";
INSERT INTO "public"."consumables"("id", "category_id", "name", "weight", "calories") VALUES(8, 10, 'Backpacker''s Pantry Three Sister''s Stew', 9, 820) RETURNING "id", "category_id", "name", "weight", "details", "calories", "image";
INSERT INTO "public"."consumables"("id", "category_id", "name", "weight", "calories") VALUES(9, 10, 'Backpacker''s Pantry Three Cheese Mac', 8.1, 860) RETURNING "id", "category_id", "name", "weight", "details", "calories", "image";
INSERT INTO "public"."consumables"("id", "category_id", "name", "weight", "calories") VALUES(10, 10, 'Backpacker''s Pantry Creme Brulee', 5.6, 610) RETURNING "id", "category_id", "name", "weight", "details", "calories", "image";
INSERT INTO "public"."consumables"("id", "category_id", "name", "weight", "calories") VALUES(11, 10, 'Backpacker''s Pantry Mango Sticky Rice', 6.2, 620) RETURNING "id", "category_id", "name", "weight", "details", "calories", "image";
INSERT INTO "public"."consumables"("id", "category_id", "name", "weight", "calories") VALUES(12, 10, 'Backpacker''s Pantry Pad Thai', 9.1, 930) RETURNING "id", "category_id", "name", "weight", "details", "calories", "image";
INSERT INTO "public"."consumables"("id", "category_id", "name", "weight", "calories") VALUES(13, 10, 'Peak Refuel Sweet Pork & Rice', 7.4, 800) RETURNING "id", "category_id", "name", "weight", "details", "calories", "image";
INSERT INTO "public"."consumables"("id", "category_id", "name", "weight") VALUES(14, 10, 'Apple', 8) RETURNING "id", "category_id", "name", "weight", "details", "calories", "image";
INSERT INTO "public"."consumables"("id", "category_id", "name", "weight") VALUES(15, 10, 'Seaweed Pouch', 1.4) RETURNING "id", "category_id", "name", "weight", "details", "calories", "image";
INSERT INTO "public"."consumables"("id", "category_id", "name", "weight") VALUES(16, 11, 'Via Coffee', 0.14) RETURNING "id", "category_id", "name", "weight", "details", "calories", "image";
INSERT INTO "public"."consumables"("id", "category_id", "name", "weight") VALUES(17, 11, 'Teabag', 0.23) RETURNING "id", "category_id", "name", "weight", "details", "calories", "image";
INSERT INTO "public"."consumables"("id", "category_id", "name", "weight") VALUES(18, 11, 'Hot Sauce', 2.15) RETURNING "id", "category_id", "name", "weight", "details", "calories", "image";
INSERT INTO "public"."consumables"("id", "category_id", "name", "weight") VALUES(19, 10, 'Oatmeal', 1.39) RETURNING "id", "category_id", "name", "weight", "details", "calories", "image";
INSERT INTO "public"."consumables"("id", "category_id", "name", "weight") VALUES(20, 10, 'Clif Bar', 2.5) RETURNING "id", "category_id", "name", "weight", "details", "calories", "image";
INSERT INTO "public"."consumables"("id", "category_id", "name", "weight") VALUES(21, 11, 'Fizz Endurolytes', 2.5) RETURNING "id", "category_id", "name", "weight", "details", "calories", "image";
INSERT INTO "public"."consumables"("id", "category_id", "name", "weight") VALUES(22, 10, 'Hershey''s Chocolate Bar', 1.5) RETURNING "id", "category_id", "name", "weight", "details", "calories", "image";
INSERT INTO "public"."consumables"("id", "category_id", "name", "weight") VALUES(23, 12, 'Sunscreen', 3) RETURNING "id", "category_id", "name", "weight", "details", "calories", "image";
INSERT INTO "public"."consumables"("id", "category_id", "name", "weight") VALUES(24, 12, 'Picardin Lotion', 4) RETURNING "id", "category_id", "name", "weight", "details", "calories", "image";
INSERT INTO "public"."consumables"("id", "category_id", "name", "weight") VALUES(25, 12, 'DEET Repel', 5) RETURNING "id", "category_id", "name", "weight", "details", "calories", "image";



-- Gear 100 items
INSERT INTO "public"."gear"("id", "category_id", "gear", "weight") VALUES(1, 1, 'Hiking Boots (M)', 37.6) RETURNING "id", "category_id", "gear", "weight", "details", "image";
INSERT INTO "public"."gear"("id", "category_id", "gear", "weight") VALUES(2, 1, 'Hiking Boots (W)', 30.2) RETURNING "id", "category_id", "gear", "weight", "details", "image";
INSERT INTO "public"."gear"("id", "category_id", "gear", "weight") VALUES(3, 1, 'REI Trek Poles', 19) RETURNING "id", "category_id", "gear", "weight", "details", "image";
INSERT INTO "public"."gear"("id", "category_id", "gear", "weight") VALUES(4, 1, 'Black Diamond Trek Poles', 21.8) RETURNING "id", "category_id", "gear", "weight", "details", "image";
INSERT INTO "public"."gear"("id", "category_id", "gear", "weight") VALUES(5, 2, 'Compass', 1.6) RETURNING "id", "category_id", "gear", "weight", "details", "image";
INSERT INTO "public"."gear"("id", "category_id", "gear", "weight") VALUES(6, 2, 'iPhone SE2', 6.5) RETURNING "id", "category_id", "gear", "weight", "details", "image";
INSERT INTO "public"."gear"("id", "category_id", "gear", "weight") VALUES(7, 2, 'iPhone 12 mini', 6.9) RETURNING "id", "category_id", "gear", "weight", "details", "image";
INSERT INTO "public"."gear"("id", "category_id", "gear", "weight") VALUES(8, 2, 'SHT Guidebook', 11.2) RETURNING "id", "category_id", "gear", "weight", "details", "image";
INSERT INTO "public"."gear"("id", "category_id", "gear", "weight") VALUES(9, 3, 'Mantis Ultralight', 23.1) RETURNING "id", "category_id", "gear", "weight", "details", "image";
INSERT INTO "public"."gear"("id", "category_id", "gear", "weight") VALUES(10, 3, 'Kuhli Rainfly', 13) RETURNING "id", "category_id", "gear", "weight", "details", "image";
INSERT INTO "public"."gear"("id", "category_id", "gear", "weight") VALUES(11, 3, 'Python 10'' Straps', 7.5) RETURNING "id", "category_id", "gear", "weight", "details", "image";
INSERT INTO "public"."gear"("id", "category_id", "gear", "weight") VALUES(12, 3, 'Firebelly 30 Trail Quilt', 30) RETURNING "id", "category_id", "gear", "weight", "details", "image";
INSERT INTO "public"."gear"("id", "category_id", "gear", "weight") VALUES(13, 3, 'X Pillow', 2.3) RETURNING "id", "category_id", "gear", "weight", "details", "image";
INSERT INTO "public"."gear"("id", "category_id", "gear", "weight") VALUES(14, 3, 'Mesa Mat Double', 9.6) RETURNING "id", "category_id", "gear", "weight", "details", "image";
INSERT INTO "public"."gear"("id", "category_id", "gear", "weight") VALUES(15, 3, 'Alptrek Blanket', 30) RETURNING "id", "category_id", "gear", "weight", "details", "image";
INSERT INTO "public"."gear"("id", "category_id", "gear", "weight") VALUES(16, 3, 'Arctos 20 Trail Quilt', 26.4) RETURNING "id", "category_id", "gear", "weight", "details", "image";
INSERT INTO "public"."gear"("id", "category_id", "gear", "weight") VALUES(17, 3, 'X Pillow L', 3) RETURNING "id", "category_id", "gear", "weight", "details", "image";
INSERT INTO "public"."gear"("id", "category_id", "gear", "weight") VALUES(18, 4, 'Mug', 3.7) RETURNING "id", "category_id", "gear", "weight", "details", "image";
INSERT INTO "public"."gear"("id", "category_id", "gear", "weight") VALUES(19, 4, 'Silverware', 1.1) RETURNING "id", "category_id", "gear", "weight", "details", "image";
INSERT INTO "public"."gear"("id", "category_id", "gear", "weight") VALUES(20, 4, 'Jetboil', 14.4) RETURNING "id", "category_id", "gear", "weight", "details", "image";
INSERT INTO "public"."gear"("id", "category_id", "gear", "weight") VALUES(31, 4, 'Jetboil Fuel', 12) RETURNING "id", "category_id", "gear", "weight", "details", "image";
INSERT INTO "public"."gear"("id", "category_id", "gear", "weight") VALUES(32, 5, 'Smartwater 1L', 36.9) RETURNING "id", "category_id", "gear", "weight", "details", "image";
INSERT INTO "public"."gear"("id", "category_id", "gear", "weight") VALUES(33, 5, 'Essentia 1.5L', 55) RETURNING "id", "category_id", "gear", "weight", "details", "image";
INSERT INTO "public"."gear"("id", "category_id", "gear", "weight") VALUES(34, 5, 'Platypus Gravity Filter', 12.6) RETURNING "id", "category_id", "gear", "weight", "details", "image";
INSERT INTO "public"."gear"("id", "category_id", "gear", "weight") VALUES(35, 5, 'Straining Bandana', 1) RETURNING "id", "category_id", "gear", "weight", "details", "image";
INSERT INTO "public"."gear"("id", "category_id", "gear", "weight") VALUES(36, 5, 'Yogurt Water Scoop', 1.4) RETURNING "id", "category_id", "gear", "weight", "details", "image";
INSERT INTO "public"."gear"("id", "category_id", "gear", "weight") VALUES(37, 5, 'Iodine', 1.2) RETURNING "id", "category_id", "gear", "weight", "details", "image";
INSERT INTO "public"."gear"("id", "category_id", "gear", "weight") VALUES(38, 6, 'Sports Bra', 2.2) RETURNING "id", "category_id", "gear", "weight", "details", "image";
INSERT INTO "public"."gear"("id", "category_id", "gear", "weight") VALUES(39, 6, 'Tanktop', 2.3) RETURNING "id", "category_id", "gear", "weight", "details", "image";
INSERT INTO "public"."gear"("id", "category_id", "gear", "weight") VALUES(40, 6, 'Underlayer Shirt (W)', 4.8) RETURNING "id", "category_id", "gear", "weight", "details", "image";
INSERT INTO "public"."gear"("id", "category_id", "gear", "weight") VALUES(41, 6, 'Underlayer Pant (W)', 4.2) RETURNING "id", "category_id", "gear", "weight", "details", "image";
INSERT INTO "public"."gear"("id", "category_id", "gear", "weight") VALUES(42, 6, 'Buttondown (W)', 6.8) RETURNING "id", "category_id", "gear", "weight", "details", "image";
INSERT INTO "public"."gear"("id", "category_id", "gear", "weight") VALUES(43, 6, 'T-shirt (W)', 5.4) RETURNING "id", "category_id", "gear", "weight", "details", "image";
INSERT INTO "public"."gear"("id", "category_id", "gear", "weight") VALUES(44, 6, 'Hiking Pants (W)', 13.4) RETURNING "id", "category_id", "gear", "weight", "details", "image";
INSERT INTO "public"."gear"("id", "category_id", "gear", "weight") VALUES(45, 6, 'Belt (W)', 2.3) RETURNING "id", "category_id", "gear", "weight", "details", "image";
INSERT INTO "public"."gear"("id", "category_id", "gear", "weight") VALUES(46, 6, 'Underwear (W)', 0.8) RETURNING "id", "category_id", "gear", "weight", "details", "image";
INSERT INTO "public"."gear"("id", "category_id", "gear", "weight") VALUES(47, 6, 'Wool Socks (W)', 2.3) RETURNING "id", "category_id", "gear", "weight", "details", "image";
INSERT INTO "public"."gear"("id", "category_id", "gear", "weight") VALUES(48, 6, 'Hoodie (W)', 7.5) RETURNING "id", "category_id", "gear", "weight", "details", "image";
INSERT INTO "public"."gear"("id", "category_id", "gear", "weight") VALUES(49, 6, 'Scarf (W)', 4.5) RETURNING "id", "category_id", "gear", "weight", "details", "image";
INSERT INTO "public"."gear"("id", "category_id", "gear", "weight") VALUES(50, 6, 'Puffy Vest (W)', 5.1) RETURNING "id", "category_id", "gear", "weight", "details", "image";
INSERT INTO "public"."gear"("id", "category_id", "gear", "weight") VALUES(51, 6, 'Rain Shell (W)', 9.6) RETURNING "id", "category_id", "gear", "weight", "details", "image";
INSERT INTO "public"."gear"("id", "category_id", "gear", "weight") VALUES(52, 6, 'Flipflops (W)', 5.9) RETURNING "id", "category_id", "gear", "weight", "details", "image";
INSERT INTO "public"."gear"("id", "category_id", "gear", "weight") VALUES(53, 6, 'Kuhl Protektor Hoodie (M)', 21.6) RETURNING "id", "category_id", "gear", "weight", "details", "image";
INSERT INTO "public"."gear"("id", "category_id", "gear", "weight") VALUES(54, 6, 'Work Gloves (M)', 3.4) RETURNING "id", "category_id", "gear", "weight", "details", "image";
INSERT INTO "public"."gear"("id", "category_id", "gear", "weight") VALUES(55, 6, 'Belt (M)', 4.4) RETURNING "id", "category_id", "gear", "weight", "details", "image";
INSERT INTO "public"."gear"("id", "category_id", "gear", "weight") VALUES(56, 6, 'Kuhl Hiking Pants (M)', 12.8) RETURNING "id", "category_id", "gear", "weight", "details", "image";
INSERT INTO "public"."gear"("id", "category_id", "gear", "weight") VALUES(57, 6, 'Mesh Baseball Cap', 2.8) RETURNING "id", "category_id", "gear", "weight", "details", "image";
INSERT INTO "public"."gear"("id", "category_id", "gear", "weight") VALUES(58, 6, 'REI Underwear (M)', 3) RETURNING "id", "category_id", "gear", "weight", "details", "image";
INSERT INTO "public"."gear"("id", "category_id", "gear", "weight") VALUES(59, 6, 'Synthetic Hiking Socks (M)', 2.2) RETURNING "id", "category_id", "gear", "weight", "details", "image";
INSERT INTO "public"."gear"("id", "category_id", "gear", "weight") VALUES(60, 6, 'T-shirt (M)', 3.4) RETURNING "id", "category_id", "gear", "weight", "details", "image";
INSERT INTO "public"."gear"("id", "category_id", "gear", "weight") VALUES(61, 6, 'Longsleeve Merino (M)', 6.4) RETURNING "id", "category_id", "gear", "weight", "details", "image";
INSERT INTO "public"."gear"("id", "category_id", "gear", "weight") VALUES(62, 6, 'Longsleeve Smartwool (M)', 7.6) RETURNING "id", "category_id", "gear", "weight", "details", "image";
INSERT INTO "public"."gear"("id", "category_id", "gear", "weight") VALUES(63, 6, 'Underlayer Pant (M)', 7.1) RETURNING "id", "category_id", "gear", "weight", "details", "image";
INSERT INTO "public"."gear"("id", "category_id", "gear", "weight") VALUES(64, 6, 'Wool Socks', 2.9) RETURNING "id", "category_id", "gear", "weight", "details", "image";
INSERT INTO "public"."gear"("id", "category_id", "gear", "weight") VALUES(65, 7, 'Toothbrush', 0.4) RETURNING "id", "category_id", "gear", "weight", "details", "image";
INSERT INTO "public"."gear"("id", "category_id", "gear", "weight") VALUES(66, 7, 'Toothpaste', 1) RETURNING "id", "category_id", "gear", "weight", "details", "image";
INSERT INTO "public"."gear"("id", "category_id", "gear", "weight") VALUES(67, 7, 'Microfiber Towel', 1.5) RETURNING "id", "category_id", "gear", "weight", "details", "image";
INSERT INTO "public"."gear"("id", "category_id", "gear", "weight") VALUES(68, 7, 'Hand Sanitizer', 3) RETURNING "id", "category_id", "gear", "weight", "details", "image";
INSERT INTO "public"."gear"("id", "category_id", "gear", "weight") VALUES(69, 7, 'Fabric Mask', 0.4) RETURNING "id", "category_id", "gear", "weight", "details", "image";
INSERT INTO "public"."gear"("id", "category_id", "gear", "weight") VALUES(70, 7, 'Pee Funnel', 0.6) RETURNING "id", "category_id", "gear", "weight", "details", "image";
INSERT INTO "public"."gear"("id", "category_id", "gear", "weight") VALUES(71, 7, 'Anti-Microbial Cloth', 0.4) RETURNING "id", "category_id", "gear", "weight", "details", "image";
INSERT INTO "public"."gear"("id", "category_id", "gear", "weight") VALUES(72, 7, 'Hairties', 0.05) RETURNING "id", "category_id", "gear", "weight", "details", "image";
INSERT INTO "public"."gear"("id", "category_id", "gear", "weight") VALUES('73 ', 7, 'Chapstick', 0.4) RETURNING "id", "category_id", "gear", "weight", "details", "image";
INSERT INTO "public"."gear"("id", "category_id", "gear", "weight") VALUES(74, 7, 'Wilderness Wipes', 3.4) RETURNING "id", "category_id", "gear", "weight", "details", "image";
INSERT INTO "public"."gear"("id", "category_id", "gear", "weight") VALUES(75, 7, 'Blister Strips', 0.05) RETURNING "id", "category_id", "gear", "weight", "details", "image";
INSERT INTO "public"."gear"("id", "category_id", "gear", "weight") VALUES(76, 8, 'First Aid Kit', 10.1) RETURNING "id", "category_id", "gear", "weight", "details", "image";
INSERT INTO "public"."gear"("id", "category_id", "gear", "weight") VALUES(77, 8, 'Emergency Kit', 4.7) RETURNING "id", "category_id", "gear", "weight", "details", "image";
INSERT INTO "public"."gear"("id", "category_id", "gear", "weight") VALUES(78, 8, 'Emergency Matches', 2.5) RETURNING "id", "category_id", "gear", "weight", "details", "image";
INSERT INTO "public"."gear"("id", "category_id", "gear", "weight") VALUES(79, 9, 'Headlamp', 2.9) RETURNING "id", "category_id", "gear", "weight", "details", "image";
INSERT INTO "public"."gear"("id", "category_id", "gear", "weight") VALUES('80 ', 9, 'Minimalist Knife', 1.3) RETURNING "id", "category_id", "gear", "weight", "details", "image";
INSERT INTO "public"."gear"("id", "category_id", "gear", "weight") VALUES('81 ', 9, '50'' Utility Cord', 3.5) RETURNING "id", "category_id", "gear", "weight", "details", "image";
INSERT INTO "public"."gear"("id", "category_id", "gear", "weight") VALUES('82 ', 9, 'Pillowcase', 2.5) RETURNING "id", "category_id", "gear", "weight", "details", "image";
INSERT INTO "public"."gear"("id", "category_id", "gear", "weight") VALUES(83, 9, 'Stuff Sacks (S/M/L)', 2.9) RETURNING "id", "category_id", "gear", "weight", "details", "image";
INSERT INTO "public"."gear"("id", "category_id", "gear", "weight") VALUES(84, 9, 'Small Steel Carabiners (x5)', 0.7) RETURNING "id", "category_id", "gear", "weight", "details", "image";
INSERT INTO "public"."gear"("id", "category_id", "gear", "weight") VALUES(85, 9, 'Parahatchet', 10.8) RETURNING "id", "category_id", "gear", "weight", "details", "image";
INSERT INTO "public"."gear"("id", "category_id", "gear", "weight") VALUES(86, 9, 'Medium Carabiners (x2)', 0.2) RETURNING "id", "category_id", "gear", "weight", "details", "image";
INSERT INTO "public"."gear"("id", "category_id", "gear", "weight") VALUES(87, 9, 'Theraband', 1.6) RETURNING "id", "category_id", "gear", "weight", "details", "image";
INSERT INTO "public"."gear"("id", "category_id", "gear", "weight") VALUES(88, 8, 'White Cloth', 1.6) RETURNING "id", "category_id", "gear", "weight", "details", "image";
INSERT INTO "public"."gear"("id", "category_id", "gear", "weight") VALUES(89, 9, 'Leatherman', 8.7) RETURNING "id", "category_id", "gear", "weight", "details", "image";
INSERT INTO "public"."gear"("id", "category_id", "gear", "weight") VALUES(90, 9, 'Spare AAA (x3)', 1.2) RETURNING "id", "category_id", "gear", "weight", "details", "image";
INSERT INTO "public"."gear"("id", "category_id", "gear", "weight") VALUES(91, 9, '2'' Duct Tape', 0.4) RETURNING "id", "category_id", "gear", "weight", "details", "image";
INSERT INTO "public"."gear"("id", "category_id", "gear", "weight") VALUES(92, 9, 'Emergency Whistle', 0.7) RETURNING "id", "category_id", "gear", "weight", "details", "image";
INSERT INTO "public"."gear"("id", "category_id", "gear", "weight") VALUES(93, 8, 'Emergency Weather Radio', 10.6) RETURNING "id", "category_id", "gear", "weight", "details", "image";
INSERT INTO "public"."gear"("id", "category_id", "gear", "weight") VALUES(94, 9, 'Clothespin (x5)', 0.9) RETURNING "id", "category_id", "gear", "weight", "details", "image";
INSERT INTO "public"."gear"("id", "category_id", "gear", "weight") VALUES(95, 7, 'Toilet Paper', 1) RETURNING "id", "category_id", "gear", "weight", "details", "image";
INSERT INTO "public"."gear"("id", "category_id", "gear", "weight") VALUES('96 ', 9, 'Anker Battery', 4.6) RETURNING "id", "category_id", "gear", "weight", "details", "image";
INSERT INTO "public"."gear"("id", "category_id", "gear", "weight") VALUES(97, 9, '22000 MAH Battery', 14) RETURNING "id", "category_id", "gear", "weight", "details", "image";
INSERT INTO "public"."gear"("id", "category_id", "gear", "weight") VALUES(98, 6, 'Teva Sandals (M)', 15.3) RETURNING "id", "category_id", "gear", "weight", "details", "image";
INSERT INTO "public"."gear"("id", "category_id", "gear", "weight") VALUES(99, 5, 'Nalgene Bottle (empty)', 6.5) RETURNING "id", "category_id", "gear", "weight", "details", "image";
INSERT INTO "public"."gear"("id", "category_id", "gear", "weight") VALUES(100, 5, 'Sawyer Squeeze', 8.3) RETURNING "id", "category_id", "gear", "weight", "details", "image";

ALTER TABLE "gear" RENAME COLUMN "gear" TO "name";
