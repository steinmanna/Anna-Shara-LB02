let smoothie1 = {
    "smoothiename" : "Purple Smoothie",
    "content" : "250 ml",
    "vegan" : "ja",
    "infos" : {
        "nutritionalvalue": ["Kalorien 53", "Kohlenhydrate 12,4g", "Zuker 10,7g", "Salz 0g"],
        "ingredients": ["Apfel", "Orange", "Bananen", "Heidelbeeren", "Himbeeren", "Brommbeeren", "Johannisbeeren"]
    }
     
    
}

let htmlObj = document.getElementById("purplesmoothie");
htmlObj.innerHTML =
    `Smoothie Name: ${smoothie1.smoothiename}<br>`+
    `Inhalt: ${smoothie1.content}<br>`+
    `Vegan: ${smoothie1.vegan}<br>`;

htmlObj = document.getElementById("purpleingredients");
        smoothie1.infos.ingredients.forEach(value => {
        htmlObj.innerHTML += `${value}<br>`;
    });

 htmlObj = document.getElementById("purplevalues");
    smoothie1.infos.nutritionalvalue.forEach(value => {
    htmlObj.innerHTML += `${value}<br>`;
});


//----------------------------------------

let smoothie2 = {
    "smoothiename" : "Yellow Smoothie",
    "content" : "250 ml",
    "vegan" : "ja",
    "infos" : {
        "nutritionalvalue": ["Kalorien 62", "Kohlenhydrate 14,6g", "Zuker 13,4g"],
        "ingredients": ["Orange", "Apfel", "Banane", "Mango", "Maracujas"]
    }
     
    
}

 htmlObj = document.getElementById("yellowsmoothie");
htmlObj.innerHTML =
    `Smoothie Name: ${smoothie2.smoothiename}<br>`+
    `Inhalt: ${smoothie2.content}<br>`+
    `Vegan: ${smoothie2.vegan}<br>`;

htmlObj = document.getElementById("yellowingredients");
        smoothie2.infos.ingredients.forEach(value => {
        htmlObj.innerHTML += `${value}<br>`;
    });

 htmlObj = document.getElementById("yellowvalues");
    smoothie2.infos.nutritionalvalue.forEach(value => {
    htmlObj.innerHTML += `${value}<br>`;
});


//----------------------------------------

let smoothie3 = {
    "smoothiename" : "Rewe Smoothie",
    "content" : "250 ml",
    "vegan" : "ja",
    "infos" : {
        "nutritionalvalue": ["Kalorien 51", "Kohlenhydrate 12g", "Zuker 12g", "Salz <0,1g"],
        "ingredients": ["Trauben", "Rhabarber", "Apfel", "Banane", "Birne", "Schwarze Karotte", "Vanille"]
    }
     
    
}

 htmlObj = document.getElementById("rewesmoothie");
htmlObj.innerHTML =
    `Smoothie Name: ${smoothie3.smoothiename}<br>`+
    `Inhalt: ${smoothie3.content}<br>`+
    `Vegan: ${smoothie3.vegan}<br>`;

htmlObj = document.getElementById("reweingredients");
        smoothie3.infos.ingredients.forEach(value => {
        htmlObj.innerHTML += `${value}<br>`;
    });

 htmlObj = document.getElementById("rewevalues");
    smoothie3.infos.nutritionalvalue.forEach(value => {
    htmlObj.innerHTML += `${value}<br>`;
});

//----------------------------------------

let smoothie4 = {
    "smoothiename" : "Kaufland Smoothie",
    "content" : "250 ml",
    "vegan" : "ja",
    "infos" : {
        "nutritionalvalue": ["Kalorien 67", "Kohlenhydrate 16g", "Zuker 15g", "Salz <0,1g"],
        "ingredients": ["Apfel", "Banane", "Trauben", "Guave", "Yuzu", "Spirulinaextrakt"]
    }
     
    
}

 htmlObj = document.getElementById("kauflandsmoothie");
htmlObj.innerHTML =
    `Smoothie Name: ${smoothie4.smoothiename}<br>`+
    `Inhalt: ${smoothie4.content}<br>`+
    `Vegan: ${smoothie4.vegan}<br>`;

htmlObj = document.getElementById("kauflandingredients");
        smoothie4.infos.ingredients.forEach(value => {
        htmlObj.innerHTML += `${value}<br>`;
    });

 htmlObj = document.getElementById("kauflandvalues");
    smoothie4.infos.nutritionalvalue.forEach(value => {
    htmlObj.innerHTML += `${value}<br>`;
});

