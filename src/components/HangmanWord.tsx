type HangmanWordProps = {
  reveal?: boolean,
  guessedLetters: string[],
  targetWord: string
}

export function HangmanWord({ reveal = false, guessedLetters, targetWord }: HangmanWordProps) {

  console.log(targetWord)

  return (
    <div style={{
      display: 'flex',
      gap: '.25em',
      fontSize: '6rem',
      fontWeight: 'bold',
      textTransform: 'capitalize',
      fontFamily: 'monospace'
    }}>
      {reveal && targetWord.split("").map((character, index) => (
        <span key={index} style={{ borderBottom: '.1em solid black' }}>
          {
            guessedLetters.includes(character) ? (character) : (<div style={{ color: 'rgb(255, 115, 115)' }}>{character}</div>)
          }
        </span>
      ))}
      {!reveal && targetWord.split("").map((character, index) => (
        <span key={index} style={{ borderBottom: '.1em solid black' }}>
          {
            guessedLetters.includes(character) ? (character) : (<div style={{ height: '1em', width: '.5em' }} />)
          }
        </span>
      ))}
    </div>
  )
}