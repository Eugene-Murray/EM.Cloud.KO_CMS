var App = window.App = window.App || {};

requirejs.config({
    paths: {
        'text': '../Scripts/text',
        'durandal': '../Scripts/durandal',
        'plugins': '../Scripts/durandal/plugins',
        'transitions': '../Scripts/durandal/transitions'
    }
});

define('jquery', function() { return jQuery; });
define('knockout', ko);
define('underscore', function() { return _; });
define('infuser', infuser);
//define('KoExternalTemplateEngine', function() { return koexternal; });


define(['plugins/datacontext', 'durandal/system', 'durandal/app', 'durandal/viewLocator', 'infuser'], function(datacontext, system, app, viewLocator, infuser)
{
    //>>excludeStart("build", true);
    system.debug(true);
    //>>excludeEnd("build");

    app.title = 'KO CMS';

    app.configurePlugins({
        router: true,
        dialog: true,
        widget: true
    });

    app.start().then(function() {

    	//infuser.defaults.templateSuffix = ".tmpl.html";
    	//infuser.defaults.templateUrl = "/Templates";

    	datacontext.getData();

        //Replace 'viewmodels' in the moduleId with 'views' to locate the view.
        //Look for partial views in a 'views' folder in the root.
        viewLocator.useConvention();

        //Show the app by setting the root view model for our application with a transition.
        app.setRoot('viewmodels/shell', 'entrance');
    });
});