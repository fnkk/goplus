import {pgTable, serial, text, varchar} from 'drizzle-orm/pg-core';
import {drizzle} from 'drizzle-orm/node-postgres';
import * as schema from '../drizzle/schema';
import {pgPool} from "@/dizzle.config";
import {userAddress} from "../drizzle/schema";


const db = drizzle(pgPool, {schema});

await db.insert(userAddress).values({status:'0',userId:'gene',accountAddress: '0x0000000000000000000000000000000000000000'});
const result: userAddress[] = await db.select().from(userAddress);
console.log(result);