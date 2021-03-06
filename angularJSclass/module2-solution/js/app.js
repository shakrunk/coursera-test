(function() {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller("ToBuyController", ToBuyController)
.controller("AlreadyBoughtController", AlreadyBoughtController)
.service("ShoppingListCheckOffService", ShoppingListCheckOffService);

ToBuyController.$inject = ["ShoppingListCheckOffService"]; // Minification protection
function ToBuyController(ShoppingListCheckOffService) {
    var buy = this;
    
    buy.list = ShoppingListCheckOffService.toBuy; // The list of items to buy
    buy.buyItem = function($index) {
        // console.log("debug: inside buy.buyItem function || $index = " + $index); // -- DEBUG --
        ShoppingListCheckOffService.buyItem($index);
        // console.log("debug: end buy.buyItem function"); // -- DEBUG --
    }; 
}

AlreadyBoughtController.$inject = ["ShoppingListCheckOffService"]; // Minification protection
function AlreadyBoughtController(ShoppingListCheckOffService) {
    var bought = this;
    
    bought.list = ShoppingListCheckOffService.alreadyBought; // The list of bought items
    
    // -- DEBUG --
    // console.log("debug: end AlreadyBoughtController || bought.list = " + bought.list + "additional str");
    // console.log("debug: Boolean(bought.list==[]) = " + Boolean(bought.list==[]));
    // console.log("debug: bought.list.length = " + bought.list.length);
}

function ShoppingListCheckOffService() {
    var service = this;

    // Item Lists
    service.toBuy = [{name: "cookies", quantity: 5},
                     {name: "biscuits", quantity: 10},
                     {name: "crakers", quantity: 15},
                     {name: "wafers", quantity: 20},
                     {name: "pretzels", quantity: 25}];

    service.alreadyBought = [];

    // Function ran when an item is bought
    service.buyItem = function(index) {
        // -- DEBUG --
        // console.log("debug: insde service.buyItem function || index = " + index);
        // console.log("debug: service.toBuy[index].quantity = " + service.toBuy[index].quantity);
        // console.log("debug: service.toBuy[index].name = " + service.toBuy[index].name);
        
        // -- NOTE --
        // These next few lines could have easily been replaced with the following code:
        // service.alreadyBought.push(service.toBuy(index));
        // by having the toBuy and alreadyBought item object attributes formatted the same way
        // I specifically formatted them differently because the instuctions for this assignment
        // dictated the formatting be in this way. Hence, the extra lines.
        var reformatted = {}; // objected created to contain reformatted data
        reformatted.item_quantity = service.toBuy[index].quantity; 
        reformatted.item_name = service.toBuy[index].name;
        service.alreadyBought.push(reformatted); // Adds the bought item to the bought list

        service.toBuy.splice(index, 1); // Removes the bought item from the to-buy list
        
        // -- DEBUG --
        // console.log("debug: end service.toBuy function || service.alreadyBought = " + service.alreadyBought);
        // console.log("debug: Boolean(service.alreadyBought) = " + Boolean(service.alreadyBought)   );
    };
}

}());