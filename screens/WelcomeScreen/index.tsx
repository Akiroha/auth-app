import { Text, View } from 'react-native';
import styles from './styles';

export default () => {
	return (
		<View style={styles.rootContainer}>
			<Text style={styles.title}>Welcome!</Text>
			<Text>You authenticated successfully!</Text>
		</View>
	);
};
