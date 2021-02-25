// Test 7: Any language (2/20)
// You have a huge file named "data.bin" that does not fit in memory; code a program that deletes every 7th byte of it. truncate can be used to change its size.

const fs = require("fs");

function reduceByte(filename) {
  const read = fs.createReadStream(__dirname + "/" + filename, {
    highWaterMark: 7 * 8 * 1024,
  });
  const write = fs.createWriteStream("reduce" + filename);

  read.on("data", (chunk) => {
    const chunkLength = chunk.length;
    console.log(`Length original : ${chunkLength}`);

    let chunkArray = [];

    for (i = 0; i < chunkLength; i += 8) {
      chunkArray.push(chunk.subarray(i, i + 7));
    }

    let reducedChunk = Buffer.concat(chunkArray);
    console.log(reducedChunk.length);
    write.write(reducedChunk);
  });

  read.on("end", (err) => {
    if (err) return console.log(`Error : ${err}`);
    console.log("Finish");
  });
}

reduceByte("./../data.bin");
