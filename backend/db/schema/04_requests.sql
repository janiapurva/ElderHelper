DROP TABLE IF EXISTS requests CASCADE;

CREATE TABLE "requests" (
  "id" SERIAL PRIMARY KEY,
  "posted_by" integer REFERENCES users_elders(id) ON DELETE CASCADE NOT NULL,
  "task_description" varchar,  
  "date_posted" timestamp,
  "fullilled_by_volunter" integer REFERENCES users_volunteers(id) ON DELETE CASCADE NOT NULL,
  "status" varchar
);