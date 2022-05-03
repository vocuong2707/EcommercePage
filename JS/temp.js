import { NikeData } from "./nikeData.js";
const newData = NikeData.sort((a, b) => (a.name > b.name ? 1 : -1));

console.log(newData);
