const findTheOldest = function(people) {
    const sortedAges = people.sort((p1, p2) => {
        const age1 = getAge(p1.yearOfBirth, p1.yearOfDeath);
        const age2 = getAge(p2.yearOfBirth, p2.yearOfDeath);
        return age1 > age2 ? 1 : -1;
    })
    return sortedAges[sortedAges.length - 1];
};

const getAge = function(birth, death) {
    if(!death) {
        death = new Date().getFullYear();
    }
    return death - birth;
}

// Do not edit below this line
module.exports = findTheOldest;
