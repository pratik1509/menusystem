using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MenuSystem.Models;
using Microsoft.AspNetCore.Mvc;

namespace MenuSystem.Web.Controllers
{
    [Route("api/[controller]")]
    public class ReverseStringController : Controller
    {
        private readonly IReverseString _reverseString;
        public ReverseStringController(IReverseString reverseString)
        {
            _reverseString = reverseString;
        }

        [HttpPost("[action]")]
        public async Task<ActionResult> ReverseString([FromBody] ReverserString inputStr)
        {            
            return Json(await _reverseString.Reverse(inputStr.stringToBeReversed));
        }

        [HttpPost("[action]")]
        public async Task<ActionResult> ReverseStringEfficient([FromBody] ReverserString inputStr, string id)
        {            
            return Json(await _reverseString.ReverseEffiecient(inputStr.stringToBeReversed));
        }
    }
}
