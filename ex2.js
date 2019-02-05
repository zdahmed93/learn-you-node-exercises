const array = process.argv.filter((item, index)=>{
    return index > 1;
});
const array2 = array.map((item)=>{
return Number(item);
});
const sum = array2.reduce((acc,current)=>{ return acc + current})
console.log(sum);