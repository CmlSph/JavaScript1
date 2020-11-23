function giveCompliment(name){
    const compliments = ["great", "awesome", "wonderful", "unbeliavable", 
    "clever", "supersmart", "very good", "excellent", "amazing", "admirable"];

    const randomCompliment = compliments[Math.floor(Math.random() * 10)];

    console.log("You are " + randomCompliment+ "," + " " + name + "!")

};

giveCompliment("Cemal");
giveCompliment("Cemal");
giveCompliment("Cemal");