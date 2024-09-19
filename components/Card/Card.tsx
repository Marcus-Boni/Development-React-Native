import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { Card as PaperCard, Title, Paragraph } from 'react-native-paper';

type CardProps = {
  title: string;
  content: string;
  imageUri?: string;
};

const Card: React.FC<CardProps> = ({ title, content, imageUri }) => {
  return (
    <PaperCard style={styles.card}>
      {imageUri && <Image source={{ uri: imageUri }} style={styles.image} />}
      <PaperCard.Content>
        <Title style={styles.title}>{title}</Title>
        <Paragraph>{content}</Paragraph>
      </PaperCard.Content>
    </PaperCard>
  );
};

const styles = StyleSheet.create({
  card: {
    margin: 8,
    borderRadius: 8
  },
  image: {
    height: 200,
    width: '100%',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8
  },
  title: {
    marginBottom: 8
  }
});

export default Card;
