import ListPokemons from "./ListPokemons"
import '../assets/Load.css'

const Pokemons = ({results}) => {

  const hasResults = results?.length > 0
  return (
      <>
        <section className="grid grid-cols-2 lg:flex lg:flex-wrap lg:justify-center lg:gap-6">
          {
          hasResults ?
          results?.map(pokemon => (
            // axios.get(pokemon?.url)
            //   .then(({data})=> console.log(data))
            //   .catch(e => console.log(e))
  
            <ListPokemons pokemon={pokemon} key={pokemon.url}/>
          ))
          :
          <div className="lds-circle">
            <div></div>
          </div>
          
  
          }
        </section>
      
        
      </>
  )
}


export default Pokemons