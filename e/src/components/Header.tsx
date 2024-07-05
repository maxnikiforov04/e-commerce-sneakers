import logo from "../assets/logo.svg";
import likes from "../assets/likes.svg";
import bag from "../assets/bagbag.svg";
const Header = () => {
  return (
    <header className="logo flex h-[100px] bg-white sticky divide-x divide-gray-500 w-full border-y-4">
      <div className="logo self-center w-[250px] flex justify-center cursor-pointer">
        <img src={logo} alt="logo" className="w-[106px] " />
      </div>
      <nav className="flex justify-center font-inter text-2xl font-medium  list-none gap-8 items-center w-[1400px]">
        <li className="cursor-pointer">Men</li>
        <li className="cursor-pointer">Women</li>
        <li className="cursor-pointer">Kids</li>
        <li className="cursor-pointer">Collection</li>
      </nav>
      <div className="flex divide-x divide-gray-500">
        <div className="w-[125px] self-center flex justify-center h-full cursor-pointer">
          <img src={likes} alt="favorite" className="w-12" />
        </div>
        <div className="w-[125px] self-center flex justify-center h-full cursor-pointer">
          <img src={bag} alt="favorite" className="w-12" />
        </div>
      </div>
    </header>
  );
};

export default Header;
