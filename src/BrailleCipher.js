import React from 'react';
import CipherCardSet from './CipherCardSet';
import BrailleCard from './BrailleCard';

const BrailleCipher = () => (
  <CipherCardSet
    characters="ABCDEFGHIJKLMNOPQRSTUVWXYZ#1234567890"
    cardsPerRow={6}
    CardComponent={BrailleCard}
  />
);

export default BrailleCipher;
