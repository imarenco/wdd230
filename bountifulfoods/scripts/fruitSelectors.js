const url = 'https://brotherblazzard.github.io/canvas-content/fruit.json'

var fruitsList = [];

async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        displaySelect(data);
        fruitsList = data;
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
}

apiFetch();

function displaySelect(data) {
    const fruit1 = document.getElementById('fruit1');
    const fruit2 = document.getElementById('fruit2');
    const fruit3 = document.getElementById('fruit3');

    data.forEach(element => {
        const option = document.createElement("option");
        option.text = element.name;
        option.value = element.name;
        fruit1.appendChild(option);
    });

    data.forEach(element => {
        const option = document.createElement("option");
        option.text = element.name;
        option.value = element.name;
        fruit2.appendChild(option);
    });

    data.forEach(element => {
        const option = document.createElement("option");
        option.text = element.name;
        option.value = element.name;
        fruit3.appendChild(option);
    });
}



document.addEventListener("submit", function(event) {
    event.preventDefault();

    // values
    const name = document.getElementsByName("firstName")[0].value;
    const email = document.getElementsByName("email")[0].value;
    const phone = document.getElementsByName("phone")[0].value;
    const fruit1 = document.getElementsByName("fruit1")[0].value;
    const fruit2 = document.getElementsByName("fruit2")[0].value;
    const fruit3 = document.getElementsByName("fruit3")[0].value;
    const description = document.getElementsByName("description")[0].value;;

    // tags
    const nameTag = document.getElementById("first-name-label");
    const emailTag = document.getElementById("email-label");
    const phoneTag = document.getElementById("phone");
    const fruits = document.getElementById("fruits");
    const descriptionTag = document.getElementById("description");
    const total = document.getElementById("total");

    
    // assign
    nameTag.textContent = `Name: ${name}`;
    emailTag.textContent = `Email: ${email}`;
    phoneTag.textContent = `Phone: ${phone}`;
    descriptionTag.textContent = `Description: ${description}`;
    fruits.textContent = `Fruits: ${fruit1}, ${fruit2}, ${fruit3}`;
    let carbohydrates = 0;
    let protein = 0;
    let fat = 0;
    let sugar = 0;
    let calories = 0;

    [fruit1, fruit2, fruit3].forEach(fruit => {

        const selectedFruit = fruitsList.find(item => item.name === fruit);
        carbohydrates = carbohydrates + selectedFruit.nutritions.carbohydrates;
        protein = protein + selectedFruit.nutritions.protein;
        fat = fat + selectedFruit.nutritions.fat;
        sugar = sugar + selectedFruit.nutritions.sugar;
        calories = calories + selectedFruit.nutritions.calories;
    }); 

    total.textContent = `Carbohydrates: ${carbohydrates.toFixed(2)}, Protein${protein.toFixed(2)}, Fat: ${fat.toFixed(2)}, Sugar: ${sugar.toFixed(2)}, Calories: ${calories.toFixed(2)}`;
    
    document.getElementById("thank-you").style.display = 'block';
});