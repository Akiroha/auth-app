export interface AuthFormCredentialsType {
	email: string;
	password: string;
	confirmPassword: string;
	confirmEmail: string;
}

export interface AuthContentCredentialsInvalidType {
	email: boolean;
	confirmEmail: boolean;
	password: boolean;
	confirmPassword: boolean;
}
