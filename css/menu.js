  /*学科一覧*/
  document.addEventListener("DOMContentLoaded", function () {
    const facultyList = document.getElementById("faculty-list");
    const facultyListItem = document.getElementById("faculty");

    facultyListItem.addEventListener("click", function () {
        if (facultyList.style.display === "block") {
            facultyList.style.display = "none";
        } else {
            facultyList.style.display = "block";
        }
    });
});
/* 教員一覧 */
document.addEventListener("DOMContentLoaded", function () {
    const teacherList = document.getElementById("teacher-list");
    const teacherListItem = document.getElementById("teacher");

    teacherListItem.addEventListener("click", function () {
        if (teacherList.style.display === "block") {
            teacherList.style.display = "none";
        } else {
            teacherList.style.display = "block";
        }
    });
});
