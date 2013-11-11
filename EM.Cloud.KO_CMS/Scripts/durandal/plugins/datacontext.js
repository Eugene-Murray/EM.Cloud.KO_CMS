var App = window.App = window.App || {};

define(['plugins/http', 'durandal/app', 'knockout'], function (http, app, ko) {

    var datacontext = new function () {
        var self = this;
	    self.teams = ko.observableArray();
        self.menuItems = ko.observableArray();
        self.teamMenuItems = ko.observableArray();
	    self.teamSections = ko.observableArray();

        self.saveData = function () {
            console.log('saveData()');
        };

	    self.getData = function() {
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

		    self.teamSections.push(new App.TeamSectionItem(1, "Section 1", "Energy", "BarChart", true, true, new App.TemplateData("Energy Bar Chart")));
		    self.teamSections.push(new App.TeamSectionItem(2, "Section 2", "Energy", "CurveChart", true, true, new App.TemplateData("Energy Curve Chart")));
		    self.teamSections.push(new App.TeamSectionItem(3, "Section 3", "Energy", "PieChart", true, true, new App.TemplateData("Energy Pie Chart")));
		    self.teamSections.push(new App.TeamSectionItem(4, "Section 4", "Energy", "RealTimeChart", true, true, new App.TemplateData("Energy Real Time")));

		    self.teamSections.push(new App.TeamSectionItem(5, "Section 1", "PV", "PieChart", true, true, new App.TemplateData("PV Pie Chart")));
		    self.teamSections.push(new App.TeamSectionItem(6, "Section 2", "PV", "CurveChart", true, true, new App.TemplateData("PV Curve Chart")));
		    self.teamSections.push(new App.TeamSectionItem(7, "Section 3", "PV", "BarChart", true, true, new App.TemplateData("PV Bar Chart")));
		    self.teamSections.push(new App.TeamSectionItem(8, "Section 4", "PV", "RealTimeChart", true, true, new App.TemplateData("PV Real Time")));
	    };
    };

    return datacontext;
});