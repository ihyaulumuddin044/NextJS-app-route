"use client";
import { ModeToggle } from "@/components/DarkMode";
import { NavbarComp } from "@/components/NavbarComp";
import Link from "next/link";
import { useRouter } from "next/navigation";
export default function Navbar() {
  const router = useRouter();
  return (
    <div className=" flex justify-between relative top-0 h-[60px] after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-black/50 items-center mx-5">
      <Link href={"/"} className="font-bold font-serif">LOGO</Link>
      <div>
        <NavbarComp />
      </div>
      <div>
        <button className="font-bold bg-white text-black px-4 mr-5 h-7 rounded-md cursor-pointer"
        onClick={() => router.push("/login")}
        >login</button>
        <ModeToggle />
      </div>
    </div>
  );
}
