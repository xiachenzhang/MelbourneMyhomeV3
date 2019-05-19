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
    public class TemperatureController : Controller
    {
        private MBMHI2 db = new MBMHI2();
        
        public ActionResult Temperature()
        {
            return View(db.Temperature.ToList());
        }

    } 
}
