"use client";
import { Button } from "@mui/material";
import { useState } from "react";
import { Header } from "./components/Header";
import { Filter } from "./components/Filter";
import { CharactersStatusEnum, CharactersToGetEnum } from "shared";

export default function Page() {
  const [status, setStatus] = useState(CharactersStatusEnum.ALIVE);
  const [specie, setSpecie] = useState(CharactersToGetEnum.HUMAN);

  console.log(status);
  return (
    <>
      <Header />
      <Filter
        status={status}
        setStatus={setStatus}
        specie={specie}
        setSpecie={setSpecie}
      />
      <Button variant="text">Text</Button>
    </>
  );
}
