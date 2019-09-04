using System;
using System.Text;
using System.Threading.Tasks;

namespace MenuSystem.Services
{
    public class ReverseStringService : IReverseString
    {
        Task<string> IReverseString.Reverse(string inputStr)
        {
            StringBuilder sb = new StringBuilder();

            if (!string.IsNullOrWhiteSpace(inputStr))
            {
                var stringArray = inputStr.ToCharArray();


                for (var i = stringArray.Length - 1; i >= 0; i--)
                {
                    sb.Append(stringArray[i]);
                }
            }

            return Task.FromResult<string>(sb.ToString());
        }

        public Task<string> ReverseEffiecient(string inputStr)
        {
            char[] reversedStr = inputStr.ToCharArray();

            if (!string.IsNullOrWhiteSpace(inputStr))
            {
                var stringArray = inputStr.ToCharArray();
                int strLength = stringArray.Length;
                int j = strLength - 1;

                for (var i = 0; i < strLength; i++, j--)
                {
                    reversedStr[j] = stringArray[i];
                    reversedStr[i] = stringArray[j];
                }
            }

            return Task.FromResult<string>(new string(reversedStr));
        }
    }
}
