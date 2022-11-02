import styles from './Keyboard.module.css'

const KEYS = 'abcdefghijklmnopqrstuvwxyz'.split('')

type KeyboardProps = {
  disabled?: boolean
  goodLetters: string[]
  badLetters: string[]
  addGuessedLetter: (letter: string) => void
}

export function Keyboard({ disabled = false, goodLetters, badLetters, addGuessedLetter }: KeyboardProps) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(75px, 1fr)', gap: '.5rem' }}>
      {KEYS.map(key => {

        const isGood = goodLetters.includes(key)
        const isBad = badLetters.includes(key)

        return (
          <button
            onClick={() => addGuessedLetter(key)}
            className={
              `${styles.btn} 
            ${isGood ? styles.good : ''} 
            ${isBad ? styles.bad : ''}`
            }
            disabled={isBad || isGood || disabled}
            key={key}
          >
            {key.toUpperCase()}
          </button>
        )
      })}
    </div>
  )
}