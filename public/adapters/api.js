let api_base = process.env.NODE_ENV === 'development' ? "http://localhost:3001" : "https://noodln-api.herokuapp.com" 

const routes = {
  getChatters: api_base + "/chatters/",
  createChatter: api_base + "/chatters/"

}
export const getChatters = () => {
  return fetch(routes.getChatters).then((res) => res.json());
}

export const createChatter = (chatter) => {
  return fetch(routes.createChatter, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(chatter),
  })
}
