export const getItem = (
  cards,
  position
) => cards[position];
export const setItem = (
  cards,
  position,
  replacementCard
) =>
  replacementCard
    ? ((cards[position] =
        replacementCard),
      cards)
    : cards;
export const insertItemAtTop = (
  cards,
  newCard
) => (cards.push(newCard), cards);
export const removeItem = (
  cards,
  position
) => (cards.splice(position, 1), cards);
export const removeItemFromTop = (
  cards
) => (cards.pop(), cards);
export const insertItemAtBottom = (
  cards,
  newCard
) => (cards.unshift(newCard), cards);
export const removeItemAtBottom = (
  cards
) => (cards.shift(), cards);
export const checkSizeOfStack = (
  cards,
  stackSize
) => stackSize == cards.length;
