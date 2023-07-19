const readline = require("readline");

// Function to fetch word definitions from a dictionary API
function getWordDefinition(word) {
  const request = require("request");
  request.get(
    {
      url: "https://api.api-ninjas.com/v1/dictionary?word=" + word,
      headers: {
        "X-Api-Key": "YOUR-API-KEY",
      },
    },
    function (error, response, body) {
      if (error) return console.error("Request failed:", error);
      else if (response.statusCode !== 200)
        return console.error(
          "Error:",
          response.statusCode,
          body.toString("utf8")
        );
      else console.log(body);
    }
  );
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter a word to get its definition: ", (word) => {
  const definition = getWordDefinition(word);
  console.log(definition);
  rl.close();
});
