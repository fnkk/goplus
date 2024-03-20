import { pgTable, unique, bigserial, timestamp, varchar, char } from "drizzle-orm/pg-core"
  import { sql } from "drizzle-orm"



export const userAddress = pgTable("user_address", {
	id: bigserial("id", { mode: "bigint" }).primaryKey().notNull(),
	gmtCreate: timestamp("gmt_create", { mode: 'string' }).defaultNow().notNull(),
	gmtModify: timestamp("gmt_modify", { mode: 'string' }).defaultNow().notNull(),
	userId: varchar("user_id", { length: 255 }).notNull(),
	accountAddress: varchar("account_address", { length: 64 }).notNull(),
	status: char("status", { length: 2 }).notNull(),
},
(table) => {
	return {
		uniqueUidAddress: unique("unique_uid_address").on(table.userId, table.accountAddress),
	}
});

export const addressTasks = pgTable("address_tasks", {
	id: bigserial("id", { mode: "bigint" }).primaryKey().notNull(),
	gmtCreate: timestamp("gmt_create", { mode: 'string' }).defaultNow(),
	gmtModify: timestamp("gmt_modify", { mode: 'string' }).defaultNow(),
	accountAddress: varchar("account_address", { length: 64 }),
	taskName: varchar("task_name", { length: 64 }),
	taskStatus: char("task_status", { length: 2 }),
	memo: varchar("memo", { length: 512 }),
});