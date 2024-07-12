import React, { useState } from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import Swiper from 'react-native-deck-swiper';

const cards = [
  { id: 1, uri: 'https://upload.wikimedia.org/wikipedia/commons/f/f5/RWS_Tarot_08_Strength.jpg' },
  { id: 2, uri: 'https://upload.wikimedia.org/wikipedia/commons/5/53/RWS_Tarot_16_Tower.jpg' },
  { id: 3, uri: 'https://upload.wikimedia.org/wikipedia/commons/9/9b/RWS_Tarot_07_Chariot.jpg' },
  { id: 4, uri: 'https://upload.wikimedia.org/wikipedia/commons/3/3a/TheLovers.jpg' },
  { id: 5, uri: 'https://upload.wikimedia.org/wikipedia/commons/8/88/RWS_Tarot_02_High_Priestess.jpg' },
  { id: 6, uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/RWS_Tarot_01_Magician.jpg' }
];

const Card = ({ card }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: card.uri }} style={styles.image} />
      <Text style={styles.text}>{card.id}</Text>
    </View>
  );
};

const Deck = () => {
  return (
    <View style={styles.container}>
      <Swiper
        cards={cards}
        renderCard={(card) => <Card card={card} />}
        stackSize={3}
        stackSeparation={15}
        disableTopSwipe
        disableBottomSwipe
        backgroundColor={'#4FD0E9'}
        cardIndex={0}
        onSwiped={(cardIndex) => { console.log(cardIndex); }}
        onSwipedAll={() => { console.log('All cards swiped'); }}
        cardStyle={{ shadowColor: '#000', shadowOffset: { width: 0, height: 5 }, shadowOpacity: 0.3, shadowRadius: 10, elevation: 10 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    flex: 1,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  text: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    color: '#FFF',
    fontSize: 24,
    backgroundColor: 'rgba(0,0,0,0.6)',
    padding: 5,
    borderRadius: 5,
  },
});

export default Deck;
