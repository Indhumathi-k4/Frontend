enum Color {
    Red = "Red",
    Green = "Green",
    Blue = "Blue"
}

function getColorName(color: Color): string {
    return color;
}


console.log(getColorName(Color.Red));
console.log(getColorName(Color.Green));
console.log(getColorName(Color.Blue));