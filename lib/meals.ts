import Database from 'better-sqlite3';
import slugify from 'slugify';
import xss from 'xss';
import fs from 'fs/promises';
import path from 'path';

const db = new Database('meals.db');

export interface Meal {
  id?: number;
  slug: string;
  title: string;
  image: string;
  summary: string;
  instructions: string;
  creator: string;
  creator_email: string;
}

export interface MealForm {
  title: string;
  slug?: string;
  image: File;
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

export async function saveMeal(request: MealForm) {
  const extension = request.image.name.split('.').pop();
  const slug = slugify(request.title, { lower: true });
  const filename = `${slug}.${extension}`;
  const filePath = path.join(process.cwd(), 'public/images', filename);

  const buffer = Buffer.from(await request.image.arrayBuffer());

  try {
    // Write file
    await fs.writeFile(filePath, buffer);

    // Save to DB
    const meal: Meal = {
      title: request.title,
      summary: request.summary,
      creator: request.creator,
      creator_email: request.creator_email,
      slug,
      instructions: xss(request.instructions),
      image: '/images/' + filename
    };

    db.prepare(
      `
      INSERT INTO meals
        (title, summary, instructions, creator, creator_email, image, slug)
      VALUES (
        @title,
        @summary,
        @instructions,
        @creator,
        @creator_email,
        @image,
        @slug
      )
    `
    ).run(meal);
  } catch (error) {
    console.log('Error saving image:', error);
    throw new Error('Saving image failed');
  }
}
