$("#job").change(function(){
  if($("#job").val() === "default")
  {
    $("#job").addClass("drop-placeholder").blur();
  } else {
    $("#job").removeClass("drop-placeholder");
  }
});
