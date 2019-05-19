using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.UI.WebControls;

namespace MelbourneMH.Controllers
{
    public class HomeController : Controller
    {
 
        [Route("iteration2/Home/Home")]
        public ActionResult Home()
        {
            ViewBag.Message = "Home";

            return View();
        }

        public ActionResult DataSelection()
        {
            ViewBag.Message = "DataSelection";

            return View();
        }

        public ActionResult Login()
        {
            ViewBag.Message = "Login";

            return View();
        }

        public ActionResult Adult()
        {
            ViewBag.Message = "Parents and teacher";

            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Aboutus";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Contact";

            return View();
        }

        public ActionResult ChildDataSelect()
        {
            ViewBag.Message = "Contact";

            return View();
        }



        public ActionResult Welcome()
        {
            ViewBag.Message = "Contact";

            return View();
        }

        public ActionResult newHome()
        {
            ViewBag.Message = "Contact";

            return View();
        }

        public ActionResult Introduction()
        {
            ViewBag.Message = "Contact";

            return View();
        }
    }
}