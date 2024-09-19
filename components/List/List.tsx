import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { List as PaperList, Divider } from 'react-native-paper';

type ListItem = {
  id: string;
  title: string;
  description?: string;
  onPress?: () => void;
};

type ListProps = {
  items: ListItem[];
};

const List: React.FC<ListProps> = ({ items }) => {
  const renderItem = ({ item }: { item: ListItem }) => (
    <View>
      <PaperList.Item
        title={item.title}
        description={item.description}
        onPress={item.onPress}
      />
      <Divider />
    </View>
  );

  return (
    <FlatList
      data={items}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16
  }
});

export default List;
