'use server';

import { redirect } from 'next/navigation';
import { MealForm, saveMeal } from './meals';

export const shareMeal = async (formData: FormData) => {
  const meal: MealForm = {
    creator: formData.get('name') as string,
    creator_email: formData.get('email') as string,
    image: formData.get('image') as File,
    title: formData.get('title') as string,
    summary: formData.get('summary') as string,
    instructions: formData.get('instructions') as string
  };

  await saveMeal(meal);
  redirect('/meals');
};
