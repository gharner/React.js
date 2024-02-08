import React from 'react';
import { ProdProps } from '../types/Products';

const ProductsPage: React.FC<ProdProps> = ({ product }) => {
	const { name, description, price, rating } = product;
	return (
		<>
			<p>
				{name} - {description} cost {price} and has a {rating} rating.
			</p>
		</>
	);
};

export default ProductsPage;
