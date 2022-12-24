function facts(){
    const text = document.querySelector("fact");
    const facts = [
    {
        text:"Recycling one aluminum can saves enough energy to run a TV for three hours."
    },
    {
        text:"During the time it takes you to read this sentence, 50,000 12-ounce aluminum cans are made."
    },
    {
        text:"An aluminum can may be recycled ad infinitum (forever!)."
    },
    {
        text:"We consume over 80 trillion aluminum cans every year."
    },
    {
        text:"The world's tallest tree is a coast redwood in California, measuring more than 360 feet or 110 meters."
    },
    {
        text:"The world's oldest trees are 4,600 year old Bristlecone pines in the USA."
    },
    {
        text:"Every day, American businesses generate enough paper to circle the earth 20 times!"
    },
    {
        text:"Each year, Americans throw away 25 trillion Styrofoam cups."
    },
    {
        text:"Only 1% of the world's water supply is usable, 97% are the oceans and 2% is frozen (for now)."
    },
    {
        text:"Mel Blanc (voice of Bugs Bunny) was allergic to carrots (just checking that you're still paying attention!)."
    },
    {
        text:"A modern glass bottle takes 4000 years or more to decompose."
    },
    {
        text:"Rainforests are being cut down at the rate of 100 acres per minute."
    },
    {
        text:"You burn more calories sleeping than you do watching TV (ok, now you can go take a nap)."
    },
    ]
    let i = Math.floor(Math.random() * facts.length);
    console.log(facts[i].text);
    fact.classList.remove("fade");
    document.getElementById("fact").innerHTML = facts[i].text;
    fact.classList.add("fade");
}
setInterval(facts, 4000);
