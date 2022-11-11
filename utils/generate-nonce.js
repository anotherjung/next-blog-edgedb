// utils/generate-nonce.js
import crypto from 'crypto';

const generateNonce = () => {
  return crypto.randomBytes(16).toString('base64');
};

export default generateNonce;
