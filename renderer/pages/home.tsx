import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Login from './login';

export default function HomePage() {
  return (
    <React.Fragment>
      <Head>
        <title>Sign In</title>
      </Head>
      <div>
        <Login />
      </div>
    </React.Fragment>
  );
}
