"use client";
import { IGallery } from "@/types/global";
import Image from "next/image";
import { FC } from "react";

const Gallery: FC<IGallery> = ({ src, alt }) => {
  return (
    <div className="relative aspect-square h-full max-h-[550px] w-full overflow-hidden">
      <Image
        className="h-full w-full object-contain"
        fill
        sizes="(min-width: 1024px) 66vw, 100vw"
        alt={alt}
        src={src}
        priority={true}
        placeholder="blur"
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
      />
    </div>
  );
};

export default Gallery;
