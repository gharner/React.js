import ListChildPage from './ListChildPage';
import ModalChildPage from './ModalChildPage';
import Products from '../types/Products';
import ProductsPage from './ProductPage';

const ModalParentPage = () => {
	return (
		<>
			<ModalChildPage>
				<ListChildPage
					items={Products}
					resourceName={'product'}
					itemsComponent={ProductsPage}
				/>
			</ModalChildPage>
		</>
	);
};

export default ModalParentPage;
