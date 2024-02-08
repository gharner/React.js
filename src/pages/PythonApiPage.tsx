import { useEffect, useState } from 'react';

const PythonApiPage = () => {
	const [data, setData] = useState<null>(null);
	const [error, setError] = useState<null>(null);
	const [loading, setLoading] = useState<boolean>(false);

	useEffect(() => {
		setLoading(true);
		fetch('https://gregharner-iuyjkyshea-uc.a.run.app/')
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
			<h1>Python API Routes</h1>
			<pre>{JSON.stringify(data, null, 2)}</pre>
		</>
	);
};

export default PythonApiPage;
