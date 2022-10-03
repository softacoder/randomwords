var animal, verb, adjective, animal2;

function randomInt(n) {
  // Return a random number from in [0, n[
  return Math.floor(Math.random()*n);
}

function randomMember(arr) {
  // Return a random member of the array
  return arr[randomInt(arr.length)]
}


animal = ['dog', 'cat', 'shark', 'bird'];
let element_animal = document.getElementById('animal');
element_animal.innerText = randomMember(animal);
verb = ['find', 'jump', 'want'];
let element_verb = document.getElementById('verb');
element_verb.innerText = randomMember(verb);
adjective = ['black', 'blue', 'pink'];
let element_adjective = document.getElementById('adjective');
element_adjective.innerText = randomMember(adjective);
animal2 = ['horse', 'bat', 'bird'];
let element_animal2 = document.getElementById('animal2');
element_animal2.innerText = randomMember(animal2);
