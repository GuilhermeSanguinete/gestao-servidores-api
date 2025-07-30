import db from '../config/db.js';

export async function getTodasTags() {
    const [rows] = await db.query('SELECT * FROM tags');
    return rows;
}