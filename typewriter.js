const sentence = "hello there from lighthouse labs";

let delay = 0;

const typeWriter = (sentence) => {
  for (let c of sentence) {
    setTimeout(() => process.stdout.write(c), delay);
    delay += 50;
  }
};

typeWriter(sentence);
