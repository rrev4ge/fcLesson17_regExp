"use strict";

const regexp1 = /[0-9]{7}/ig;
const regexp2 = new RegExp("[0-9]{7}", "ig");

const str = 'dsfsd 231243543 defsdf 234wsdfsfa dgferg'
//test
console.log(regexp1.test(str));
console.log(regexp2.test(str));
//search
console.log(str.search(regexp1));
console.log(str.search(regexp2));
//match
console.table(str.search(regexp1));
console.table(str.search(regexp2));



let userName = "Rsdfatt6jfgfgftredsvgh";
let userPass = "sadfsdafsadfsadf";
const userNameRegExp = /[a-zA-Z]\w*{6,20}/ig;
const passRegExp = /[a-zA-Z]\w{8,12}/ig;
console.log(userNameRegExp.test(userName));
console.log(passRegExp.test(userPass));
