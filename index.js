class Pet {
    constructor(petName, ownerName, species, breed) {
      this.petName = petName;
      this.ownerName = ownerName;
      this.species = species;
      this.breed = breed;
    }

    // static sameOwner(otherPet) {
    //   return this.ownerName === otherPet.ownerName
    // }
  }

  let petForm = document.getElementById("pet-form"); //.submit()
  let petList = document.getElementById("pet-list");

  petForm.addEventListener("submit", function (event) {
    event.preventDefault();

    let petNameInput = document.getElementById("pet-name");
    let ownerNameInput = document.getElementById("owner-name");
    let speciesInput = document.getElementById("species");
    let breedInput = document.getElementById("breed");

    const pet = new Pet(
      petNameInput.value,
      ownerNameInput.value,
      speciesInput.value,
      breedInput.value
    );

    const listItem = document.createElement("li");
    listItem.textContent = `${pet.petName} è un ${pet.species}, di razza ${pet.breed} e il suo  proprietario si chiama: ${pet.ownerName}`;
    petList.appendChild(listItem);

    // listItem.forEach(function (item) {
    //   if (ownerNameInput.value === newPet.ownerName) {
    //     return  true;
    //   }
    // })

    petNameInput.value = "";
    ownerNameInput.value = "";
    speciesInput.value = "";
    breedInput.value = "";
  });