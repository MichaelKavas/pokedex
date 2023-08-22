import Image from 'next/image'
import { PokemonGrid } from './components/pokemon-grid'
import { PokemonCard } from './components/pokemon-card'
import { getPokemonList } from '@/lib/pokemonAPI'

export default async function Home() {

  const pokemonList = await getPokemonList()

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <p className="font-bold text-xl">Michael&apos;s Awesome Pokedex</p>
      </div>

      <PokemonGrid pokemonList={pokemonList}></PokemonGrid>

      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm flex">
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
          <img className="w-full" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" alt="This will be a pokemon" loading="lazy"></img>
          <div className="px-6 py-4">
            <div className="text-md mb-2">25</div>
            <div className="font-bold text-xl mb-2">Pikachu</div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Electric</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Normal</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
