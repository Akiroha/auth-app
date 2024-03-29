# Expense App

A React application which deals with authentication. The backend auth API is Supabase and technologies like zustand and react-native-async-storage are used to persist the logged in state

## Features

- Built with Expo and Expo Icons for streamlined development.
- Utilizes TypeScript for improved code maintainability and type safety.
- Authentication is managed in a supabase database
- Implements stack navigation with @react-navigation.
- Manages app-wide state using Zustand

## Screens

### Login Screen

- Allows user to login via their email and password
- Once authenticated, the app-wide state is updated as well as the AsyncStorage

### Signup Screen

- Allows user to signup by entering & confirming their email & password
- Once authenticated, the app-wide state is updated as well as the AsyncStorage

### Welcome Screen

- A simple screen with centered text which allows the user to know whether or not they are authenticated
- Part of a separate Stack navigation which has a log out button as the header right component

## Technologies Used

- React Native
- Expo
- TypeScript
- @react-navigation
- Zustand
- Supabase

## Author

[Agbai Iroha](https://github.com/Akiroha)
