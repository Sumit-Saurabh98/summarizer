"use client"
import { useSession } from "next-auth/react"
const page = () => {

    const { data: session } = useSession();

    console.log(session, "this is session");

  return (

    
    <div>
      he hi
    </div>
  )
}

export default page
