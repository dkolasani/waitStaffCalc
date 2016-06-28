'use strict';

var app = angular.module('app',[]);
app.controller('AppCtrl', function(){
	var vm= this;
	vm.bMealPrice ;
	vm.taxRate ;
	vm.tipPercentage; 
	vm.subtotal ;
	vm.tip;
	vm.total;
	vm.tipTotal = 0;
	vm.mealCount =0;
	vm.avgTipMeal =0;


 vm.submit = function () {
	 vm.mealCount++; 
     vm.subtotal = ((vm.taxRate / 100) + vm.bMealPrice);
     vm.tip = ((vm.tipPercentage / 100) * vm.bMealPrice);
     vm.total = vm.subtotal + vm.tip;

	 vm.tipTotal= 	 vm.tipTotal+vm.tip;
	 vm.avgTipMeal = vm.tipTotal/vm.mealCount; 
vm.cancel();
 }

  vm.cancel = function () {
	  vm.bMealPrice =0;
	  vm.taxRate =0;
	  vm.tipPercentage =0;

  }
 });

