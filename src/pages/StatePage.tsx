import React, { useState } from 'react';
import state from '../assets/state.png';

// Define a more specific type for the hook return type
type UseInputReturnType<T> = [{ value: T; onChange: (e: { target: { value: T } }) => void }, () => void];

// Make the hook generic to handle different input types
function useInput<T>(initialValue: T): UseInputReturnType<T> {
	const [value, setValue] = useState<T>(initialValue);
	return [{ value, onChange: (e: { target: { value: T } }) => setValue(e.target.value) }, () => setValue(initialValue)];
}

const StatePage = () => {
	// Separate states for text and color input
	const [colorProps, resetColor] = useInput<string>('');
	const [textInputProps, resetText] = useInput<string>('');
	const [imageWidth, setImageWidth] = useState('50%');

	const toggleImageWidth = () => {
		setImageWidth(imageWidth === '50%' ? '100%' : '50%');
	};

	const submit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		alert(`The selected color is ${colorProps.value} and the text input is ${textInputProps.value}`);
		resetColor();
		resetText();
	};

	return (
		<div id='colorForm'>
			<h1>State Management With Custom Hook</h1>
			<h3>Click to Enlarge</h3>
			<img
				style={{ width: imageWidth, cursor: 'pointer' }}
				src={state}
				alt='State'
				onClick={toggleImageWidth}
			/>
			<form onSubmit={submit}>
				<input
					{...textInputProps}
					type='text'
					placeholder='Enter text here'
				/>
				<input
					{...colorProps}
					type='color'
				/>
				<button type='submit'>Add</button>
			</form>
		</div>
	);
};

export default StatePage;
