import { useEffect, useState } from 'react';

const NodePage = () => {
	const [data, setData] = useState(null);
	const [error, setError] = useState<null>(null);
	const [loading, setLoading] = useState<boolean>(false);

	useEffect(() => {
		setLoading(true);
		fetch('https://us-central1-mas-development-53ac7.cloudfunctions.net/sandbox/sandbox')
			.then(response => response.json())
			.then(setData)
			.catch(error => setError(error))
			.finally(() => setLoading(false));
	}, []);

	if (loading) return <h1 className='blink'>Loading</h1>;
	if (error) return <pre>{JSON.stringify(error)}</pre>;
	if (!data) return null;

	return (
		<>
			<h1>Node.js API Routes</h1>
			<pre>{JSON.stringify(data, null, 2)}</pre>
		</>
	);
};

export default NodePage;
