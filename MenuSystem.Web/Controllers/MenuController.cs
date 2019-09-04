using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace MenuSystem.Web.Controllers
{
    [Route("api/[controller]")]
    public class MenuController : Controller
    {
        private static List<Menu> Menus = new List<Menu>
        {
           new Menu {
               Name = "Home",
               Path = ""
           },           
           new Menu {
               Name = "Calculator",
               Path = "calculator"
           },
           new Menu {
               Name = "Reverse",
               Path = "reverse"
           },
           new Menu {
               Name = "Palindrome",
               Path = "palindrome"
           },
           new Menu {
               Name = "Model driven",
               Path = "modeldriven"
           },         
           new Menu {
               Name = "Lessons async pipe",
               Path = "lessons"
           },         
           new Menu {
               Name = "Filter",
               Path = "filter"
           }
        };

        [HttpGet("[action]")]
        public IEnumerable<Menu> GetMenus()
        {            
            return Menus.AsEnumerable();
        }

        public class Menu
        {
            public string Name { get; set; }
            public string Path { get; set; }
        }
    }
}

