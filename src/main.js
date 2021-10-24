"use strict";

function zadanie1() {
  let result = "";

  for (let i = 1; i <= 100; i++) {
    if (i % 2 == 0) {
      result += "Fiz";
    } else if (i % 3 == 0) {
      result += "Buz";
    } else {
      result += i;
    }
    result += " ";
  }
  console.log("Zadanie 1:");
  console.log(result);
}

function zadanie2() {
  let radius = prompt("podaj promień koła");
  let area = 3.1416 * (radius * radius);
  let perimeter = 2 * 3.1416 * radius;

  area = Math.round((area + Number.EPSILON) * 100) / 100;
  perimeter = Math.round((perimeter + Number.EPSILON) * 100) / 100;
  console.log("Zadanie 2:");
  console.log("Pole:" + area + "\nObwód:" + perimeter);
  console.log();
}

function zadanie3() {
  function p1(array) {
    let sum = 0,
      index = 0;

    while (sum < 200) {
      let num = Math.floor(Math.random() * (11 - 1) + 1);
      sum += num;
      array[index] = num;
      index++;
    }
    return array;
  }

  function p2(array) {
    let number = array[0];
    let index = 0;
    for (let i = 0; i < array.length; i++) {
      if (number > array[i]) {
        number = array[i];
        index = i;
      }
    }
    array.splice(index, 1);
    return array;
  }

  function p3(array) {
    let number = array[array.length - 1];
    let index = 0;
    for (let i = array.length - 1; i >= 0; i--) {
      if (number < array[i]) {
        number = array[i];
        index = i;
      }
    }
    array.splice(index, 1);
    return array;
  }

  function p4(array) {
    let details = [];
    for (let i = 0; i < 10; i++) {
      details[i] = {
        value: (i + 1).toString(),
        quantity: 0,
      };
    }
    for (let i = 0; i < array.length; i++) {
      let index = array[i] - 1;
      details[index].quantity += 1;
    }
    return details;
  }

  function p5(array) {
    let first10 = array.slice(0, 10);
    array.splice(0, 10);
    array = array.concat(first10);
    return array;
  }

  let arr = [];
  console.log("Zadanie 3:");
  console.log(p1(arr));
  console.log(p2(arr));
  console.log(p3(arr));
  console.table(p4(arr));
  console.log(p5(arr));
}

function zadanie4() {
  var arr = ["Magdalena", "Marcin", "Ola", "Tymoteusz", "Sheenaa"];

  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i]
      .replaceAll("a", "4")
      .replaceAll("o", "0")
      .replaceAll("l", "1")
      .replaceAll("z", "2")
      .replaceAll("e", "3");

    if (arr[i].length > 6) {
      let part1 = arr[i].slice(0, 3),
        part2 = arr[i].slice(-3);
      arr[i] = part1 + "..." + part2;
    }
  }
  console.log("Zadanie 4:");
  console.log(arr);
}

function zadanie5() {
  console.log("Zadanie 5:");
  let products =
    "mleko, masło, chleb, jogurt, pomidor, sałata, mąka, dżem, herbata, jabłko, czekolada, marchewka, sok, chipsy, cytryna, ser";
  let prices = [];

  products = products.split(", ");

  // tworzenie cennika
  for (let i = 0; i < products.length; i++) {
    prices[i] = {
      name: products[i],
      price: Math.round((Math.random() * (20 - 1) + 1) * 100) / 100,
    };
  }
  console.table(prices);

  // tworzenie tablicy zakupow
  let basket = [],
    y = 0,
    sum = 0,
    basketLength =
      Math.floor(Math.random() * (products.length / 2 - 1) + 1) + 2;

  for (let i = 0; i <= basketLength; i++) {
    let ifBuy = Math.floor(Math.random() * 2);
    if (ifBuy == 1) {
      basket[y] = {
        name: prices[i].name,
        price: prices[i].price,
        quantity: Math.floor(Math.random() * (11 - 1) + 1),
      };
      sum += basket[y].price * basket[y].quantity;
      y++;
    }
  }

  console.table(basket);
  console.log("Wartosc calkowita: " + Math.round(sum * 100) / 100);
}

zadanie1();
zadanie2();
zadanie3();
zadanie4();
zadanie5();
