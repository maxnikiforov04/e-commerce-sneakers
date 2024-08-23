import { redirect } from "react-router-dom";

export const Header = () => {
  
  return (
    <header className="w-full flex h-28">
      <div className="w-1/6 h-full cursor-pointer flex items-center justify-center">
        <img src="/Header/logo.svg" alt="logo" />
      </div>
      <div className="w-full flex flex-wrap justify-center">
        <nav
          className="h-full flex items-center justify-between font-inter
          font-bold w-2/3 text-2xl"
        >
          <ul className="cursor-pointer no-underline hover:underline">
            New arrivals
          </ul>
          <ul className="cursor-pointer no-underline hover:underline">Men</ul>
          <ul className="cursor-pointer no-underline hover:underline">Women</ul>
          <ul className="cursor-pointer no-underline hover:underline">Kids</ul>
          <ul className="cursor-pointer no-underline hover:underline">
            Collection
          </ul>
        </nav>
      </div>
      <div className="flex h-full w-1/6 items-center justify-center">
        <div className=" w-full">
          <img
            src="/Header/search.svg"
            alt="search"
            className="w-12 h-12 cursor-pointer"
          />
        </div>
        <div className=" w-full">
          <img
            src="/Header/bag.svg"
            alt="bag"
            className="w-12 h-12 cursor-pointer"
          />
        </div>
      </div>
    </header>
  );
};
