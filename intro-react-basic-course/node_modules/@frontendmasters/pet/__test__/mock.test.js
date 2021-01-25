const p = require("../mock");
const mockTypes = require("../mock-types");

test("animal", async () => {
  expect.assertions(2);
  const animal1 = await p.animal(1001);
  const animal2 = await p.animal(1001);
  const animal3 = await p.animal(5001);
  expect(animal1).toEqual(animal2);
  expect(animal1).not.toEqual(animal3);
});

test("animals", async () => {
  expect.assertions(2);
  const animals1 = await p.animals({ location: "Seattle, WA" });
  const animals2 = await p.animals({ location: "Seattle, WA" });
  const animals3 = await p.animals({ location: "Seattle, WA", type: "dog" });
  expect(animals1).toEqual(animals2);
  expect(animals1).not.toEqual(animals3);
});

test("breeds", async () => {
  expect.assertions(2);
  const breeds1 = await p.breeds("dog");
  const breeds2 = await p.breeds("dog");
  const breeds3 = await p.breeds("cat");
  expect(breeds1).toEqual(breeds2);
  expect(breeds1).not.toEqual(breeds3);
});

test("organization", async () => {
  expect.assertions(2);
  const organization1 = await p.organization("CA5252");
  const organization2 = await p.organization("CA5252");
  const organization3 = await p.organization("WA1280");
  expect(organization1).toEqual(organization2);
  expect(organization1).not.toEqual(organization3);
});

test("organizations", async () => {
  expect.assertions(2);
  const organizations1 = await p.organizations("CA5252");
  const organizations2 = await p.organizations("CA5252");
  const organizations3 = await p.organizations("WA1280");
  expect(organizations1).toEqual(organizations2);
  expect(organizations1).not.toEqual(organizations3);
});

test("types", async () => {
  expect.assertions(2);
  const types1 = await p.types();
  const types2 = await p.types();
  expect(types1).toEqual(types2);
  expect(types1).toEqual({ types: mockTypes });
});

test("type", async () => {
  expect.assertions(4);
  const type1 = await p.type("dog");
  expect(type1.type.name).toBe("Dog");
  const type2 = await p.type("cat");
  expect(type2.type.name).toBe("Cat");
  const type3 = await p.type("scales-fins-other");
  expect(type3.type.name).toBe("Scales, Fins & Other");
  const type4 = await p.type("Obviously not a thing");
  expect(type4.type.name).toBe(mockTypes[0].name);
});

describe("requestLink", () => {
  test("type", async () => {
    expect.assertions(1);
    const type1 = await p.requestLink("/v2/types/dog");
    const type2 = await p.type("dog");
    expect(type1).toEqual(type2);
  });

  test("breeds", async () => {
    expect.assertions(1);
    const breed1 = await p.requestLink("/v2/types/cat/breeds");
    const breed2 = await p.type("cat");
    expect(breed1).toEqual(breed2);
  });

  test("organization", async () => {
    expect.assertions(1);
    const org1 = await p.requestLink("/v2/organizations/ca855");
    const org2 = await p.organization("CA855");
    expect(org1).toEqual(org2);
  });

  test("animal", async () => {
    expect.assertions(1);
    const org1 = await p.requestLink("/v2/animals/44457807");
    const org2 = await p.animal(44457807);
    expect(org1).toEqual(org2);
  });

  test("animals", async () => {
    expect.assertions(1);
    const org1 = await p.requestLink("/v2/animals?organization=ca855");
    const org2 = await p.animals({ organization: "ca855" });
    expect(org1).toEqual(org2);
  });
});
