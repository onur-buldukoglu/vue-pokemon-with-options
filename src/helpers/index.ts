export function capitalize(str: string) {
  const splitIntoWords = str.split(' ')
  const capitalizedWords = splitIntoWords.map((word) => {
    const letters = word.split('')
    letters[0] = letters[0].toUpperCase()
    return letters.join('')
  })

  return capitalizedWords.join(' ')
}

export function range(end: number) {
  return Array.from(Array(end).keys(), (number) => number + 1)
}
