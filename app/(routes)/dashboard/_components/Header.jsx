"use client";
import Logo from "@/app/_components/Logo";
import { OrganizationSwitcher, useAuth, UserButton } from "@clerk/nextjs";
import React from "react";

const Header = () => {
  const { orgID } = useAuth();
  console.log(orgID);
  return (
    <div className="flex justify-between items-center p-2 shadow-sm">
      <Logo />
      <OrganizationSwitcher
        afterCreateOrganizationUrl={"/dashboard"}
        afterLeaveOrganizationUrl={"/dashboard"}
      />
      <UserButton />
    </div>
  );
};

export default Header;
