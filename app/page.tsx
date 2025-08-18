import ImageSlideshow from '@/components/images/image-slideshow';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <header className="flex gap-12 my-12 mx-auto w-[90%]">
        {/* Slide Show */}
        <div className="w-[40rem] h-[25rem]">
          <ImageSlideshow />
        </div>
        {/*Hero and action*/}
        <div>
          <div className="text-[#ddd6cb] text-[1.5rem]">
            <h1 className="text-[2rem] font-bold font-mono tracking-[0.15rem] uppercase gradient-text">
              Next Level Food for Next Level Foodies
            </h1>
            <p>Taste & shared foods from all over the world.</p>
          </div>
          <div className="flex gap-4 mt-4">
            <Link href={'/community'} className="hero-btn-transparent">
              Join the Community
            </Link>
            <Link href={'/meals'} className="hero-btn">
              Explore Meals
            </Link>
          </div>
        </div>
      </header>
      <main>
        <section className="flex flex-col text-[#ddd6cb] text-[1.5rem] max-w-[50rem] w-[90%] my-[2rem] mx-auto text-center">
          <h2>How it works</h2>
          <p>
            NextLevel Food is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes,
            and to connect with other food lovers.
          </p>
          <p>
            NextLevel Food is a place to discover new dishes, and to connect
            with other food lovers.
          </p>
        </section>

        <section className="flex flex-col text-[#ddd6cb] text-[1.5rem] max-w-[50rem] w-[90%] my-[2rem] mx-auto text-center">
          <h2>Why NextLevel Food?</h2>
          <p>
            NextLevel Food is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes,
            and to connect with other food lovers.
          </p>
          <p>
            NextLevel Food is a place to discover new dishes, and to connect
            with other food lovers.
          </p>
        </section>
      </main>
    </>
  );
}
