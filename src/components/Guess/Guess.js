import React from 'react'
import { checkGuess } from '../../game-helpers'

function Guess({ guess, answer }) {
	const guessCheck = checkGuess(guess, answer)

	return (
		<>
			<p class="guess">
				{Array.from({ length: 5 }).map((_, index) => (
					<span class={`cell ${guessCheck?.[index]?.status || ''}`} key={index}>
						{guess[index]?.toUpperCase() || ''}
					</span>
				))}
			</p>
		</>
	)
}

export default Guess
