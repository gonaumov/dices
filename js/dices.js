function rollTheDice() {
    var dice = document.getElementById('dice'), selectedNumber, dicesHolder;

    dicesHolder = document.getElementById('dicesHolder');

    if(dice !== null) {
        dice.parentNode.removeChild(dice);
    }

    var dices =  new Array(6);

    for(var i=0;i<dices.length;i++){
        dices[i]  = (i+1);
    }

    /**
     * Here we will shuffle
     * the array
     */
    dices = (function (o) {
        for (var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
        return o;
    }(dices));

    selectedNumber = Math.floor(Math.random() * 6);

    (function rotateDice(iteration, until) {
        var diceImage = document.getElementById('dice');
        if(diceImage !== null) {
            diceImage.parentNode.removeChild(diceImage);
        }

        diceImage = document.createElement('img');
        diceImage.setAttribute('id', 'dice');
        diceImage.setAttribute('src', './images/' + dices[iteration] + '.gif');

        var callfunction = (function (iteration, until) {
            return function() {
                if(iteration != until) {
                    setTimeout(function() {
                        ++iteration;
                        rotateDice(iteration, until);
                    },0);
                }
            }
        })(iteration, until);

        diceImage.addEventListener("webkitAnimationEnd", callfunction,false);
        diceImage.addEventListener("animationend", callfunction,false);
        diceImage.addEventListener("oAnimationEnd", callfunction,false);
        diceImage.setAttribute("class", "dice");
        dicesHolder.appendChild(diceImage);
    }(0,selectedNumber));
}