
function monthsOld(birthdate) {
    const today = new Date();
    const birth = new Date(birthdate);

    let yearsDifference = today.getFullYear() - birth.getFullYear();
    let monthsDifference = today.getMonth() - birth.getMonth();

    // Total months
    let totalMonths = yearsDifference * 12 + monthsDifference;

    // If the day of the month hasn't passed yet, subtract 1
    if (today.getDate() < birth.getDate()) {
        totalMonths -= 1;
    }

    return totalMonths;
}

// Example usage:
let myBirthdate = '2000-05-15'; // YYYY-MM-DD
console.log(`You are ${monthsOld(myBirthdate)} months old.`);
