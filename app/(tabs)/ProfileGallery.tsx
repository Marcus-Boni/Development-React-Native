import React, { useState } from 'react';
import { View, Button, Image, StyleSheet } from 'react-native';
import { pickImage, takePhoto, uploadImageToFirebase } from '../../utils/uploadImage';
import { getAuth, updateProfile } from 'firebase/auth';
import { ActivityIndicator } from 'react-native-paper';

const ProfileGallery: React.FC = () => {
  const [imageUri, setImageUri] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const auth = getAuth();
  const user = auth.currentUser;

  const handlePickImage = async () => {
    const pickedImageUri = await pickImage();
    if (pickedImageUri) {
      setImageUri(pickedImageUri);
    }
  };

  const handleTakePhoto = async () => {
    const photoUri = await takePhoto();
    if (photoUri) {
      setImageUri(photoUri);
    }
  };

  const handleUploadImage = async () => {
    if (!user || !imageUri) return;

    setLoading(true);
    const downloadURL = await uploadImageToFirebase(imageUri, user.uid);

    if (downloadURL) {
      await updateProfile(user, {
        photoURL: downloadURL,
      });
      alert("Imagem de perfil atualizada com sucesso!");
    } else {
      alert("Erro ao fazer upload da imagem.");
    }
    setLoading(false);
  };

  return (
    <View style={styles.container}>
      <Button title="Escolher Imagem" onPress={handlePickImage} />
      <Button title="Tirar Foto" onPress={handleTakePhoto} />
      {imageUri && <Image source={{ uri: imageUri }} style={styles.image} />}
      <Button title="Salvar Imagem" onPress={handleUploadImage} disabled={loading} />
      {loading && <ActivityIndicator animating={true} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginVertical: 20,
  },
});

export default ProfileGallery;
