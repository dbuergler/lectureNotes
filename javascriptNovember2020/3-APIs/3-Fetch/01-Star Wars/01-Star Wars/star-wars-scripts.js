// let starWarsPeopleList = document.querySelector('ul');

// fetch('https://swapi.dev/api/people') 
// .then(function(response) { 
//    console.log(response)
// })

// fetch('https://swapi.dev/api/people') 
// .then(function(response) {   
//   return response.json(); 
// })
// .then(function(json) {
//     console.log(json)
// });

// let starWarsPeopleList = document.querySelector('ul');

// fetch('https://swapi.dev/api/people') 
// .then(function(response) {   
//   return response.json(); 
// })
// .then(function(json) {
//   let people = json.results;
  
//   for(p of people) { //*Always use for of here or array numbers will appear*
//     console.log(p);
//   }

//   for(p in people){
//     console.log(p);
//   }
// });

let starWarsPeopleList = document.querySelector('ul');

fetch('https://swapi.dev/api/people') 
.then(function(response) {   
  return response.json(); 
})
.then(function(json) {
  let people = json.results; 

  for(p of people) {
    let listItem = document.createElement('li'); 
    listItem.innerHTML = '<p>' + p.name + '</p>';
    starWarsPeopleList.appendChild(listItem);   
  }

});