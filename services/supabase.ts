import 'react-native-url-polyfill/auto';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.EXPO_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.EXPO_PUBLIC_ANON_KEY;

export const supabase = createClient(supabaseUrl!, supabaseAnonKey!, {
	auth: {
		storage: AsyncStorage,
		autoRefreshToken: true,
		persistSession: true,
		detectSessionInUrl: false,
	},
});

export const signUp = (email: string, password: string) => {
	return supabase.auth.signUp({
		email: email,
		password: password,
	});
};

export const signIn = (email: string, password: string) => {
	return supabase.auth.signInWithPassword({
		email: email,
		password: password,
	});
};

export const signOut = () => {
	return supabase.auth.signOut();
};
