const Pokemon = ({pokemon}) => {
  return (
    <section className="flex justify-center">
      <section className=" font-black	 text-center grid  gap-6 bg rounded-xl p-7 justify-center m-6 bg-[url('/images/bkg-card.jpg')] bg-fixed bg-center bg-cover	">
        <div>
          <img src={pokemon?.sprites.other["official-artwork"].front_default} alt={pokemon?.name} />
        </div>
        <section className='bg-white/70 p-4 rounded-lg text-black/80 hover:bg-black/70 hover:text-white/80 duration-1000'>
        <h2 className='text-3xl'>
        {pokemon?.name.toUpperCase()}
        </h2>
        <section>
          <ul className='grid grid-cols-2 gap-2'>
            <li>HP: {pokemon?.stats[0].base_stat}</li>
            <li>Attack: {pokemon?.stats[1].base_stat}</li>
            <li>Defense: {pokemon?.stats[2].base_stat}</li>
            <li>Speed: {pokemon?.stats[5].base_stat}</li>
          </ul>
        </section>
        </section>
      </section>
    </section>
  )
}

export default Pokemon