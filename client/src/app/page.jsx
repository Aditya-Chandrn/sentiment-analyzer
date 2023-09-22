"use client"

import Navbar from "@/components/navbar/Navbar";
import { redirect } from "next/navigation";
import { useState } from "react";

const page = ({children}) => {
  const [isLogged, setIsLogged] = useState(true);
  if(!isLogged) redirect("/login")
  return (
      <div>
          <Navbar/> {children}
      </div>
    )
}

export default page