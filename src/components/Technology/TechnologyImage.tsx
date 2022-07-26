import React from "react";

import { TTechnologyImage } from "./TechnologyDetail";

export type TTechnologyProps = {
  images: TTechnologyImage;
  text: string;
};
const TechnologyImage = ({ images, text }: TTechnologyProps) => {
  return (
    <picture>
      <img
        src={images.portrait}
        alt={text}
        className="mt-6 w-full h-100 md:mt-16 lg:mt-0"
      />
    </picture>
  );
};

export default TechnologyImage;
