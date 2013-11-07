var App = window.App = window.App || {};

define(['plugins/http', 'durandal/app', 'knockout'], function (http, app, ko) {

    var datacontext = new function () {
        var self = this;
        self.teams = ko.observableArray();
        self.menuItems = ko.observableArray();
        self.teamMenuItems = ko.observableArray();

        self.saveData = function () {
            console.log('saveData()');
        };
        
        self.getData = function () {
            console.log('getData()');

            self.teams.push(new App.Team('1', 'Energy', false));
            self.teams.push(new App.Team('2', 'PV', false));

	        self.menuItems.push(new App.MenuItem(1, "Web Sockets", true));
	        self.menuItems.push(new App.MenuItem(2, "Data Viz", false));
	        self.menuItems.push(new App.MenuItem(3, "Drag Drop", false));
	        self.menuItems.push(new App.MenuItem(4, "JS Plumb", false));
	        

	        self.teamMenuItems.push(new App.TeamMenuItem(1, "Web Sockets", "Energy", true));
	        self.teamMenuItems.push(new App.TeamMenuItem(2, "Data Viz", "Energy", false));
	        self.teamMenuItems.push(new App.TeamMenuItem(3, "Drag Drop", "Energy", false));
	        self.teamMenuItems.push(new App.TeamMenuItem(4, "JS Plumb", "Energy", false));
	        self.teamMenuItems.push(new App.TeamMenuItem(5, "Web Sockets", "PV", true));
	        self.teamMenuItems.push(new App.TeamMenuItem(6, "Data Viz", "PV", true));
	        self.teamMenuItems.push(new App.TeamMenuItem(7, "Drag Drop", "PV", true));
	        self.teamMenuItems.push(new App.TeamMenuItem(8, "JS Plumb", "PV", true));

        };
    };

    return datacontext;
});