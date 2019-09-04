using System.Threading.Tasks;

public interface IReverseString
{
    Task<string> Reverse(string inputStr);
    Task<string> ReverseEffiecient(string inputStr);
}