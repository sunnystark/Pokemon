import { useEffect, useCallback, useState  } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import { Container, Pokemon, Pagination, Loading, MainTitle, Button, Search  } from './styles';
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
  const [searchInput, setSearchInput] = useState('');
  const [filteredResults, setFilteredResults] = useState([]);


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
      console.log(data,'data')

      setResponse(data);

      setLoading(false);
    },
    [response, setResponse, setLoading]
  );

  const searchItems = (searchValue:any) => {
    let res:any = response
    console.log(res,'rss')
    setSearchInput(searchValue)
    if (searchInput !== '') {
    let filteredData:any = response && response.results.filter((item) => {
      return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase())
  })
  // console.log(filteredData,'filteredData')
  setFilteredResults(filteredData)
}
else{
  // setFilteredResults(res)
}
  }

  return (
    <Container>
      <MainTitle>
        <img src={PokemonLogo} alt="Pokemon_logo" />
      </MainTitle>
      <MainTitle>
        <Search type="text" onChange={(e) => searchItems(e.target.value)} placeholder="Search your pokemon..."/>
      </MainTitle>
      {!response || loading ? (
        <Loading>
          <img src={LoadingIcon} alt="Loading_Icon" />
        </Loading>
      ) : (

        <>
          {searchInput.length > 1 ? (
            filteredResults.map((pokemon:IPokemon) => (
              <Pokemon key={pokemon.url}>
                 <Link to={'/' + pokemon.name}>
                   <h2>{pokemon.name}</h2>
                 </Link>
               </Pokemon>
             ))
          ): ( response.results.map((pokemon) => (
            <Pokemon key={pokemon.url}>
               <Link to={'/' + pokemon.name}>
                 <h2>{pokemon.name}</h2>
               </Link>
             </Pokemon>
           )))}
          {/* {} */}

          <Pagination isFirstPage={!response.previous}>
            <Button onClick={() => changePage('previous')}>Prev  </Button>
            <Button onClick={() => changePage('next')}>Next</Button>
          </Pagination>
        </>
      )}
    </Container>
  );
}


