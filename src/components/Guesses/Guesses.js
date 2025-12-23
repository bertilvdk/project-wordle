import React from 'react'
import { NUM_OF_GUESSES_ALLOWED } from '../../constants'
import Guess from '../Guess/Guess'

function Guesses({ guesses, answer }) {
	return (
		<div class="guess-results">
			{Array.from({ length: NUM_OF_GUESSES_ALLOWED }).map((_, index) => {
				const guess = guesses[index] || ''
				return <Guess key={index} guess={guess} answer={answer} />
			})}
		</div>
	)
}

export default Guesses
