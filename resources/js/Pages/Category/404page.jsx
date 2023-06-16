import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';
import { Link } from '@inertiajs/inertia-react';
import './404page.css';

const NotFoundPage = () => {
  const lottieContainer = useRef(null);

  useEffect(() => {
    const animation = lottie.loadAnimation({
      container: lottieContainer.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: '/animation.json', // Replace with your Lottie JSON file path
    });

    return () => {
      animation.destroy();
    };
  }, []);

  return (
    <>
      <div className="area">
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="text-container">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-800 mt-36">404 - Page Not Found</h1>
            <p className="text-gray-600 mt-4">The page you are looking for does not exist.</p>
            <Link href="/" className="mt-4 text-blue-500 hover:text-blue-700">              Go back to the home page
            </Link>
          </div>
        </div>
        <div ref={lottieContainer} className="absolute top-0 left-0 right-0 mx-auto" style={{ maxWidth:"500px",maxHeight:"500px" }}></div>
      </div>
    </>
  );
};

export default NotFoundPage;
