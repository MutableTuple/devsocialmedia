import React from "react";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../_lib/auth";
import { getUser } from "../_lib/data-service";
import IconContainer from "./IconContainer";
import Link from "next/link";
export default async function UserLogged() {
  const session = await getServerSession();
  const current_user = await getUser(session?.user?.email);
  console.log(current_user);
  return (
    <div className="">
      {current_user ? (
        <>
          <Link href={`/user/profile/${current_user.id}`}>
            <IconContainer>
              <img
                src={current_user?.image}
                alt=""
                className="rounded-full p-1"
              />
            </IconContainer>
            <p className="text-xs text-center text-stone-500">Me</p>
          </Link>
        </>
      ) : (
        ""
      )}
    </div>
  );
}
