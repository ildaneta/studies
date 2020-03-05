const faker = require("faker");
const hash = require("object-hash");
const animalsData = require("./animals");

let random = (min, max) => Math.floor(Math.random() * (max - min) + min);

const AGES = ["Baby", "Young", "Adult", "Senior"];

const GENDERS = ["Male", "Female", "Unknown"];
const SIZES = ["Small", "Medium", "Large", null];
const COATS = ["Short", "Medium", "Long", null];
const ATTRIBUTES = [true, false, null];
const IMAGE_PROVIDERS = [
  "http://placecorgi.com/",
  "http://placekitten.com/",
  "http://placebear.com/"
];
const STATUSES = ["adoptable", "adopted"];

const genOrg = () => {
  const state = faker.address.stateAbbr();
  const org = state + faker.random.number({ min: 100, max: 999 });

  return { org, state };
};

const photo = () => {
  const img =
    IMAGE_PROVIDERS[
      faker.random.number({ min: 0, max: IMAGE_PROVIDERS.length - 1 })
    ];
  return {
    small: img + "100/100",
    medium: img + "300/300",
    large: img + "600/600",
    full: img + "800/800"
  };
};

const animal = function animal(id = random(1000000, 9999999)) {
  faker.seed(id);
  const { org, state } = genOrg();
  const type = animalsData[id % animalsData.length];
  return {
    id,
    name: faker.name.firstName(),
    type,
    species: type,
    url: "https://frontendmasters.com/?ref=pet",
    organization_id: org,
    breeds: {
      primary: faker.random.word(),
      secondary: faker.random.boolean() ? faker.random.word() : null,
      mixed: faker.random.boolean(),
      unknown: faker.random.boolean()
    },
    colors: {
      primary: faker.commerce.color(),
      secondary: faker.commerce.color(),
      tertiary: faker.random.boolean() ? faker.commerce.color() : null
    },
    age: AGES[faker.random.number({ min: 0, max: AGES.length - 1 })],
    gender: GENDERS[faker.random.number({ min: 0, max: GENDERS.length - 1 })],
    size: SIZES[faker.random.number({ min: 0, max: SIZES.length - 1 })],
    coat: COATS[faker.random.number({ min: 0, max: COATS.length - 1 })],
    attributes: {
      spayed_neutered:
        ATTRIBUTES[faker.random.number({ min: 0, max: ATTRIBUTES.length - 1 })],
      house_trained:
        ATTRIBUTES[faker.random.number({ min: 0, max: ATTRIBUTES.length - 1 })],
      declawed:
        ATTRIBUTES[faker.random.number({ min: 0, max: ATTRIBUTES.length - 1 })],
      special_needs:
        ATTRIBUTES[faker.random.number({ min: 0, max: ATTRIBUTES.length - 1 })],
      shots_current:
        ATTRIBUTES[faker.random.number({ min: 0, max: ATTRIBUTES.length - 1 })]
    },
    environment: {
      children:
        ATTRIBUTES[faker.random.number({ min: 0, max: ATTRIBUTES.length - 1 })],
      dogs:
        ATTRIBUTES[faker.random.number({ min: 0, max: ATTRIBUTES.length - 1 })],
      cats:
        ATTRIBUTES[faker.random.number({ min: 0, max: ATTRIBUTES.length - 1 })]
    },
    tags: [],
    description: faker.lorem.text(10),
    photos: Array.from({ length: faker.random.number({ min: 1, max: 5 }) }).map(
      photo
    ),
    status: STATUSES[faker.random.number({ min: 0, max: STATUSES.length - 1 })],
    published_at: new Date(0).toISOString(),
    contact: {
      email: faker.internet.email(),
      phone: faker.phone.phoneNumber(),
      address: genAddress(state),
      _links: {
        self: {
          href: "/v2/animals/" + id
        },
        organization: {
          href: "/v2/organizations/" + org.toLowerCase()
        },
        type: {
          href: "/v2/types/" + type
        }
      }
    }
  };
};

const genAddress = state => ({
  address1: faker.address.streetAddress(),
  address2: faker.address.secondaryAddress(),
  city: faker.address.city(),
  state,
  postcode: faker.address.zipCode(),
  country: "US"
});

module.exports.animal = animal;

const animals = function animals(options) {
  const seed = hash.sha1(options);
  faker.seed(parseInt(seed, 16) % 9999999);
  const pets = Array.from({ length: 20 }, () =>
    faker.random.number({ min: 1000000, max: 9999999 })
  ).map(animal);

  return pets;
};

module.exports.animals = animals;

const breeds = function breeds(type) {
  const seed = hash.sha1(type);
  faker.seed(parseInt(seed, 16) % 9999999);

  const breedsRes = Array.from({ length: 20 }, () => {
    const type = faker.random.word();

    return {
      name: type,
      _links: {
        type: {
          href: "/v2/type/" + type
        }
      }
    };
  });

  return breedsRes;
};

module.exports.breeds = breeds;

const organization = id => {
  const seed = hash.sha1(id.toUpperCase());
  faker.seed(parseInt(seed, 16) % 9999999);
  const state = id.slice(0, 2).toUpperCase();

  return {
    id: id.toUpperCase(),
    name: faker.company.companyName(),
    email: faker.internet.email(),
    phone: faker.phone.phoneNumber(),
    address: genAddress(state),
    hours: {
      monday: null,
      tuesday: null,
      wednesday: null,
      thursday: null,
      friday: null,
      saturday: null,
      sunday: null
    },
    url: "https://frontendmasters.com/?ref=pet",
    website: faker.internet.url(),
    mission_state: faker.company.catchPhrase(),
    adoption: {
      policy: null,
      url: null
    },
    social_media: {
      facebook: "https://www.facebook.com/FrontendMasters/",
      twitter: "https://twitter.com/FrontendMasters/",
      youtube: "https://www.youtube.com/channel/UCzumJvwc0KBrdq4jpvOR7RA",
      instagram: "https://www.instagram.com/frontendmasters/",
      pinterest: null
    },
    photos: Array.from({ length: faker.random.number({ min: 1, max: 5 }) }).map(
      photo
    ),
    _links: {
      self: {
        href: `/v2/organizations/${id.toLowerCase()}`
      },
      animals: {
        href: `/v2/animals?organization=${id.toLowerCase()}`
      }
    }
  };
};

module.exports.organization = organization;

const organizations = function organizations(options) {
  const seed = hash.sha1(options);
  faker.seed(parseInt(seed, 16) % 9999999);
  const orgs = Array.from({ length: 20 }, () => genOrg().org).map(organization);

  return orgs;
};

module.exports.organizations = organizations;

const typesRes = require("./mock-types");
module.exports.types = () => typesRes;

function type(slug) {
  const res = typesRes.filter(
    item =>
      item.name
        .toLowerCase()
        .replace(/&\s/g, "")
        .replace(/\s/g, "-")
        .replace(/,/g, "") === slug
  );
  if (res.length) {
    return res[0];
  } else {
    return typesRes[0];
  }
}

module.exports.type = type;
