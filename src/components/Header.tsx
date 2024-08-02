import {
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import { AcmeLogo } from "./AcmeLogo";

export default function Header() {
  return (
    <header>
      <Navbar isBordered>
        <NavbarBrand>
          <AcmeLogo />
          <p className="font-bold text-inherit">ACME</p>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarItem>
            <Link color="foreground" href="/">
              Home
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#" aria-current="page">
              Posts
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#">
              Our Team
            </Link>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    </header>
  );
}
