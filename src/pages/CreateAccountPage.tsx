import { useState } from 'react';
import { Button } from 'primereact/button';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

const CreateAccountPage = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirm, setConfirmPassword] = useState('');
	const [error, setError] = useState('');

	const navigate = useNavigate();

	const createAccount = async () => {
		try {
			if (password !== confirm) {
				setError('Password and confirm password do not match');
				return;
			}

			await createUserWithEmailAndPassword(getAuth(), email, password);
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
				<h1 className='flex align-items-center justify-content-center'>Create Account</h1>
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
				<input
					className='flex align-items-center justify-content-center'
					id='confirm'
					type='password'
					placeholder='confirm Password'
					value={confirm}
					onChange={e => setConfirmPassword(e.target.value)}
				/>
				<Button
					className='flex align-items-center justify-content-center'
					id='create'
					label='Create Account'
					onClick={createAccount}></Button>
				<Link
					className='flex align-items-center justify-content-center'
					to='/signin'>
					Sign In
				</Link>
			</div>
		</>
	);
};

export default CreateAccountPage;
