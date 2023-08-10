import { Character } from "shared";
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

// {
//     "id": "1",
//     "name": "Rick Sanchez",
//     "species": "Human",
//     "status": "Alive",
//     "origin": {
//         "name": "Earth (C-137)"
//     },
//     "image": "https://rickandmortyapi.com/api/character/avatar/1.jpeg"
// },

export const CharacterCard: React.FC<Character> = ({
  image,
  name,
  origin,
  status,
  species,
}) => {
  const isHuman =
    species?.toLowerCase() === "human" || species?.toLowerCase() === "humanoid";
  return (
    <Card
      sx={{
        width: 345,
        backgroundColor: isHuman ? "rgba(	144, 238, 144,.2)" : "#ffa4a2",
      }}
    >
      <CardMedia sx={{ height: 400 }} image={image || ""} title={name || ""} />
      <CardContent>
        <Grid
          container
          alignItems="center"
          justifyContent="space-between"
          columnGap={1}
        >
          <Grid item>
            <Typography gutterBottom variant="h5" component="div">
              {name}
            </Typography>
          </Grid>
          <Grid item>
            {isHuman && (
              <Typography variant="h6" color="text.secondary">
                Human
              </Typography>
            )}
          </Grid>
        </Grid>

        <Typography variant="body2" color="text.secondary">
          Origin: {origin?.name}
        </Typography>
        <Grid container alignItems="center" columnGap={1}>
          <Grid item>
            {status === "Alive" ? <Dot live /> : <Dot live={false} />}
          </Grid>
          <Grid item>
            <Typography variant="subtitle1" color="text.secondary">
              {status}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

const Dot: React.FC<{ live: boolean }> = ({ live }) => (
  <div
    style={{
      borderRadius: "50%",
      backgroundColor: live ? "#90ee90" : "#cf142b",
      height: 10,
      width: 10,
    }}
  />
);
