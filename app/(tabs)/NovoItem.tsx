import React, { useEffect, useState } from 'react';
import {
  View,
  TextInput,
  Button,
  Text,
  StyleSheet,
  FlatList,
  Image,
  Alert
} from 'react-native';
import {
  getDatabase,
  ref,
  push,
  set,
  remove,
  onValue
} from 'firebase/database';
import {
  getStorage,
  ref as storageRef,
  uploadBytes,
  getDownloadURL
} from 'firebase/storage';
import * as ImagePicker from 'expo-image-picker';
import { saveItems, getItems } from '../../storage/storage';
import ConfirmDialog from '../../components/ConfirmDialog/ConfirmDialog';

interface Item {
  id: string;
  name: string;
  images: string[];
}

const ItemListScreen: React.FC = () => {
  const [itemName, setItemName] = useState('');
  const [items, setItems] = useState<Item[]>([]);
  const [editItemId, setEditItemId] = useState<string | null>(null);
  const [feedback, setFeedback] = useState('');
  const [dialogVisible, setDialogVisible] = useState(false);
  const [itemToDelete, setItemToDelete] = useState<string | null>(null);
  const [selectedImages, setSelectedImages] = useState<string[]>([]);
  const db = getDatabase();
  const itemsRef = ref(db, 'items');
  const storage = getStorage();

  useEffect(() => {
    const loadItems = async () => {
      const localItems = await getItems();
      setItems(localItems);

      const unsubscribe = onValue(itemsRef, (snapshot) => {
        const data = snapshot.val();
        const itemList: Item[] = [];

        if (data) {
          Object.keys(data).forEach((key) => {
            itemList.push({
              id: key,
              name: data[key].name,
              images: data[key].images || []
            });
          });
        }

        setItems(itemList);
        saveItems(itemList); 
      });

      return () => unsubscribe();
    };

    loadItems();
  }, []);

  const handleAddOrUpdateItem = async () => {
    if (itemName.trim() === '') {
      setFeedback('Nome do item não pode estar vazio.');
      return;
    }

    const imagesURLs: string[] = [];
    for (const uri of selectedImages) {
      const imageName = `images/${Date.now()}_${uri.split('/').pop()}`;
      const imgRef = storageRef(storage, imageName);
      const response = await fetch(uri);
      const blob = await response.blob();
      await uploadBytes(imgRef, blob);
      const url = await getDownloadURL(imgRef);
      imagesURLs.push(url);
    }

    const newItem = { name: itemName, images: imagesURLs };

    if (editItemId) {
      await set(ref(db, `items/${editItemId}`), newItem);
      setFeedback('Item atualizado com sucesso!');
    } else {
      await push(itemsRef, newItem);
      setFeedback('Item adicionado com sucesso!');
    }

    setItemName('');
    setEditItemId(null);
    setSelectedImages([]);
  };

  const handleEditItem = (item: Item) => {
    setItemName(item.name);
    setEditItemId(item.id);
    setSelectedImages(item.images);
  };

  const showDeleteDialog = (id: string) => {
    setItemToDelete(id);
    setDialogVisible(true);
  };

  const handleRemoveItem = async () => {
    if (itemToDelete) {
      await remove(ref(db, `items/${itemToDelete}`));
      setFeedback('Item removido com sucesso!');
      const updatedItems = items.filter((item) => item.id !== itemToDelete);
      setItems(updatedItems);
      saveItems(updatedItems); 
    }
    setDialogVisible(false);
    setItemToDelete(null);
  };

  const handleCancelDelete = () => {
    setDialogVisible(false);
    setItemToDelete(null);
  };

  const handleSelectImages = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsMultipleSelection: true,
      aspect: [4, 3],
      quality: 1
    });

    if (!result.canceled) {
      const uris = result.assets.map((asset) => asset.uri);
      setSelectedImages(uris);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastrar/Editar Item</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome do item"
        value={itemName}
        onChangeText={setItemName}
      />
      <Button title="Selecionar Imagens" onPress={handleSelectImages} />
      <FlatList
        data={selectedImages}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <Image source={{ uri: item }} style={styles.image} />
        )}
      />
      <Button
        title={editItemId ? 'Atualizar Item' : 'Adicionar Item'}
        onPress={handleAddOrUpdateItem}
      />
      {feedback ? <Text style={styles.feedback}>{feedback}</Text> : null}

      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text style={styles.itemText}>{item.name}</Text>
            <View style={styles.buttonContainer}>
              <Button title="Editar" onPress={() => handleEditItem(item)} />
              <Button
                title="Remover"
                onPress={() => showDeleteDialog(item.id)}
                color={'red'}
              />
            </View>
            <FlatList
              data={item.images}
              horizontal
              keyExtractor={(image) => image}
              renderItem={({ item }) => (
                <Image source={{ uri: item }} style={styles.image} />
              )}
            />
          </View>
        )}
      />

      <ConfirmDialog
        visible={dialogVisible}
        onConfirm={handleRemoveItem}
        onCancel={handleCancelDelete}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'flex-start'
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center'
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10
  },
  feedback: {
    marginTop: 10,
    textAlign: 'center'
  },
  itemContainer: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc'
  },
  itemText: {
    fontSize: 18
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 15
  },
  image: {
    width: 100,
    height: 100,
    margin: 5
  }
});

export default ItemListScreen;
