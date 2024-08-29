const yargs = require("yargs");

const argv = yargs
  .command("greet", "Greet a person", {
    name: {
      description: "Name of the person to greet",
      alias: "n",
      type: "string",
    },
  })
  .help()
  .alias("help", "h").argv;

if (argv._.includes("greet")) {
  console.log(`Hello, ${argv.name}!`);
}
