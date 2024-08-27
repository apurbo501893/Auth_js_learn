import { auth } from "@/auth";
import Container from "@/src/components/Container";
import { redirect } from "next/navigation";
import React from "react";

const page = async () => {
  const session = await auth();
  if (!session) {
    redirect("/");
  }

  return (
    <Container className="py-5">
      <h1 className="text-xl font-semibold">ProfilePage</h1> Lorem ipsum dolor
      sit amet consectetur adipisicing elit. Quam doloremque, quisquam illum nam
      et atque consectetur facilis cumque expedita voluptas placeat sequi optio
      fuga amet qui cum aspernatur inventore, commodi, saepe dicta rem eaque
      quos dolorem! Facere et blanditiis assumenda, totam adipisci eos,
      distinctio illo suscipit dignissimos ducimus fugit eaque.
    </Container>
  );
};

export default page;
