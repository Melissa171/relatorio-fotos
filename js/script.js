// Trocar os fotógrafos.

import isEqual from "lodash/isEqual";
import { hash } from "object-hash";

import REGISTRO from "./relatorio.js";

const date = document.getElementById("data");
const vendas = document.getElementById("vendidas");
const sobras = document.getElementById("sobras");
const addreg = document.getElementById("add-reg");

date.addEventListener("beforeinput", (event) => {
  if (event.data === " ") return event.preventDefault();
  if (event.data === "/" && date.value.includes("/")) return event.preventDefault();
  const dateSplit = date.value.split("/");
  if (event)
    if (event.inputType === "insertText") {
      if (!date.value.includes("/") && date.value.length < 1) {
        if (event.data > 3) {
          event.preventDefault();
          date.value = `${event.data}/`;
        }
      } else if (date.value.length === 2 && !date.value.includes("/") && event.data !== "/") {
        date.value = `${date.value}/`;
      } else if (date.value === "3" && event.data > 1) return event.preventDefault();

      if (date.value.length === 5) {
        event.preventDefault();
      } else if (date.value.length === 3 && dateSplit[0].length === 1) {
        if (event.data > 2 && date.value.at(-1) === "1") {
          event.preventDefault();
        } else if (event.data > 0 && date.value.at(-1) < 2) {
          event.preventDefault();
        } else if (date.value.at(-1) !== 0) {
          event.preventDefault();
        }
      } else if (date.value.length === 4 && date.value.at(-1) !== "0" && dateSplit[0].length === 2) {
        if (event.data > 2 || date.value.at(-1) > 1) {
          event.preventDefault();
        }
      } else if (date.value.length === 4 && date.value.at(-1) !== "0" && dateSplit[0].length === 1) {
        event.preventDefault();
      } else if (date.value.length === 4 && date.value.at(-1) === "0" && dateSplit[0].length === 1) {
        event.preventDefault();
      }
    }
});

vendas.addEventListener("input", (event) => {
  if (event.inputType == "insertText") {
    if (vendas.value.length === 2) {
      sobras.focus();
    }
  }
});

sobras.addEventListener("input", (event) => {
  if (event.inputType === "insertText") {
    if (sobras.value.length === 2) {
      addreg.focus();
    }
  }
});

export function isExactly(arr1, arr2) {
  return isEqual(arr1, arr2);
}
