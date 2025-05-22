const fs = require("fs");
const stream = fs.createReadStream("file.txt");

// const stream = fs.createReadStream("file.txt", { highWaterMark: 10 });
// highWaterMark - to see the divided chunk

stream.on("data", (chunk) => console.log("Chunk:", chunk.toString()));
stream.on("end", () => console.log("Finished reading."));
stream.on("error", (err) => console.error("Error:", err));
