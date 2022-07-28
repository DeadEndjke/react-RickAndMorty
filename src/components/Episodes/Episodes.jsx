import axios from "axios";
import t from "./Episodes.module.css";
import { useState, useEffect } from "react";
import { Container, Pagination, TextField, Stack, Link } from "@mui/material";

const Episodes = () => {
  const [episode, setEpisode] = useState([]);
  const [query, setQuery] = useState(" ");
  const [season, setSeason] = useState(1);
  const [seasonQty, setSeasonQty] = useState(0);

  const baseUrl = `https://rickandmortyapi.com/api/episode/`;

  useEffect(() => {
    axios
      .get(baseUrl + `?episode=S0${season}&name=${query}`)
      .then(({ data }) => {
        setEpisode(data.results);
        setSeasonQty(5);
      });
  }, [query, season]);

  return (
    <Container sx={{ marginTop: 5 }}>
      <TextField
        fullWidth
        label="Поиск по названию"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
      />
      <div className={t.series}>
        {" "}
        <Stack spacing={2}>
          Seasons
          <Pagination
            count={seasonQty}
            season={season}
            onChange={(_, num) => setSeason(num)}
            sx={{ marginY: 3, marginX: "auto" }}
          />
          {episode.map((episode) => (
            <Link key={episode.id} href={`/episodes/${episode.id}`}>
              {episode.name},{episode.episode},{episode.air_date}
            </Link>
          ))}
        </Stack>
      </div>
    </Container>
  );
};

export default Episodes;
