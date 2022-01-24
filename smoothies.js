class Smoothie{
    smoothieName;
    smoothieContent;
    price;

    constructor(smoothieName,smoothieContent, price) {
        this.smoothieName = smoothieName;
        this.smoothieContent = smoothieContent;
        this.price = price;
    }
}

let smoothieArray = [];
smoothieArray.push(new Smoothie("Purple","250ml", "3.-"));
smoothieArray.push(new Smoothie("Yellow","250ml", "3.-"));
smoothieArray.push(new Smoothie("Orange","250ml", "3.-"));
smoothieArray.push(new Smoothie("Pink","250ml", "3.-"));
smoothieArray.push(new Smoothie("Green","250ml", "3.-"));
smoothieArray.push(new Smoothie("Mint","250ml", "3.-"));
smoothieArray.push(new Smoothie("Kaufland","250ml", "3.-"));
smoothieArray.push(new Smoothie("Rewe","250ml", "3.-"));

console.log(smoothieArray);
