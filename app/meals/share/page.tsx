export default function ShareMealPage() {
  return (
    <>
      <header className="gap-[3rem] mt-[3rem] mx-auto mb-[5rem] w-[90%] max-w-[75rem] text-[#ddd6cb] text-[1.5rem]">
        <h1>
          Share your <span className="gradient-text">favorite meal</span>
        </h1>
        <p>Or any other meal you feel needs sharing!</p>
      </header>
      <main className="w-[90%] max-w-[75rem] my-3rem mx-auto">
        <form className="max-w-[50rem]">
          <div className="flex gap-[1rem]">
            <p>
              <FormLabel htmlFor="name">Your name</FormLabel>
              <FormInput type="text" id="name" name="name" required />
            </p>
            <p>
              <FormLabel htmlFor="email">Your email</FormLabel>
              <FormInput type="email" id="email" name="email" required />
            </p>
          </div>
          <p>
            <FormLabel htmlFor="title">Title</FormLabel>
            <FormInput type="text" id="title" name="title" required />
          </p>
          <p>
            <FormLabel htmlFor="summary">Short Summary</FormLabel>
            <FormInput type="text" id="summary" name="summary" required />
          </p>
          <p>
            <FormLabel htmlFor="instructions">Instructions</FormLabel>
            <FormTextArea
              id="instructions"
              name="instructions"
              rows={10}
              required
            />
          </p>
          IMAGE PICKER
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

function FormLabel({
  htmlFor,
  children
}: {
  htmlFor: string;
  children: string;
}) {
  return (
    <label
      className="block mb-[0.5rem] text-[1rem] uppercase text-[#b3aea5] font-bold"
      htmlFor={htmlFor}
    >
      {children}
    </label>
  );
}

function FormInput({
  type,
  id,
  name,
  required
}: {
  type: string;
  id: string;
  name: string;
  required: boolean;
}) {
  return (
    <input className="form-input" type={type} id={id} name={name} required />
  );
}

function FormTextArea(props: {
  id: string;
  name: string;
  required: boolean;
  rows: number;
}) {
  return <textarea {...props} className="form-input"></textarea>;
}
