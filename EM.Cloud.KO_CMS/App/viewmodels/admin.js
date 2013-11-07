define(['plugins/datacontext', 'plugins/http', 'durandal/app', 'knockout'], function (datacontext, http, app, ko) {
    //Note: This module exports an object.
    //That means that every module that "requires" it will get the same object instance.
    //If you wish to be able to create multiple instances, instead export a function.
    //See the "welcome" module for an example of function export.

    return {

    	activate: function() {
    		this.syncDataContext();
    		this.teamSectionList.push(new App.TeamSectionItem(1, "Section 1", "Energy", "sectionUrl", true));
    		this.teamSectionList.push(new App.TeamSectionItem(2, "Section 2", "Energy", "sectionUrl", true));
    		this.teamSectionList.push(new App.TeamSectionItem(3, "Section 3", "Energy", "sectionUrl", true));
    		this.teamSectionList.push(new App.TeamSectionItem(4, "Section 4", "Energy", "sectionUrl", true));
    		this.teamSectionList.push(new App.TeamSectionItem(5, "Section 1", "PV", "sectionUrl", true));
    		this.teamSectionList.push(new App.TeamSectionItem(6, "Section 2", "PV", "sectionUrl", true));
    		this.teamSectionList.push(new App.TeamSectionItem(7, "Section 3", "PV", "sectionUrl", true));
    		this.teamSectionList.push(new App.TeamSectionItem(8, "Section 4", "PV", "sectionUrl", true));
    	},

    	displayName: 'Admin',
	    selectedTeam: ko.observable(),
	    teamTitle: '',
	    teamList: ko.observableArray(),
	    teamMenuList: ko.observableArray(),
	    teamSectionList: ko.observableArray(),

	    click_AddTeam: function()
	    {
		    datacontext.teams.push(new App.Team((datacontext.teams().length + 1), this.teamTitle, false));
		    
		    datacontext.teamMenuItems.push(new App.TeamMenuItem((datacontext.teamMenuItems().length + 1), "Web Sockets", this.teamTitle, true));
		    datacontext.teamMenuItems.push(new App.TeamMenuItem((datacontext.teamMenuItems().length + 1), "Data Viz", this.teamTitle, true));
		    datacontext.teamMenuItems.push(new App.TeamMenuItem((datacontext.teamMenuItems().length + 1), "Drag Drop", this.teamTitle, true));
		    datacontext.teamMenuItems.push(new App.TeamMenuItem((datacontext.teamMenuItems().length + 1), "JS Plumb", this.teamTitle, true));

		    this.syncDataContext();
	    },
    	
	    syncDataContext : function() {
	    	this.teamList(datacontext.teams());
	    	this.teamMenuList(datacontext.teamMenuItems());
	    }

	};
});