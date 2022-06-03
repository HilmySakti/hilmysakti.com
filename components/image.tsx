import React, { useState } from 'react';
import NextImage, { ImageProps } from 'next/image';
import Lightbox from 'react-image-lightbox';
import { useRouter } from 'next/router';

export type Props = {
  src: string;
} & ImageProps;

const Image: React.FC<Props> = ({ src, className, ...props }) => {
  const [isReady, setIsReady] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const onLoadCallback = () => {
    setIsReady(true);
  };

  const router = useRouter();
  const isCloudinary = src.startsWith('/');
  const source = isCloudinary
    ? `https://res.cloudinary.com/dlpb6j88q/image/upload/c_limit%2Cf_auto%2Cfl_progressive%2Cq_75%2Cw_800/${src}`
    : `https://res.cloudinary.com/dlpb6j88q/image/fetch/c_limit%2Cf_auto%2Cfl_progressive%2Cq_75%2Cw_800/${src}`;

  return (
    <>
      <figure
        className={`${
          className ? className : 'rounded-md'
        } flex justify-center overflow-hidden`}
      >
        <NextImage
          onClick={() =>
            (router.pathname === '/posts/[slug]' ||
              router.pathname === '/projects/[slug]') &&
            setIsOpen(true)
          }
          src={source}
          className={`bg-zinc-600 duration-1000 ease-in-out ${
            className ? className : 'rounded-md'
          } ${
            isReady
              ? 'scale-100 blur-0 grayscale-0'
              : 'scale-150 blur-2xl grayscale'
          }`}
          {...props}
          onLoadingComplete={onLoadCallback}
          unoptimized={true}
        />

        {isOpen && (
          <Lightbox mainSrc={source} onCloseRequest={() => setIsOpen(false)} />
        )}
      </figure>
    </>
  );
};

export default Image;
