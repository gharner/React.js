import React from 'react';

interface SplitScreenProps {
	children: any;
	leftCSS: string;
	rightCSS: string;
}

const SplitScreenChildPage: React.FC<SplitScreenProps> = ({ children, leftCSS, rightCSS }) => {
	const [left, right] = children;

	return (
		<>
			<div className={'grid grid-nogutter'}>
				<div className={leftCSS}>{left}</div>
				<div className={rightCSS}>{right}</div>
			</div>
		</>
	);
};

export default SplitScreenChildPage;
