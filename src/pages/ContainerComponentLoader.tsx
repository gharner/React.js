import React, { useEffect, useState } from 'react';
import { Person } from '../types/People';

interface FetchedData {
	Users: Person[];
}
const ContainerComponentLoader: React.FC<any> = ({ children }) => {
	const [data, setData] = useState<FetchedData | null>(null);
	const [error, setError] = useState<null>(null);
	const [loading, setLoading] = useState<boolean>(false);

	useEffect(() => {
		setLoading(true);
		fetch('https://gregharner-iuyjkyshea-uc.a.run.app/v1/users')
			.then(response => response.json())
			.then((data: FetchedData) => setData(data))
			.catch(error => setError(error))
			.finally(() => setLoading(false));
	}, []);

	if (loading) return <h1 className='blink'>Loading...</h1>;
	if (error) return <pre>{JSON.stringify(error)}</pre>;
	if (!data) return null;

	return (
		<>
			{React.Children.map(children, child => {
				if (React.isValidElement(child)) {
					const firstUser = data.Users[0];
					return React.cloneElement(child as React.ReactElement<any>, {
						person: {
							firstUser,
						},
					});
				}
				return child;
			})}
		</>
	);
};

export default ContainerComponentLoader;
