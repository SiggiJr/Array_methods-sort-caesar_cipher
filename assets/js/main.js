"use strict";

//# Weitere Array Methoden

//# Level 1_1

let getraenke = [
  "Coca-Cola",
  "Apfelsaft",
  "Pepsi",
  "Traubensaft",
  "Sprite",
  "Orangensaft",
  "Red Bull Energy Drink",
  "Fanta",
];

const myDrinks = () => {
  getraenke.sort();

  getraenke.forEach((getraenk) => {
    document.querySelector(".getraenke_output").innerHTML += `<p>${getraenk}</p>`;
  });
};

myDrinks();

//# Level_1_2

console.log("Level_1_2");

const upperDrinks = getraenke.map((getraenk) => {
  return getraenk.toUpperCase();
});
console.log(upperDrinks);

//# Level_1_3

console.log("Level_1_3");

let array = [
  18, 16, 80, 51, 47, 38, 95, 42, 68, 61, 34, 51, 20, 17, 56, 31, 100, 6, 5, 30, 74, 97, 28, 99, 91, 27, 73, 12, 92, 6,
  27, 71, 26, 15, 78,
];

const multiply = () => {
  const sortedArray = array
    .map((number) => {
      return number * 2;
    })
    .sort((a, b) => {
      return a - b;
    });
  console.log(sortedArray);
};

multiply();

//# Level_1_4

console.log("Level_1_4");

let fahrenheit = [0, 32, 45, 50, 75, 80, 99, 120];

const temperatureChange = () => {
  const celsius = fahrenheit.map((temperatur) => {
    return ((temperatur - 32) / 1.8).toFixed(0);
  });
  console.log(celsius);
};

temperatureChange();

//# Level_1_5

console.log("Level_1_5");

let checkNumber = [
  18, 16, 80, 51, 47, 38, 95, 42, 68, 61, 34, 51, 20, 17, 56, 31, 100, 6, 5, 30, 74, 97, 28, 99, 91, 27, 73, 12, 92, 6,
  27, 71, 26, 15, 78,
];

const dividable3 = () => {
  console.log(
    checkNumber.map((number) => {
      if (Number(number) % 3 === 0) {
        return number + 100;
      } else {
        return number;
      }
    })
  );
};

dividable3();

//# Level_1_6

console.log("Level_1_6");

let album = ["holidays.jpg", "Restaurant.jpg", "desktop", "rooms.GIF", "DOGATBEACH.jpg"];

const albumCopy = album.map((element) => {
  if (element.includes(".")) {
    return element.slice(0, element.indexOf(".")).toLowerCase();
  } else {
    return "invalid";
  }
});
console.log(albumCopy);

//# Level_1_7

console.log("Level_1_7");

let fruits = ["🍇", "🍌", "🍒", "🍎"];

const makeJuice = (fruits) => {
  fruits = fruits.map((fruit) => {
    return `${fruit}🥤`;
  });
};

makeJuice(fruits);
console.log(fruits);

//# Level_1_8

console.log("Level_1_8");

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(
  numbers.filter((number) => {
    return number % 2 === 0;
  })
);

console.log(
  numbers.filter((number) => {
    return number % 2 !== 0;
  })
);

//# Sort Methode

//# Level_1_1

let languages = ["JavaScript", "Python", "Java", "Ruby", "PHP", "C++", "CSS", "C#", "Go", "C", "TypeScript", "Swift"];

console.log(languages.sort());

//# Level_1_2

console.log(
  languages.sort((a, b) => {
    if (a < b) {
      return 1;
    } else if (a > b) {
      return -1;
    }
  })
);

//# Level_1_3

let numArray1 = [36, 24, 22, 3, 2, 98, 88, 99, 10, 54, 68, 70];

console.log(
  numArray1.sort((a, b) => {
    if (a < b) {
      return -1;
    } else if (a > b) {
      return 1;
    }
  })
);

//# Level_2_1

console.clear();
const reverse = (text) => {
  if (text.includes(" ")) {
    const textArray = text.split(" ");
    const wordArray = textArray.map((word) => {
      return word.split("");
    });
    // console.log(wordArray);
    let reverseTextArray = "";
    wordArray.forEach((word) => {
      let innerArray = "";
      word.forEach((char) => {
        innerArray = char + innerArray;
      });
      reverseTextArray += `${innerArray} `;
    });
    console.log(reverseTextArray);
    // console.log(wordArray);
  } else {
    const textArray = text.split("");
    let reverseTextArray = "";
    textArray.forEach((char) => {
      reverseTextArray = char + reverseTextArray;
    });
    console.log(reverseTextArray);
  }
};

reverse("Hannas");
reverse("Ella mag alle Bohnen");
reverse("han nesaH has ennaH");

//# Level_2_2

let numArray2 = [36, 324, 122, 62, 98, 88, 99, 1000];

console.log(
  numArray2.sort((a, b) => {
    if (a < b) {
      return -1;
    } else if (a > b) {
      return 1;
    }
  })
);

//# Bonus

const alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

const caesarForm = document.querySelector(".caesar_cipher form");

const encryptBtn = document.querySelector("#encrypt");
const decryptBtn = document.querySelector("#decrypt");
const textInput = document.querySelector("#text");
const shiftNumberInput = document.querySelector("#key");

const outputContainer = document.querySelector(".output_container");

const caeserEncrypt = (shiftNumber, inputText, outputText, maxIndex) => {
  inputText.forEach((char) => {
    if (char === " ") {
      outputText += char;
      return;
    }
    const wordIndex = alphabet.indexOf(char);
    let shiftIndex = wordIndex + shiftNumber;

    if (shiftIndex > maxIndex) {
      shiftIndex = shiftIndex - maxIndex - 1;
    }
    outputText += alphabet[shiftIndex];
  });
  outputContainer.textContent = outputText;
};

const caeserDecrypt = (shiftNumber, inputText, outputText, maxIndex, minIndex) => {
  inputText.forEach((char) => {
    if (char === " ") {
      outputText += char;
      return;
    }
    const wordIndex = alphabet.indexOf(char);
    let shiftIndex = wordIndex - shiftNumber;

    if (shiftIndex < minIndex) {
      shiftIndex = maxIndex + shiftIndex + 1;
    }
    outputText += alphabet[shiftIndex];
  });
  outputContainer.textContent = outputText;
};

const caeser = (event) => {
  event.preventDefault();
  const shiftNumber = Number(shiftNumberInput.value);

  const inputText = textInput.value.toLowerCase().split("");
  let outputText = "";
  const maxIndex = alphabet.length - 1;
  const minIndex = 0;

  if (encryptBtn.checked) {
    caeserEncrypt(shiftNumber, inputText, outputText, maxIndex);
  } else if (decryptBtn.checked) {
    caeserDecrypt(shiftNumber, inputText, outputText, maxIndex, minIndex);
  }
};

decryptBtn.addEventListener("change", () => {
  document.querySelector("label[for='text']").textContent = "Zu entschlüsselnder Text:";
  document.querySelector("button[type='submit']").textContent = "Text entschlüsseln";
});

encryptBtn.addEventListener("change", () => {
  document.querySelector("label[for='text']").textContent = "Zu verschlüsselnder Text:";
  document.querySelector("button[type='submit']").textContent = "Text verschlüsseln";
});

caesarForm.addEventListener("submit", caeser);
