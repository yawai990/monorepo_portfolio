import Link from "next/link";
import React from "react";

const Navigation = () => {
  return (
    <div className="flex gap-2 text-lg">
      <Link href="/">Home</Link>
      <Link href="/file">File Upload</Link>
    </div>
  );
};

export default Navigation;
