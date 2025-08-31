import { AlignJustify, ScanEye, Search } from "lucide-react";
import Logo from "../../assets/Logo";
import { cn } from "../../shared/utils/cn";

function Header() {
  return (
    <header>
      <div className="header-wrapper h-28 flex flex-col justify-center relative">
        <div className="overlay absolute inset-0 w-full lg:w-3/5 xl:w-1/2 2xl:w-2/5 bg-black/70" />

        <div className="flex items-center justify-between h-full relative z-10 pl-6 md:pl-12 lg:pl-16">
          <Logo />

          <div className="right nav-icons flex items-center gap-6 pr-6 md:pr-12 lg:pr-16">
            <div
              className={cn(
                "search-icon cursor-pointer size-11 bg-white shadow-lg",
                "hidden md:flex items-center justify-center group"
              )}>
              <Search className="size-7 text-gray-500 group-hover:stroke-primary transition-all duration-300" />
            </div>

            <div
              className={cn(
                "search-icon cursor-pointer size-11 bg-white shadow-lg",
                "hidden md:flex items-center justify-center group"
              )}>
              <ScanEye className="size-6 text-gray-500 group-hover:stroke-primary transition-all duration-300" />
            </div>

            <div
              className={cn(
                "search-icon cursor-pointer size-11 bg-white shadow-lg",
                "hidden md:flex items-center justify-center group"
              )}>
              <span className="text-gray-500 select-none group-hover:text-primary transition-all duration-300">
                RU
              </span>
            </div>

            <div
              className={cn(
                "menu-icon cursor-pointer size-11 flex items-center justify-center",
                "bg-white shadow-lg group"
              )}>
              <AlignJustify className="size-6 text-gray-500 group-hover:stroke-primary transition-all duration-300" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
