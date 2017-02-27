import React from 'react';
import CipherCardSet from './CipherCardSet';
import MorseCard from './MorseCard';

const MorseCipher = () => (
  <CipherCardSet
    cardsPerRow={4}
    CardComponent={MorseCard}
  />
);

export default MorseCipher;
