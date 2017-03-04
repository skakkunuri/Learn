using System;

namespace ConsoleApplication3
{
	class Program
	{
		private const string STR_MSG1 = "this is a silly mistake done to the coed ";
		static void Main(string[] args)
		{
            int result = AddNumbers(new Tuple<int, int>(2, 3));
            Console.WriteLine(STR_MSG1 + " " + result);
			Console.ReadLine(); // This is comment by Srikanth
            
		}
        private static int AddNumbers(Tuple<int, int> number)
        {
            return number.Item1 + number.Item2;
        }
    }
}
