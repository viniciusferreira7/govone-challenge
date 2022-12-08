export function dateFormat(date: string) {
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  } as const

  return new Date(date).toLocaleDateString(undefined, options)
}
