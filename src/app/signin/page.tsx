import { auth, signIn } from "@/auth";
import { apuImage } from "@/src/assets";
import Container from "@/src/components/Container";

import Image from "next/image";
import { redirect } from "next/navigation";
import React from "react";

const SignPage = async () => {
  const session = await auth();
  if (session) {
    redirect("/");
  }

  return (
    <Container className="py-5">
      <h2 className="text-xl font-semibold underline underline-offset-4 decoration-[1px] mb-2">
        SignPage
      </h2>
      <form
        action={async () => {
          "use server";
          await signIn("github");
        }}
      >
        <button
          type="submit"
          className="flex items-center gap-2 border border-sky-500 hover:border-gray-600 duration-200 rounded-md py-1 px-4 hover:bg-green-300"
        >
          <Image src={apuImage} alt="photo" className="w-10" />
          Signin with GitHub
        </button>
      </form>
    </Container>
  );
};

export default SignPage;
