import { solutions } from "./exercises";
import * as fs from "fs";
const day = parseInt(process.argv[2]);

if (isNaN(day)) {
  console.error("Arg is not a number (1-25)");
  process.exit(-1);
}

const testData: string = fs.readFileSync(`data/${day}_test.txt`).toString();
const realData: string = fs.readFileSync(`data/${day}.txt`).toString();

if (process.argv[3] == "run") {
  solutions[day - 1](realData);
} else {
  solutions[day - 1](testData);
}
