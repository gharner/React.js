import React, { ReactNode, useState } from 'react';
interface OnboardingFlowChildProps {
	children: ReactNode[];
	onFinish: any;
}

const OnboardingFlowChild: React.FC<OnboardingFlowChildProps> = ({ children, onFinish }) => {
	const [onboardingData, setOnboardingData] = useState({});
	const [currentIndex, setCurrentIndex] = useState(0);

	const goToNext = (stepData: any) => {
		const nextIndex = currentIndex + 1;
		const updatedData = { ...onboardingData, ...stepData };

		console.log(updatedData);

		if (nextIndex < children.length) {
			setCurrentIndex(nextIndex);
		} else {
			onFinish(updatedData);
		}

		setOnboardingData(updatedData);
	};

	const currentChild = React.Children.toArray(children)[currentIndex];

	if (React.isValidElement(currentChild)) {
		return React.cloneElement(currentChild as React.ReactElement<any>, { goToNext });
	}
	return null;
};

export default OnboardingFlowChild;
