import { Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './styles';

interface Props {
	onPress: () => void;
	icon: any;
	size?: number;
	color?: string;
}

export default ({ onPress, icon, size = 24, color = 'black' }: Props) => {
	return (
		<Pressable
			style={({ pressed }) => [styles.button, pressed && styles.pressed]}
			onPress={onPress}
		>
			<Ionicons name={icon} color={color} size={size} />
		</Pressable>
	);
};
