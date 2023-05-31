import ListPokemons from "./ListPokemons"

const Pokemons = ({results}) => {

  const hasResults = results?.length > 0
  return (
      <>
        <section className="grid grid-cols-2 lg:flex lg:flex-wrap lg:justify-center lg:gap-6">
          {/* <section className="min-h-min min-w-min bg-white m-4 rounded-xl grid justify-center text-center p-3 bg-gradient-to-b from-red-500 to-blue-700 " >
             <div>
              <img src={pokemon?.sprites.other["official-artwork"].front_default} alt={pokemon?.name} />
            </div>
            <h2 className='text-center text-black font-bold text-3xl'>
            {pokemon?.name.toUpperCase()}
            </h2> 
          </section> */
          hasResults ?
          results?.map(pokemon => (
            // axios.get(pokemon?.url)
            //   .then(({data})=> console.log(data))
            //   .catch(e => console.log(e))
  
            <ListPokemons pokemon={pokemon} key={pokemon.url}/>
          ))
          :
          <h2>Cargando</h2>
          
  
          }
        </section>
      
        
      </>
  )
}


export default Pokemons