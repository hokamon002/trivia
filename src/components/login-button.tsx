"use client";

import { SignInButton, SignOutButton, useAuth } from "@clerk/nextjs";
import { Button } from "./ui/button";

const LoginButton = () => {
  const { userId } = useAuth();
  return (
    <>
      <>
        {userId ? (
          <SignOutButton>
            <Button variant="outline">Sign Out</Button>
          </SignOutButton>
        ) : (
          <SignInButton>
            <Button variant="outline">Sign In</Button>
          </SignInButton>
        )}
      </>
    </>
  );
};

export default LoginButton;
