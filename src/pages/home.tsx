import React, { ReactElement } from 'react';

export const Home: React.FunctionComponent = (): ReactElement => {
  return (
    <div className='m-auto max-w-5xl mt-20'>
      <div className='text-center z-10'>
        <h1 className='text-6xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl animate__animated animate__backInLeft mt-72 mb-10'>
          Boilerplate
        </h1>
        <h1 className='text-4xl tracking-tight font-extrabold text-white animate__animated animate__backInLeft mb-10'>
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
        <p className={'animate__animated animate__backInDown'}>{process.env.NODE_ENV} env</p>
      </div>
    </div>
  );
};
