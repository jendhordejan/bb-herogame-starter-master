// Write your JS here

//functions: add all functions here
//rest function : function to heal your hero
function rest(person) {
  console.log('you are inside rest function')
  console.log(person.name)


  //set character health to 10
  if (person.health<10){
    person.health = 10;
      alert('Your health is full and ready to battle')
  } else if (person.health==10){
      alert('Your health is still full.')
    }
  return person;
}



//pickUpItem : function the pick-up items.
function pickUpItem(a) {
  /* ... */
}

//equipWeapon : function to equipt hero weapon
function equipWeapon(a) {
  /* ... */
}






//Create a hero.
const hero = {
  name: 'Rein',
  class: 'Knight',
  weapon: {
    type: 'Sword',
    damage: 2
  },
  attack: 10,
  health: 10,
  heroic: true,
  inventory: []
}

console.log(`hero health before rest: ${hero.health}`)
//for testing
//hero.health=8;
rest(hero);
console.log(hero.health)