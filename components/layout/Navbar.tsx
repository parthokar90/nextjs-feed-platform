import React from "react";
import { getCurrentUser } from "@/app/actions/profile/user";
import NavbarClient from "./NavbarClient"; 

export default async function Navbar() {
    
    const user = await getCurrentUser();

    return <NavbarClient user={user} />;
}