import SplitScreenChildPage from './SplitScreenChildPage';

const SplitScreenParentPage = () => {
	const LeftHandComponent = () => {
		return <h1 style={{ background: 'green' }}>Left</h1>;
	};

	const RightHandComponent = () => {
		return <h1 style={{ background: 'red' }}>Right</h1>;
	};

	return (
		<>
			<SplitScreenChildPage
				leftCSS='col-8'
				rightCSS='col-4'>
				<LeftHandComponent />
				<RightHandComponent />
			</SplitScreenChildPage>
		</>
	);
};

export default SplitScreenParentPage;
