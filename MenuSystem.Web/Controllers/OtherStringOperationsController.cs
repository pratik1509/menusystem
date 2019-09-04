// using System.Threading.Tasks;
// using Microsoft.AspNetCore.Mvc;

// [Route("api/[controller]")]
// public class OtherStringOperationsController : Controller
// {
//     private readonly IPalindrome _palindromeService;
//     public OtherStringOperationsController(IPalindrome palindromeService)
//     {
//         _palindromeService = palindromeService;
//     }
//     [HttpPost("[action]")]
//     public async Task<ActionResult> CheckPalindrome([FromBody] Palindrome inputStr)
//     {
//         return Ok(await _palindromeService.CheckPalindrome(inputStr.InputStr));
//     }
// }