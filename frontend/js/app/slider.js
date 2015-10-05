var SlideModel = Backbone.Model.extend({
	defaults: {
		description: ""
	}
});

var Slides = Backbone.Collection.extend({
    model: SlideModel,
    url: "api/sliders"
});

var MySlides = new Slides();

// [
//         { description: "test1"},
//         { description: "test2"},
//         { description: "test3"}
//     ]
var Slide = Backbone.View.extend({
	el: $('#block'),
	defaults: {
		content: ""
	},
	template: _.template($('.b-slider').html()),
	initialize: function () {
		MySlides.fetch();
	},
	render: function () {

		console.log(MySlides);
		$(this.el).html(this.template());
		this.createSlides();
	},
	createSlides: function () {
		MySlides.each(this.createSlide, this);
		$('.b-slide-list').html(this.defaults.content);
	},
	createSlide: function (slide) {
		console.log('slide', slide);
		this.defaults.content += "<li>" + slide.attributes.description + "</li>";
	}

});

var CreateNewSlide = Backbone.View.extend({
	el: $('#block'),
	template: _.template($('.b-create-slider').html()),
	events: {
		"click .e-create": "create"
	},
	render: function () {
		$(this.el).html(this.template());
	},
	create: function () {
		
		var desc = this.$el.find(".e-input-description").val();
		console.log('create', desc);
		MySlides.create({description: desc});
	}
});


var Controller = Backbone.Router.extend({
    ushState: true,
    routes: {
        ""             : "slide", 
        "slide/create" : "CreateNewSlide"
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



















