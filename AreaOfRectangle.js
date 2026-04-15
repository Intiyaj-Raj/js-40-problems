function calcArea(length, breadth) {

    if (typeof length !== "number" || length <= 0) {
        console.log("Length must be a positive number");
    }

    else if (typeof breadth !== "number" || breadth <= 0) {
        console.log("Breadth must be a positive number");
    }

    else {
        console.log("Area of Rectangle: " + (length * breadth));
    }
}

// calcArea(-10, 20);
// calcArea(10, -20)
// calcArea(10, "20")
// calcArea(10, 20)
// calcArea("10", "20")

calcArea(10, true)
calcArea(10, false)
calcArea(5,)
calcArea(5, NaN)
