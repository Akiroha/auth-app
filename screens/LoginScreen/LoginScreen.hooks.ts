import { useState } from 'react';
import { signIn } from '../../services/supabase';
import { Alert } from 'react-native';
import { useAuthStore } from '../../store/auth';

export const useLoginScreen = () => {
	const [isAuthenticating, setIsAuthenticating] = useState(false);
	const { login } = useAuthStore();

	const loginHandler = async (email: string, password: string) => {
		setIsAuthenticating(true);

		const { data, error } = await signIn(email, password);

		if (error) {
			Alert.alert('Authentication failed!', error.message);
		} else if (data) {
			login(data.session.access_token);
		}

		setIsAuthenticating(false);
	};

	return {
		isAuthenticating,
		loginHandler,
	};
};
