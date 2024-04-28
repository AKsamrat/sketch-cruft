import React from 'react';
import { Link } from 'react-router-dom';
import Lottie from 'lottie-react';
import groovyWalkAnimation from '../assets/react.json';
import alert from '../assets/alert.json';

const ErrorPage = () => {
  return (
    <div>
      <section className="flex items-center h-full  dark:bg-gray-50 dark:text-gray-800">
        <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
          <div className="max-w-4xl text-center">
            {/* <h2 className="mb-8 font-extrabold text-9xl dark:text-gray-400">
              <span className="sr-only">Error</span>404
            </h2> */}
            <div className="grid grid-cols-2">
              <p>
                <Lottie animationData={groovyWalkAnimation} loop={true} /> ;
              </p>
              <div>
                <Lottie animationData={alert} loop={true} />;
              </div>
            </div>
            <p className="text-2xl font-semibold md:text-3xl">
              Sorry, we couldn't find this page.
            </p>
            <p className="mt-4 mb-8 dark:text-gray-600">
              But dont worry, you can find plenty of other things on our
              homepage.
            </p>
            <Link
              to="/"
              rel="noopener noreferrer"
              href="#"
              className="px-8 py-3 font-semibold rounded bg-violet-600 text-gray-50"
            >
              Back to homepage
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ErrorPage;
