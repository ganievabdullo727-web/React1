import React from "react";
import { Link } from "react-router";

const Notfound = () => {
  return (
    <div className="mt-[320px] text-center">
      <h1 className="text-[50px] text-center">
        This page is not <br />
        defind
      </h1>
      <Link
        className="text-[30px] border border-red-500 text-red-500 text-center rounded-full p-[10px]"
        to={"/"}
      >
        Home
      </Link>
    </div>
  );
};
export default Notfound;
