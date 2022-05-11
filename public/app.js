// const _ = require("lodash")
// Full list of words
    const fullNounList = ['Assignment',' Bathroom',' Side',' Volume',' Suggestion',' Argument',' Scissors',' Sticks',' View',' Ticket',' Variation',' Grain',' Truth',' Computer',' Shopping',' Weather',' Media',' Family',' Departure',' Range',' Morning',' Kite',' Cover',' Cloth',' Cookie',' Condition',' Porter',' Member',' Minister',' Laborer',' Club',' News',' Snow',' Credit',' Tale',' Blade',' Ship',' Jam',' Newspaper',' Poison',' Doctor',' Chance',' Ghost',' College',' Inspector',' Anger',' Wedding',' Basin',' Percentage',' Beggar',' Lunchroom',' Holiday',' Addition',' Promotion',' Apartment',' Sample',' Box',' Spy',' Lace',' Comfort',' Funeral',' Destruction',' Root',' Elbow',' Interaction',' Medicine',' Engine',' Mall',' Measure',' Disk',' Message',' Wash',' Arrival',' Class',' Heart',' Uncle',' Software',' Wind',' Animal',' Mice',' Oatmeal',' Coat',' Spot',' Vein',' Aftermath',' Cobweb',' Bee',' Cabbage',' Honey',' Waste',' Sort',' Tiger',' Relation',' Hair',' Houses',' Variety',' Head',' Paint',' Icicle',' Carpenter',' Entry',' Breakfast',' Market',' Design',' Wine',' Attention',' Downtown',' Request',' Pets',' Internet',' Creator',' Frame',' Move',' History',' Ground',' Hen',' Chemistry',' Fruit',' Pull',' Bedroom',' Cracker',' Ray',' Parcel',' Seat',' Rock',' Nail',' Neck',' Loaf',' Caption',' Trainer',' Kettle',' King',' Birthday',' Canvas',' Frog',' Morning',' Tree',' Attitude',' Nation',' Border',' Establishment',' Error',' Ring',' Bone',' Sleep',' Worm',' Strategy',' Driver',' Bulb',' Earth',' Poetry',' Mom',' Eggs',' Employer',' Vacation',' Ball',' Cigarette',' Wine',' Regret',' Requirement',' Oven',' Club',' Ladder',' Tendency',' Governor',' Balance',' Swim',' Charity',' Drug',' Reward',' Experience',' Plough',' Quince',' Singer',' Team',' Heat',' Rail',' Route',' Secretary',' Horse',' Copy',' Door',' Fight',' Moon',' Map',' Indication',' Achiever',' Depression',' Time',' Reality',' Manufacturer',' Conclusion',' Vessel',' Sense',' Midnight',' Walk',' Bed',' Professor',' Room',' Bath',' Button',' Method',' Mint',' Cactus',' Friction',' Board',' Thrill',' Sound',' Historian',' Coil',' Cart',' Cherry',' Beef',' Depth',' Division',' Sector',' Touch',' Session',' Toothpaste',' Good-bye',' Leader',' Face',' Milk',' Ant',' Wood',' Help',' Crib',' Protection',' Elbow',' Beggar',' Aspect',' Turn',' Union',' Friend',' Hearing',' Database',' Improvement',' Street',' Fowl',' Day',' Celebration',' Flock',' Yoke',' Garbage',' Republic',' Idea',' Cousin',' Liquid',' Back',' Basketball',' Condition',' Jeans',' City',' Physics',' Flower',' College',' Railway',' Thumb',' Invention',' Football',' Driving',' Payment',' Treatment',' Discussion',' Curve',' Employee',' Industry',' Cub',' University',' Shape',' Level',' Coal',' Sponge',' Trousers',' Skirt',' Girls',' Mark',' Amusement',' Cough',' Company',' Criticism',' Wing',' Chicken',' Representative',' Attempt',' Outcome',' Boat',' Pen',' Penalty',' Clouds',' Delivery',' Signature',' Glue',' Collection',' Start',' Leg',' Cook',' Coat',' Existence',' Skill',' Change',' Airplane',' Bubble',' Courage',' Cast',' Bomb',' Shelf',' Manager',' Glove',' Lunch',' Church',' Currency',' Scene',' Lizards',' Act',' Wilderness',' Basis',' Angle',' Clover',' Pain',' Ball',' Understanding',' Mine',' Point',' Classroom',' Lake',' Rail',' Arch',' Police',' Example',' Rate',' Road',' Scene',' Importance',' Clam',' Bean',' Carriage',' Agency','Cats',' Afterthought',' Magazine',' Attack',' Construction',' Wire',' Birth',' Stone',' Number',' Wrench',' Friendship',' Impression',' Religion',' Blade',' Kiss',' Ornament',' Quarter','Jewel',' Injury',' Fear',' Hook',' Estate',' Interest',' Iron',' Cable',' Branch',' Turn',' Current',' Orange',' Rest',' Rabbits',' Harbor',' Wilderness',' Birth',' Oil',' Farmer',' Apples',' Bit',' Calculator',' Joke',' Dad',' Hour',' Hen',' Girl',' Beer',' Explanation',' Winter',' Acoustics',' Category',' President',' Teacher',' Bun',' Activity',' Quiver',' Size',' Fire',' Sink',' Priority',' Notebook',' Car',' Name',' Satisfaction',' Chess',' Group',' Transportation',' Performance',' Whistle',' Stitch',' Feet',' Ladybug',' Candidate',' Exchange',' Parent',' Elevator',' Square',' Editor',' Science',' Underwear',' Bucket',' Engine',' Setting',' Beast',' Unit',' Decision',' Pizza',' Revolution',' Bee',' Channel',' Suit',' Town',' Daughter',' Afternoon',' Top',' Guitar',' Environment',' Structure',' Position',' Argument',' Inspection',' Page',' Giants',' Leaf',' College',' Resolution',' Flowers',' Building',' Area',' Ants',' Library',' Crow',' Cherries',' Percentage',' Arch',' Donkey',' Street',' Cattle',' Confusion',' Judge',' Distribution',' Dime',' Chemistry',' Gun',' Game',' Power',' Grandfather',' Food',' Sock',' Friends',' Communication',' Extent',' Philosophy',' Join',' Connection',' Help',' Cheese',' Cat',' Money',' Measurement',' Literature',' Prose',' Fifth',' Balls',' Instance',' Pancake',' Assumption',' Shoes',' Artisan',' Boundary',' Nature',' Drug',' Client',' Man',' Bag',' Comparison',' Development',' Summer',' Sail',' Bridge',' Bedroom',' Kitten',' Stove',' Things',' Son',' Entertainment',' Cap',' Weakness',' Affair',' Hose',' Appointment',' Texture',' Wire',' Supermarket',' Pleasure',' Deer',' Hobbies',' Opportunity',' Mind',' Bike',' Championship',' Stamp',' Bread',' Tub',' Personality',' Tree',' Efficiency',' Preparation',' Bath',' Organization',' Corn',' Virus',' Tongue',' Chair',' Village',' Fan',' Data',' Recommendation',' Thanks',' Muscle',' Lawyer',' Silk',' Grip',' Arm',' Cherries',' Chain',' Receipt',' Meal',' Trip',' Writer',' Depression',' Buyer',' Feeling',' Cause',' Throne',' Surgery',' Sound',' Proposal',' Anger',' Army',' Marriage',' Yam',' Alcohol',' Drop',' Thought',' Rings',' Blood',' Cell',' Possession',' Soup',' Investment',' Lift',' Potato',' Rake',' Learning',' Circle',' Income',' Population',' Stocking',' Hydrant',' Cork',' Ship',' Leadership',' Slave',' Pot']
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
const card1 = pickCard()
const card2 = pickCard()
const card3 = pickCard()
const card4 = pickCard()
const cardDecoy = pickCard()

