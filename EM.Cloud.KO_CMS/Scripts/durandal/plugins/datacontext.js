define(['plugins/http', 'durandal/app', 'knockout'], function (http, app, ko) {
	/**
     * @class HTTPModule
     * @static
     */

	return {
		/**
         * team array
         * @property {array} teams
         */
		teams: [{ key: 1, name: 'Energy' }, { key: 2, name: 'PV' }]
	};
});