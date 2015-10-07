var MySlides = new Slides();

var Controller = Backbone.Router.extend({
    ushState: true,
    routes: {
        ""             : "slide", 
        "slide/create" : "CreateNewSlide"
    },
    initialize: function (options) {
    	console.log("options", options);
    },
    slide: function () {
		console.log('slide');

        if (Views.slide != null) {
            Views.slide.render();
        }
    },
    CreateNewSlide: function () {
		console.log('1createSlide');

    	if (Views.CreateNewSlide != null) {
            Views.CreateNewSlide.render();
        }
    }
});


var Views = {
	"slide"         : new Slide(),
	"CreateNewSlide": new CreateNewSlide()
}

var controller = new Controller(); // Создаём контроллер

Backbone.history.start();  // Запускаем HTML5 History push 





















