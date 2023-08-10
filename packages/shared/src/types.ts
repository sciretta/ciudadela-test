import { GetCharactersQuery } from "./__graphql__/graphql";

export enum CharactersToGetEnum {
  ALL = "",
  HUMAN = "human",
}

export enum CharactersStatusEnum {
  ALIVE = "alive",
  DEAD = "dead",
  ALL = "",
}

export type ApiRequestData = {
  page: number;
  specie: CharactersToGetEnum;
  status: CharactersStatusEnum;
};

export type ApiSuccessResponseData = GetCharactersQuery;

export type ApiErrorResponseData = { message: string };
