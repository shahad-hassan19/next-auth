'use client'

import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

function AuthButton(){
    const {data:session} = useSession;

    if(session){
        return(
            <>
                {session?.user?.name}
                <button className="m-5 p-2 bg-blue-500 rounded-full text-black font-bold"  onClick={() => signOut()}>Sign Out</button>
            </>
        )
    }

    return(
        <>
            Mot Signed In
            <button className="m-5 p-2 bg-blue-500 rounded-full text-black font-bold" onClick={() => signIn()}>Sign In</button>
        </>
    )
}

export default function NavBar(){
    return(
        <div>
            <AuthButton />
        </div>
    )
}