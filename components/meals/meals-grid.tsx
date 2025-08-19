import { Meal } from '@/lib/meals';
import MealItem from './mean-item';

export default function MealsGrid({ meals }: { meals: Meal[] }) {
  return (
    <ul className="w-[90%] max-w-[90rem] grid grid-cols-[repeat(auto-fill,minmax(20rem,1fr))] gap-[5rem] my-[2rem] mx-auto ">
      {meals.map((meal) => (
        <li key={meal.id}>
          <MealItem {...meal} />
        </li>
      ))}
    </ul>
  );
}
