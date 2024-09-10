const conjoin = (flockX:number, flockY:number) => flockX + flockY;
const breed = (flockX:number, flockY:number) => flockX * flockY;

const flockA = 4;
const flockB = 2;
const flockC = 0;
const result =
    conjoin(breed(flockB, conjoin(flockA, flockC)), breed(flockA, flockB));

console.log("result is (in FP) => ", result)
