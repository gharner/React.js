// MenuBar.tsx
import { getAuth, signOut } from 'firebase/auth';
import { Button } from 'primereact/button';
import { Menubar } from 'primereact/menubar';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import UseUser from '../hooks/UseUser';
import MenuBarItems from '../types/MenuBarItems';

import { MenuItem } from '../types/MenuBarItems';

const MenuBar: React.FC = () => {
	const navigate = useNavigate();
	const user = UseUser();

	const createTemplate = (item: MenuItem) => (
		<Button
			label={item.label}
			onClick={() => item.to && navigate(item.to)}
			icon={item.icon}
		/>
	);

	const processMenuItems = (items: MenuItem[]): MenuItem[] => {
		return items.map(item => {
			const newItem = { ...item, template: () => createTemplate(item) };
			if (item.items) {
				newItem.items = processMenuItems(item.items);
			}
			return newItem;
		});
	};

	const itemsWithButtons = processMenuItems(MenuBarItems);

	const handleAuthState = async () => {
		const auth = getAuth();
		if (user) {
			try {
				await signOut(auth);
				navigate('/signin');
			} catch (error) {
				console.error('Sign out failed', error);
			}
		} else {
			navigate('/signin');
		}
	};

	return (
		<>
			<Menubar
				key={user ? 'user' : 'guest'}
				model={itemsWithButtons}
				className='bg-blue-600 p-3 text-white'
				end={
					user.user?.uid ? (
						<Button
							label='Sign Out'
							onClick={handleAuthState}></Button>
					) : (
						<Button
							label='Sign In'
							onClick={handleAuthState}></Button>
					)
				}></Menubar>
		</>
	);
};

export default MenuBar;
