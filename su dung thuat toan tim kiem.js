let randomPhonenumber = [976222333, 981234312, 121323226, 970222333, 421234352, 960214568, 874562122];
let regex = /^[9][678][0-9]{7}$/;

for (let i = 0; i < randomPhonenumber.length; i++) {
    console.log(regex.test(randomPhonenumber[i]));
}