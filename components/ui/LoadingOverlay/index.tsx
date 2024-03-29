import { ActivityIndicator, Text, TextProps, View } from 'react-native';
import styles from './styles';

interface Props {
	message: TextProps['children'];
}

export default ({ message }: Props) => {
	return (
		<View style={styles.rootContainer}>
			<Text style={styles.message}>{message}</Text>
			<ActivityIndicator size="large" />
		</View>
	);
};
