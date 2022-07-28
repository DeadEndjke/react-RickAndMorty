import axios from "axios";
import CharacterCard from "./CharacterCard/CharacterCard";
import { useState, useEffect } from "react";
import { Container, Pagination, TextField, Stack } from "@mui/material";

const Characters = () => {
  const [character, setCharacter] = useState([]);
  const [query, setQuery] = useState(" ");
  const [status, setStatus] = useState("");
  const [page, setPage] = useState(1);
  const [pageQty, setPageQty] = useState(0);
  const baseUrl = `https://rickandmortyapi.com/api/character/`;

  useEffect(() => {
    axios
      .get(baseUrl + `?page=${page}&name=${query}&status=${status}`)
      .then(({ data }) => {
        setCharacter(data.results);
        setPageQty(data.info.pages);
        setStatus(status);
      });
  }, [query, page, status]);

  return (
    <Container sx={{ marginTop: 5 }}>
      <div className="textandselect">
        <TextField
          fullWidth
          label="Поиск по названию"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
        <select
          value={status}
          onChange={(event) => setStatus(event.target.value)}
        >
          <option value="">All</option>
          <option value="Alive">Alive</option>
          <option value="Dead">Dead</option>
          <option value="unknown">Unknown</option>
        </select>
      </div>

      <Stack spacing={2}>
        <Pagination
          count={pageQty}
          page={page}
          onChange={(_, num) => setPage(num)}
          sx={{ marginY: 3, marginX: "auto" }}
        />

        <div className="setka">
          {character.map((character) => (
            <CharacterCard
              key={character.id}
              id={character.id}
              image={character.image}
              name={character.name}
              type={character.type}
              status={character.status}
            />
          ))}
        </div>

        <Pagination
          count={pageQty}
          page={page}
          onChange={(_, num) => setPage(num)}
        />
      </Stack>
    </Container>
  );
};

export default Characters;
