/// <reference path="./global.d.ts" />
//
// @ts-check

import { notify } from "./assets/notifier";//it was "./notifier"
import { order } from "./assets/grocer";

/**
 * Notifies the user of a successful operation.
 *
 * @returns {void}
 */
function onSuccess() {
  notify({ message: "SUCCESS" });
}

/**
 * Notifies the user of an error.
 *
 * @returns {void}
 */
function onError() {
  notify({ message: "ERROR" });
}

/**
 * Orders fruits from the grocer based on the provided query using the API wrapper concept.
 * This function abstracts the process of making API calls and provides a simplified interface
 * for interacting with the grocer API endpoints.
 *
 * @param {GrocerQuery} query - The query specifying the fruits to order.
 * @param {FruitPickerSuccessCallback} onSuccessCallback - The callback function to handle successful order.
 * @param {FruitPickerErrorCallback} onErrorCallback - The callback function to handle error in order.
 * @returns {void}
 */
function orderFromGrocer(query, onSuccessCallback, onErrorCallback) {
  return order(query, onSuccessCallback, onErrorCallback);
}

/**
 * Posts an order with the specified variety and quantity.
 *
 * @param {string} variety - The variety of the order.
 * @param {number} quantity - The quantity of the order.
 * @returns {void}
 */
function postOrder(variety, quantity) {
  return order({variety, quantity}, onSuccess, onError);
}

export {
  onSuccess,
  onError,
  orderFromGrocer,
  postOrder
}