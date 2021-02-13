const {
  animal,
  animals,
  breeds,
  organization,
  organizations,
  type,
  types
} = require("./data");

const TIMEOUT = process.env.NODE_ENV === "test" ? 1 : 1000;

const delay = result =>
  new Promise(resolve => setTimeout(() => resolve(result), TIMEOUT));

const mockLib = {
  animal: id => delay({ animal: animal(id) }),
  animals: params => delay({ animals: animals(params) }),
  breeds: type => delay({ breeds: breeds(type) }),
  organization: id => delay({ organization: organization(id) }),
  organizations: options => delay({ organizations: organizations(options) }),
  type: slug => delay({ type: type(slug) }),
  types: () => delay({ types: types() }),
  requestLink: url => {
    const [path, paramsString] = url.split("?");
    const params = (paramsString ? paramsString : "")
      .split("&")
      .map(str => str.split("="))
      .reduce((acc, [key, value]) => {
        acc[key] = value;
        return acc;
      }, {});
    // eslint-disable-next-line no-unused-vars
    const [_, _2, method, id, breeds] = path.split("/");
    switch (method) {
      case "types":
        if (id) {
          return mockLib.type(id);
        } else {
          return mockLib.types(params);
        }
      case "animals":
        if (breeds) {
          return mockLib.breeds(id);
        } else if (id) {
          return mockLib.animal(+id);
        } else {
          return mockLib.animals(params);
        }
      case "organizations":
        if (id) {
          return mockLib.organization(id);
        } else {
          return mockLib.organizations(params);
        }
    }
  }
};

module.exports = mockLib;
