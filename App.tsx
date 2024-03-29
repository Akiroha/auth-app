import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { Alert, AppState } from 'react-native';
import { signOut, supabase } from './services/supabase';

import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import { Colors } from './constants/styles';
import { useAuthStore } from './store/auth';
import IconButton from './components/ui/IconButton';
import { useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as SplashScreen from 'expo-splash-screen';

AppState.addEventListener('change', (state) => {
	if (state === 'active') {
		supabase.auth.startAutoRefresh();
	} else {
		supabase.auth.stopAutoRefresh();
	}
});

const Stack = createNativeStackNavigator();

const UnauthenticatedStack = () => {
	return (
		<Stack.Navigator
			screenOptions={{
				headerStyle: { backgroundColor: Colors.primary500 },
				headerTintColor: 'white',
				contentStyle: { backgroundColor: Colors.primary100 },
			}}
		>
			<Stack.Screen name="Login" component={LoginScreen} />
			<Stack.Screen name="Signup" component={SignupScreen} />
		</Stack.Navigator>
	);
};

const AuthenticatedStack = () => {
	const { logout } = useAuthStore();

	const handleLogout = async () => {
		const { error } = await signOut();

		if (error) {
			Alert.alert('Logout failed!', error.message);
		} else {
			logout();
		}
	};

	return (
		<Stack.Navigator
			screenOptions={{
				headerStyle: { backgroundColor: Colors.primary500 },
				headerTintColor: 'white',
				contentStyle: { backgroundColor: Colors.primary100 },
			}}
		>
			<Stack.Screen
				name="Welcome"
				component={WelcomeScreen}
				options={{
					headerRight: ({ tintColor }) => (
						<IconButton
							icon="exit"
							color={tintColor}
							size={24}
							onPress={handleLogout}
						/>
					),
				}}
			/>
		</Stack.Navigator>
	);
};

const Navigation = () => {
	const isAuthenticated = useAuthStore((state) => state.is_authenticated);

	return (
		<NavigationContainer>
			{isAuthenticated ? <AuthenticatedStack /> : <UnauthenticatedStack />}
		</NavigationContainer>
	);
};

SplashScreen.preventAutoHideAsync();

export default function App() {
	const { login } = useAuthStore();

	useEffect(() => {
		const fetchToken = async () => {
			const storedToken = await AsyncStorage.getItem('access_token');

			if (storedToken) {
				login(storedToken);
			}

			SplashScreen.hideAsync();
		};

		fetchToken();
	}, []);

	return (
		<>
			<StatusBar style="light" />
			<Navigation />
		</>
	);
}
