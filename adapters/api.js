let api_base =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3001"
    : "https://noodln-api.herokuapp.com";
const routes = {
  getChatters: api_base + "/chatters/",
  createChatter: api_base + "/chatters/",
  createOrg: api_base + "/organizations/",
  getOrg: api_base + "/organizations/",
};

export const createChatter = (chatter, orgId) => {
  return fetch(routes.createChatter, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ chatter: chatter, organizationId: orgId }),
  });
};

export const createOrg = (body) => {
  return fetch(routes.createOrg, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  }).then((r) => r.json());
};

export const getOrg = (orgId) => {
  return fetch(routes.getOrg + orgId, {
    method: "GET",
    header: {
      "Content-Type": "application/json",
    },
  }).then((r) => r.json());
};
