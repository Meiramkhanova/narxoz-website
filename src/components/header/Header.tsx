import { AlignJustify, ScanEye, Search } from "lucide-react";
import Logo from "../../assets/Logo";

function Header() {
  return (
    <header>
      <div className="header-wrapper h-28 flex flex-col justify-center">
        <div className="flex items-center justify-between h-full">
          <div className="left-header bg-black/70 h-full flex items-center w-2/5 pl-16">
            <Logo />
          </div>

          <div className="right nav-icons flex items-center gap-7 pr-16">
            <div className="search-icon cursor-pointer size-11 flex items-center justify-center bg-white shadow-lg">
              <Search className="size-7 text-gray-500" />
            </div>

            <div className="scaneye-icon cursor-pointer size-11 flex items-center justify-center bg-white shadow-lg">
              <ScanEye className="size-6 text-gray-500" />
            </div>

            <div className="lg-icon cursor-pointer size-11 flex items-center justify-center bg-white shadow-lg">
              <span className="text-gray-500 select-none">RU</span>
            </div>

            <div className="menu-icon cursor-pointer size-11 flex items-center justify-center bg-white shadow-lg">
              <AlignJustify className="size-6 text-gray-500" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
