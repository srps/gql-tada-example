import { FragmentOf, graphql, readFragment } from '../graphql';
import './PokemonItem.css';

export const PokemonItemFragment = graphql(`
  fragment PokemonItem on Pokemon {
    id
    name
    types
    evolutions {
      id
      name
      types
    }
  }
`);

interface Props {
  data: FragmentOf<typeof PokemonItemFragment> | null;
}

const PokemonItem = ({ data }: Props) => {
    const pokemon = readFragment(PokemonItemFragment, data);
    console.log(pokemon);
    if (!pokemon) {
        return null;
    }

    return (
        <li className='pokemon-item'>
            <h3>{pokemon.name}</h3>
            <p>Types: {pokemon.types?.join(', ')}</p>
            {pokemon.evolutions ? (
                <>
                    <h4>Evolutions</h4>
                    <p>This Pokémon evolves into:</p>
                    <ul>
                        {pokemon.evolutions.map((evolution) => (
                            <li key={evolution?.id}>
                                <h4>{evolution?.name}</h4>
                                <p>Types: {evolution?.types?.join(', ')}</p>
                            </li>
                        ))}
                    </ul>
                </>
            ) : (
                <p>This Pokémon does not evolve.</p>
            )}
        </li>
    );
};

export { PokemonItem };