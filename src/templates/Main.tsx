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
      <div className="mx-auto">
        <a href="/">
          <img className="mx-auto" width="300px" src="/assets/images/logo1.svg" alt="DKYDEV Logo" />
        </a>
      </div>
      <div className="text-center text-lg mt-0 text-gray-600">{Config.description}</div>
      <div className="flex justify-center space-x-4 mt-4">
        <a href="https://github.com/nicholas-robson">
          <span className="sr-only">github</span>
          <svg
            className="h-8 w-8"
            xmlns="http://www.w3.org/2000/svg"
            fill="rgb(255, 254, 75)"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
          </svg>
        </a>
        <a href="https://bsky.app/profile/dky.dev">
          <span className="sr-only">bluesky</span>
          <svg
            className="h-8 w-8"
            xmlns="http://www.w3.org/2000/svg"
            fill="rgb(255, 254, 75)"
            viewBox="0 0 44 36"
            aria-hidden="true"
          >
            <g transform="matrix(0.07 0 0 0.07 0 2)">
              <path
                xmlns="http://www.w3.org/2000/svg"
                d="m135.72 44.03c66.496 49.921 138.02 151.14 164.28 205.46 26.262-54.316 97.782-155.54 164.28-205.46 47.98-36.021 125.72-63.892 125.72 24.795 0 17.712-10.155 148.79-16.111 170.07-20.703 73.984-96.144 92.854-163.25 81.433 117.3 19.964 147.14 86.092 82.697 152.22-122.39 125.59-175.91-31.511-189.63-71.766-2.514-7.3797-3.6904-10.832-3.7077-7.8964-0.0174-2.9357-1.1937 0.51669-3.7077 7.8964-13.714 40.255-67.233 197.36-189.63 71.766-64.444-66.128-34.605-132.26 82.697-152.22-67.108 11.421-142.55-7.4491-163.25-81.433-5.9562-21.282-16.111-152.36-16.111-170.07 0-88.687 77.742-60.816 125.72-24.795z"
              />
            </g>
          </svg>
        </a>
        <a href="https://www.linkedin.com/in/nick-robson/">
          <svg
            className="h-8 w-8"
            xmlns="http://www.w3.org/2000/svg"
            fill="rgb(255, 254, 75)"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <g transform="matrix(0.0225 0 0 0.0225 0 1.5)">
              <path d="M 892 10 L 108 10 C 54.1 10 10 54.1 10 108 L 10 892 C 10 945.9 54.1 990 108 990 L 892 990 C 945.9 990 990 945.9 990 892 L 990 108 C 990 54.1 945.9 10 892 10 z M 304 843 L 157 843 L 157 402 L 304 402 L 304 843 z M 230.5 318.7 C 181.5 318.7 142.3 279.5 142.3 230.5 C 142.3 181.5 181.5 142.3 230.5 142.3 C 279.5 142.3 318.7 181.5 318.7 230.5 C 318.7 279.5 279.5 318.7 230.5 318.7 z M 843 843 L 696 843 L 696 583.3 C 696 544.0999999999999 661.7 509.79999999999995 622.5 509.79999999999995 C 583.3 509.79999999999995 549 544.1 549 583.3 L 549 843 L 402 843 L 402 402 L 549 402 L 549 460.8 C 573.5 421.6 627.4 392.20000000000005 671.5 392.20000000000005 C 764.6 392.20000000000005 843 470.6 843 563.7 L 843 843 z" />
            </g>
          </svg>
        </a>
      </div>
    </div>

    <Navigation />

    <div className="max-w-screen-md mx-auto p-5">
      <div className="text-xl">{props.children}</div>

      <div className="border-t border-gray-800 text-center py-8 text-sm  mt-6 text-gray-600">
        {Config.title} ©{new Date().getFullYear()}{' '}
        <span className="align-r">
          {' '}
          <span role="img" aria-label="Love">
            ♥
          </span>{' '}
          <a href="https://creativedesignsguru.com">CreativeDesignsGuru</a>
        </span>
      </div>
    </div>
  </div>
);

export { Main };
