import { KeyboardEvent, useCallback, useEffect, useState } from 'react'
import words from './wordList.json'
import { Keyboard } from './components/Keyboard'
import { HangmanWord } from './components/HangmanWord'
import { HangmanDrawing, BodyParts } from './components/HangmanDrawing'

function App() {

  const [targetWord, setTargetWord] = useState<string>(() => {
    return words[Math.floor(Math.random() * words.length - 1)]
  })

  const [guessedLetters, setGuessedLetters] = useState<string[]>([])

  const wrongLetters = guessedLetters.filter(letter => !targetWord.includes(letter))

  const isLoser = wrongLetters.length >= BodyParts.length
  const isWinner = targetWord.split('').every(letter => guessedLetters.includes(letter))

  const addGuessedLetter = useCallback((letter: string) => {
    if (guessedLetters.includes(letter)) return

    setGuessedLetters(oldLetters => [...oldLetters, letter])
  }, [guessedLetters])

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key

      if (!key.match(/^[a-z]$/)) return
      if (isWinner || isLoser) return

      e.preventDefault()
      addGuessedLetter(key)
    }

    document.addEventListener('keypress', handler)

    return () => {
      document.removeEventListener('keypress', handler)
    }
  }, [guessedLetters])

  return (
    <div style={{
      maxWidth: '800px',
      display: 'flex',
      flexDirection: 'column',
      gap: '2rem',
      margin: '0 auto',
      alignItems: 'center'
    }}>
      <div style={{
        fontSize: '2rem',
        textAlign: 'center'
      }}>
        {isWinner && 'Winner'}
        {isLoser && 'Loser'}
      </div>
      <HangmanDrawing numberGuesses={wrongLetters.length} />
      <HangmanWord reveal={isLoser} guessedLetters={guessedLetters} targetWord={targetWord} />
      <div style={{ alignSelf: 'stretch' }}>
        <Keyboard
          disabled={isWinner || isLoser}
          goodLetters={guessedLetters.filter(letter => targetWord.includes(letter))}
          badLetters={guessedLetters.filter(letter => !targetWord.includes(letter))}
          addGuessedLetter={addGuessedLetter}
        />
      </div>
    </div>
  )
}

export default App
