 DROP TABLE IF EXISTS users_elders CASCADE;


CREATE TABLE "users_elders" (
  "id" SERIAL PRIMARY KEY,
  "full_name" varchar,
  "age" int,
  "email_address" varchar UNIQUE,
  "password" varchar,
  "phone_number" varchar,
  "postal_code" varchar,
  "lat" VARCHAR,
  "long" VARCHAR,
  "StreetAddress" varchar,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);
