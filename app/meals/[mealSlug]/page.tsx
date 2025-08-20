import Image from 'next/image';
import { notFound } from 'next/navigation';

import { getMeal } from '@/lib/meals';

export default async function MealDetailsPage({
  params
}: {
  params: Promise<{ mealSlug: string }>;
}) {
  const { mealSlug } = await params;
  const meal = getMeal(mealSlug);

  if (!meal) {
    notFound();
  }

  meal.instructions = meal.instructions.replace(/\n/g, '<br />');

  return (
    <>
      <header className="flex py-[2rem] px-[1rem]">
        <div className="relative w-[30rem] h-[20rem]">
          <Image src={meal.image} alt={meal.title} fill />
        </div>
        <div className="pt-[0.5rem] pr-[1rem] pl-[1rem]">
          <h1 className="text-[3.5rem] uppercase shadow-[0_0_5rem_rgba(0,0,0,0.5]">
            {meal.title}
          </h1>
          <p className="gradient-text gradient-text-hover">
            by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
          </p>
          <p className="text-[1.5rem]">{meal.summary}</p>
        </div>
      </header>
      <main>
        <p
          className="text-[1.5rem] leading-[1.5] bg-[#6e6464] text-[#13120f] rounded-[8px] shadow-[0_0_5rem_rgba(0,0,0,0.5] p-[2rem] max-w-[60rem] my-[2rem] mx-auto fade-slide-in-from-bottom"
          dangerouslySetInnerHTML={{
            __html: meal.instructions
          }}
        ></p>
      </main>
    </>
  );
}
