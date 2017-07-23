(function () {
	'use strict';
	angular.module('shoppingListApp',[])
		.controller('ShoppingListShowCtrl', ShoppingListShowCtrl)
		.controller('ShoppingListAddCtrl', ShoppingListAddCtrl)
		.service('shoppingListService', shoppingListService);
		
	
	ShoppingListAddCtrl.$inject = ['shoppingListService'];
	function ShoppingListAddCtrl(shoppingListService) {
			var itemAdder = this;
			itemAdder.itemName		= "";
			itemAdder.itemQuantity	= "";
			
			itemAdder.addItem = function() {
				shoppingListService.addItem(itemAdder.itemName, itemAdder.itemQuantity);
			}
	}
	
	ShoppingListShowCtrl.$inject = ['shoppingListService'];
	function ShoppingListShowCtrl(shoppingListService) {
		var showList = this;
		showList.items = shoppingListService.getItems();
		
		showList.removeItem = function(itemIndex) {
			shoppingListService.remove(itemIndex);
		};
	}
		
	function shoppingListService() {
	var service = this;
	// List of shopping items
	var items = [];
	
	service.addItem = function(itmeName, quantity) {
		var item = {
			name : itmeName,
			quantity : quantity
		};
		
		items.push(item);
	}
	
	service.getItems = function() {
		return items;
	};
	
	service.remove = function(index) {
		items.splice(index, 1);
	}
};

})();
