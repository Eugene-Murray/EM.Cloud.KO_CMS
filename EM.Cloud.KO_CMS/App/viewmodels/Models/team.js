var App = window.App = window.App || {};

App.Team = function(id, title, active)
{
	this.id = id;
	this.title = title;
    this.active = ko.observable(active);
};