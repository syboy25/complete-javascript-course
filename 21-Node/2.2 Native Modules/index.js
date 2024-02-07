const fs = require("fs/promises");

// fs.writeFile("message.txt", "Changed Text!", (err) => {
//   if (err) throw err;
//   console.log("The file has been saved!");
// });

async function example() {
  try {
    const data = await fs.readFile("./message.txt", {
      encoding: "utf8",
    });
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}

example();
