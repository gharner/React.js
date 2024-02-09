import ContainerComponentLoader from './ContainerComponentLoader';
import ContainerComponentChild from './ContainerComponentChild';

const ContainerComponentParent = () => {
	return (
		<>
			<ContainerComponentLoader>
				<ContainerComponentChild />
			</ContainerComponentLoader>
		</>
	);
};

export default ContainerComponentParent;
