using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;
using MelbourneMH.Models;

namespace MelbourneMH.Controllers
{
    public class EnvironmentController : Controller
    {
        private MBMHI2 db = new MBMHI2();

       
        public ActionResult Bird()
        {
            return View(db.EmissionsVIC.ToList());
        }

        public ActionResult Animal()
        {
            return View(db.EmissionsVIC.ToList());
        }

    } 
}
