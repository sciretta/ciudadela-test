"use client";
import { SetStateAction, Dispatch } from "react";
import { CharactersStatusEnum, CharactersToGetEnum } from "shared";
import { SelectInput } from "../atoms/Input";

export const Filter: React.FC<{
  status: CharactersStatusEnum;
  setStatus: Dispatch<SetStateAction<CharactersStatusEnum>>;
  specie: CharactersToGetEnum;
  setSpecie: Dispatch<SetStateAction<CharactersToGetEnum>>;
}> = ({ status, setStatus, specie, setSpecie }) => (
  <>
    <SelectInput
      label="Status"
      onChange={(e) => setStatus(e.target.value as CharactersStatusEnum)}
      options={[
        { label: "ALIVE", value: CharactersStatusEnum.ALIVE },
        { label: "DEAD", value: CharactersStatusEnum.DEAD },
        { label: "ALL", value: CharactersStatusEnum.ALL },
      ]}
      value={status}
    />

    <SelectInput
      label="Specie"
      onChange={(e) => setSpecie(e.target.value as CharactersToGetEnum)}
      options={[
        { label: "HUMAN", value: CharactersToGetEnum.HUMAN },
        { label: "ALL", value: CharactersToGetEnum.ALL },
      ]}
      value={specie}
    />
  </>
);