// Card 1 random words
$("#c1-1").text(card1[0])
$("#c1-2").text(card1[1])
$("#c1-3").text(card1[2])
$("#c1-4").text(card1[3])

// $("#c1-1").text("c1-1")
// $("#c1-2").text("c1-2")
// $("#c1-3").text("c1-3")
// $("#c1-4").text("c1-4")

// Card 2 random words
$("#c2-1").text(card2[0])
$("#c2-2").text(card2[1])
$("#c2-3").text(card2[2])
$("#c2-4").text(card2[3])

// $("#c2-1").text("c2-1")
// $("#c2-2").text("c2-2")
// $("#c2-3").text("c2-3")
// $("#c2-4").text("c2-4")

// Card 3 random words
$("#c3-1").text(card3[0])
$("#c3-2").text(card3[1])
$("#c3-3").text(card3[2])
$("#c3-4").text(card3[3])

// $("#c3-1").text("c3-1")
// $("#c3-2").text("c3-2")
// $("#c3-3").text("c3-3")
// $("#c3-4").text("c3-4")

// Card 4 random words
$("#c4-1").text(card4[0])
$("#c4-2").text(card4[1])
$("#c4-3").text(card4[2])
$("#c4-4").text(card4[3])

// $("#c4-1").text("c4-1")
// $("#c4-2").text("c4-2")
// $("#c4-3").text("c4-3")
// $("#c4-4").text("c4-4")

