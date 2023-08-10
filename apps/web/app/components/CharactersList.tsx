import { Character, Characters } from "shared";
import { Grid, CircularProgress } from "@mui/material";
import { CharacterCard } from "../atoms/CharacterCard";

export const CharactersList: React.FC<{
  loading: boolean;
  charactersData: Character[] | null | undefined;
}> = ({ loading, charactersData }) => {
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      style={{ padding: 30, columnGap: 10, rowGap: 20 }}
    >
      {loading ? (
        <CircularProgress />
      ) : (
        charactersData?.map((character) => (
          <Grid item>
            <CharacterCard key={character.id} {...character} />
          </Grid>
        ))
      )}
    </Grid>
  );
};
