import {Config} from "drizzle-kit";
import * as dotenv from "dotenv";
import { Pool } from "pg";


dotenv.config({path: ".env.local"});
if (!process.env.DATABASE_URL) throw new Error("DATABASE_URL is not set");

export default {
    schema: "./drizzle/schema.ts",
    out: "./drizzle",
    driver: "pg",
    dbCredentials: {
        connectionString: process.env.DATABASE_URL || "localhost",
    },
    verbose: true,
    strict: true,
} satisfies Config;

export const pgPool = new Pool({
    connectionString:  process.env.DATABASE_URL
});
