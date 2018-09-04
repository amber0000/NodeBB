'use strict';


define('forum/backtesting', ['Handsontable'], function (Handsontable) {
	var backtesting = {};

	backtesting.init = function () {
		console.log("backtesting.init");
		var backtestingData = [
			["", "Tesla", "Volvo", "Toyota", "Honda"],
			["2017", 10, 11, 12, 13],
			["2018", 20, 11, 14, 13],
			["2019", 30, 15, 12, 13]
		];
		console.log(backtestingData)
		var container = document.getElementById('example');
		var hot = new Handsontable(container, {
			data: backtestingData,
			rowHeaders: true,
			colHeaders: true,
			stretchH: 'all',
			autoWrapRow: true,
			minSpareRows: true,
			columnSorting: true,
			fillHandle: false
		});
	};

	backtesting.option = function () {
		console.log("backtesting.option")
	}

	console.log("backtesting.main");

	return backtesting;
});
