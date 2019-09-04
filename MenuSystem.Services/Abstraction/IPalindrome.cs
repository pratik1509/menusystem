using System.Threading.Tasks;

public interface IPalindrome
{
    Task<bool> CheckPalindrome(string inputStr);
}