var App = window.App = window.App || {};

App.MenuItem = function(id, title, active) {
	this.id = id;
	this.title = title;
	this.active = ko.observable(active);
};