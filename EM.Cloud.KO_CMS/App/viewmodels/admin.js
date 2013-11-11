define(['plugins/datacontext', 'plugins/http', 'durandal/app', 'knockout'], function (datacontext, http, app, ko) {

    return {

    	activate: function() {
    		this.syncDataContext();
    	},

    	displayName: 'Admin',
	    selectedTeam: ko.observable(),
	    teamTitle: ko.observable().extend({ required: true }),
	    teamList: ko.observableArray(),
	    teamMenuList: ko.observableArray(),
	    teamSectionList: ko.observableArray(),

	    click_AddTeam: function()
	    {
		    //if (this.errors().length == 0) {
			    datacontext.teams.push(new App.Team((datacontext.teams().length + 1), this.teamTitle(), false));

			    datacontext.teamMenuItems.push(new App.TeamMenuItem((datacontext.teamMenuItems().length + 1), "Web Sockets", this.teamTitle(), true));
			    datacontext.teamMenuItems.push(new App.TeamMenuItem((datacontext.teamMenuItems().length + 1), "Data Viz", this.teamTitle(), true));
			    datacontext.teamMenuItems.push(new App.TeamMenuItem((datacontext.teamMenuItems().length + 1), "Drag Drop", this.teamTitle(), true));
			    datacontext.teamMenuItems.push(new App.TeamMenuItem((datacontext.teamMenuItems().length + 1), "JS Plumb", this.teamTitle(), true));
		    
			    datacontext.teamSections.push(new App.TeamSectionItem((datacontext.teamSections().length + 1), "Section 1", this.teamTitle(), "PieChart", true, true, new App.TemplateData(this.teamTitle() + " Pie Chart")));
			    datacontext.teamSections.push(new App.TeamSectionItem((datacontext.teamSections().length + 1), "Section 2", this.teamTitle(), "CurveChart", true, true, new App.TemplateData(this.teamTitle() + " Curve Chart")));
			    datacontext.teamSections.push(new App.TeamSectionItem((datacontext.teamSections().length + 1), "Section 3", this.teamTitle(), "BarChart", true, true, new App.TemplateData(this.teamTitle() + " Bar Chart")));
			    datacontext.teamSections.push(new App.TeamSectionItem((datacontext.teamSections().length + 1), "Section 4", this.teamTitle(), "RealTimeChart", true, true, new App.TemplateData(this.teamTitle() + " Real Time")));
	    

			    this.syncDataContext();
		    //} else {
		    //	toastr.error("Team Name needs to be set");
		    //}
	    },
    	
	    syncDataContext : function() {
	    	this.teamList(datacontext.teams());
	    	this.teamMenuList(datacontext.teamMenuItems());
	    	this.teamSectionList(datacontext.teamSections());
	    }

	};
});