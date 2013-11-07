var App = window.App = window.App || {};

define(['plugins/datacontext', 'knockout', 'underscore'], function(datacontext, ko, _)
{
	var home = function() {
		var self = this;
		

		self.activate = function() {
			self.syncDataContext();
			self.teamList()[0].active(true);
		};

		self.canDeactivate = function() {
			$.each(datacontext.teams(), function(key, team) {
				team.active(false);
			});

			return true;
		};
		
		self.displayName = 'KO CMS';
		self.description = 'Durandal is a cross-device, cross-platform client framework written in JavaScript and designed to make Single Page Applications (SPAs) easy to create and maintain.';

		self.menuItemListFiltered = ko.observableArray([]);


		
		self.menuItemList = ko.observableArray([]);
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

			self.setFilteredMenuList(data.title);
		});

		self.setFilteredMenuList = function(teamTitle) {
			var teamMenuItemList = _.where(datacontext.teamMenuItems(), { teamTitle: teamTitle, use: true });
			self.menuItemListFiltered(teamMenuItemList);
		};
		
		self.syncDataContext = function() {
			self.teamList(datacontext.teams());
			self.menuItemList(datacontext.menuItems());
			//self.menuItemListFiltered(self.teamMenuItems);
			
			self.setFilteredMenuList(datacontext.teamMenuItems()[0].teamTitle);
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