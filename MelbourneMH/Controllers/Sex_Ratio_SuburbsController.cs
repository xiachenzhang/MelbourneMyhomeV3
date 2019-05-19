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
    public class Sex_Ratio_SuburbsController : Controller
    {
        private MBMHI2 db = new MBMHI2();

        // GET: Sex_Ratio_Suburbs
        public ActionResult Index()
        {
            return View(db.Sex_Ratio_Suburbs.ToList());
        }

    } 
}
