"use client";
import { SetStateAction, Dispatch } from "react";
import { CharactersStatusEnum, CharactersToGetEnum } from "shared";
import { Grid, Pagination } from "@mui/material";
import { SelectInput } from "../atoms/Input";

export const Filter: React.FC<{
  status: CharactersStatusEnum;
  setStatus: Dispatch<SetStateAction<CharactersStatusEnum>>;
  specie: CharactersToGetEnum;
  setSpecie: Dispatch<SetStateAction<CharactersToGetEnum>>;
  paginationCount: number;
  page: number;
  handlePagination: Dispatch<SetStateAction<number>>;
}> = ({
  status,
  setStatus,
  specie,
  setSpecie,
  paginationCount,
  page,
  handlePagination,
}) => (
  <Grid container justifyContent="space-evenly" alignItems="center">
    <Grid item>
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
    </Grid>
    <Grid item>
      <Pagination
        count={paginationCount}
        page={page}
        variant="outlined"
        shape="rounded"
        onChange={(_, value) => handlePagination(value)}
      />
    </Grid>
    <Grid item>
      <SelectInput
        label="Specie"
        onChange={(e) => setSpecie(e.target.value as CharactersToGetEnum)}
        options={[
          { label: "HUMAN", value: CharactersToGetEnum.HUMAN },
          { label: "ALL", value: CharactersToGetEnum.ALL },
        ]}
        value={specie}
      />
    </Grid>
  </Grid>
);
