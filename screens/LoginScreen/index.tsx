import AuthContent from '../../components/Auth/AuthContent';
import LoadingOverlay from '../../components/ui/LoadingOverlay';
import { useLoginScreen } from './LoginScreen.hooks';

export default () => {
	const { isAuthenticating, loginHandler } = useLoginScreen();

	if (isAuthenticating) {
		return <LoadingOverlay message="Logging in!" />;
	}

	return <AuthContent isLogin onAuthenticate={loginHandler} />;
};
