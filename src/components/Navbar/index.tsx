import { NavbarItems, NavbarProps } from "@/utils/utils";
import Link from "next/link";
import React from "react";
import AnimatedToggle from "../darkToggle/AnimatedToggle";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();
  const renderNavItems = (item: NavbarProps, index: number) => {
    return (
      <Link
        key={index}
        href={item.to}
        className={`${
          router.pathname === item.to
            ? "text-text-primary"
            : "text-text-disabled"
        } text-sm `}
      >
        {item.name}
      </Link>
    );
  };
  return (
    <div className="flex items-center justify-between w-full h-[4rem] border-b-2 mt-4 pb-6">
      <div>Logo</div>
      <div className="flex gap-3 items-center">
        <div className="flex gap-6">{NavbarItems.map(renderNavItems)}</div>
        <div>
          <AnimatedToggle />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
