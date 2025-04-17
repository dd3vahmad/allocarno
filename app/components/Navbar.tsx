import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
} from "@heroui/react";
import React from "react";

const _Navbar = () => {
  return (
    <Navbar
      className="rounded-full flex justify-between items-center md:px-6 py-3 bg-white w-full"
      shouldHideOnScroll
    >
      <NavbarBrand>
        <p className="font-bold text-inherit">ALLOCARNO</p>
      </NavbarBrand>
      <NavbarContent className="hidden lg:flex gap-4" justify="center">
        <NavbarItem isActive>
          <Link aria-current="page" href="#">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            About Allocarno
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            For Universities
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Others
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Button
            as={Link}
            href="#"
            className="bg-primary text-white rounded-full px-5 py-2"
          >
            Join Beta
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} href="#" className="border rounded-full px-5 py-2">
            Log in
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default _Navbar;
