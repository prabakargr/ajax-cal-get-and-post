var list;
$(document).ready(function(){
	$.ajax({
		type:"GET",
		url:"http://59d884d9b28c460012b38970.mockapi.io/student",
		dataType:"json",
		success:function(result){
			list=result.length
			var text="";
			for ( i = 0; i < result.length; i++) {
				text +="<tr><td>"+result[i].id+"</td><td>"+result[i].name
				+"</td><td>"+result[i].age+"</td><td>"+result[i].school
				+"</td></tr>"
			}
			$("#tbody").html(text)
		}
	});
	$("button").click(function(){
		var student={
		    name:$("#name").val(),
            age:$("#age").val(),
            school:$("#school").val()
		}
		list=list+1;
		$.post("http://59d884d9b28c460012b38970.mockapi.io/student",student)
		$("#tbody").append("<tr><td>"+list+"</td><td>"+student.name+"</td><td>"+
		student.age+"</td><td>"+student.school+"</td></tr>");
	});
	
});