//----------------------------------------

let smoothie5 = {
    "smoothiename" : "Pink Smoothie",
    "content" : "250 ml",
    "vegan" : "ja",
    "infos" : {
        "nutritionalvalue": ["Kalorien 53", "Kohlenhydrate 12,4g", "Zuker 10,7g", "Salz 0g"],
        "ingredients": ["Apfel", "Banane", "Guanabana", "Darchenfrucht"]
    }
     
    
}

 htmlObj = document.getElementById("pinksmoothie");
htmlObj.innerHTML =
    `Smoothie Name: ${smoothie5.smoothiename}<br>`+
    `Inhalt: ${smoothie5.content}<br>`+
    `Vegan: ${smoothie5.vegan}<br>`;

htmlObj = document.getElementById("pinkingredients");
        smoothie5.infos.ingredients.forEach(value => {
        htmlObj.innerHTML += `${value}<br>`;
    });

 htmlObj = document.getElementById("pinkvalues");
    smoothie5.infos.nutritionalvalue.forEach(value => {
    htmlObj.innerHTML += `${value}<br>`;
});
  
//----------------------------------------

let smoothie6 = {
    "smoothiename" : "Green Smoothie",
    "content" : "250 ml",
    "vegan" : "ja",
    "infos" : {
        "nutritionalvalue": ["Kalorien 53", "Kohlenhydrate 11,6g", "Zuker 10,5g", "Salz 0g"],
        "ingredients": ["Apfel", "Banane", "Blätter Spinat", "Birne", "Blatt Grünkohl", "Ingwer", "Matcha"]
    }
     
    
}

 htmlObj = document.getElementById("greensmoothie");
htmlObj.innerHTML =
    `Smoothie Name: ${smoothie6.smoothiename}<br>`+
    `Inhalt: ${smoothie6.content}<br>`+
    `Vegan: ${smoothie6.vegan}<br>`;

htmlObj = document.getElementById("greeningredients");
        smoothie6.infos.ingredients.forEach(value => {
        htmlObj.innerHTML += `${value}<br>`;
    });

 htmlObj = document.getElementById("greenvalues");
    smoothie6.infos.nutritionalvalue.forEach(value => {
    htmlObj.innerHTML += `${value}<br>`;
});

//----------------------------------------

let smoothie7 = {
    "smoothiename" : "Mint Smoothie",
    "content" : "250 ml",
    "vegan" : "ja",
    "infos" : {
        "nutritionalvalue": ["Kalorien 55", "Kohlenhydrate 13g", "Zuker 12g", "Salz 0g"],
        "ingredients": ["Ananas", "Apfel", "Orange", "Banane", "Cashew-Apfel", "Key Lime", "Minze"]
    }
     
    
}

 htmlObj = document.getElementById("mintsmoothie");
htmlObj.innerHTML =
    `Smoothie Name: ${smoothie7.smoothiename}<br>`+
    `Inhalt: ${smoothie7.content}<br>`+
    `Vegan: ${smoothie7.vegan}<br>`;

htmlObj = document.getElementById("mintingredients");
        smoothie7.infos.ingredients.forEach(value => {
        htmlObj.innerHTML += `${value}<br>`;
    });

 htmlObj = document.getElementById("mintvalues");
    smoothie7.infos.nutritionalvalue.forEach(value => {
    htmlObj.innerHTML += `${value}<br>`;
});

//----------------------------------------

let smoothie8 = {
    "smoothiename" : "Orange Smoothie",
    "content" : "250 ml",
    "vegan" : "ja",
    "infos" : {
        "nutritionalvalue": ["Kalorien 49", "Kohlenhydrate 11g", "Zuker 10g"],
        "ingredients": ["Apfel", "Mango", "Acerola-Kirsche", "Goji Beeren", "Orangenschale"]
    }
     
    
}

 htmlObj = document.getElementById("orangesmoothie");
htmlObj.innerHTML =
    `Smoothie Name: ${smoothie7.smoothiename}<br>`+
    `Inhalt: ${smoothie8.content}<br>`+
    `Vegan: ${smoothie8.vegan}<br>`;

htmlObj = document.getElementById("orangeingredients");
        smoothie8.infos.ingredients.forEach(value => {
        htmlObj.innerHTML += `${value}<br>`;
    });

 htmlObj = document.getElementById("orangevalues");
    smoothie8.infos.nutritionalvalue.forEach(value => {
    htmlObj.innerHTML += `${value}<br>`;
});