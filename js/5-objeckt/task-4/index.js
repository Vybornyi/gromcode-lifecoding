// input: Object
// output: sort Array




const getCustomersList = obj => {
  // put your code here
  const keys = Object.keys(obj);
  return keys.reduce((acc, elem, index) => {
    acc[index] = { ...customers[elem], id: elem };
    return acc;
  }, []);
};

const customers = {
  'customer-id-1': {
    name: 'William',
    age: 53,
  },
  'customer-id-2': {
    name: 'Inness',
    age: 18,
  },
  'customer-id-3': {
    name: 'Tom',
    age: 25,
  },
};
console.log(getCustomersList(customers));


//
/* function buildObject(keysList, valuesList) {
  return keysList.reduce((obj, key, index) => {
    console.log(obj);
    obj[key] = valuesList[index];
    console.log('index', index, obj);
    return obj;

  }, {});
}


const keys = ['name', 'address', 'age'];
const values = ['Bob', 'Ukraine', 34];
const result = buildObject(keys, values);
console.log(result); */