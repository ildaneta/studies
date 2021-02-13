const axios = require("axios");

const BASE = "http://pets.dev-apis.com/";

const success = ({ data }) => data;
const fail = err => {
  switch (err.status) {
    case 400:
      console.error(
        "API error: invalid parameters. Probably means you provided some sort of invalid character to the API or that you' not providing something it is expecting."
      );
      break;
    case 401:
      console.error(
        "API error: insufficeint credentials. Probably means that petfinder shut down this API endpoint, means this client won't work anymore :("
      );
      break;
    case 403:
      console.error(
        "API error: insufficient access. Not sure how you saw this since none of this should have privileged access. Probably means the endpoint is broken and there's nothing you can do :("
      );
      break;
    case 404:
      console.error(
        "API error: endpoint not found. This probably means Brian broke the endpoint. Could you tweet at @holtbt on Twitter to let him know his shit is broken?"
      );
      break;
  }

  return err;
};

const makeRequest = (path, params = {}) =>
  axios
    .get(`${BASE}${path}`, {
      params
    })
    .then(success, fail);

module.exports = {
  animals(params) {
    return makeRequest("animals", params);
  },
  animal(id) {
    return makeRequest(`animals/${id}`);
  },
  types() {
    return makeRequest("types");
  },
  type(type) {
    return makeRequest(`types/${type}`);
  },
  breeds(type) {
    return makeRequest(`types/${type}/breeds`);
  },
  organizations(params) {
    return makeRequest("organizations", params);
  },
  organization(id) {
    return makeRequest(`organizations/${id}`);
  },
  requestLink(link, params) {
    let url = link;
    if (link.startsWith("/v2/")) {
      url = link.replace("/v2/", "");
    }

    return makeRequest(url, params);
  }
};
