const { calculate } = require('../Calculator.js');

describe('Calculatrice JS', () => {
  test('Addition', () => {
    expect(calculate('2+3')).toBe(5);
  });

  test('Soustraction', () => {
    expect(calculate('2-3')).toBe(-1);
  });

  test('Multiplication', () => {
    expect(calculate('2*3')).toBe(6);
  });

  test('Division', () => {
    expect(calculate('6/3')).toBe(2);
  });

  test('Priorités (2+3*4)', () => {
    expect(calculate('2+3*4')).toBe(14);
  });

  test('Parenthèses ((2+3)*4)', () => {
    expect(calculate('(2+3)*4')).toBe(20);
  });

  test('Expression invalide (2+bad)', () => {
    expect(() => calculate('2+bad')).toThrow('Expression invalide');
  });
});
