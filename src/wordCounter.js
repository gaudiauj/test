class WordCounter {
  constructor({ alphabet, minLength, flags } = {}) {
    this.alphabet = {
      unicode: 'A-zÀ-ÖØ-öø-ÿ',
      cyrillique: '\u0400-\u04FF',
      chinese: '\uff9f\u4e00-\u9faf\u3400-\u4dbf',
      korean: '\u3131-\uD79D',
    };

    this.minLength = 2;

    this.flags = 'ig';


    this.setAlphabet(alphabet);
    this.setMinLength(minLength);
    this.setFlags(flags);
  }

  setAlphabet(alphabet) {
    if (alphabet) {
      this.alphabet = alphabet;
    }
  }

  addAlphabet(alphabet) {
    if (alphabet) {
      this.alphabet = Object.assign(this.alphabet, alphabet);
    }
  }

  setMinLength(minLength) {
    if (Number.isInteger(minLength)) {
      this.minLength = minLength;
    }
  }

  setFlags(flags) {
    if (flags) {
      this.flags = flags;
    }
  }

  getRegex() {
    let alphabetRegex = '([';
    Object.keys(this.alphabet).forEach((lang) => {
      alphabetRegex += this.alphabet[lang];
    });
    alphabetRegex += `]{${this.minLength},})`;
    return new RegExp(alphabetRegex, this.flags);
  }

  execute(str) {
    const regex = this.getRegex();
    const result = {};
    let wordTest = regex.exec(str);
    while (wordTest !== null) {
      // This is necessary to avoid infinite loops with zero-width matches
      if (wordTest.index === regex.lastIndex) {
        regex.lastIndex += 1;
      }
      const word = wordTest[0].toLowerCase();
      result[word] = result[word] ? result[word] + 1 : 1;
      wordTest = regex.exec(str);
    }

    return result;
  }
}


function wordCounter(str, minLength) {
  const Counter = new WordCounter({ minLength });

  return Counter.execute(str, minLength);
}

module.exports = wordCounter;
