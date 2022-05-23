const findTheOldest = function(people) {
    const oldest = people.sort((a, b) => {
        if(a.yearOfDeath == undefined) {
            a.yearOfDeath = new Date().getFullYear();
        }
        if(b.yearOfDeath == undefined) {
            b.yearOfDeath = new Date().getFullYear();
        }
        const lastGuy = a.yearOfDeath - a.yearOfBirth;
        const nextGuy = b.yearOfDeath - b.yearOfBirth;
        return lastGuy > nextGuy ? -1 : 1;
    });
    console.log(oldest);
    console.log(oldest[0].name);
    return oldest[0];
};

// Do not edit below this line
module.exports = findTheOldest;
