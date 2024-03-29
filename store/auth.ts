import { create } from 'zustand';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface AuthStore {
	access_token: string;
	is_authenticated: boolean;
	login: (access_token: string) => void;
	logout: () => void;
}

export const useAuthStore = create<AuthStore>((set) => ({
	access_token: '',
	is_authenticated: false,
	login: (access_token: string) => {
		set({ is_authenticated: true, access_token });
		AsyncStorage.setItem('access_token', access_token);
		// set((state) => ({ ...state, is_authenticated: true, access_token })); another way to do it
	},
	logout: () => {
		set({ is_authenticated: false, access_token: '' });
		AsyncStorage.removeItem('access_token');
	},
}));

// import { useAuthStore } from './store/auth';
// const { login, logout } = useAuthStore();
// const isAuthenticated = useAuthStore((state) => state.is_authenticated);

// how to access outside of component - can be used in hooks, util functions, useEffect etc.
// import { useAuthStore } from './store/auth';
// const logAccessToken = () => {
//   return useAuthStore((state) => state.access_token);
// }
// const setAccessToken = (access_token: string) => {
// 	useAuthStore.setState({ access_token, is_authenticated: true });
// };
