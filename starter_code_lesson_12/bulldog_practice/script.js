// Make bulldog object with a name
// bulldog has 4 legs
// make a feed function that takes in food


function bulldog(name){
  this.name = name;
  this.legs = 4;
  this.feed = function(food){
    alert('thank you for feeding me ' + food);
  }
};


