import { useEffect, useState } from 'react';

interface StationData {
	iss_position: {
		latitude: number;
		longitude: number;
	};
}

function SpaceStationPosition({ iss_position }: StationData) {
	return (
		<div>
			<h1>{`Latitude: ${iss_position.latitude}`}</h1>
			<h1>{`Longitude: ${iss_position.longitude}`}</h1>
		</div>
	);
}

const NodeStationPage = () => {
	const [data, setData] = useState<StationData | null>(null);
	const [error, setError] = useState<null>(null);
	const [loading, setLoading] = useState<boolean>(false);

	useEffect(() => {
		setLoading(true);
		fetch('https://us-central1-mas-development-53ac7.cloudfunctions.net/sandbox/v1/station')
			.then(response => response.json())
			.then(setData)
			.catch(error => setError(error))
			.finally(() => setLoading(false));
	}, []);

	if (loading) return <h1 className='blink'>Loading</h1>;
	if (error) return <pre>{JSON.stringify(error)}</pre>;
	if (!data) return null;

	return <SpaceStationPosition iss_position={data.iss_position} />;
};

export default NodeStationPage;
