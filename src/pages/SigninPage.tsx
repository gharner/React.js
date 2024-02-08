import { useState } from 'react';
import { Button } from 'primereact/button';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

const SigninPage = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');

	const navigate = useNavigate();

	const signIn = async () => {
		try {
			await signInWithEmailAndPassword(getAuth(), email, password);
			navigate('/');
		} catch (error) {
			if (error instanceof Error) {
				setError(error.message);
			} else {
				setError(`An unexpected error occurred: ${JSON.stringify(error)}`);
			}
		}
	};

	return (
		<>
			<div className='flex flex-column justify-content-center gap-1'>
				<h1 className='flex align-items-center justify-content-center'>Sign In</h1>
				{error && <p>{error}</p>}
				<input
					className='flex align-items-center justify-content-center'
					id='email'
					type='text'
					placeholder='Email Address'
					value={email}
					onChange={e => setEmail(e.target.value)}
				/>
				<input
					className='flex align-items-center justify-content-center'
					id='password'
					type='password'
					placeholder='Password'
					value={password}
					onChange={e => setPassword(e.target.value)}
				/>
				<Button
					className='flex align-items-center justify-content-center'
					id='signin'
					label='Sign In'
					onClick={signIn}></Button>
				<Link
					className='flex align-items-center justify-content-center'
					to='/create'>
					Create Account
				</Link>
			</div>
		</>
	);
};

export default SigninPage;
