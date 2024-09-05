import Card from '@/components/Card';
import FABComponent from '@/components/FabComponent';
import IconButton from '@/components/IconButton';
import List from '@/components/List';
import MenuComponent from '@/components/MenuComponent';
import ProgressBar from '@/components/ProgressBar';
import RadioButtonGroup from '@/components/RadioButtonGroup';
import SnackbarComponent from '@/components/SnackbarComponent';
import React, { useState } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { Text, Appbar, Button } from 'react-native-paper';

const items = [
  {
    id: '1',
    title: 'Item 1',
    description: 'Descrição do Item 1',
    onPress: () => console.log('Item 1 Pressed')
  },
  {
    id: '2',
    title: 'Item 2',
    description: 'Descrição do Item 2',
    onPress: () => console.log('Item 2 Pressed')
  },
  {
    id: '3',
    title: 'Item 3',
    description: 'Descrição do Item 3'
  }
];

const options = [
  { label: 'Top 1', value: 'option1' },
  { label: 'Maneiro 2', value: 'option2' },
  { label: 'Legal 3', value: 'option3' }
];

const HomeScreen: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<string>('option1');
  const [progress, setProgress] = useState(0.5);

  const increaseProgress = () => {
    setProgress((prev) => Math.min(prev + 0.1, 1));
  };

  const handleMenuItemPress = (item: string) => {
    Alert.alert(`Você pressionou ${item}`);
  };

  const menuItems = [
    { label: 'Item 1', onPress: () => handleMenuItemPress('Item 1') },
    { label: 'Item 2', onPress: () => handleMenuItemPress('Item 2') },
    { label: 'Item 3', onPress: () => handleMenuItemPress('Item 3') }
  ];

  return (
    <View style={styles.container}>
      <Appbar.Header>
        <Appbar.Content title="Home" />
      </Appbar.Header>

      <View style={styles.content}>
        <Text style={styles.title}>Card: </Text>
        <Card
          title="Título do Card"
          content="Conteúdo do card."
          imageUri="https://via.placeholder.com/400"
        />
        <Card title="Outro Card" content="Conteúdo do card." />
        <Text style={styles.title}>IconButton: </Text>
        <IconButton
          icon="home"
          label="Home"
          onPress={() => console.log('Home Pressed')}
          size={30}
        />
        <Text style={styles.title}>List: </Text>
        <List items={items} />
        <ProgressBar progress={progress} color="#6200ea" label="Progresso" />
        <Button onPress={increaseProgress}>Aumentar Progresso</Button>
        <RadioButtonGroup
          options={options}
          selectedValue={selectedOption}
          onValueChange={setSelectedOption}
        />
        <Text style={styles.title}>Snackbar: </Text>
        <SnackbarComponent message="Este é um Snackbar!" duration={5000} />
        <Text style={styles.title}>FABComponent: </Text>
        <FABComponent icon="plus" label="Adicionar" color="white" />
        <Text style={styles.title}>MenuComponent: </Text>
        <MenuComponent items={menuItems} buttonLabel="Abrir Menu" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    overflow: 'scroll',
    backgroundColor: '#f0f0f0',
    height: '100%',
    width: '100%'
  },
  card: {
    width: '100%',
    maxWidth: 400
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black'
  }
});

export default HomeScreen;
