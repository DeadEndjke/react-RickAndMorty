import axios from "axios";
import { useState, useEffect } from "react";
import { Container, Pagination, TextField, Stack, Link } from "@mui/material";

const Locations = () => {
  const [location, setLocation] = useState([]);
  const [query, setQuery] = useState(" ");
  const [page, setPage] = useState(1);
  const [pageQty, setPageQty] = useState(0);
  const baseUrl = `https://rickandmortyapi.com/api/location/`;

  useEffect(() => {
    axios.get(baseUrl + `?page=${page}&name=${query}`).then(({ data }) => {
      setLocation(data.results);
      setPageQty(data.info.pages);
    });
  }, [query, page]);

  return (
    <Container sx={{ marginTop: 5 }}>
      <TextField
        fullWidth
        label="Поиск по названию"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
      />

      <Stack spacing={2}>
        <Pagination
          count={pageQty}
          page={page}
          onChange={(_, num) => setPage(num)}
          sx={{ marginY: 3, marginX: "auto" }}
        />

        {location.map((location) => (
          <Link key={location.id} href={`/locations/${location.id}`}>
            {location.name}
          </Link>
        ))}
      </Stack>
    </Container>
  );
};

export default Locations;
