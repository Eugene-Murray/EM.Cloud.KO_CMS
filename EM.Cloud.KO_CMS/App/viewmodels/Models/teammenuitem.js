var App = window.App = window.App || {};

App.TeamMenuItem = function(id, menuTitle, teamTitle, use)
{
	this.id = id;
	this.menuTitle = menuTitle;
	this.teamTitle = teamTitle;
	this.use = use;
};