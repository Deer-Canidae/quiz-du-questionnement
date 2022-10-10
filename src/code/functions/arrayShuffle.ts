/**
 * Returns a shuffled copy of the array passed in arguments
 * @param array the array to shuffle
 * @returns a shuffled copy
 */
export default function arrayShuffle<T>(array: T[]): T[] {
  let shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}
