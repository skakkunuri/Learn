using System;

namespace AngularJSCommonModel
{
    public class Employee
    {
        public int EmpID { get; set; }
        public string EmpName { get; set; }
        public int DeptID { get; set; }
        public double Salary { get; set; }
        public DateTime DOJ { get; set; }
        public bool ActiveIndicator { get; set; }
    }
}
