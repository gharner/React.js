import { useState } from 'react';

const ModalChildPage: React.FC<any> = ({ children }) => {
	const [shouldShow, setShouldShow] = useState(false);

	return (
		<div id='modal'>
			<button onClick={() => setShouldShow(true)}>Show Modal</button>

			{shouldShow && (
				<div
					className='modal_background'
					onClick={() => setShouldShow(false)}>
					<div
						className='modal_body'
						onClick={e => e.stopPropagation()}>
						<button onClick={() => setShouldShow(false)}>Hide Modal</button>
						{children}
					</div>
				</div>
			)}
		</div>
	);
};

export default ModalChildPage;
