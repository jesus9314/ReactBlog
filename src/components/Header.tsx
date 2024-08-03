import {
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/react";
import { AcmeLogo } from "./AcmeLogo";
import { useEffect, useState } from "react";
import { links } from "../data/links";
import { useLocation } from "react-router-dom";

export default function Header() {
  const [isMenuOpen] = useState(false);
  const [openMobile, setOpenMobile] = useState(false);
  const { pathname } = useLocation();
  useEffect(() => {
    setOpenMobile(false);
  }, [pathname]);


  return (
    <header>
      <Navbar
        isBordered
        isMenuOpen={openMobile}
        onMenuOpenChange={setOpenMobile}
      >
        <NavbarContent>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden"
          />
          <NavbarBrand>
            <AcmeLogo />
            <p className="font-bold text-inherit">ACME</p>
          </NavbarBrand>
        </NavbarContent>
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          {links.map((link) => (
            <NavbarItem key={link.name}>
              <Link color="primary" href={link.href} className="capitalize">
                {link.name}
              </Link>
            </NavbarItem>
          ))}
        </NavbarContent>
        <NavbarMenu>
          {links.map((link) => (
            <NavbarMenuItem key={link.name}>
              <Link color="primary" href={link.href} className="capitalize">
                {link.name}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
    </header>
  );
}
