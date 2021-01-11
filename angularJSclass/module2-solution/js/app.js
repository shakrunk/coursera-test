(function() {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller("ToBuyController", ToBuyController)
.controller("AlreadyBoughtController", AlreadyBoughtController)
.service("ShoppingListCheckOffService", ShoppingListCheckOffService);

ToBuyController.$inject = ["ShoppingListCheckOffService"];
function ToBuyController(ShoppingListCheckOffService) {
    var buy = this;
}

ToBuyController.$inject = ["ShoppingListCheckOffService"];
function AlreadyBoughtController(SheppingListService) {
    var bought = this;
}

function ShoppingListCheckOffService() {
    var service = this;

    // Item Lists
    var toBuy = [];
    var alreadyBought = [];
}

}());