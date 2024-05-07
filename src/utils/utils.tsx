export const NavbarItems: NavbarProps[] = [
  {
    name: "Dashboard",
    to: "/",
  },
  {
    name: "About",
    to: "/about",
  },
  {
    name: "Contact",
    to: "/contact",
  },
];

export interface NavbarProps {
  name: string;
  to: string;
}
