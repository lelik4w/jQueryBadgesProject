$(function() {

    $.ajax({
    url: 'https://www.codeschool.com/users/oleksaostapenko.json',
    dataType: 'jsonp',
    success: function(response) {
    	var courseContainer = $.map(response.courses.completed, function(course, index){
            var item = $('<div class="course"></div>');
            $('<h3>' + course.title + '</h3>').appendTo(item);
            $('<img>').attr('src', course.badge).appendTo(item);
    		$('<a>See Course</a>').attr({'href': course.url, 'target': '_blank', 'class': 'btn btn-primary'}).appendTo(item);
            return item;
    	});
            
        $('#badges').html(courseContainer);
    }
  });

});