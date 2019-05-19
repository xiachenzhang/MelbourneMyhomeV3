using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace MelbourneMH.Controllers
{
    public class QuizController : Controller
    {

        public ActionResult QuizCenter()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }

        public ActionResult QuizPop()
        {
            return View();
        }

      

        public ActionResult QuizAll()
        { ViewBag.Message = "Your contact page.";

            return View();
        }

        public ActionResult QuizCul()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }

        public ActionResult QuizEnv()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }

        public ActionResult QuizTran()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }





    }
}