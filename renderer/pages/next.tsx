import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

export default function NextPage() {
  return (
    <React.Fragment>
      <Head>
        <title>Sign Up</title>
      </Head>
      <div className="grid grid-col-1 text-2xl w-full text-center">Sign Up Page</div>
      <div className="mt-1 w-full flex-wrap flex justify-center">
        <Link href="/home">
          <a className="btn-blue">Go to Prev page</a>
        </Link>
      </div>
    </React.Fragment>
  );
}
