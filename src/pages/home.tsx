import React, { ReactElement } from 'react';

export const Home: React.FC = (): ReactElement => {
  return (
    <div className='m-auto max-w-5xl mt-20'>
      <div className='text-center z-10'>
        <h1 className='text-6xl tracking-tight font-extrabold text-primary-custom dark:text-white sm:text-5xl md:text-6xl animate__animated animate__backInLeft mt-72 mb-10'>
          Boilerplate
        </h1>
        <h1 className='text-4xl tracking-tight font-extrabold text-primary-custom dark:text-white animate__animated animate__backInLeft mb-10'>
          <span className='text-gradient-title'>
            React
            <br />
            Typescript
            <br />
            Tailwind
          </span>
          <br />
          <br />
          <span className='sm:text-2xl text-secondary-custom'>
            Vite <small>~</small> pnpm <small>~</small> Prettier <small>~</small> ESLint <small>~</small> Husky
          </span>
        </h1>
      </div>
    </div>
  );
};
