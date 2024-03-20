import {drizzle} from "drizzle-orm/node-postgres";
import {pgPool} from "../dizzle.config";
import * as schema from "../drizzle/schema";
import {expect, test} from 'vitest'

test('should return "Hello World!"', async () => {
    const db = drizzle(pgPool, {schema});

    await db.insert(schema.userAddress).values({
        status: '0',
        userId: 'gene',
        accountAddress: '0x0000000000000000000000000000000000000000'
    });
    const result = await db.select().from(schema.userAddress);
    console.log(result);
});
