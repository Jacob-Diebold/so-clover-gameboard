const test = false
// creating dragging features
document.addEventListener('DOMContentLoaded', (event) => {
    function handleDragStart(e) {
        this.style.opacity = '0.4';
        dragSrcEl = this;
      e.dataTransfer.effectAllowed = 'move';
      e.dataTransfer.setData('text/html', this.innerHTML);
      }
      function handleDragEnd(e) {
        this.style.opacity = '1';
        items.forEach(function (item) {
            item.classList.remove('over');
          });
      }
      function handleDragOver(e) {
        e.preventDefault();
        return false;
      }
      function handleDragEnter(e) {
        this.classList.add('over');
      }
      function handleDragLeave(e) {
        this.classList.remove('over');
      }
      function handleDrop(e) {
        e.stopPropagation(); // stops the browser from redirecting.
        if (dragSrcEl !== this) {
            dragSrcEl.innerHTML = this.innerHTML;
            this.innerHTML = e.dataTransfer.getData('text/html');
          }
        return false;
      }

window.randomContainerD = null
// Full list of words
// codenames list
/*
const fullNounList = ["AFRICA" ,"AGENT" ,"AIR" ,"ALIEN" ,"ALPS" ,"AMAZON" ,"AMBULANCE" ,"AMERICA" ,"ANGEL" ,"ANTARCTICA" ,"APPLE" ,"ARM" ,"ATLANTIS" ,"AUSTRALIA" ,"AZTEC" ,"BACK" ,"BALL" ,"BAND" ,"BANK" ,"BAR" ,"BARK" ,"BAT" ,"BATTERY" ,"BEACH" ,"BEAR" ,"BEAT" ,"BED" ,"BEIJING" ,"BELL" ,"BELT" ,"BERLIN" ,"BERMUDA" ,"BERRY" ,"BILL" ,"BLOCK" ,"BOARD" ,"BOLT" ,"BOMB" ,"BOND" ,"BOOM" ,"BOOT" ,"BOTTLE" ,"BOW" ,"BOX" ,"BRIDGE" ,"BRUSH" ,"BUCK" ,"BUFFALO" ,"BUG" ,"BUGLE" ,"BUTTON" ,"CALF" ,"CANADA" ,"CAP" ,"CAPITAL" ,"CAR" ,"CARD" ,"CARROT" ,"CASINO" ,"CAST" ,"CAT" ,"CELL" ,"CENTAUR" ,"CENTER" ,"CHAIR" ,"CHANGE" ,"CHARGE" ,"CHECK" ,"CHEST" ,"CHICK" ,"CHINA" ,"CHOCOLATE" ,"CHURCH" ,"CIRCLE" ,"CLIFF" ,"CLOAK" ,"CLUB" ,"CODE" ,"COLD" ,"COMIC" ,"COMPOUND" ,"CONCERT" ,"CONDUCTOR" ,"CONTRACT" ,"COOK" ,"COPPER" ,"COTTON" ,"COURT" ,"COVER" ,"CRANE" ,"CRASH" ,"CRICKET" ,"CROSS" ,"CROWN" ,"CYCLE" ,"CZECH" ,"DANCE" ,"DATE" ,"DAY" ,"DEATH" ,"DECK" ,"DEGREE" ,"DIAMOND" ,"DICE" ,"DINOSAUR" ,"DISEASE" ,"DOCTOR" ,"DOG" ,"DRAFT" ,"DRAGON" ,"DRESS" ,"DRILL" ,"DROP" ,"DUCK" ,"DWARF" ,"EAGLE" ,"EGYPT" ,"EMBASSY" ,"ENGINE" ,"ENGLAND" ,"EUROPE" ,"EYE" ,"FACE" ,"FAIR" ,"FALL" ,"FAN" ,"FENCE" ,"FIELD" ,"FIGHTER" ,"FIGURE" ,"FILE" ,"FILM" ,"FIRE" ,"FISH" ,"FLUTE" ,"FLY" ,"FOOT" ,"FORCE" ,"FOREST" ,"FORK" ,"FRANCE" ,"GAME" ,"GAS" ,"GENIUS" ,"GERMANY" ,"GHOST" ,"GIANT" ,"GLASS" ,"GLOVE" ,"GOLD" ,"GRACE" ,"GRASS" ,"GREECE" ,"GREEN" ,"GROUND" ,"HAM" ,"HAND" ,"HAWK" ,"HEAD" ,"HEART" ,"HELICOPTER" ,"HIMALAYAS" ,"HOLE" ,"HOLLYWOOD" ,"HONEY" ,"HOOD" ,"HOOK" ,"HORN" ,"HORSE" ,"HORSESHOE" ,"HOSPITAL" ,"HOTEL" ,"ICE" ,"INDIA" ,"IRON" ,"IVORY" ,"JACK" ,"JAM" ,"JET" ,"JUPITER" ,"KANGAROO" ,"KETCHUP" ,"KEY" ,"KID" ,"KING" ,"KIWI" ,"KNIFE" ,"KNIGHT" ,"LAB" ,"LAP" ,"LASER" ,"LAWYER" ,"LEAD" ,"LEMON" ,"LEPRECHAUN" ,"LIFE" ,"LIGHT" ,"LIMOUSINE" ,"LINE" ,"LINK" ,"LION" ,"LITTER" ,"LOCK" ,"LOG" ,"LONDON" ,"LUCK" ,"MAIL" ,"MAMMOTH" ,"MAPLE" ,"MARBLE" ,"MARCH" ,"MASS" ,"MATCH" ,"MERCURY" ,"MEXICO" ,"MICROSCOPE" ,"MILLIONAIRE" ,"MINE" ,"MINT" ,"MISSILE" ,"MODEL" ,"MOLE" ,"MOON" ,"MOSCOW" ,"MOUNT" ,"MOUSE" ,"MOUTH" ,"MUG" ,"NAIL" ,"NEEDLE" ,"NET" ,"NIGHT" ,"NINJA" ,"NOTE" ,"NOVEL" ,"NURSE" ,"NUT" ,"OCTOPUS" ,"OIL" ,"OLIVE" ,"OLYMPUS" ,"OPERA" ,"ORANGE" ,"ORGAN" ,"PALM" ,"PAN" ,"PANTS" ,"PAPER" ,"PARACHUTE" ,"PARK" ,"PART" ,"PASS" ,"PASTE" ,"PENGUIN" ,"PHOENIX" ,"PIANO" ,"PIE" ,"PILOT" ,"PIN" ,"PIPE" ,"PIRATE" ,"PISTOL" ,"PIT" ,"PITCH" ,"PLANE" ,"PLASTIC" ,"PLATE" ,"PLATYPUS" ,"PLAY" ,"PLOT" ,"POINT" ,"POISON" ,"POLE" ,"POLICE" ,"POOL" ,"PORT" ,"POST" ,"POUND" ,"PRESS" ,"PRINCESS" ,"PUMPKIN" ,"PUPIL" ,"PYRAMID" ,"QUEEN" ,"RABBIT" ,"RACKET" ,"RAY" ,"REVOLUTION" ,"RING" ,"ROBIN" ,"ROBOT" ,"ROCK" ,"ROME" ,"ROOT" ,"ROSE" ,"ROULETTE" ,"ROUND" ,"ROW" ,"RULER" ,"SATELLITE" ,"SATURN" ,"SCALE" ,"SCHOOL" ,"SCIENTIST" ,"SCORPION" ,"SCREEN" ,"SEAL" ,"SERVER" ,"SHADOW" ,"SHAKESPEARE" ,"SHARK" ,"SHIP" ,"SHOE" ,"SHOP" ,"SHOT" ,"SINK" ,"SKYSCRAPER" ,"SLIP" ,"SLUG" ,"SMUGGLER" ,"SNOW" ,"SNOWMAN" ,"SOCK" ,"SOLDIER" ,"SOUL" ,"SOUND" ,"SPACE" ,"SPELL" ,"SPIDER" ,"SPIKE" ,"SPINE" ,"SPOT" ,"SPRING" ,"SPY" ,"SQUARE" ,"STADIUM" ,"STAFF" ,"STAR" ,"STATE" ,"STICK" ,"STOCK" ,"STRAW" ,"STREAM" ,"STRIKE" ,"STRING" ,"SUB" ,"SUIT" ,"SUPERHERO" ,"SWING" ,"SWITCH" ,"TABLE" ,"TABLET" ,"TAG" ,"TAIL" ,"TAP" ,"TEACHER" ,"TELESCOPE" ,"TEMPLE" ,"THEATER" ,"THIEF" ,"THUMB" ,"TICK" ,"TIE" ,"TIME" ,"TOKYO" ,"TOOTH" ,"TORCH" ,"TOWER" ,"TRACK" ,"TRAIN" ,"TRIANGLE" ,"TRIP" ,"TRUNK" ,"TUBE" ,"TURKEY" ,"UNDERTAKER" ,"UNICORN" ,"VACUUM" ,"VAN" ,"VET" ,"WAKE" ,"WALL" ,"WAR" ,"WASHER" ,"WASHINGTON" ,"WATCH" ,"WATER" ,"WAVE" ,"WEB" ,"WELL" ,"WHALE" ,"WHIP" ,"WIND" ,"WITCH" ,"WORM" ,"YARD"]
*/
// regular premade list
const fullNounList = ["Acne", "Acre", "Addendum", "Advertise", "Aircraft", "Aisle", "Alligator", "Alphabetize", "America", "Ankle", "Apathy", "Applause", "Applesauc", "Application", "Archaeologist", "Aristocrat", "Arm", "Armada", "Asleep", "Astronaut", "Athlete", "Atlantis", "Aunt", "Avocado", "Backbone", "Bag", "Baguette", "Bald", "Balloon", "Banana", "Banister", "Baseball", "Baseboards", "Basketball", "Bat", "Battery", "Beach", "Beanstalk", "Bedbug", "Beer", "Beethoven", "Belt", "Bib", "Bicycle", "Big", "Bike", "Billboard", "Bird", "Birthday", "Bite", "Blacksmith", "Blanket", "Bleach", "Blimp", "Blossom", "Blueprint", "Blunt", "Blur", "Boa", "Boat", "Bob", "Bobsled", "Body", "Bomb", "Bonnet", "Book", "Booth", "Bowtie", "Box", "Boy", "Brainstorm", "Brand", "Brave", "Bride", "Bridge", "Broccoli", "Broken", "Broom", "Bruise", "Brunette", "Bubble", "Buddy", "Buffalo", "Bulb", "Bunny", "Bus", "Buy", "Cabin", "Cafeteria", "Cake", "Calculator", "Campsite", "Can", "Canada", "Candle", "Candy", "Cape", "Capitalism", "Car", "Cardboard", "Cartography", "Cat", "Cd", "Ceiling", "Cell", "Century", "Chair", "Chalk", "Champion", "Charger", "Cheerleader", "Chef", "Chess", "Chew", "Chicken", "Chime", "China", "Chocolate", "Church", "Circus", "Clay", "Cliff", "Cloak", "Clockwork", "Clown", "Clue", "Coach", "Coal", "Coaster", "Cog", "Cold", "College", "Comfort", "Computer", "Cone", "Constrictor", "Continuum", "Conversation", "Cook", "Coop", "Cord", "Corduroy", "Cot", "Cough", "Cow", "Cowboy", "Crayon", "Cream", "Crisp", "Criticize", "Crow", "Cruise", "Crumb", "Crust", "Cuff", "Curtain", "Cuticle", "Czar", "Dad", "Dart", "Dawn", "Day", "Deep", "Defect", "Dent", "Dentist", "Desk", "Dictionary", "Dimple", "Dirty", "Dismantle", "Ditch", "Diver", "Doctor", "Dog", "Doghouse", "Doll", "Dominoes", "Door", "Dot", "Drain", "Draw", "Dream", "Dress", "Drink", "Drip", "Drums", "Dryer", "Duck", "Dump", "Dunk", "Dust", "Ear", "Eat", "Ebony", "Elbow", "Electricity", "Elephant", "Elevator", "Elf", "Elm", "Engine", "England", "Ergonomic", "Escalator", "Eureka", "Europe", "Evolution", "Extension", "Eyebrow", "Fan", "Fancy", "Fast", "Feast", "Fence", "Feudalism", "Fiddle", "Figment", "Finger", "Fire", "First", "Fishing", "Fix", "Fizz", "Flagpole", "Flannel", "Flashlight", "Flock", "Flotsam", "Flower", "Flu", "Flush", "Flutter", "Fog", "Foil", "Football", "Forehead", "Forever", "Fortnight", "France", "Freckle", "Freight", "Fringe", "Frog", "Frown", "Gallop", "Game", "Garbage", "Garden", "Gasoline", "Gem", "Ginger", "Gingerbread", "Girl", "Glasses", "Goblin", "Gold", "Goodbye", "Grandpa", "Grape", "Grass", "Gratitude", "Gray", "Green", "Guitar", "Gum", "Gumball", "Hair", "Half", "Handle", "Handwriting", "Hang", "Happy", "Hat", "Hatch", "Headache", "Heart", "Hedge", "Helicopter", "Hem", "Hide", "Hill", "Hockey", "Homework", "Honk", "Hopscotch", "Horse", "Hose", "Hot", "House", "Houseboat", "Hug", "Humidifier", "Hungry", "Hurdle", "Hurt", "Hut", "Ice", "Implode", "Inn", "Inquisition", "Intern", "Internet", "Invitation", "Ironic", "Ivory", "Ivy", "Jade", "Japan", "Jeans", "Jelly", "Jet", "Jig", "Jog", "Journal", "Jump", "Key", "Killer", "Kilogram", "King", "Kitchen", "Kite", "Knee", "Kneel", "Knife", "Knight", "Koala", "Lace", "Ladder", "Ladybug", "Lag", "Landfill", "Lap", "Laugh", "Laundry", "Law", "Lawn", "Lawnmower", "Leak", "Leg", "Letter", "Level", "Lifestyle", "Ligament", "Light", "Lightsaber", "Lime", "Lion", "Lizard", "Log", "Loiterer", "Lollipop", "Loveseat", "Loyalty", "Lunch", "Lunchbox", "Lyrics", "Machine", "Macho", "Mailbox", "Mammoth", "Mark", "Mars", "Mascot", "Mast", "Matchstick", "Mate", "Mattress", "Mess", "Mexico", "Midsummer", "Mine", "Mistake", "Modern", "Mold", "Mom", "Monday", "Money", "Monitor", "Monster", "Mooch", "Moon", "Mop", "Moth", "Motorcycle", "Mountain", "Mouse", "Mower", "Mud", "Music", "Mute", "Nature", "Negotiate", "Neighbor", "Nest", "Neutron", "Niece", "Night", "Nightmare", "Nose", "Oar", "Observatory", "Office", "Oil", "Old", "Olympian", "Opaque", "Opener", "Orbit", "Organ", "Organize", "Outer", "Outside", "Ovation", "Overture", "Pail", "Paint", "Pajamas", "Palace", "Pants", "Paper", "Paper", "Park", "Parody", "Party", "Password", "Pastry", "Pawn", "Pear", "Pen", "Pencil", "Pendulum", "Penis", "Penny", "Pepper", "Personal", "Philosopher", "Phone", "Photograph", "Piano", "Picnic", "Pigpen", "Pillow", "Pilot", "Pinch", "Ping", "Pinwheel", "Pirate", "Plaid", "Plan", "Plank", "Plate", "Platypus", "Playground", "Plow", "Plumber", "Pocket", "Poem", "Point", "Pole", "Pomp", "Pong", "Pool", "Popsicle", "Population", "Portfolio", "Positive", "Post", "Princess", "Procrastinate", "Protestant", "Psychologist", "Publisher", "Punk", "Puppet", "Puppy", "Push", "Puzzle", "Quarantine", "Queen", "Quicksand", "Quiet", "Race", "Radio", "Raft", "Rag", "Rainbow", "Rainwater", "Random", "Ray", "Recycle", "Red", "Regret", "Reimbursement", "Retaliate", "Rib", "Riddle", "Rim", "Rink", "Roller", "Room", "Rose", "Round", "Roundabout", "Rung", "Runt", "Rut", "Sad", "Safe", "Salmon", "Salt", "Sandbox", "Sandcastle", "Sandwich", "Sash", "Satellite", "Scar", "Scared", "School", "Scoundrel", "Scramble", "Scuff", "Seashell", "Season", "Sentence", "Sequins", "Set", "Shaft", "Shallow", "Shampoo", "Shark", "Sheep", "Sheets", "Sheriff", "Shipwreck", "Shirt", "Shoelace", "Short", "Shower", "Shrink", "Sick", "Siesta", "Silhouette", "Singer", "Sip", "Skate", "Skating", "Ski", "Slam", "Sleep", "Sling", "Slow", "Slump", "Smith", "Sneeze", "Snow", "Snuggle", "Song", "Space", "Spare", "Speakers", "Spider", "Spit", "Sponge", "Spool", "Spoon", "Spring", "Sprinkler", "Spy", "Square", "Squint", "Stairs", "Standing", "Star", "State", "Stick", "Stockholder", "Stoplight", "Stout", "Stove", "Stowaway", "Straw", "Stream", "Streamline", "Stripe", "Student", "Sun", "Sunburn", "Sushi", "Swamp", "Swarm", "Sweater", "Swimming", "Swing", "Tachometer", "Talk", "Taxi", "Teacher", "Teapot", "Teenager", "Telephone", "Ten", "Tennis", "Thief", "Think", "Throne", "Through", "Thunder", "Tide", "Tiger", "Time", "Tinting", "Tiptoe", "Tiptop", "Tired", "Tissue", "Toast", "Toilet", "Tool", "Toothbrush", "Tornado", "Tournament", "Tractor", "Train", "Trash", "Treasure", "Tree", "Triangle", "Trip", "Truck", "Tub", "Tuba", "Tutor", "Television", "Twang", "Twig", "Twitterpated", "Type", "Unemployed", "Upgrade", "Vest", "Vision", "Water", "Watermelon", "Wax", "Wedding", "Weed", "Welder", "Whatever", "Wheelchair", "Whiplash", "Whisk", "Whistle", "White", "Wig", "Will", "Windmill", "Winter", "Wish", "Wolf", "Wool", "World", "Worm", "Wristwatch", "Yardstick", "Zamboni", "Zen", "Zero", "Zipper", "Zone", "Zoo"]
    
    function pickCard() {
    // this function picks a card of 4 words and removes them from the full list so there aren't any duplicates in the game
    let card = []
    for (let i = 0; i < 4; i++) {
        let word = fullNounList[_.random(fullNounList.length)]
        _.pull(fullNounList, word)
        card.push(word)
    }
    return card
}  

// this draws the 5 cards used for the round
const answerCard1 = pickCard()
const answerCard2 = pickCard()
const answerCard3 = pickCard()
const answerCard4 = pickCard()
const answerCardDecoy = pickCard()

const card1 = answerCard1.slice(0)
const card2 = answerCard2.slice(0)
const card3 = answerCard3.slice(0)
const card4 = answerCard4.slice(0)
const cardDecoy = answerCardDecoy.slice(0)


// Card 1 random words
function updateCardWords(cardNum, option = "valid") {
    if (cardNum == 1 && option == "valid") { 
        $("#c"+ cardNum + "-1").text(card1[0])
        $("#c"+ cardNum + "-2").text(card1[1])
        $("#c"+ cardNum + "-3").text(card1[2])
        $("#c"+ cardNum + "-4").text(card1[3])
    } else if (cardNum == 2 && option == "valid") {
        $("#c"+ cardNum + "-1").text(card2[0])
        $("#c"+ cardNum + "-2").text(card2[1])
        $("#c"+ cardNum + "-3").text(card2[2])
        $("#c"+ cardNum + "-4").text(card2[3])
    } else if (cardNum == 3 && option == "valid") {
        $("#c"+ cardNum + "-1").text(card3[0])
        $("#c"+ cardNum + "-2").text(card3[1])
        $("#c"+ cardNum + "-3").text(card3[2])
        $("#c"+ cardNum + "-4").text(card3[3])
    } else if (cardNum == 4 && option == "valid") {
        $("#c"+ cardNum + "-1").text(card4[0])
        $("#c"+ cardNum + "-2").text(card4[1])
        $("#c"+ cardNum + "-3").text(card4[2])
        $("#c"+ cardNum + "-4").text(card4[3])
    } else if (option == "test") {
        $("#c"+ cardNum + "-1").text("c1-1")
        $("#c"+ cardNum + "-2").text("c1-2")
        $("#c"+ cardNum + "-3").text("c1-3")
        $("#c"+ cardNum + "-4").text("c1-4")
    } else if (option == "blank") {
        $("#c"+ cardNum + "-1").text("")
        $("#c"+ cardNum + "-2").text("")
        $("#c"+ cardNum + "-3").text("")
        $("#c"+ cardNum + "-4").text("")
    }
    else {
        $("#c"+ window.randomContainerD + "-1").text(cardDecoy[0])
        $("#c"+ window.randomContainerD + "-2").text(cardDecoy[1])
        $("#c"+ window.randomContainerD + "-3").text(cardDecoy[2])
        $("#c"+ window.randomContainerD + "-4").text(cardDecoy[3])
    }
    
 
}

function shift2(arr, direction, n) {
    for (var i = n; i > 0; --i) { (direction > 0 ? arr.unshift(arr.pop()) : arr.push(arr.shift())); }
    return arr;}

// functionality to turn each card
function turnCard(containerID) {
    let checkID = $("#container-" + containerID + " div .top-word").attr("id")
    let currentCardNum = checkID[1]
    console.log(window.randomContainerD)
    switch (currentCardNum) {
        case "1":
            shift2(card1,1,1)
            console.log(1)
            break;
        case "2":
            shift2(card2,1,1)
            console.log(2)
            break;
        case "3":
            shift2(card3,1,1)
            console.log(3)
            break;
        case "4":
            shift2(card4,1,1)
            console.log(card4)
            console.log(4)
            break;
        default:
            shift2(cardDecoy,1,1)
            console.log(cardDecoy)
            console.log("Decoy")
            break;
    }
    updateCardWords(1)
    updateCardWords(2)
    updateCardWords(3)
    updateCardWords(4)
    updateCardWords(randomContainerD)
}
$("#turn-card-1").on("click", function() {
    turnCard("1")
})
$("#turn-card-2").on("click", function() {
    turnCard("2")
})
$("#turn-card-3").on("click", function() {
    turnCard("3")
})
$("#turn-card-4").on("click", function() {
    turnCard("4")
})
$("#turn-card-5").on("click", function() {
    turnCard("5")
})
$("#turn-card-6").on("click", function() {
    turnCard("6")
})
$("#turn-card-7").on("click", function() {
    turnCard("7")
})
$("#turn-card-8").on("click", function() {
    turnCard("8")
})
$("#turn-card-9").on("click", function() {
    turnCard("9")
})
// Check guess function button ************************************************need to add all of them
$("#checkGuess").on("click", function() {
    const card1Word1 = $("#card-1 .top-word").text()
    const card1Word2 = $("#card-1 .left-word").text()
    const card2Word1 = $("#card-2 .top-word").text()
    const card2Word2 = $("#card-2 .right-word").text()
    const card3Word1 = $("#card-3 .bottom-word").text()
    const card3Word2 = $("#card-3 .left-word").text()
    const card4Word1 = $("#card-4 .right-word").text()
    const card4Word2 = $("#card-4 .bottom-word").text()

    console.log(card1Word1 +" " + answerCard1[0])
    if (card1Word1 === answerCard1[0] && card1Word2 === answerCard1[3]) {
        $("#card-1").addClass("correct")
        $("#turn-card-1").css("visibility","hidden")
    }
    if (card2Word1 === answerCard2[0] && card2Word2 === answerCard2[1]) {
        $("#card-2").addClass("correct")
        $("#turn-card-2").css("visibility","hidden")
    }
    if (card3Word1 === answerCard3[2] && card3Word2 === answerCard3[3]) {
        $("#card-3").addClass("correct")
        $("#turn-card-3").css("visibility","hidden")
    }
    if (card4Word1 === answerCard4[1] && card4Word2 === answerCard4[2]) {
        $("#card-4").addClass("correct")
        $("#turn-card-4").css("visibility","hidden")
    }
})

// **** GAME START

// Draw cards at start of the game
updateCardWords(1)
updateCardWords(2)
updateCardWords(3)
updateCardWords(4)

// CARD ARE SUBMITTED-SHUFFLE THE CARDS
$("#scramble").on("click", function() {
    $("#checkGuess").css("visibility", "visible")
    let openContainers = [5, 6, 7, 8, 9]
    $(".input-section").attr("readonly", true)
    var rand = Math.floor(Math.random()* openContainers.length)
    var randomContainer1 = openContainers[rand]
    for (let index = 0; index < card1.length; index++) {
        const word = card1[index]
        $("#c" + randomContainer1 + "-" + (index+1)).text(word)
        $("#c" + randomContainer1 + "-" + (index+1)).attr("id", "d1-"+(index+1))
        $("#c1-" + (index+1)).attr("id", "c" + randomContainer1 + "-" + (index+1))
        $("#d1-"+(index+1)).attr("id","c1-"+(index+1))

    }
    openContainers.splice(rand,1)

    var rand = Math.floor(Math.random()* openContainers.length)
    var randomContainer2 = openContainers[rand]
    for (let index = 0; index < card2.length; index++) {
        const word = card2[index]
        $("#c" + randomContainer2 + "-" + (index+1)).text(word)

        $("#c" + randomContainer2 + "-" + (index+1)).attr("id", "d2-"+(index+1))
        $("#c2-" + (index+1)).attr("id", "c" + randomContainer2 + "-" + (index+1))
        $("#d2-"+(index+1)).attr("id","c2-"+(index+1))
    }
    openContainers.splice(rand,1)

    var rand = Math.floor(Math.random()* openContainers.length)
    var randomContainer3 = openContainers[rand]
    for (let index = 0; index < card3.length; index++) {
        const word = card3[index]
        $("#c" + randomContainer3 + "-" + (index+1)).text(word)

        $("#c" + randomContainer3 + "-" + (index+1)).attr("id", "d3-"+(index+1))
        $("#c3-" + (index+1)).attr("id", "c" + randomContainer3 + "-" + (index+1))
        $("#d3-"+(index+1)).attr("id","c3-"+(index+1))
    }
    openContainers.splice(rand,1)

    var rand = Math.floor(Math.random()* openContainers.length)
    var randomContainer4 = openContainers[rand]
    for (let index = 0; index < card4.length; index++) {
        const word = card4[index]
        $("#c" + randomContainer4 + "-" + (index+1)).text(word)

        $("#c" + randomContainer4 + "-" + (index+1)).attr("id", "d4-"+(index+1))
        $("#c4-" + (index+1)).attr("id", "c" + randomContainer4 + "-" + (index+1))
        $("#d4-"+(index+1)).attr("id","c4-"+(index+1))
    }
    openContainers.splice(rand,1)

    var rand = Math.floor(Math.random()* openContainers.length)
    window.randomContainerD = openContainers[rand]
    for (let index = 0; index < cardDecoy.length; index++) {
        const word = cardDecoy[index]
        $("#c" + window.randomContainerD + "-" + (index+1)).text(word)
    }
    openContainers.splice(rand,1)
    
    updateCardWords(randomContainer1, "blank")
    updateCardWords(randomContainer2, "blank")
    updateCardWords(randomContainer3, "blank")
    updateCardWords(randomContainer4, "blank")
    // updateCardWords(randomContainerD)
    $("#scramble").css("visibility","hidden")
    $(".turn-card").css("visibility","visible")
    if (test = true) {
        alert(window.randomContainerD)
    }

    
})

let items = document.querySelectorAll('.card-slot');
items.forEach(function (item) {
    item.addEventListener('dragstart', handleDragStart);
    item.addEventListener('dragover', handleDragOver);
    item.addEventListener('dragenter', handleDragEnter);
    item.addEventListener('dragleave', handleDragLeave);
    item.addEventListener('dragend', handleDragEnd);
    item.addEventListener('drop', handleDrop);
    });
});