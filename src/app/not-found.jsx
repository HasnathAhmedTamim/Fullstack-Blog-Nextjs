import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div>
      <h1>NotFound</h1>
      <p>Sorry this page is does not exist</p>
      <Link href="/">return home</Link>
    </div>
  );
};

export default NotFound;
