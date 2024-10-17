import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="bg-gray-800 p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-white text-xl">My App</h1>
        <Link
          href="/auth"
          className="inline-flex items-center text-white bg-blue-700 hover:bg-blue-800 px-4 py-2 rounded-md text-sm"
        >
          Login
        </Link>
      </div>
    </header>
  );
};

export default Header;
