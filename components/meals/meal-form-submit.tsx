'use client';

import { useFormStatus } from 'react-dom';

export default function MealsFormSubmit() {
  const { pending } = useFormStatus();

  return (
    <button disabled={pending} className="hero-btn">
      {pending ? 'Submitting...' : 'Share Meal'}
    </button>
  );
}
