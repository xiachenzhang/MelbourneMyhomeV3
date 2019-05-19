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
    public class Population_SuburbController : Controller
    {
        private MBMHI2 db = new MBMHI2();

        // GET: Population_Suburb
        public ActionResult Index()
        {
            return View(db.Population_Suburb.ToList());
        }

     
    }
}
