﻿var App = window.App = window.App || {};

App.TeamSectionItem = function(id, sectionTitle, teamTitle, sectionUrl, use, readOnly, templateData)
{
	this.id = id;
	this.sectionTitle = sectionTitle;
	this.teamTitle = teamTitle;
	this.sectionUrl = ko.observable(sectionUrl);
	this.use = use;
	this.readOnly = readOnly;
	this.templateData = ko.observable(templateData);
};