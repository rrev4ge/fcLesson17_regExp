"use strict";

const userPass = document.getElementById("password");
const userPassRegExp = /(?=^[a-zA-Z])[0-9a-zA-Z!@#$%^&*]{6,}/g;

userPass.addEventListener("input", isCorrectInput);

function isCorrectInput(event) {
    const {
        target: {value, style},
    } = event;

    if (userPassRegExp.test(value)) {
        style.backgroundColor = "green";
    } else if (!userPassRegExp.test(value)) {
        style.backgroundColor = "red";
    }
}
