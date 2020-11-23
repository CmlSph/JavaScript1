const NumChildren = [2, 0, 3, 1, 4];
const partnerNames = ["Sabrina", "Hanna", "Martha", "Ilse", "Manon"];
const locations = ["Netherlands", "France", "Norway", "Italy", "USA"];
const jobs = ["Web Developer", "Lawyer", "Astronaut", "Police", "Journalist"];

function tellFortune(NumChildren, partnerNames, locations, jobs){
    const randomNumChildren = NumChildren[Math.floor(Math.random() * 5)];
    const randomPartnerNames = partnerNames[Math.floor(Math.random() * 5)];
    const randomLocations = locations[Math.floor(Math.random() * 5)];
    const randomJobs = jobs[Math.floor(Math.random() * 5)];

    console.log("You will be a " + [randomJobs] + " in the " + [randomLocations] + ", " + "married to " + [randomPartnerNames] + " with " + [randomNumChildren] + " kids.")

}

tellFortune(NumChildren, partnerNames, locations, jobs);
tellFortune(NumChildren, partnerNames, locations, jobs);
tellFortune(NumChildren, partnerNames, locations, jobs);