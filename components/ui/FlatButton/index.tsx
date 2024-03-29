import { Pressable, Text, View } from 'react-native';
import styles from './styles';

interface Props {
	onPress: () => void;
	children: Text['props']['children'];
}

export default ({ onPress, children }: Props) => {
	return (
		<Pressable
			style={({ pressed }) => [styles.button, pressed && styles.pressed]}
			onPress={onPress}
		>
			<View>
				<Text style={styles.buttonText}>{children}</Text>
			</View>
		</Pressable>
	);
};
