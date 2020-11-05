$(document).ready(function () {
  $(".PLink").tooltip({ title: "Profile Link", delay: 100 });
  $(".PEdit").tooltip({ title: "Edit", delay: 100 });
  $(".PDelete").tooltip({ title: "Delete", delay: 100 });
  $(".SAttendance").tooltip({ title: "Attendance", delay: 100 });
  $(".SMarks").tooltip({ title: "Assessment", delay: 100 });
  $(".PDelete").tooltip({ title: "Delete", delay: 100 });
  $(".PSTDAdd").tooltip({ title: "Add Student to Current School", delay: 100 });
  $(".PTCHRAdd").tooltip({ title: "Add Teacher to Current School", delay: 100 });

  $("#myInput").on("keyup", function () {
    var value = $(this).val().toLowerCase();
    $("#myTable tr").filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
    });
  });

  // Model 
  $("#myBtn").click(function(){
    $("#myModal").modal();
  });

});
