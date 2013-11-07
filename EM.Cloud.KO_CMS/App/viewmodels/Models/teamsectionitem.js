var App = window.App = window.App || {};

App.TeamSectionItem = function(id, sectionTitle, teamTitle, sectionUrl, use)
{
	this.id = id;
	this.sectionTitle = sectionTitle;
	this.teamTitle = teamTitle;
	this.sectionUrl = sectionUrl;
	this.use = use;
};