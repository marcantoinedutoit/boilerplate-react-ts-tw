import React, { ReactElement } from 'react';

export const NotFound: React.FunctionComponent = (): ReactElement => {
  return (
    <div className='m-auto max-w-5xl mt-20 text-center'>
      <h1 className='text-4xl tracking-tight font-extrabold text-white sm:text-3xl md:text-4xl animate__animated animate__backInLeft mt-72 mb-10'>
        Page not found
        <br />
        <span className='text-gradient-title'>The requested page could not be found.</span>
      </h1>
    </div>
  );
};
