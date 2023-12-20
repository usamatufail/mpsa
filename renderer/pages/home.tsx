import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

export default function HomePage() {
  return (
    <React.Fragment>
      <Head>
        <title>Sign In</title>
      </Head>
      <div className="grid grid-col-1 text-2xl w-full text-center">Sign In Page</div>
      <div className="mt-1 w-full flex-wrap flex justify-center">
        <Link href="/next">
          <a className="btn-blue">Go to next page</a>
        </Link>
      </div>
    </React.Fragment>
  );
}
