import React from 'react';
import { ListProps } from '../types/List';

const ListChildPage: React.FC<ListProps> = ({ items, resourceName, itemsComponent: ItemsComponent }) => {
	return (
		<>
			{items.map((item: any, i: number) => (
				<ItemsComponent
					key={i}
					{...{ [resourceName]: item }}
				/>
			))}
		</>
	);
};

export default ListChildPage;
