﻿using System;
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
    public class AncestryController : Controller
    {
        private MBMHI2 db = new MBMHI2();

        // GET: Sex_Ratio_Suburbs
        public ActionResult Ancestry()
        {
            return View(db.Ancestry.ToList());
        }

    } 
}
