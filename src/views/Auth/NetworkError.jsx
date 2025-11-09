import React from 'react';
import { Link } from 'react-router-dom';
const NetworkError = () => {
  return (
    <div>
      <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <p className="mt-4 text-3xl font-bold tracking-tight text-red-500 sm:text-5xl">404</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Page not found</h1>
          <p className="mt-6 text-base leading-7 text-gray-600">Sorry, we couldn’t find the page you’re looking for.</p>
          <div>
            <p className="mt-6 text-base leading-7 text-gray-600 text-left">Here are the reasons for a 404 error:</p>
            <ul className="list-disc list-inside text-left">
              <li>Page Not Found</li>
              <li>Moved or Deleted Page</li>
              <li>Broken Link</li>
              <li>Server Configuration Issue</li>
              <li>Permission Restrictions</li>
              <li>DNS Issues</li>
              <li>Firewall or Security Measures</li>
            </ul>
          </div>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              to="/"
              className="rounded-md bg-red-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
            >
              Go Back Login
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default NetworkError;
