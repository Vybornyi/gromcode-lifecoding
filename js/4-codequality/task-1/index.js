//const withdraw = (clients, balances, client, amount) => {
//remove logicfrom if
//get rid of duplicates
//dont use find

/*   //bad
  balances.find((item, index) => clients.indexOf(client) === index
 
  //good
    balances[clients.indexOf(client)]; */

//if (balances.find((item, index) => clients.indexOf(client) === index) < amount) {
//return -1;
//}
//return balances.find((item, index) => clients.indexOf(client) === //index) - amount;
//};

/* const withdraw = (clients, balances, client, amount) => {
  const balance = balances[clients.indexOf(client)];
  return balance >= amount
    ? (balances[clients.indexOf(client)] -= amount)
    : -1;
}
 */
//bad
/* onst withdraw = (clients, balances, client, amount) => {
  let clientBalance = balances[clients.indexOf(client)]
  if (clientBalance >= amount) {
    clientBalance -= amount;
    balances[clients.indexOf(client)] = clientBalance;
    return (clientBalance);
  };

  return -1;
} */

//good
/* const withdraw = (clients, balances, client, amount) => {
  const clientIndex = clients.indexOf(client);

  if (balances[clientIndex] < amount) {
    return -1;
  }

  balances[clientIndex] -= amount;

  return balances[clientIndex];
}; */

/* const withdraw = (clients, balances, client, amount) => {
  const curentClient = clients.indexOf(client); */
/*  balances[curentClient] -= amount;
 return balances[curentClient] > 0 ? newBalance : -1; */
/*  return balances[curentClient] < 0 ? -1 : balances[curentClient] -= amount;
}; */

//bad


/* const withdraw = function (clients, balances, client, amount) {
  if (balances[clients.indexOf(client)] - amount < 0) {
    return -1;
  }
  balances[clients.indexOf(client)] -= amount;
  return balances[clients.indexOf(client)];
}; */
//good 
/* const withdraw = function (clients, balances, client, amount) {
  const clientIndex = clients.indexOf(client);

  if (balances[clientIndex] < amount) {
    return -1;
  }

  balances[clientIndex] -= amount;

  return balances[clientIndex];
}; */

//put your code here

/* const withdraw = (clients, balances, client, amount) => {
  const clientIndex = clients.indexOf(client);
  return balances[clientIndex] < amount ? -1 : balances[clientIndex] -= amount;
} */
// DIMA
/* const withdraw = (clients, balances, client, amount) => {
  const clientBalance = balances[clients.indexOf(client)];

  return clientBalance < amount ? -1 : clientBalance - amount;
}; */
/* const withdraw = (clients, balances, client, amount) => {
  if (balances[clients.indexOf(client)] > amount) {
    return (balances[clients.indexOf(client)] -= amount);
  }
  return -1;
} */

/* const withdraw = (clients, balances, client, amount) =>
  balances[clients.indexOf(client)] >= amount ? balances[clients.indexOf(client)] - amount : -1; */

/* const getRandomNumbers = (length, from, to) => {
  const arr = new Array(length);
  if (to - from < 1) {
    return null;
  }
  return arr.fill(Math.trunc(Math.random() * (Math.ceil(to) - Math.ceil(from)) + Math.ceil(from)));
}; */

const getRandomNumbers = (length, from, to) => {
  const fromCeil = Math.ceil(from);
  const toCeil = Math.ceil(to);
  if (toCeil - fromCeil < 1) {
    return null;
  }

  return new Array(length).fill(
    Math.trunc(Math.random() * (toCeil - fromCeil) + fromCeil));
};
console.log(getRandomNumbers(7, 1.7, 2.5));