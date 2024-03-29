import { View } from 'react-native';
import styles from './styles';
import Input from '../Input';
import {
	AuthContentCredentialsInvalidType,
	AuthFormCredentialsType,
} from '../../../types';
import { useAuthForm } from './AuthForm.hooks';
import Button from '../../ui/Button';

export interface AuthFormProps {
	isLogin: boolean;
	onSubmit: (credentials: AuthFormCredentialsType) => void;
	credentialsInvalid: AuthContentCredentialsInvalidType;
}

export default (props: AuthFormProps) => {
	const { isLogin } = props;

	const {
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
	} = useAuthForm(props);

	return (
		<View style={styles.form}>
			<View>
				<Input
					label="Email Address"
					onUpdateValue={updateInputValueHandler.bind(this, 'email')}
					value={enteredEmail}
					keyboardType="email-address"
					isInvalid={emailIsInvalid}
				/>
				{!isLogin && (
					<Input
						label="Confirm Email Address"
						onUpdateValue={updateInputValueHandler.bind(this, 'confirmEmail')}
						value={enteredConfirmEmail}
						keyboardType="email-address"
						isInvalid={emailsDontMatch}
					/>
				)}
				<Input
					label="Password"
					onUpdateValue={updateInputValueHandler.bind(this, 'password')}
					secure
					value={enteredPassword}
					isInvalid={passwordIsInvalid}
				/>
				{!isLogin && (
					<Input
						label="Confirm Password"
						onUpdateValue={updateInputValueHandler.bind(
							this,
							'confirmPassword'
						)}
						secure
						value={enteredConfirmPassword}
						isInvalid={passwordsDontMatch}
					/>
				)}
				<View style={styles.buttons}>
					<Button onPress={submitHandler}>
						{isLogin ? 'Log In' : 'Sign Up'}
					</Button>
				</View>
			</View>
		</View>
	);
};
