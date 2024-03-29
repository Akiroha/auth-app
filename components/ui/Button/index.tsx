import { Pressable, Text, TextProps, View } from 'react-native';
import styles from './styles';

interface Props {
	onPress: () => void;
	children: TextProps['children'];
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
