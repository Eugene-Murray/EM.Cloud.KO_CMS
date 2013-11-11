using System;
using System.Web.Optimization;

namespace EM.Cloud.KO_CMS {
  public class DurandalBundleConfig {
    public static void RegisterBundles(BundleCollection bundles) {
      bundles.IgnoreList.Clear();
      AddDefaultIgnorePatterns(bundles.IgnoreList);

      bundles.Add(new ScriptBundle("~/App/Models").Include(
              "~/App/viewmodels/Models/menuitem.js",
              "~/App/viewmodels/Models/team.js",
              "~/App/viewmodels/Models/teammenuitem.js",
              "~/App/viewmodels/Models/teamsectionitem.js",
              "~/App/viewmodels/Models/templateData.js"
              ));

	  bundles.Add(
		new ScriptBundle("~/Scripts/vendor")
			.Include("~/Scripts/jquery-{version}.js")
			.Include("~/Scripts/knockout-{version}.js")
            .Include("~/Scripts/bootstrap.js",
            "~/Scripts/underscore.js",
            "~/Scripts/underscore-ko-1.2.2.js",
            "~/Scripts/knockout.validation.debug.js",
            "~/Scripts/TrafficCop.js",
            "~/Scripts/infuser.js",
            "~/Scripts/koExternalTemplateEngine.js",
            "~/Scripts/toastr.js")
		);

      bundles.Add(
        new StyleBundle("~/Content/css")
          .Include("~/Content/ie10mobile.css")
          .Include("~/Content/bootstrap.min.css")
          .Include("~/Content/bootstrap-responsive.min.css")
          .Include("~/Content/font-awesome.min.css")
		  .Include("~/Content/durandal.css")
          .Include("~/Content/starterkit.css")
        );
    }

    public static void AddDefaultIgnorePatterns(IgnoreList ignoreList) {
      if(ignoreList == null) {
        throw new ArgumentNullException("ignoreList");
      }

      ignoreList.Ignore("*.intellisense.js");
      ignoreList.Ignore("*-vsdoc.js");
      ignoreList.Ignore("*.debug.js", OptimizationMode.WhenEnabled);
      //ignoreList.Ignore("*.min.js", OptimizationMode.WhenDisabled);
      //ignoreList.Ignore("*.min.css", OptimizationMode.WhenDisabled);
    }
  }
}