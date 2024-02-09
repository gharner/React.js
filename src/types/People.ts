export interface Person {
	name: string;
	age: number;
	hairColor: string;
	hobbies: string[];
}

export interface PersonProps {
	person: Person;
}

export interface UserProps {
	users: Person[];
}

const People: Person[] = [
	{
		name: 'John Doe',
		age: 54,
		hairColor: 'brown',
		hobbies: ['swimming', 'bicycling', 'video games'],
	},
	{
		name: 'Brenda Smith',
		age: 33,
		hairColor: 'black',
		hobbies: ['golf', 'mathematics'],
	},
	{
		name: 'Jane Garcia',
		age: 27,
		hairColor: 'blonde',
		hobbies: ['biology', 'medicine', 'gymnastics'],
	},
];

export default People;
