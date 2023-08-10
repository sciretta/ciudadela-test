import express from "express";
import cors from "cors";
import { request } from "graphql-request";
import {
  ApiErrorResponseData,
  ApiRequestData,
  GetCharactersQuery,
} from "shared";
import { GetCharacters } from "./schema.graphql";

const RICK_AND_MORTY_URL = "https://rickandmortyapi.com/graphql";

const app = express();
const port = 4000;

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.post("/api/get-characters", async (req: { body: ApiRequestData }, res) => {
  const { page, specie, status } = req.body;

  console.log("Request body:", { page, specie, status });

  if (page === null || Number.isNaN(Number(page))) {
    const error: ApiErrorResponseData = {
      message: "Invalid page value.",
    };
    return res.status(400).json(error);
  }
  if (specie === undefined || specie === null) {
    const error: ApiErrorResponseData = {
      message: "Invalid specie.",
    };
    return res.status(400).json(error);
  }
  if (status === undefined || specie === null) {
    const error: ApiErrorResponseData = {
      message: "Invalid status.",
    };
    return res.status(400).json(error);
  }

  const queryResponse = await request<GetCharactersQuery>(
    RICK_AND_MORTY_URL,
    GetCharacters,
    { specie, page, status }
  );

  return res.json(queryResponse);
});

app.listen(port, () => console.log(`Server started on port ${port}`));
