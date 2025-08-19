import Link from 'next/link';
import Image from 'next/image';

import { Meal } from '@/lib/meals';

export default function MealItem({
  title,
  slug,
  image,
  summary,
  creator
}: Meal) {
  return (
    <article className="flex flex-col justify-between h-full rounded-[4px] shadow-[0_0_12px_rgba(0,0,0,0.3)] overflow-hidden transition-all duration-300 ease-in-out text-[#ddd6cb] bg-gradient-to-r from-[#2c1e19] to-[#25200f]">
      <header>
        <div className="relative h-[15rem]">
          <Image src={image} alt={title} fill className="object-cover" />
        </div>
        <div className="pt-[0.5rem] pr-[1rem] pl-[1rem]">
          <h2 className="text-[1.5rem]">{title}</h2>
          <p className="italic text-md">by {creator}</p>
        </div>
      </header>
      <div className="flex flex-col justify-between h-full">
        <p className="pt-[1rem] px-[1rem]">{summary}</p>
        <div className="p-[1rem] text-right">
          <Link href={`/meals/${slug}`} className="hero-btn">
            View Details
          </Link>
        </div>
      </div>
    </article>
  );
}
