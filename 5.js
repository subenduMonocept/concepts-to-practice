// Write a function to flatten a deeply nested object.
// Concept tested: Recursion, object traversal (useful for mapping Salesforce data).

const nestedObj = {
  account: {
    id: "001",
    name: "Acme Corp",
    contact: {
      id: "003",
      email: "contact@acme.com",
      phone: {
        id: "005",
        number: "0001110001",
      },
      num: [1, 2, 3],
    },
  },
  active: true,
};

function flattenObject(obj, result = {}, keyName = "") {
  for (let [key, value] of Object.entries(obj)) {
    if (typeof value !== "object" || value === null) {
      if (keyName !== "") {
        result[`${keyName}_${key}`] = value;
      } else {
        result[key] = value;
      }
    } else {
      flattenObject(value, result, key);
    }
  }
  return result;
}

function flattenObject2(obj) {
  const result = {};

  function recurse(curr, path) {
    for (let [key, value] of Object.entries(curr)) {
      const newKey = path ? `${path}.${key}` : key;
      if (
        typeof value === "object" &&
        value !== null &&
        !Array.isArray(value)
      ) {
        recurse(value, newKey);
      } else {
        result[newKey] = value;
      }
    }
  }

  recurse(obj, "");
  return result;
}

const flat = flattenObject(nestedObj);
console.log(flat);
const flat2 = flattenObject2(nestedObj);
console.log(flat2);
/*
    {
      'account.id': '001',
      'account.name': 'Acme Corp',
      'account.contact.id': '003',
      'account.contact.email': 'contact@acme.com',
      'active': true
    }
    */

const obj = {
  a: {
    b: {
      c: 1,
    },
    d: 2,
  },
  e: 3,
};

// recurse(obj, '')
// Loops over keys a and e.

// Encounters a, which is an object → calls recurse(obj.a, 'a')

// Loops over keys b and d.

// Encounters b, which is an object → calls recurse(obj.a.b, 'a.b')

// Loops over key c.

// c is a value → result["a.b.c"] = 1
// Stack unwinds one level (back to obj.a)

// Now back to obj.a, continues loop → encounters d, which is a value
// → result["a.d"] = 2
// Stack unwinds again (back to obj)

// Back at obj, continues loop → encounters e
// → result["e"] = 3
const flat3 = flattenObject2(obj);
console.log(flat3);
