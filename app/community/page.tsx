import Image, { StaticImageData } from 'next/image';

import mealIcon from '@/assets/icons/meal.png';
import communityIcon from '@/assets/icons/community.png';
import eventsIcon from '@/assets/icons/events.png';
import React from 'react';

export default function CommunityPage() {
  return (
    <>
      <header className="gap-[3rem] mt-[3rem] mb-auto mr-[5rem] ml-auto w-[90%] max-w-[75rem] text-[#ddd6cb] text-[1.5rem] text-center">
        <h1 className="text-[3rem] font-bold">
          One shared passion: <span className="gradient-text">Food</span>
        </h1>
        <p>Join our community and share your favorite recipes!</p>
      </header>
      <main className="w-[90%] max-w-[40rem] my-0 mx-auto text-center">
        <h2 className="text-[2rem] text-[#ddd6cb] mb-[3rem] font-bold">
          Community Perks
        </h2>

        <ul className="my-[3rem]">
          <LiWithImage
            image={mealIcon}
            text="Share & discover recipes"
            altText="A delicious meal"
          />
          <LiWithImage
            image={communityIcon}
            text="Find new friends & like-minded people"
            altText="A crowd of people, cooking"
          />
          <LiWithImage
            image={eventsIcon}
            text="Participate in exclusive events"
            altText="A crowd of people at a cooking event"
          />
        </ul>
      </main>
    </>
  );
}

function LiWithImage({
  image,
  text,
  altText
}: {
  image: StaticImageData;
  text: string;
  altText: string;
}) {
  return (
    <li className="flex flex-col items-center gap-[2rem]">
      <Image
        src={image}
        alt={altText}
        className="w-[8rem] h-[8rem] object-contain"
      />
      <p className="text-[1.5rem] font-bold text-[#ddd6cb]">{text}</p>
    </li>
  );
}
