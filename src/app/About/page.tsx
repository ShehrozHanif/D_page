"use client"

import { useSearchParams } from 'next/navigation';

export default function About() {
  const searchParams = useSearchParams(); // Access search params from the URL
  const id = searchParams.get('id'); // Get the value of the 'id' query parameter

  return (
    <div>
      <h1>About Page</h1>
      <p>User ID: {id}</p>
    </div>
  );
}
