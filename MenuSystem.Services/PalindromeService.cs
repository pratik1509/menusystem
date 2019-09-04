using System.Threading.Tasks;

public class PalindromeService : IPalindrome
{
    public Task<bool> CheckPalindrome(string inputStr)
    {
        if (!string.IsNullOrWhiteSpace(inputStr) && inputStr.Length > 1)
        {
            char[] inputStrArray = inputStr.ToCharArray();

            int j = inputStr.Length - 1;

            for (var i = 0; i < inputStr.Length / 2; i++, j--)
            {
                if (inputStrArray[i] != inputStrArray[j])
                {
                    return Task.FromResult<bool>(false);
                }
            }

            return Task.FromResult<bool>(true);
        }

        return Task.FromResult<bool>(false);
    }
}