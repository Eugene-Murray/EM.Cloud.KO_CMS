var App = window.App = window.App || {};

App.View = function(title, templateName, data, active)
{
	this.title = title;
	this.templateName = templateName;
	this.data = data;
	this.active = ko.observable(active);
};