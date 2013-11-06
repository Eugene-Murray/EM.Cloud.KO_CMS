var App = window.App = window.App || {};

define(['plugins/datacontext'], function(datacontext)
{
	var home = function() {
		var self = this;

		self.activate = function() {

			var teams = [];
			$.each(datacontext.teams, function(key, team) {
				teams.push(new App.Team(team.key, team.name, false));
			});
			self.teamList(teams);
			self.teamList()[0].active(true);
		};
		
		self.displayName = 'KO CMS';
		self.description = 'Durandal is a cross-device, cross-platform client framework written in JavaScript and designed to make Single Page Applications (SPAs) easy to create and maintain.';

		self.views = ko.observableArray([
            new App.View("Web Sockets", "WebSockets.Template", null, true),
            new App.View("Data Viz", "DataViz.Template", null, false),
            new App.View("Drag Drop", "DragDrop.Template", null, false),
            new App.View("JS Plumb", "JSPlumb.Template", null, false)
		]);

		self.selectedView = ko.observable(App.View("Web Sockets", "WebSockets.Template", null, true));

		self.selectedView.subscribe(function(data)
		{
			$.each(self.views(), function(key, view)
			{
				if (data.title == view.title)
				{
					view.active(true);
				}
				else
				{
					view.active(false);
				}
			});
		});

		self.teamList = ko.observableArray();

		self.selectedTeam = ko.observable(self.teamList()[0]);

		self.selectedTeam.subscribe(function(data)
		{
			$.each(self.teamList(), function(key, team)
			{
				if (data.title == team.title)
				{
					team.active(true);
				}
				else
				{
					team.active(false);
				}
			});
		});


		//this.features = [
        //    'Clean MV* Architecture',
        //    'JS & HTML Modularity',
        //    'Simple App Lifecycle',
        //    'Eventing, Modals, Message Boxes, etc.',
        //    'Navigation & Screen State Management',
        //    'Consistent Async Programming w/ Promises',
        //    'App Bundling and Optimization',
        //    'Use any Backend Technology',
        //    'Built on top of jQuery, Knockout & RequireJS',
        //    'Integrates with other libraries such as SammyJS & Bootstrap',
        //    'Make jQuery & Bootstrap widgets templatable and bindable (or build your own widgets).'
        //];
    };

    //Note: This module exports a function. That means that you, the developer, can create multiple instances.
    //This pattern is also recognized by Durandal so that it can create instances on demand.
    //If you wish to create a singleton, you should export an object instead of a function.
    //See the "flickr" module for an example of object export.

	App.home = home;

    return home;
});