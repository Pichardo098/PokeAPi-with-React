import axios from 'axios';
import './App.css'
import { useEffect, useState } from 'react';
import Pokemon from './components/Pokemon';
import Pokemons from './components/Pokemons';

function App() {
  const [pokemon, setPokemon] = useState(null)
  const [pokemons, setPokemons] = useState(null)
 

  const URL = 'https://pokeapi.co/api/v2/pokemon'
  let nextData = pokemons?.next
  let prevData = pokemons?.previous
  let results = pokemons?.results

  const getData = (url) => {
    axios
    .get(url)
    .then(({data}) => setPokemons(data))
    .catch(e => console.log(e))
  }
  
  useEffect(() => {
    getData(URL)
  }, [])
  
 
 
  
  // const mappedDataPokemons = dataPokemonsArray.map(dataPokemon => (
  //   {
  //     images :dataPokemon?.sprites.other["official-artwork"].front_default,
  //     title: dataPokemon?.name
  //   }
  // ))
  // console.log(mappedDataPokemons.dataPokemon)


  const handleSubmit = (e) => {
    e.preventDefault()
    const value = e.target.pokemonName.value
    if(value === '') return setPokemon(null)
    const URL = `https://pokeapi.co/api/v2/pokemon/${value}/`
    axios
    .get(URL)
    .then(({data}) => setPokemon(data))
    .catch(e => window.alert(`${e.response.data}. Please, change your pokemon or ID.`))
  }

  const btnPrev = () => {
    if(!prevData){
    window.alert('Estas en la primera página')
    return
    }
    getData(prevData)
  }


  const btnNext = () => {
    if(!nextData){
    window.alert('No hay más pokemones')
    return 
    }
    getData(nextData)
  }
  
  const btnStart = () => {
    getData(URL)
  }
  //let getPokemon = pokemons?.results
  
  
 

  
  

  return (
    <div id='body' className='min-h-screen bg-blue-700' >
      <header className='bg-gradient-to-b from-[#CC0000] to-blue-700 '>
        <nav className='bg-black'>
            <h1 className='p-2 text-white sm:text-3xl'>Pokédex</h1> 
        </nav>
        <img className='w-full' src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1280px-International_Pok%C3%A9mon_logo.svg.png"/>
      </header>
      <main className='min-h-screen bg-blue-700'>
        <section className='flex justify-center  py-3 md:grid md:grid-cols-3'>
          <section className='flex flex-col gap-2 md:col-start-2 col-end-3'>
            <form onSubmit={handleSubmit} className='flex flex-col gap-2 md:col-start-2 col-end-3'>
              <input type="text" id='pokemonName' placeholder="Search for name or id.." className='bg-white/70 rounded-full px-2 outline-none hover:bg-black/70 hover:text-white lg:py-1'/>
            </form>
            <div className='flex justify-between px-2 lg:justify-center lg:gap-7'>
              <button onClick={btnPrev} className='bg-white/70 rounded-full px-2 hover:bg-black/70 hover:text-white md:px-6 lg:px-10 lg:py-1'><i className="fas fa-arrow-left"></i></button>
              <button onClick={btnNext} className='bg-white/70 rounded-full px-2 hover:bg-black/70 hover:text-white md:px-6 lg:px-10'><i className="fas fa-arrow-right"></i></button>
              <button onClick={btnStart} className='bg-white/70 rounded-full px-4 hover:bg-black/70 hover:text-white md:px-6 lg:px-10'>Start</button>
            </div>
          </section>
              
        </section>
        
          
            {
              pokemon ?
              <Pokemon pokemon={pokemon}/>
              :
              <Pokemons results={results}>
              </Pokemons>
              
            }
            
              
            
            
          
           
       
      </main>
      <footer className='text-center text-white/80 bg-gradient-to-t from-red-800 to-blue-700 p-4 text-xl'>
        <h2>
            Contact
        </h2>
            <ul className='flex justify-center gap-3 text-xl'>
                <li className='hover:text-black hover:scale-150 duration-1000'>
                    <a href="https://github.com/Pichardo098?tab=repositories" target="_blank" rel="noopener" id="git">
                        <i className="fab fa-github" aria-hidden="true"></i> 
                    </a>
                </li>
                <li className='hover:text-blue-700 hover:scale-150 duration-1000'>
                    <a href="https://www.linkedin.com/feed/" target="_blank" rel="noopener" id="linkdn">
                        <i className="fab fa-linkedin" aria-hidden="true"></i> 
                    </a>
                </li>
            </ul>
            <p>
                Created by Jesús Pichardo.
            </p>
      </footer>

    </div>
  )
}

export default App
