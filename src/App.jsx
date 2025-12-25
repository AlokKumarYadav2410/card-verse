import React from 'react'
import Cards from './Components/Cards'
import { mixedCharacters } from './Data/mixedCharacters'

const App = () => {
  return (
    <div className="w-full min-h-screen bg-linear-to-r from-sky-950 via-sky-800 to-sky-100 flex justify-center gap-6 p-10 flex-wrap">
      {mixedCharacters.map((character) => (
        <Cards key={character.id} characters={character} />
      ))}
    </div>
  )
}

export default App
