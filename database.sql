
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

CREATE TABLE "public.users" (
	"id" serial NOT NULL,
	"username" serial(255) NOT NULL UNIQUE,
	"password" varchar(255) NOT NULL,
	"weight" integer,
	CONSTRAINT "users_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "public.categories" (
	"id" serial NOT NULL,
	"category" varchar(255) NOT NULL,
	CONSTRAINT "categories_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "public.consumables" (
	"id" serial NOT NULL,
	"food_category_id" integer NOT NULL,
	"consumable" serial(255) NOT NULL,
	"weight" DECIMAL(5,2) NOT NULL,
	"description" serial(255) NOT NULL,
	"calories" integer NOT NULL,
	"food_image" serial(255) NOT NULL,
	CONSTRAINT "consumables_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "public.packs" (
	"id" serial(255) NOT NULL,
	"pack_name" varchar(255) NOT NULL,
	"capacity" serial(16) NOT NULL,
	CONSTRAINT "packs_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "public.gear" (
	"id" serial NOT NULL,
	"gear_category_id" integer NOT NULL,
	"gear" varchar(255) NOT NULL,
	"weight" DECIMAL(5,2) NOT NULL,
	"details" varchar NOT NULL,
	"gear_image" varchar(255) NOT NULL,
	CONSTRAINT "gear_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "public.headouts" (
	"id" serial NOT NULL,
	"user_id" integer NOT NULL,
	"trip_name" varchar(255) NOT NULL,
	"trip_date" DATE NOT NULL,
	"trip_notes" varchar(255) NOT NULL,
	"pack_id" integer NOT NULL,
	CONSTRAINT "headouts_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "public.user_custom" (
	"id" serial NOT NULL,
	"user_id_custom" integer NOT NULL,
	"gear_id_custom" integer,
	"consumable_id_custom" integer,
	"trip_id" integer NOT NULL,
	"required" BOOLEAN NOT NULL,
	"custom_category" varchar(64) NOT NULL,
	"custom_weight" DECIMAL(5,2) NOT NULL,
	"custom_pack_note" varchar(255) NOT NULL,
	"custom_gear_note" varchar(255) NOT NULL,
	CONSTRAINT "user_custom_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



-- CREATE TABLE "public.headout_prompts" (
-- 	"id" serial NOT NULL,
-- 	"duration" varchar(32) NOT NULL,
-- 	"transportation" varchar(32) NOT NULL,
-- 	"weather" varchar(32) NOT NULL,
-- 	"shopping" BOOLEAN NOT NULL,
-- 	"kids" integer NOT NULL,
-- 	"pokemon" BOOLEAN NOT NULL,
-- 	"cycle" BOOLEAN NOT NULL,
-- 	CONSTRAINT "headout_prompts_pk" PRIMARY KEY ("id")
-- ) WITH (
--   OIDS=FALSE
-- );



ALTER TABLE "consumables" ADD CONSTRAINT "consumables_fk0" FOREIGN KEY ("food_category_id") REFERENCES "categories"("id");


ALTER TABLE "gear" ADD CONSTRAINT "gear_fk0" FOREIGN KEY ("gear_category_id") REFERENCES "categories"("id");

ALTER TABLE "headouts" ADD CONSTRAINT "headouts_fk0" FOREIGN KEY ("user_id") REFERENCES "users"("id");
ALTER TABLE "headouts" ADD CONSTRAINT "headouts_fk1" FOREIGN KEY ("pack_id") REFERENCES "packs"("id");

ALTER TABLE "user_custom" ADD CONSTRAINT "user_custom_fk0" FOREIGN KEY ("user_id_custom") REFERENCES "users"("id");
ALTER TABLE "user_custom" ADD CONSTRAINT "user_custom_fk1" FOREIGN KEY ("gear_id_custom") REFERENCES "gear"("id");
ALTER TABLE "user_custom" ADD CONSTRAINT "user_custom_fk2" FOREIGN KEY ("consumable_id_custom") REFERENCES "consumables"("id");
ALTER TABLE "user_custom" ADD CONSTRAINT "user_custom_fk3" FOREIGN KEY ("trip_id") REFERENCES "headouts"("id");


