import AsyncStorage from '@react-native-community/async-storage';

export const storeToken = async (token) => {
   try {
      await AsyncStorage.setItem('@token', token)
   } catch (e) {
   }
}

export const getToken = async () => {
   try {
      const value = await AsyncStorage.getItem('@token')
      if (value !== null) {
         return value;
      }
   } catch (e) {
   }
}

export const deleteToken = async () => {
   try {
      await AsyncStorage.removeItem('@token')
   } catch (e) {
      // remove error
   }
   console.log('Token removed.')
}