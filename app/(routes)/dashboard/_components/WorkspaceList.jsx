"use client";

import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/nextjs";
import { AlignLeft, LayoutGrid } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const WorkspaceList = () => {
  const { user } = useUser();

  const [workspaceList, setworkspaceList] = useState([]);
  return (
    <div className="my-8 p-10 md:px-25 lg:px-36 xl:px-52 mx-5">
      <div className="flex justify-between">
        <h2 className="font-bold text-2xl"> Hello,{user?.fullName}</h2>
        <Link href={"/createWorkspace"}>
          <Button>+</Button>
        </Link>
      </div>

      <div className="mt-10 flex justify-between">
        <div>
          <h2 className="font-medium text-purple-500">Your Workspaces</h2>
        </div>
        <div className="flex gap-2">
          <LayoutGrid />
          <AlignLeft />
        </div>
      </div>
      {workspaceList?.length == 0 ? (
        <div className="flex flex-col items-center justify-between my-15">
          <Image
            src={"/logo2.jpg"}
            width={340}
            height={220}
            className="rounded-md"
          />
          <h2>Create a new workspace</h2>
          <Link href={"/createWorkspace"}>
            <Button className="my-3">
              + New Workspace
            </Button>
          </Link>
        </div>
      ) : (
        <div>Workspace List</div>
      )}
    </div>
  );
};

export default WorkspaceList;
