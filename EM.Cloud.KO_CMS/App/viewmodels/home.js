var App = window.App = window.App || {};

define(['plugins/datacontext'], function(datacontext)
{
	var home = function() {
		var self = this;
		

		self.activate = function() {
			self.syncDataContext();
			self.teamList()[0].active(true);
		};
		
		self.displayName = 'KO CMS';
		self.description = 'Durandal is a cross-device, cross-platform client framework written in JavaScript and designed to make Single Page Applications (SPAs) easy to create and maintain.';

		self.menuItemList = ko.observableArray([
            new App.MenuItem("Web Sockets", "WebSockets.Template", null, true),
            new App.MenuItem("Data Viz", "DataViz.Template", null, false),
            new App.MenuItem("Drag Drop", "DragDrop.Template", null, false),
            new App.MenuItem("JS Plumb", "JSPlumb.Template", null, false)
		]);
		self.selectedMenuItem = ko.observable(App.MenuItem("Web Sockets", "WebSockets.Template", null, true));
		self.selectedMenuItem.subscribe(function(data)
		{
			$.each(self.menuItemList(), function(key, menuItem)
			{
				if (data.title == menuItem.title)
				{
					menuItem.active(true);
				}
				else
				{
					menuItem.active(false);
				}
			});
		});

		self.teamList = ko.observableArray([]);
		self.selectedTeam = ko.observable();
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
		
		self.syncDataContext = function() {
			this.teamList(datacontext.teams());
		};

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