"use client";
import Coverpicker from "@/app/_components/Coverpicker";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SmilePlus } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

const CreateWorkspace = () => {
  const [coverImage, setcoverImage] = useState("/cover2.jpg");
  const [workname,setworkname] = useState();
  return (
    <div className="p-10 md:px-36 lg:px-64 xl:px-96 py-28">
      <div className="shadow-2xl rounded-md" >
        <Coverpicker>
      <div className="relative group cursor-pointer">
        <h2 className="absolute w-full h-full p-10 items-center justify-center hidden group-hover:flex">Change Cover</h2>
        <div className="group-hover:opacity-50 " > 
        <Image
          src={coverImage}
          alt="coverImage"
          height={400}
          width={300}
          className="w-full h-[150px] object-cover rounded-t-xl"
        />
        </div>
      </div>
      </Coverpicker>

      <div className="p-12">
        <h2 className="font-medium text-xl"> Create a new workspace</h2>
         <h2 className="text-sm mt-2" >You can create a collaborative workspace here</h2>
         <div  className="mt-9 flex items-center">
          <Button variant="outline">
            <SmilePlus/>
          </Button>
          <Input placeholder="Name of workspace" onChange={(e)=>setworkname(e.target.value)}/>
         </div>
         <div className="flex justify-end mt-7 gap-2" >
          <Button disabled={!workname?.length} >Add</Button>
          <Button variant="outline">Cancel</Button>
         </div>
      </div>
      </div>
    </div>
  );
};

export default CreateWorkspace;
