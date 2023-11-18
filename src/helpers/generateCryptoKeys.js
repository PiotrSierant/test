// do uruchomienia skryptu dodaj type: module w package.json
import crypto from 'crypto';
// Generowanie 256-bitowego klucza
const encryptionKey = crypto.randomBytes(32);
// Generowanie 128-bitowego IV (wektor inicjalizacyjny)
const iv = crypto.randomBytes(16);
console.log('Wygenerowany klucz szyfrowania (ENCRYPTION_KEY):', encryptionKey.toString('hex'));
console.log('Wygenerowany wektor inicjalizacyjny (IV):', iv.toString('hex'));