import AuthContent from '../../components/Auth/AuthContent';
import LoadingOverlay from '../../components/ui/LoadingOverlay';
import { useSignupScreen } from './SignupScreen.hooks';

export default () => {
	const { signupHandler, isAuthenticating } = useSignupScreen();

	if (isAuthenticating) {
		return <LoadingOverlay message="Creating user!" />;
	}

	return <AuthContent onAuthenticate={signupHandler} />;
};
