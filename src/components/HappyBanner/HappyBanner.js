import React from 'react'

function HappyBanner({ guessCount }) {
	return (
		<div class="happy banner">
			<p>
				<strong>Congratulations!</strong> Got it in {''}
				<strong>
					{guessCount} {guessCount === 1 ? 'guess' : 'guesses'}
				</strong>
				.
			</p>
		</div>
	)
}

export default HappyBanner
