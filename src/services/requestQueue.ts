import pLimit from "p-limit";

const queue = pLimit(5);

export default queue;