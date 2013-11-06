define(['plugins/router', 'durandal/app'], function (router, app) {
    return {
        router: router,
        search: function() {
            //It's really easy to show a message box.
            //You can add custom options too. Also, it returns a promise for the user's response.
            app.showMessage('Search not yet implemented...');
        },
        activate: function()
        {
            router.map([
                { route: '', title:'Home', moduleId: 'viewmodels/home', nav: true },
                { route: 'Admin', moduleId: 'viewmodels/admin', nav: true },
	            { route: 'Flickr - Ireland', moduleId: 'viewmodels/flickr1', nav: true },
				{ route: 'Flickr - Football', moduleId: 'viewmodels/flickr2', nav: true }
            ]).buildNavigationModel();
            
            return router.activate();
        }
    };
});