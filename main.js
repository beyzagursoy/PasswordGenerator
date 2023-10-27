// Kullanıcıdan alınan verileri alma
const firstUpperCase = prompt("Bir büyük harf giriniz: ");
const firstLowerCase = prompt("Bir küçük harf giriniz: ");
const firstNumber = prompt("Bir sayı giriniz: ");
const secondNumber = prompt("Bir başka sayı giriniz: ");
const specialChar = prompt("Bir özel karakter giriniz: ");

// Şifre oluşturma fonksiyonu
function generatePassword() {
  const upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz';
  const numbers = '0123456789';
  const specialChars = '!@#$%^&*';

  // Random harf ve sayıları oluştur
  const randomChars = [];
  randomChars.push(upperCaseChars[Math.floor(Math.random() * upperCaseChars.length)]);
  randomChars.push(lowerCaseChars[Math.floor(Math.random() * lowerCaseChars.length)]);
  randomChars.push(numbers[Math.floor(Math.random() * numbers.length)]);
  randomChars.push(numbers[Math.floor(Math.random() * numbers.length)]);
  randomChars.push(specialChars[Math.floor(Math.random() * specialChars.length)]);

  // Kalan karakterleri rastgele oluştur
  while (randomChars.length < 9) {
    const charSet = upperCaseChars + lowerCaseChars + numbers + specialChars;
    const randomChar = charSet[Math.floor(Math.random() * charSet.length)];
    randomChars.push(randomChar);
  }

  // Karıştır
  randomChars.sort(() => Math.random() - 0.5);

  // Şifreyi döndür
  return randomChars.join('');
}

// Kullanıcıdan alınan bilgilere göre şifreyi oluştur
const generatedPassword = generatePassword();

// Kullanıcıdan alınan bilgileri ve oluşturulan şifreyi ekrana yazdır
console.log(`Kullanıcıdan alınan bilgiler: ${firstUpperCase} ${firstLowerCase} ${firstNumber} ${secondNumber} ${specialChar}`);
console.log(`Oluşturulan Şifre: ${firstUpperCase}${firstLowerCase}Xyz${firstNumber}${secondNumber}${specialChar}`);
console.log(`Oluşturulan Güçlü Şifre: ${generatedPassword}`);
