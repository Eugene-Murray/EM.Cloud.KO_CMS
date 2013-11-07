var App = window.App = window.App || {};

define(['plugins/http', 'durandal/app', 'knockout'], function (http, app, ko) {

    var datacontext = new function () {
        var self = this;
        self.teams = ko.observableArray();
        self.menuItems = ko.observableArray();

        self.saveData = function () {
            console.log('saveData()');
        };
        
        self.getData = function () {
            console.log('getData()');

            self.teams.push(new App.Team(1, 'Energy', false));
            self.teams.push(new App.Team(2, 'PV', false));

	        self.menuItems.push(new App.MenuItem(1, "Web Sockets", true));
	        self.menuItems.push(new App.MenuItem(2, "Data Viz", false));
	        self.menuItems.push(new App.MenuItem(3, "Drag Drop", false));
	        self.menuItems.push(new App.MenuItem(4, "JS Plumb", false));
        };
    };

    return datacontext;
});