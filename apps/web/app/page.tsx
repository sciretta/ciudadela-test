"use client";
import { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { Filter } from "./components/Filter";
import {
  ApiRequestData,
  ApiSuccessResponseData,
  Character,
  CharactersStatusEnum,
  CharactersToGetEnum,
} from "shared";
import { GET_CHARACTERS_ENDPOINT } from "../config";
import { CharactersList } from "./components/CharactersList";

export default function Page() {
  const [status, setStatus] = useState(CharactersStatusEnum.ALIVE);
  const [specie, setSpecie] = useState(CharactersToGetEnum.HUMAN);
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(1);
  const [loading, setLoading] = useState(false);

  const [data, setData] = useState<ApiSuccessResponseData>();

  const getCharacters = async (data: ApiRequestData) => {
    setLoading(true);
    await fetch(GET_CHARACTERS_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((dataRes: ApiSuccessResponseData) => setData(dataRes));
    setLoading(false);
  };

  useEffect(() => {
    setPageCount(data?.characters?.info?.pages || 1);
  }, [data]);

  useEffect(() => {
    getCharacters({
      page,
      status,
      specie,
    });
  }, [page, status, specie]);

  return (
    <>
      <Header />
      <Filter
        page={page}
        handlePagination={setPage}
        paginationCount={pageCount}
        status={status}
        setStatus={setStatus}
        specie={specie}
        setSpecie={setSpecie}
      />
      <CharactersList
        loading={loading}
        charactersData={data?.characters?.results as Character[]}
      />
    </>
  );
}
