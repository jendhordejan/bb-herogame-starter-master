// Write your JS here
//Create a hero.
const hero = {
  name: 'Rein',
  class: 'Knight',
  weapon: {
    type: 'Sword',
    damage: 2
  },
  attack: 0,
  health: 8,
  heroic: true,
  inventory: []
}

const innElement = document.getElementById("inn")
const daggerElement = document.getElementById("dagger")

const changeHeroNameElement = document.getElementById("btnChangeName")
let NewHeroName='';

  

//functions: add all functions here
//rest function : function to heal your hero
function rest(person) {
  //set character health to 10
  if (person.health<10){
    person.health = 10;
    hero.health=10;
      alert('Your health is full and ready to battle');
      displaystats('health')
  } else {
      alert('Your health is still full')
  }
  return person;
}

//equipWeapon : function to equipt hero weapon
function equipWeapon(person) {
  /* ... */
    person.weapon = person.innElement[0];
    displaystats('weapon')
    return person;
}

//pickUpItem : function to pickup item.
function pickUpItem(person,weapon){
  person.inventory[person.inventory.length] = weapon;
  hero.inventory[hero.inventory.length] = weapon;
  return person;
}




innElement.addEventListener('click', event => {
  console.log('inn is clicked')
  rest(hero)
})

daggerElement.addEventListener('click', event => {
  console.log('dagger is clicked')
  const dagger = {type: 'dagger', damage: 2};
  pickUpItem(hero, dagger)
})

changeHeroNameElement.addEventListener('click', event => {
  let sign = prompt("Change Your Hero Name")
  sign = window.prompt();
  NewHeroName=sign
  displaystats('heroname')
  
})


//function to display hero stats
function displaystats(statname){
  const secElement = document.getElementById("hero stats");
  const aNameElement = document.getElementById("heroname");
  const aHealthElement = document.getElementById("health");
  const aWeapElement = document.getElementById("weapon");
  const aInventoryElement = document.getElementById("inventory");
  if (statname=='all'){  
    aNameElement.innerText = `Name: ${hero.name}` 
    aHealthElement.innerText = `Health: ${hero.health}`
    aWeapElement.innerText = `Weapon: ${hero.weapon.type} - ${hero.weapon.damage}`
    aInventoryElement.innerText = `Inventory: ${hero.inventory.length}`
  
    secElement.appendChild(aNameElement);
    secElement.appendChild(document.createElement('br'))
    secElement.appendChild(aWeapElement);
    secElement.appendChild(document.createElement('br'))
    secElement.appendChild(aHealthElement);
    secElement.appendChild(document.createElement('br'))
    secElement.appendChild(aInventoryElement)
  } else if (statname=='heroname'){
    hero.name = NewHeroName
    aNameElement.innerText = `Name: ${hero.name}`
  } else if (statname=='health'){
    aHealthElement.innerText = `Health: ${hero.health}`
  } else if (statname=='weapon'){
    aWeapElement.innElement = `Weapon: ${hero.weapon.type} - ${hero.weapon.damage}`
  }


}

displaystats('all')









