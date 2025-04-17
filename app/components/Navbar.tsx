"use client";

import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
} from "@heroui/react";
import React, { useState } from "react";

const _Navbar = () => {
  const [activeTab, setActiveTab] = useState("Home");
  const navItems = [
    { name: "Home", href: "#" },
    { name: "About Allocarno", href: "#" },
    { name: "For Universities", href: "#" },
    { name: "Others", href: "#" },
  ];

  return (
    <Navbar
      className="rounded-full flex justify-between items-center px-1 md:px-6 py-5 bg-white w-full"
      shouldHideOnScroll
    >
      <NavbarBrand>
        <p className="font-bold text-inherit">ALLOCARNO</p>
      </NavbarBrand>
      <NavbarContent
        className="hidden lg:flex gap-5 font-semibold"
        justify="center"
      >
        {navItems.map((item, i) => (
          <NavbarItem
            key={i}
            onClick={() => setActiveTab(item.name)}
            isActive={item.name.toLowerCase() === activeTab.toLowerCase()}
          >
            <Link
              className="text-secondary"
              href={item.href}
              aria-current={item.name === "Home" ? "page" : undefined}
            >
              {item.name}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:block me-3">
          <Button
            as={Link}
            href="#"
            className="bg-primary text-white rounded-full px-4 py-2"
          >
            Join Beta
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} href="#" className="border rounded-full px-4 py-2">
            Log in
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default _Navbar;
