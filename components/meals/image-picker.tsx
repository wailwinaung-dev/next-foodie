'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

export default function ImagePicker({
  label,
  name
}: {
  label: string;
  name: string;
}) {
  const [image, setImage] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const imageInput = useRef<HTMLInputElement>(null);

  function handlePickClick() {
    if (!imageInput.current) {
      return;
    }
    imageInput.current.click();
  }

  function handleFileChange(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (!file) {
      setImage(null);
      return;
    }

    setImage(file);
  }

  useEffect(() => {
    if (!image) {
      setPreviewUrl(null);
      return;
    }

    const objectUrl = URL.createObjectURL(image);
    setPreviewUrl(objectUrl);

    return () => URL.revokeObjectURL(objectUrl);
  }, [image]);

  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <div className="flex items-center gap-[1.5rem] mb-[1rem]">
        <input
          className="hidden"
          type="file"
          id={name}
          accept="image/png, image/jpeg"
          name={name}
          ref={imageInput}
          onChange={handleFileChange}
          required
        />
        <div className="w-[10rem] h-[10rem] border-[2px] border-[#a4abb9] flex justify-center items-center text-center text-[#a4abb9] relative">
          {!previewUrl && <p className="p-[1rem]">No image picked yet.</p>}
          {previewUrl && (
            <Image
              src={previewUrl}
              alt="The image selected by the user."
              fill
              className="object-cover"
            />
          )}
        </div>
        <button
          className="py-[0.5rem] px-[1rem] rounded-[2px] cursor-pointer bg-[#a4abb9] text-[#444]"
          type="button"
          onClick={handlePickClick}
        >
          Pick an Image
        </button>
      </div>
    </div>
  );
}
