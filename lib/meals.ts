import Database from 'better-sqlite3';

const db = new Database('meals.db');

export interface Meal {
  id?: number; // optional because it's auto-incremented in DB
  slug: string;
  title: string;
  image: string;
  summary: string;
  instructions: string;
  creator: string;
  creator_email: string;
}

export function getMeals(): Meal[] {
  return db.prepare('SELECT * FROM meals').all() as Meal[];
}

export function getMeal(slug: string) {
  return db
    .prepare('SELECT * FROM meals WHERE slug = ?')
    .get(slug) as Meal | null;
}
