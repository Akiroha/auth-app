import { useState } from 'react';
import { signUp } from '../../services/supabase';
import { Alert } from 'react-native';
import { useAuthStore } from '../../store/auth';

export const useSignupScreen = () => {
	const [isAuthenticating, setIsAuthenticating] = useState(false);
	const { login } = useAuthStore();

	const signupHandler = async (email: string, password: string) => {
		setIsAuthenticating(true);

		const { data, error } = await signUp(email, password);

		if (error) {
			Alert.alert('Authentication failed!', error.message);
		} else if (data?.session) {
			login(data.session.access_token);
		}

		setIsAuthenticating(false);
	};

	return {
		isAuthenticating,
		signupHandler,
	};
};
