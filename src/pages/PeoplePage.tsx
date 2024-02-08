import React from 'react';
import { PersonProps } from '../types/People';

const PeoplePage: React.FC<PersonProps> = ({ person }) => {
	const { name, age } = person;
	return (
		<>
			<p>
				Name: {name}, Age: {age} years
			</p>
		</>
	);
};

export default PeoplePage;
