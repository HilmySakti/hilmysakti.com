import React from 'react';
import Image from '@/components/image';
import Link from '@/components/customLink';
import TechStack from '@/components/projects/tech-stack';

export interface Props {
  title: string;
  description: string;
  header: string;
  date: Date;
  slug: string;
  stack: Array<string>;
}

const Card: React.FC<Props> = (props) => {
  const { title, description, header, stack, slug } = props;
  return (
    <div className='group h-72 overflow-hidden rounded bg-background_100 px-3 md:h-60 lg:h-[17rem]'>
      <Link href={`/projects/${slug}`} key={slug}>
        <div className='relative text-center'>
          <h3>{title}</h3>
          <div className='-mt-2 flex justify-center space-x-4'>
            {stack
              .slice(0)
              .reverse()
              .map((tag, index) => (
                <TechStack key={index} name={tag} />
              ))}
          </div>
          {/* <p className='text-gray-400 line-clamp-2'>{description}</p> */}
        </div>

        <div className=' relative top-0 h-full w-full duration-300 group-hover:-translate-y-5'>
          <Image
            className='!h-auto rounded object-contain'
            src={`/jagad.dev/projects/${
              slug.endsWith('-id') ? slug.replace('-id', '') : slug
            }/header`}
            fill
            alt={title}
          />
        </div>
      </Link>
    </div>
  );
};

export default Card;
