export function dateFormat(date: string) {
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  } as const

  return new Date(date).toLocaleDateString(undefined, options)
}
