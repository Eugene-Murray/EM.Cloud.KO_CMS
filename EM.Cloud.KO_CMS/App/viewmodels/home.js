var App = window.App = window.App || {};

define(['plugins/datacontext', 'knockout', 'underscore', 'infuser'], function (datacontext, ko, _, infuser)
//define(['plugins/datacontext', 'knockout', 'underscore', 'trafficCop', 'infuser'], function(datacontext, ko, _, trafficCop, infuser)
//define(['plugins/datacontext', 'knockout', 'underscore'], function(datacontext, ko, _)
{
	var home = function()
	{
		infuser.defaults.templateSuffix = ".tmpl.html";
		infuser.defaults.templateUrl = "/Templates";

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
		self.showSection1 = ko.observable(true);
		self.showSection2 = ko.observable(true);
		self.showSection3 = ko.observable(true);
		self.showSection4 = ko.observable(true);
		self.templateSection1 = ko.observable();
		self.templateSection2 = ko.observable(); 
		self.templateSection3 = ko.observable(); 
		self.templateSection4 = ko.observable();
		self.sectionData1 = ko.observable();
		self.sectionData2 = ko.observable();
		self.sectionData3 = ko.observable();
		self.sectionData4 = ko.observable();
		

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
			self.setPageSections(data.title);
		});

		self.setFilteredMenuList = function(teamTitle) {
			var teamMenuItemList = _.where(datacontext.teamMenuItems(), { teamTitle: teamTitle, use: true });
			//var teamMenuItemList2 = datacontext.teamMenuItems().where(datacontext.teamMenuItems(), { teamTitle: teamTitle, use: true });
			self.menuItemListFiltered(teamMenuItemList);
		};

		self.setPageSections = function(teamTitle) {
			var sectionList = _.where(datacontext.teamSections(), { teamTitle: teamTitle });
			self.showSection1(sectionList[0].use);
			self.showSection2(sectionList[1].use);
			self.showSection3(sectionList[2].use);
			self.showSection4(sectionList[3].use);
			
			if (sectionList[0].use) {
				//$('#section1').load(sectionList[0].sectionUrl);
				self.templateSection1(sectionList[0].sectionUrl());
				self.sectionData1(sectionList[0].templateData);
			}
			
			if (sectionList[1].use)
			{
				self.templateSection2(sectionList[1].sectionUrl());
				self.sectionData2(sectionList[1].templateData);
			}
			
			if (sectionList[2].use)
			{
				self.templateSection3(sectionList[2].sectionUrl());
				self.sectionData3(sectionList[2].templateData);
			}
			
			if (sectionList[3].use)
			{
				self.templateSection4(sectionList[3].sectionUrl());
				self.sectionData4(sectionList[3].templateData);
			}

		};
		
		self.syncDataContext = function() {
			self.teamList(datacontext.teams());
			self.menuItemList(datacontext.menuItems());
			
			self.setFilteredMenuList(datacontext.teamMenuItems()[0].teamTitle);
			self.setPageSections(datacontext.teamMenuItems()[0].teamTitle);
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

	App.home = home;

    return home;
});