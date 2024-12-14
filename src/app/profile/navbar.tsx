import { ModeToggle } from "@/components/DarkMode";
import { NavbarComp } from "@/components/NavbarComp";

export default function Navbar() {
  return (
      <div className=" flex justify-between relative top-0 h-[60px] after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-black/50 ">
        <div className="font-bold font-serif">
            LOGO
        </div>
      <div>
        <NavbarComp />
      </div>
        <ModeToggle />
    </div>
  );
}
