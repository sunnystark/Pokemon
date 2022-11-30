import { useEffect, useCallback, useState  } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import { Container, Pokemon, Pagination, Loading, MainTitle, Button  } from './styles';
import PokemonLogo from '../../assets/pokemon.png';
import LoadingIcon from '../../assets/loading.png';

const baseUrl = 'https://pokeapi.co/api/v2/pokemon?limit=20';

interface ApiResponse {
  count: number;
  next: string;
  previous: string | null;
  results: IPokemon[];
}

interface IPokemon {
  name: string;
  url: string;
}

export default function Home(): JSX.Element {
  const [loading, setLoading] = useState(true);
  const [response, setResponse] = useState<ApiResponse | null>(null);


  useEffect(() => {
    axios.get<ApiResponse>(baseUrl + '&offset=0').then((response) => {
      setResponse(response.data);
      setLoading(false);
    });
  }, []);

  const changePage = useCallback(
    async (type: 'next' | 'previous') => {
      if (!response || !response[type]) {
        return;
      }

      setLoading(true);

      const { data } = await axios.get<ApiResponse>(response[type] as string);

      setResponse(data);

      setLoading(false);
    },
    [response, setResponse, setLoading]
  );

  return (
    <Container>
      <MainTitle>
        <img src={PokemonLogo} alt="Pokemon_logo" />
      </MainTitle>
      {!response || loading ? (
        <Loading>
          <img src={LoadingIcon} alt="Loading_Icon" />
        </Loading>
      ) : (
        <>
          {response.results.map((pokemon) => (
           <Pokemon key={pokemon.url}>
              <Link to={'/' + pokemon.name}>
                <h2>{pokemon.name}</h2>
              </Link>
            </Pokemon>
          ))}

          <Pagination isFirstPage={!response.previous}>
            <Button onClick={() => changePage('previous')}>Prev  </Button>
            <Button onClick={() => changePage('next')}>Next</Button>
          </Pagination>
        </>
      )}
    </Container>
  );
}


