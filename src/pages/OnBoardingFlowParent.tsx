import OnboardingFlowChild from './OnBoardingFlowChild';

interface StepProps {
	goToNext: any;
}

const Step1: React.FC<StepProps> = ({ goToNext }) => (
	<>
		<h1>Step 1</h1>
		<button onClick={() => goToNext({ name: 'Greg Harner' })}>Go To Next</button>
	</>
);

const Step2: React.FC<StepProps> = ({ goToNext }) => (
	<>
		<h1>Step 2</h1>
		<button onClick={() => goToNext({ age: 57 })}>Go To Next</button>
	</>
);

const Step3: React.FC<StepProps> = ({ goToNext }) => (
	<>
		<h1>Step 3</h1>
		<button onClick={() => goToNext({ hair: 'Gray' })}>Go To Next</button>
	</>
);

const OnboardingFlowParent = () => {
	const goToNext = (d: any) => {};

	return (
		<>
			<OnboardingFlowChild onFinish={(data: any) => console.log(data)}>
				<Step1 goToNext={goToNext} />
				<Step2 goToNext={goToNext} />
				<Step3 goToNext={goToNext} />
			</OnboardingFlowChild>
		</>
	);
};

export default OnboardingFlowParent;
