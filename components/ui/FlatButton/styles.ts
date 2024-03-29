import { StyleSheet } from 'react-native';
import { Colors } from '../../../constants/styles';

export default StyleSheet.create({
	button: {
		paddingVertical: 6,
		paddingHorizontal: 12,
	},
	pressed: {
		opacity: 0.7,
	},
	buttonText: {
		textAlign: 'center',
		color: Colors.primary100,
	},
});
