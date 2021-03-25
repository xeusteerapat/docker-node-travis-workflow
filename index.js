function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  while (true) {
    console.log(`Containers rule! ${Math.floor(Math.random() * 10)}`);
    await sleep(2000);
  }
}

main();
