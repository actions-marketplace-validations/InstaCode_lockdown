export function verifyUser(username: string, input: string): boolean {
  const listOfUsernames = input.split(',')
  return listOfUsernames.includes(username)
}
