import { useState } from 'react';
import { AuthFormProps } from '.';

export const useAuthForm = ({
	onSubmit,
	credentialsInvalid,
}: AuthFormProps) => {
	const [enteredEmail, setEnteredEmail] = useState('');
	const [enteredConfirmEmail, setEnteredConfirmEmail] = useState('');
	const [enteredPassword, setEnteredPassword] = useState('');
	const [enteredConfirmPassword, setEnteredConfirmPassword] = useState('');

	const {
		email: emailIsInvalid,
		confirmEmail: emailsDontMatch,
		password: passwordIsInvalid,
		confirmPassword: passwordsDontMatch,
	} = credentialsInvalid;

	const updateInputValueHandler = (
		inputType: 'email' | 'confirmEmail' | 'password' | 'confirmPassword',
		enteredValue: string
	) => {
		switch (inputType) {
			case 'email':
				setEnteredEmail(enteredValue);
				break;
			case 'confirmEmail':
				setEnteredConfirmEmail(enteredValue);
				break;
			case 'password':
				setEnteredPassword(enteredValue);
				break;
			case 'confirmPassword':
				setEnteredConfirmPassword(enteredValue);
				break;
		}
	};

	const submitHandler = () => {
		onSubmit({
			email: enteredEmail,
			confirmEmail: enteredConfirmEmail,
			password: enteredPassword,
			confirmPassword: enteredConfirmPassword,
		});
	};

	return {
		emailIsInvalid,
		emailsDontMatch,
		passwordIsInvalid,
		passwordsDontMatch,
		updateInputValueHandler,
		submitHandler,
		enteredEmail,
		enteredConfirmEmail,
		enteredPassword,
		enteredConfirmPassword,
	};
};
