-- Current sql file was generated after introspecting the database
-- If you want to run this migration please uncomment this code before executing migrations
/*
CREATE TABLE IF NOT EXISTS "user_address" (
	"id" bigserial PRIMARY KEY NOT NULL,
	"gmt_create" timestamp DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"gmt_modify" timestamp DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"user_id" varchar(255) NOT NULL,
	"account_address" varchar(64) NOT NULL,
	"status" char(2) NOT NULL,
	CONSTRAINT "unique_uid_address" UNIQUE("user_id","account_address")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "address_tasks" (
	"id" bigserial PRIMARY KEY NOT NULL,
	"gmt_create" timestamp DEFAULT CURRENT_TIMESTAMP,
	"gmt_modify" timestamp DEFAULT CURRENT_TIMESTAMP,
	"account_address" varchar(64),
	"task_name" varchar(64),
	"task_status" char(2),
	"memo" varchar(512)
);

*/