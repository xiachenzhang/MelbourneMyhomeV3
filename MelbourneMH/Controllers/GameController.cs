using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace MelbourneMH.Controllers
{
    public class GameController : Controller
    {
        // GET: Game
        public ActionResult GameCenter()
        {
            return View();
        }

        public ActionResult MemoryGame()
        {
            return View();
        }

        public ActionResult MemoryGamel2()
        {
            return View();
        }

        public ActionResult MemoryGamel3()
        {
            return View();
        }

        public ActionResult Tangram()
        {
            return View();
        }

        public ActionResult Capital()
        {
            return View();
        }

        public ActionResult RecycleGame()
        {
            return View();
        }
    }
}