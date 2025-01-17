/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Creates a new visitor.
 *
 * @param {string} name
 * @param {number} age
 * @param {string} ticketId
 * @returns {Visitor} the visitor that was created
 */
function createVisitor(name, age, ticketId) {
  return { name, age, ticketId };
}

/**
 * Revokes a ticket for a visitor.
 *
 * @param {visitor} visitor the visitor with an active ticket
 * @returns {visitor} the visitor without a ticket
 */
function revokeTicket(visitor) {
  visitor.ticketId = null;
  return visitor;
}

/**
 * Determines the status a ticket has in the ticket tracking object.
 *
 * @param {Record<string, string|null>} tickets
 * @param {string} ticketId
 * @returns {string} ticket status
 */
function ticketStatus(tickets, ticketId) {
  if (tickets[ticketId] === null) return "not sold";
  if (!tickets[ticketId]) return "unknown ticket id";
  if (tickets[ticketId]) return `sold to ${tickets[ticketId]}`;
}

/**
 * Determines the status a ticket has in the ticket tracking object
 * and returns a simplified status message.
 *
 * @param {Record<string, string|null>} tickets
 * @param {string} ticketId
 * @returns {string} ticket status
 */
function simpleTicketStatus(tickets, ticketId) {
  return tickets[ticketId] ?? 'invalid ticket !!!'
}

/**
 * Determines the version of the GTC that was signed by the visitor.
 *
 * @param {VisitorWithGtc} visitor
 * @returns {string | undefined} version
 */
function gtcVersion(visitor) {
  return visitor.gtc?.version;//Using optional chaining 2020
}

// export {
//   createVisitor,
//   revokeTicket,
//   ticketStatus,
//   simpleTicketStatus,
//   gtcVersion
// }