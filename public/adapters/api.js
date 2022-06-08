const api_base ="http://localhost:3001"

const routes = {
  getChatters: api_base + "/chatters/",
  createChatter: api_base + "/chatters/"

}
export const getChatters = () => {
  console.log("in get chatters route is: " + routes.getChatters)
  return fetch(routes.getChatters).then((res) => res.json());
}

export const createChatter = (chatter) => {
  console.log("in the create chatters route: ")
  return fetch(routes.createChatter, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(chatter),
  })
}
