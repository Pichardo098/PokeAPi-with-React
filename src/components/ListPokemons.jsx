import axios from "axios";
import { useEffect, useState } from "react";
import '../assets/Load.css'

const ListPokemons = ({pokemon}) => {

  const [pokemonData, setPokemonData] = useState(null)
  useEffect(() => {
    axios.get(`${pokemon?.url}`)
      .then(({data}) => setPokemonData(data))
      .catch(err => console.log(err))
  }, [])

  console.log(pokemonData);

  return (
    <section className="min-h-min min-w-min bg-white m-2 rounded-xl grid justify-center text-center p-3 bg-gradient-to-b from-red-500 to-blue-700 hover:scale-105 duration-700 " >
        <div>
          {
          pokemonData?.sprites.other["official-artwork"].front_default ?
          <img src={pokemonData?.sprites.other["official-artwork"].front_default} alt={pokemon.name} />
          :
          <div className="lds-circle">
            <div></div>
          </div>
          }
      </div>
      <h2 className='text-center text-black font-bold text-xl sm:text-3xl lg:text-4xl'>
      {pokemon.name.toUpperCase()}
      </h2> 
    </section>
  )
}

export default ListPokemons