let rotation = 0

function rotateBoard(direction) {
    if (direction == "left") {
        rotation = rotation + 90
        if (rotation == 360 || rotation == -360) {
            rotation = 0
        }
        $(".game-board").css("transform","rotate("+ rotation + "deg)")

    } else if (direction == "right") {
        rotation = rotation - 90
        if (rotation == 360 || rotation == -360) {
            rotation = 0
        }
        $(".game-board").css("transform","rotate(" + rotation + "deg)")
    }
    if (rotation == 0) {
        $("#turn-bot-left-tleft").css("visibility","visible")
        $("#turn-bot-left-tright").css("visibility","hidden")
        $("#turn-bot-right-tleft").css("visibility","hidden")
        $("#turn-bot-right-tright").css("visibility","visible")
        $("#turn-top-left-tleft").css("visibility","hidden")
        $("#turn-top-left-tright").css("visibility","hidden")
        $("#turn-top-right-tleft").css("visibility","hidden")
        $("#turn-top-right-tright").css("visibility","hidden")
        let horizontal0 = ["#c1-1", "#c2-1", "#c1-2", "#c2-2", "#c3-1", "#c4-1", "#c3-2", "#c4-2",]
        horizontal0.forEach(id => {
            $(id).css("transform", "rotate(0deg) translate(0,25%)")
        });

        // $(".left-word").css("transform" , "rotate(-90deg) translate(0,25%)")
        // $(".right-word").css("transform" , "rotate(90deg) translate(0,25%)")
    } else if (rotation == 90 || rotation == -270) {
        $("#turn-bot-left-tleft").css("visibility","hidden")
        $("#turn-bot-left-tright").css("visibility","hidden")
        $("#turn-bot-right-tleft").css("visibility","visible")
        $("#turn-bot-right-tright").css("visibility","hidden")
        $("#turn-top-left-tleft").css("visibility","hidden")
        $("#turn-top-left-tright").css("visibility","hidden")
        $("#turn-top-right-tleft").css("visibility","hidden")
        $("#turn-top-right-tright").css("visibility","visible")

        let horizontal90 = ["#c2-4", "#c4-4", "#c3-4", "#c1-4", "#c4-3" ,"#c2-3" ,"#c3-3" ,"#c1-3"]
        horizontal90.forEach(id => {
            $(id).css("transform" , "rotate(-90deg) translate(0,25%)")
        });
        
    } else if (Math.abs(rotation) == 180) {
        $("#turn-bot-left-tleft").css("visibility","hidden")
        $("#turn-bot-left-tright").css("visibility","hidden")
        $("#turn-bot-right-tleft").css("visibility","hidden")
        $("#turn-bot-right-tright").css("visibility","hidden")
        $("#turn-top-left-tleft").css("visibility","hidden")
        $("#turn-top-left-tright").css("visibility","visible")
        $("#turn-top-right-tleft").css("visibility","visible")
        $("#turn-top-right-tright").css("visibility","hidden")

        let horizontal180 = ["#c4-2", "#c3-2", "#c4-1", "#c3-1", "#c2-2", "#c1-2", "#c2-2", "#c1-2", "#c2-1", "#c1-1", ]
        horizontal180.forEach(id => {
            $(id).css("transform" , "rotate(180deg) translate(0,25%)") 
        });
    } else if (rotation == -90 || rotation == 270) {
        $("#turn-bot-left-tleft").css("visibility","hidden")
        $("#turn-bot-left-tright").css("visibility","visible")
        $("#turn-bot-right-tleft").css("visibility","hidden")
        $("#turn-bot-right-tright").css("visibility","hidden")
        $("#turn-top-left-tleft").css("visibility","visible")
        $("#turn-top-left-tright").css("visibility","hidden")
        $("#turn-top-right-tleft").css("visibility","hidden")
        $("#turn-top-right-tright").css("visibility","hidden")
        
        let horizontal270 = ["#c2-4", "#c4-4", "#c2-3", "#c4-3", "#c1-4", "#c3-4", "#c1-3", "#c3-3"]
        horizontal270.forEach(id => {
            $(id).css("transform" , "rotate(90deg) translate(0,25%)")
        });
    }
    
}
function rotateLeft() {
        return rotateBoard("left")
    
    
}
function rotateRight() {
        return rotateBoard("right")
    
    
}
$(".turn-left").on("click", rotateLeft)
$(".turn-right").on("click", rotateRight)

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