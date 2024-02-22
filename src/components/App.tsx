import './App.css'
import { PokemonList } from './PokemonList';
import { Client, Provider, cacheExchange, fetchExchange } from 'urql';

const client = new Client({
  url: 'https://trygql.formidable.dev/graphql/basic-pokedex',
  exchanges: [cacheExchange, fetchExchange],
});

function App() {

  return (
    <Provider value={client}>
      <PokemonList />
    </Provider>
  );
}

export default App
