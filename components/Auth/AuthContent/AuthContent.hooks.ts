import { useState } from 'react';
import { Alert } from 'react-native';
import { AuthFormCredentialsType } from '../../../types';
import { Props } from '.';
import { useNavigation } from '@react-navigation/native';

export const useAuthForm = ({ isLogin, onAuthenticate }: Props) => {
	const navigation = useNavigation();

	const [credentialsInvalid, setCredentialsInvalid] = useState({
		email: false,
		password: false,
		confirmEmail: false,
		confirmPassword: false,
	});

	const switchAuthModeHandler = () => {
		if (isLogin) {
			// @ts-ignore
			navigation.replace('Signup');
		} else {
			// @ts-ignore
			navigation.replace('Login');
		}
	};

	const submitHandler = (credentials: AuthFormCredentialsType) => {
		let { email, confirmEmail, password, confirmPassword } = credentials;

		email = email.trim();
		password = password.trim();

		const emailIsValid = email.includes('@');
		const passwordIsValid = password.length > 6;
		const emailsAreEqual = email === confirmEmail;
		const passwordsAreEqual = password === confirmPassword;

		if (
			!emailIsValid ||
			!passwordIsValid ||
			(!isLogin && (!emailsAreEqual || !passwordsAreEqual))
		) {
			Alert.alert('Invalid input', 'Please check your entered credentials.');
			setCredentialsInvalid({
				email: !emailIsValid,
				confirmEmail: !emailIsValid || !emailsAreEqual,
				password: !passwordIsValid,
				confirmPassword: !passwordIsValid || !passwordsAreEqual,
			});
			return;
		}

		if (onAuthenticate) {
			onAuthenticate(email, password);
		}
	};

	return {
		switchAuthModeHandler,
		submitHandler,
		credentialsInvalid,
	};
};
