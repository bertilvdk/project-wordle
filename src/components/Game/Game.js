import React from 'react'

import { sample } from '../../utils'
import { WORDS } from '../../data'
import GuessForm from '../GuessForm'
import Guesses from '../Guesses'
import { checkGuess } from '../../game-helpers'
import { NUM_OF_GUESSES_ALLOWED } from '../../constants'
import SadBanner from '../SadBanner'
import HappyBanner from '../HappyBanner'

// Pick a random word on every pageload.
const answer = sample(WORDS)

function Game() {
	const [guesses, setGuesses] = React.useState([])

	const won = guesses?.some((guess) => checkGuess(guess, answer)?.every((item) => item.status === 'correct'))
	const lost = guesses.length >= NUM_OF_GUESSES_ALLOWED && !won

	return (
		<>
			<Guesses guesses={guesses} answer={answer} />
			<GuessForm disabled={won || lost} onChange={(newGuess) => setGuesses([...guesses, newGuess])} />
			{won ? <HappyBanner guessCount={guesses.length} /> : null}
			{lost ? <SadBanner answer={answer} /> : null}
		</>
	)
}

export default Game
