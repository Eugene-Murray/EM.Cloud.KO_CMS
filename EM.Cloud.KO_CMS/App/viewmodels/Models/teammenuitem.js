var App = window.App = window.App || {};

App.TeamMenuItem = function(id, teamId, menuItemId, menuTitle, use)
{
	this.id = id;
	this.teamId = teamId;
	this.menuItemId = menuItemId;
	this.menuTitle = menuTitle;
	this.use = ko.observable(use);
};