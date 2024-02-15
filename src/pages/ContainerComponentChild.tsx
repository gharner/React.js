import React, { useEffect } from 'react';

const ContainerComponentChild: React.FC<any> = ({ person }) => {
	useEffect(() => {
		console.log('Received person prop:', person);
	}, [person]);

	return (
		<>
			<h3>{person.firstUser.name}</h3>
			<p>Age: {person.firstUser.age} years</p>
			<p>Hair Color: {person.firstUser.hairColor}</p>
			<h3>Hobbies:</h3>
			{
				<ul>
					{person.firstUser.hobbies.map((hobby: string) => (
						<li key={hobby}>{hobby}</li>
					))}
				</ul>
			}
		</>
	);
};

export default ContainerComponentChild;
