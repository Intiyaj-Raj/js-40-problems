function sum(a, b) {
    let s = a + b;
    console.log("Sum = " + s)
}

sum(1, 2)
sum(10, 20)
sum(-1, 2)
sum(-1, -3)
sum(1, 0)
sum(1, 1.5)
sum(2.5, 1.5)

// here output = Not a Number
sum(1.2)
// gives err
// sum(1.2, Nan)
sum('1' + 2)

// gives
sum(1 + true)

/*
'1' + 2
JS me string + number = string
So '1' + 2 = "12"

👉 Ab function call ban gaya:
sum("12")

2. Function parameters
function sum(a, b)
a = "12"
b = undefined(bcz 2nd value is not given)

3. Inside function
    let sum = a + b;
👉 "12" + undefined = "12undefined"

*/