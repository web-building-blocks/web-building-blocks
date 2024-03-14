// index.jsx
import React from 'react';
import Head from 'next/head';
import '../styles.css'; // Adjust the path as needed

const MyButton = () => {
  const handleClick = () => {
    console.log('Button clicked!');
    // Add your click handling logic here
  };

  return (
    <>
      <Head>
        <title>Document</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <button
        className="button button1" // Note: class is changed to className in JSX
        onClick={handleClick} // Note: onclick is changed to onClick in JSX
        aria-label="Activate feature"
      >
        Active
      </button>
    </>
  );
};

export default MyButton;
