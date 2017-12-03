//var myString = "Mixed Fruit-2.15\nFrench Fries-2.75\nSide Salad-3.35\nHot Wings-3.55\nMozzarella Sticks-4.20\nSampler Plate-5.80";

//var myString = "Mixed Fruit-2.50\nFrench Fries-3\nSide Salad-4\nHot Wings-5\nMozzarella Sticks-6\nSampler Plate-6.50";

var app = function(inputString){
    var data = inputString.split("-");
    this.name = data[0];
    this.price = parseFloat(data[1]);
};

var appsList = function(){
    this.list = [];
    this.parser = function(subString){
        var iList = subString.split("\n");
        for(var e in iList){
            var food = new app(iList[e]);
            this.list.push(food);
        }
    };
};

var myApps = new appsList();
myApps.parser(myString);

function sumList(myList){
    var sum=0;
    for(var e in myList){
        sum = sum+myList[e].price;
    }
    sum = parseFloat(sum).toPrecision(4);
    return sum;
}
var hashNumberApps = {};
for(var e in myApps.list){
    hashNumberApps[myApps.list[e].name] = 0;
}

function makeCombs(remaining,index,appsArr,curr){
    if(index < appsArr.length-1){
        if(remaining > 0){
            var meal = appsArr[index]
            if(meal.price <= remaining){
                for(var i =0; i<= (remaining/meal.price); i++){
                    curr[meal.name] = i;
                    makeCombs(remaining-(meal.price*i),index+1,appsArr,curr);
                }
                curr[meal.name] = 0;
            }
            else{
                makeCombs(remaining,index+1,appsArr,curr);
            }
        }
        else{
            console.log(curr);
        }
    }
    else{
        if(remaining > 0){
            var meal = appsArr[index];
            if(meal.price <= remaining){
                if((remaining % meal.price) === 0){
                    curr[meal.name] = (curr[meal.name]+remaining)/meal.price;
                    console.log(curr);
                    curr[meal.name] = 0;
                }
            }
        }
        else{
            console.log(curr);
        }
    }
}
var myHold = [];
makeCombs(15.05,0,myApps.list,hashNumberApps);



