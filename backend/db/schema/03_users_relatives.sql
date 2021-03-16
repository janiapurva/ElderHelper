DROP TABLE IF EXISTS users_relatives CASCADE;

CREATE TABLE "users_relatives" (
  "id" SERIAL PRIMARY KEY,
  "full_name" varchar,
  "phone_number" varchar UNIQUE,
  "email_address" varchar UNIQUE,
  "elder_id" integer REFERENCES users_elders(id) ON DELETE CASCADE NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);