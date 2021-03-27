import AsyncStorage from '@react-native-community/async-storage';

export class User {
    async getUser() {
        try {
            const user = await AsyncStorage.getItem('user');
            return Promise.resolve(JSON.parse(user));
        }
        catch (err) {
            console.log('user not found in StoreUser', error);
            return Promise.reject(err);
        }
    }
    async setUser(user) {
        try {
            await AsyncStorage.setItem('user', user);
            // console.log('User Saved:', user);
        } catch (err) {
            console.log('Saving User Error:', err);
        }
    }
    async getSession() {
        try {
            const session = await AsyncStorage.getItem('session');
            return Promise.resolve(JSON.parse(session));
        }
        catch (err) {
            console.log('session not found in StoreUser', error);
            return Promise.reject(err);
        }
    }
    async setSession(session) {
        try {
            await AsyncStorage.setItem('session', session);
            // console.log('Session Saved:', session);
        } catch (err) {
            console.log('Saving User Error:', err);
        }
    }
    async signOut() {
        try {
            await AsyncStorage.removeItem('user');
            await AsyncStorage.removeItem('session');
            // console.log('User logged out');
        } catch (err) {
            // console.log('Loggout Error:', err);
        }
    }
}