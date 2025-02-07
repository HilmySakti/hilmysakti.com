import Image from '@/components/image';

//seo
import { NextSeo } from 'next-seo';
import DataSeo from '@/_data/seo.json';

const About = () => {
  const title = 'About';
  const description = `My professional background, key accomplishments, personal values, and any brands I may be associated with.`;

  return (
    <>
      <NextSeo
        title={`${title} — Jagad Yudha Awali`}
        description={`My professional background, key accomplishments, personal values, and any brands I may be associated with`}
        canonical={`${DataSeo.url}/about`}
      />

      <main className='prose-md prose prose-invert max-w-none'>
        <div
          className='mb-16 text-center
        '
        >
          <h1 className='-my-1 text-3xl sm:text-5xl'>About Me</h1>
          <p className='text-md text-gray-400 sm:text-lg'>
            {`Here's my professional background, key accomplishments, and personal
            values.`}
          </p>
        </div>

        <div className='relative float-left mr-4 h-36 w-1/2  object-cover md:w-1/3 lg:h-64 lg:w-1/4'>
          <Image
            src={'https://avatars.githubusercontent.com/u/41937681?v=4'}
            className='rounded object-cover'
            fill
            alt={'Jagad Yudha Awali'}
          />
        </div>

        <div>
          <p className='line-through'>
            {`Hi there! I'm Jagad Yudha Awali. I was born and raised in Sidoarjo,
                Indonesia. I am currently working at simpul technologies as a frontend
                engineer. I love building websites and apps that are easy to use, fast, and beautiful.`}
          </p>
          <p className='text-md line-through'>
            I&apos;ve been attracted by the world of information technology
            since I was in junior high school.{' '}
            <a
              className='font-medium text-primary underline'
              href='https://www.perl.org/'
            >
              Perl
            </a>{' '}
            and the{' '}
            <a
              className='font-medium text-primary underline'
              href='https://www.gnu.org/software/bash/'
            >
              Bash shell
            </a>{' '}
            were both new to me at the time. Since then, I&apos;ve primarily
            worked with{' '}
            <a
              className='font-medium text-primary underline'
              href='https://www.javascript.com/'
            >
              JavaScript
            </a>{' '}
            on React, React Native, TypeScript, and Next.Js.
          </p>
          <p className='text-md text-xl lg:pt-5 xl:pt-10'>{`I'm nothing.`}</p>
        </div>

        <div className='mt-16 text-center'>
          <h1 className='-my-1 text-3xl sm:text-5xl'>Skillset</h1>
          <p className='text-md text-gray-400 sm:text-lg'>
            My skillset is a mix of web and mobile development.
          </p>
        </div>

        <div className='my-10'></div>
        <div className=' grid grid-cols-1 gap-5 sm:grid-cols-3'>
          {skills.map((item, index) => (
            <div
              className='-pt-5 rounded border border-white border-opacity-10 bg-background_100 bg-opacity-50 p-5'
              key={index}
            >
              <h2 className='mb-4 -mt-0.5 text-lg font-bold text-white sm:text-xl'>
                {item.name}
              </h2>
              {item.list.map((item, index) => (
                <p className='text-md my-2 text-gray-300' key={index}>
                  · {item}
                </p>
              ))}
            </div>
          ))}
        </div>
      </main>
    </>
  );
};

const skills = [
  {
    name: 'Programming Languages',
    list: ['JavaScript', 'TypeScript', 'Python'],
  },
  {
    name: 'Mobile Development',
    list: ['React Native'],
  },
  {
    name: 'Backend Development',
    list: ['Express', 'Next.js API', 'Flask', 'Supabase', 'Firebase'],
  },
  {
    name: 'Web Development',
    list: ['HTML & CSS', 'React', 'Vue.js'],
  },
  {
    name: 'Tools',
    list: ['VSCode', 'Figma', 'Postman', 'Git', 'Jupyter Notebook'],
  },

  {
    name: 'Hosting',
    list: ['Vercel', 'Netlify'],
  },
];

export default About;
