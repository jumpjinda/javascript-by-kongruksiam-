for (let count = 1; count <= 10; count++) {
    if (count == 5) break;
    console.log(count);
}
console.log("End")

for (let count = 1; count <= 10; count++) {
    if (count == 5) continue;
    console.log(count);
}
console.log("End")