export function verifyUser(username: string, input: string): boolean {
  const listofusername = input.split(',')
  return listofusername.includes(username)
}
