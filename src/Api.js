
const api = "http://localhost:9898";
//const api = "https://reactnd-books-api.udacity.com";


// Generate a unique token for storing your bookshelf data on the backend server.
let token = localStorage.token
if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8)

const headers = {
  'Accept': 'application/json'
}


export const getAll = async () =>{
  let response = await fetch(`${api}/pedidos`, { headers });
  let json = await response.json();
  //console.log(json);
  return json;
}
  /*fetch(`${api}/pedidos`, { headers })
    .then(res => res.json())
    .then(data => console.log(data))*/

export const insert = (count1,count2, dat) =>
fetch(`${api}/pedidos`, {
  method: 'POST',
  headers: {
    ...headers,
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    date: dat,
    pizzas: [{
      name: 'Hawaiana',
      count: count1
    },
    {
      name: 'Peperoni', 
      count: count2
    }
  ]
  })
}).then(res => res.json())
    .then(data => console.log(data))
    /*
export const insert = async(count1,count2) =>{
  let response = await fetch(`${api}/pedidos`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      pizzas: [{
        name: 'Hawaiana',
        count: count1
      },
      {
        name: 'Peperoni', 
        count: count2
      }
    ]
    })
  });
  let json = await response.json();
  //console.log(json);
  return json;
}*/


   