import React, { ReactNode } from 'react';
import { Config } from '../utils/Config';
import { Navigation } from './Navigation';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <div className="antialiased w-full text-gray-300">
    {props.meta}

    <div className="pt-16 pb-12">
      <div className='mx-auto'>
        <img className='mx-auto' width='300px' src='/assets/images/logo1.svg' />
        <div className="text-center text-xl">{Config.description}</div>
      </div>
    </div>

    <Navigation></Navigation>

    <div className="max-w-screen-md mx-auto">

      <div className="text-xl py-5">{props.children}</div>

      <div className="border-t border-gray-800 text-center py-8 text-sm">
        {Config.title} ©
        {' '}
        {new Date().getFullYear()}
        {' '}
        <span className="align-r">
          {' '}

          <span role="img" aria-label="Love">
            ♥
        </span>
          {' '}
          <a href="https://creativedesignsguru.com">CreativeDesignsGuru</a>
        </span>

      </div>
    </div>
  </div>
);

export { Main };
