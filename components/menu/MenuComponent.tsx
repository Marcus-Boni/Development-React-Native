import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Menu, Divider, Button, Text } from 'react-native-paper';

type MenuItem = {
  label: string;   
  onPress: () => void;
}

type MenuComponentProps = {
  items: MenuItem[];  
  buttonLabel: string; 
}

const MenuComponent: React.FC<MenuComponentProps> = ({ items, buttonLabel }) => {
  const [visible, setVisible] = useState(false);

  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  return (
    <View style={styles.container}>
      <Button onPress={openMenu} mode="contained">
        {buttonLabel}
      </Button>
      <Menu
        visible={visible}
        onDismiss={closeMenu}
        anchor={<Button onPress={openMenu} mode="contained">{buttonLabel}</Button>}
      >
        {items.map((item, index) => (
          <React.Fragment key={index}>
            <Menu.Item title={item.label} onPress={item.onPress} />
            {index < items.length - 1 && <Divider />}
          </React.Fragment>
        ))}
      </Menu>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 16,
  },
});

export default MenuComponent;
