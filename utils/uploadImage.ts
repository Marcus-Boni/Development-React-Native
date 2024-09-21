import * as ImagePicker from 'expo-image-picker';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';

export const pickImage = async (): Promise<string | null> => {
  let permissionResult =
    await ImagePicker.requestMediaLibraryPermissionsAsync();
  if (permissionResult.granted === false) {
    alert('Permissão para acessar a galeria é necessária!');
    return null;
  }

  let pickerResult = await ImagePicker.launchImageLibraryAsync({
    allowsEditing: true,
    aspect: [4, 3],
    quality: 1
  });

  if (pickerResult.canceled) {
    return null;
  }

  return pickerResult.assets[0].uri;
};

export const takePhoto = async (): Promise<string | null> => {
  let permissionResult = await ImagePicker.requestCameraPermissionsAsync();
  if (permissionResult.granted === false) {
    alert('Permissão para usar a câmera é necessária!');
    return null;
  }

  let pickerResult = await ImagePicker.launchCameraAsync({
    allowsEditing: true,
    aspect: [4, 3],
    quality: 1
  });

  if (pickerResult.canceled) {
    return null;
  }

  return pickerResult.assets[0].uri;
};

export const uploadImageToFirebase = async (
  uri: string,
  userId: string
): Promise<string | null> => {
  try {
    const response = await fetch(uri);
    const blob = await response.blob();

    const storage = getStorage();
    const storageRef = ref(storage, `profile_pictures/${userId}`);

    await uploadBytes(storageRef, blob);
    const downloadURL = await getDownloadURL(storageRef);
    return downloadURL;
  } catch (error) {
    console.error('Erro ao fazer upload da imagem:', error);
    return null;
  }
};
