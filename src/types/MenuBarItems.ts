export interface MenuItem {
	label: string;
	icon?: string;
	to?: string;
	items?: MenuItem[];
}

const MenuBarItems: MenuItem[] = [
	{
		label: 'Home',
		icon: 'pi pi-fw pi-home',
		to: '/',
	},
	{
		label: 'Examples',
		icon: 'pi pi-fw pi-wrench',
		items: [
			{
				label: 'State Management',
				to: '/state',
			},
			{
				label: 'Layout Grid',
				to: '/grid',
			},
			{
				label: 'Layout list',
				to: '/list',
			},
			{
				label: 'Layout Modal',
				to: '/modal',
			},
			{
				label: 'Component Model',
				to: '/component',
			},
			{
				label: 'Onboarding',
				to: '/onboarding',
			},
		],
	},
	{
		label: 'Python',
		icon: 'pi pi-fw pi-clone',
		items: [
			{
				label: 'API',
				to: '/api',
			},
			{
				label: 'Cities From Firestore',
				to: '/cities',
			},
			{
				label: 'Users From JSON',
				to: '/users',
			},
			{
				label: 'Products From JSON',
				to: '/products',
			},
			{
				label: 'Space Station',
				to: '/station',
			},
		],
	},
	{
		label: 'Node.js',
		icon: 'pi pi-fw pi-clone',
		items: [
			{
				label: 'Node.js API',
				to: '/node',
			},
			{
				label: 'Space Station',
				to: '/node_station',
			},
		],
	},
];

export default MenuBarItems;
