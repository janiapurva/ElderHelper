DROP TABLE IF EXISTS users_volunteers CASCADE;

CREATE TABLE "users_volunteers" (
  "id" SERIAL PRIMARY KEY,
  "full_name" varchar,
  "age" int,
  "email_address" varchar UNIQUE ,
  "password" varchar,
  "phone_number" varchar UNIQUE,
  "postal_code" varchar,
  "available" boolean,
  "special_skills" varchar,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP  
);