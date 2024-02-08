import ListChildPage from './ListChildPage';
import PeoplePage from './PeoplePage';
import ProductsPage from './ProductPage';
import People from '../types/People';
import Products from '../types/Products';

const ListParentPage = () => {
	return (
		<>
			<h1>People</h1>
			<ListChildPage
				items={People}
				resourceName={'person'}
				itemsComponent={PeoplePage}
			/>
			<h1>Products</h1>
			<ListChildPage
				items={Products}
				resourceName={'product'}
				itemsComponent={ProductsPage}
			/>
		</>
	);
};

export default ListParentPage;
