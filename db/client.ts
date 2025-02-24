import { createClient } from "@libsql/client/web";
import { DB_APP_TOKEN, DB_REMOTE_URL } from "astro:env/server";

export const client = createClient({
    url: DB_REMOTE_URL,
    authToken: DB_APP_TOKEN,
});

export const getData = async (date: string) => {
    const result = await client.execute({
        sql: `SELECT fac.*, cat.name AS categoryName, cat.color AS categoryColor 
        FROM factos fac 
        LEFT JOIN categories cat ON cat.ID = fac.id_category 
        WHERE date = ?`,
        args: [date]
    });
    return result.rows;
}