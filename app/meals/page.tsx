import MealsGrid from '@/components/meals/meals-grid';
import { getMeals } from '@/lib/meals';
import Link from 'next/link';
import { Suspense } from 'react';
import MealLoading from './meal-loading';

async function Meal() {
  const meals = await getMeals();
  return <MealsGrid meals={meals} />;
}
export default async function MealsPage() {
  return (
    <>
      <header className="gap-[3rem] mt-[3rem] mb-auto mr-[5rem] ml-auto w-[90%] max-w-[75rem] text-[#ddd6cb] text-[1.5rem]">
        <h1 className="text-[3rem] font-bold">
          Delicious meals, created <span className="gradient-text">by you</span>
        </h1>
        <p>
          Choose your favorite recipe and cook it yourself. It is easy and fun!
        </p>
        <p className="mt-[2rem]">
          <Link href="/meals/share" className="hero-btn">
            Share Your Favorite Recipe
          </Link>
        </p>
      </header>
      <main>
        <Suspense fallback={<MealLoading />}>{Meal()}</Suspense>
      </main>
    </>
  );
}
