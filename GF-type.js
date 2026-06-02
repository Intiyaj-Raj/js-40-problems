const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// You in blue
rl.question("\x1b[34mYou:\x1b[0m ", (input) => {

    setTimeout(() => {
        console.log("\x1b[32mSeen\x1b[0m");

        setTimeout(() => {
            typeText("GF is typing...", () => {

                setTimeout(() => {
                    typeText("I don’t want to talk anymore...", () => {

                        setTimeout(() => {
                            typeText("You are blocked 🚫", () => {
                                rl.close();
                            }, "\x1b[31m");
                        }, 2000);

                    });
                }, 1000);

            }, "\x1b[34m");

        }, 1000);

    }, 1500);

});

function typeText(text, callback, color = "\x1b[0m") {
    let i = 0;

    let interval = setInterval(() => {
        process.stdout.write(color + text.charAt(i) + "\x1b[0m");
        i++;

        if (i >= text.length) {
            clearInterval(interval);
            process.stdout.write("\n");
            if (callback) callback();
        }
    }, 50);
} i