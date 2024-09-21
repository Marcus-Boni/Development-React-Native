import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY = '@items';

export const saveItems = async (items: any[]) => {
  try {
    const jsonValue = JSON.stringify(items);
    await AsyncStorage.setItem(STORAGE_KEY, jsonValue);
  } catch (e) {
    console.error('Failed to save items to storage:', e);
  }
};

export const getItems = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem(STORAGE_KEY);
    return jsonValue != null ? JSON.parse(jsonValue) : [];
  } catch (e) {
    console.error('Failed to fetch items from storage:', e);
    return [];
  }
};

export const clearItems = async () => {
  try {
    await AsyncStorage.removeItem(STORAGE_KEY);
  } catch (e) {
    console.error('Failed to clear items from storage:', e);
  }
};
