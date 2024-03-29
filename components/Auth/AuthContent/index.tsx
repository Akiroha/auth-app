import { View } from 'react-native';
import FlatButton from '../../ui/FlatButton';
import AuthForm from '../AuthForm';
import styles from './styles';
import { useAuthForm } from './AuthContent.hooks';

export interface Props {
	isLogin?: boolean;
	onAuthenticate?: (email: string, password: string) => void;
}

export default ({ isLogin = false, onAuthenticate }: Props) => {
	const { credentialsInvalid, submitHandler, switchAuthModeHandler } =
		useAuthForm({ isLogin, onAuthenticate });

	return (
		<View style={styles.authContent}>
			<AuthForm
				isLogin={isLogin}
				onSubmit={submitHandler}
				credentialsInvalid={credentialsInvalid}
			/>
			<View style={styles.buttons}>
				<FlatButton onPress={switchAuthModeHandler}>
					{isLogin ? 'Create a new user' : 'Log in instead'}
				</FlatButton>
			</View>
		</View>
	);
};
