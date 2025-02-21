import React from "react";
import { Link } from "react-router-dom";

export default function Button() {
  return (
    <Link
      to={"/signup"}
      className="bg-[#20b486] max-w-[180px] text-center text-white px-2 lg:px-6 py-3 font-medium rounded-lg cursor-pointer hover:bg-[#76ceb2]"
    >
      Sign up for Free
    </Link>
  );
}
