export function verifyUser(username: string, input: string): boolean {
  let listofusername = input.split(",");
  return listofusername.includes(username)
}

