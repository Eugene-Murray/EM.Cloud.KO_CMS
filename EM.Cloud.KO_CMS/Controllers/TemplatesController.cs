using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using EM.Cloud.KO_CMS.Controllers;

namespace EM.Cloud.KO_CMS.Models
{
    public class TemplatesController : Controller
    {
        public TemplatesViewModel viewModel { get; set; }

        public ActionResult KnockoutTemplate(string templateName, int? id)
        {
            this.viewModel = new TemplatesViewModel();
            this.viewModel.Id = id;
            this.viewModel.Heading = "Some header data";
            return PartialView(templateName.Replace("/", string.Empty), this.viewModel);
        }

        public ActionResult RazorTemplate()
        {
            return View();
        }

    }
}
