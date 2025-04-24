# README

## 1. Installer les dépendances

**PHPUnit**  
```sh
composer require --dev phpunit/phpunit
```
![Installation Composer](images/etape1_composer.png)

**Jest**  
```sh
npm install --save-dev jest
```
![Installation Jest](images/etape1_jest.png)

---

## 2. Ajouter la configuration Jest

Créer un fichier `jest.config.js` à la racine :
```js
module.exports = {
  testMatch: [
    '<rootDir>/job 3/tests/**/*.test.js'
  ],
};
```
![Ajout jest.config.js](images/etape2_jest_config.png)

---

## 3. Écrire les tests

**PHP**  
Fichier : `job 3/tests/CalculatorTest.php`
![Test PHP](images/etape3_test_php.png)

**JavaScript**  
Fichier : `job 3/tests/calculator.test.js`
![Test JS](images/etape3_test_js.png)

---

## 4. Lancer les tests

**PHP**  
```sh
vendor\bin\phpunit "job 3/tests/CalculatorTest.php"
```
![Résultat PHPUnit](images/etape4_phpunit_result.png)

**JavaScript**  
```sh
npx jest job 3/tests/calculator.test.js
```
![Résultat Jest](images/etape4_jest_result.png)

---

## 5. Résultat attendu

- Tous les tests passent 
- Les erreurs sont gérées proprement
