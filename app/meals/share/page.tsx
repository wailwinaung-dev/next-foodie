import ImagePicker from '@/components/meals/image-picker';
import { shareMeal } from '@/lib/action';

export default function ShareMealPage() {
  return (
    <>
      <header className="gap-[3rem] mt-[3rem] mx-auto mb-[5rem] w-[90%] max-w-[75rem] text-[#ddd6cb] text-[1.5rem]">
        <h1>
          Share your <span className="gradient-text">favorite meal</span>
        </h1>
        <p>Or any other meal you feel needs sharing!</p>
      </header>
      <main className="w-[90%] max-w-[75rem] my-[3rem] mx-auto">
        <form
          className="max-w-[50rem] flex flex-col gap-1.5"
          action={shareMeal}
        >
          <div className="flex gap-[1rem]">
            <p>
              <label htmlFor="name" className="form-label">
                Your name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="form-input"
              />
            </p>
            <p>
              <label htmlFor="email" className="form-label">
                Your email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="form-input"
              />
            </p>
          </div>
          <p>
            <label htmlFor="title" className="form-label">
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              required
              className="form-input"
            />
          </p>
          <p>
            <label htmlFor="summary" className="form-label">
              Short Summary
            </label>
            <input
              type="text"
              id="summary"
              name="summary"
              required
              className="form-input"
            />
          </p>
          <p>
            <label htmlFor="instructions" className="form-label">
              Instructions
            </label>
            <textarea
              id="instructions"
              name="instructions"
              rows={10}
              required
              className="form-input"
            ></textarea>
          </p>
          <ImagePicker label="Image" name="image" />
          <p className="text-right">
            <button className="hero-btn" type="submit">
              Share Meal
            </button>
          </p>
        </form>
      </main>
    </>
  );
}
