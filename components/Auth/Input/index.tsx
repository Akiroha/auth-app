import { View, Text, TextInput } from 'react-native';

import styles from './styles';

interface InputProps {
	label: string;
	value: string;
	onUpdateValue: (text: string) => void;
	isInvalid: boolean;
	keyboardType?: any;
	secure?: boolean;
}

export default ({
	label,
	value,
	onUpdateValue,
	isInvalid,
	keyboardType,
	secure,
}: InputProps) => {
	return (
		<View style={styles.inputContainer}>
			<Text style={[styles.label, isInvalid && styles.labelInvalid]}>
				{label}
			</Text>
			<TextInput
				style={[styles.input, isInvalid && styles.inputInvalid]}
				autoCapitalize="none"
				keyboardType={keyboardType}
				secureTextEntry={secure}
				onChangeText={onUpdateValue}
				value={value}
			/>
		</View>
	);
};
