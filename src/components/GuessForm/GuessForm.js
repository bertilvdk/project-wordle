import React from 'react'

function GuessForm({ onChange }) {
	const [inputValue, setInputValue] = React.useState('')

	return (
		<form
			class="guess-input-wrapper"
			onSubmit={(event) => {
				event.preventDefault()

				onChange(inputValue)
				setInputValue('')
			}}
		>
			<label htmlFor="guess-input">Enter guess:</label>
			<input
				id="guess-input"
				type="text"
				minLength={5}
				maxLength={5}
				value={inputValue}
				onChange={(e) => setInputValue(e.target.value)}
			/>
		</form>
	)
}

export default GuessForm
