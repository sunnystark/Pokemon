import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';

import { Container, Main, Info, Loading } from './styles';
import BackButton from '../../assets/back.png';
import LoadingIcon from '../../assets/loading.png';

interface RouteParam {
  pokemonName: string;
}

interface Ability {
  ability: {
    name: string;
  };
}

interface Move {
  move: {
    name: string;
  };
}

interface Stat {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
  };
}

interface Type {
  type: {
    name: string;
  };
}

interface ApiResponse {
  moves: Move[];
  stats: Stat[];
  abilities: Ability[];
  types: Type[];
  base_experience: number;
  height: number;
  weight: number;
  sprites: {
    other: {
      'official-artwork': {
        front_default: string;
      };
    };
  };
}

export default function Pokemon(): JSX.Element {
  const [response, setResponse] = useState<ApiResponse | null>(null);

  const { pokemonName } = useParams<RouteParam>();

  useEffect(() => {
    axios
      .get<ApiResponse>(baseUrl + pokemonName)
      .then((response) => setResponse(response.data));
  }, [pokemonName]);
  console.log(response,'res')
  return (
    <Container>
      <Link to="/">
        <img src={BackButton} alt="Back_button" />
      </Link>
      {!response ? (
        <Loading>
          <img src={LoadingIcon} alt="Loading_Icon" />
        </Loading>
      ) : (
        <>
          <Main>
            <h1>{pokemonName}</h1>

            <img
              src={response.sprites.other['official-artwork'].front_default}
              alt={pokemonName + ' image'}
            />
          </Main>

          <Info>
            <h3>Weigth: {response.weight} lbs</h3>
            <h3>Heigth: {response.height} ft</h3>
          </Info>

          <Info>
            <h3>Base XP: {response.base_experience}</h3>
          </Info>

          <Info>
            <h3>Types: {iterateArray(response.types, 'type')}</h3>
          </Info>

          <Info>
            <h3>Stats: {iterateArray(response.stats, 'stat')}</h3>
          </Info>

          <Info>
            <h3>Abilities: {iterateArray(response.abilities, 'ability')}</h3>
          </Info>

          <Info>
            <h3>Moves: {iterateArray(response.moves, 'move')}</h3>
          </Info>
        </>
      )}
    </Container>
  );
}

const baseUrl = 'https://pokeapi.co/api/v2/pokemon/';

const iterateArray = (array: any[], key: string) => {
  const newArray = array.map((item, index) => {
    if (index + 1 === array.length) {
      return item[key].name;
    }
    return item[key].name + ', ';
  });

  return newArray;
};
