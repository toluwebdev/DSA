let array = ["Judah", "Tolu", "Silas", "Blessing"];
function GetAllStudents(arr, studentName) {
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (element === studentName) {
      console.log("Found", studentName, "in index", i);
    }
  }
}
GetAllStudents(array, "Tolu");
GetAllStudents(array, "Silas");
GetAllStudents(array, "Judah");
GetAllStudents(array, "Blessing");
