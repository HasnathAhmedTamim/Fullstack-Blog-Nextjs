import Link from "next/link";
import React from "react";

const Links = () => {
  const links = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Contact",
      path: "/contact",
    },

    {
      title: "Blog",
      path: "/blog",
    },
  ];
  return (
    <div>
      {links.map((links) => (
        <Link href={links.path} key={links.title}>
          {links.title}
        </Link>
      ))}
    </div>
  );
};

export default Links;
