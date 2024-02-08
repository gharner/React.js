import { useState, useEffect } from 'react';
import { User, getAuth, onAuthStateChanged } from 'firebase/auth';

const UseUser = () => {
	const [user, setUser] = useState<User | null>(null);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(getAuth(), user => {
			setUser(user);
			setIsLoading(false);
		});

		return unsubscribe;
	}, []);

	return { user, isLoading };
};

export default UseUser;
