import React from 'react';
import CipherCardSet from './CipherCardSet';
import A1Z26Card from './A1Z26Card';

const A1Z26Cipher = () => (
  <CipherCardSet
    characters="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    cardsPerRow={6}
    CardComponent={A1Z26Card}
  />
);

export default A1Z26Cipher;
