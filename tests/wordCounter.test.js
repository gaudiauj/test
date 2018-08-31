const wordCounter = require('../src/wordCounter');
const samples = require('./samples');


describe('wordCounter', () => {
  test('with french', () => {
    const inventory = wordCounter(samples.french.input, 2);
    expect(inventory).toEqual(samples.french.expect);
  });

  test('with russian', () => {
    const inventory = wordCounter(samples.russian.input, 2);
    expect(inventory).toEqual(samples.russian.expect);
  });

  test('with swedish', () => {
    const inventory = wordCounter(samples.swedish.input, 2);
    expect(inventory).toEqual(samples.swedish.expect);
  });

  test('with korean', () => {
    const inventory = wordCounter(samples.korean.input, 2);
    expect(inventory).toEqual(samples.korean.expect);
  });

  test('with chinese', () => {
    const inventory = wordCounter(samples.chinese.input, 2);
    expect(inventory).toEqual(samples.chinese.expect);
  });

  test('it should get the word with a min length', () => {
    const inventory = wordCounter(samples.french.input, 7);
    expect(inventory).toEqual({"accélération": 1, "attendez": 1, "connaît": 1, "connaître": 1, "contente": 1, "contraire": 1, "couvrirai": 1, "dépêche": 1, "idéologie": 1, "imprécis": 1, "occupent": 1, "officiellement": 1, "perpétuelle": 1, "prétendre": 1, "roulent": 1, "spadassins": 1, "stations": 1, "séminaire": 1, "travers": 1, "véritable": 1});
    const emptyInventory = wordCounter(samples.french.input, 15);
    expect(emptyInventory).toEqual({});
  });

});
