// var AppState = Backbone.Model.extend({
//     defaults: {
//         username: "",
//         state: "start"
//     }
// });

// var appState = new AppState();



// var Block = Backbone.View.extend({
//     el: $('#block'),
//     templates: { // Шаблоны на разное состояние
//         "start": _.template($('#start').html()),
//         "success": _.template($('#success').html()),
//         "error": _.template($('#error').html())
//     },
//     events: {
//         "click input:button": "check"
//     },
//     initialize: function () { // Подписка на событие модели
//         this.model.bind('change', this.render, this);
//     },
//     render: function () {
//         var state = this.model.get("state");
//         $(this.$el).html(this.templates[state](this.model.toJSON()));
//         controller.navigate("#" + state, false);
//         return this;
//     },
//     check: function () {
//         var Family = ["Саша", "Юля", "Елизар"];
//         var username = this.$el.find("input:text").val();
//         var find = MyFamily.ckeckUser(username);
//         appState.set({ // Сохранение имени пользователя и состояния
//             "state": find ? "success" : "error",
//             "username": username
//         }); 
//     }
// });

var SlideModel = Backbone.Model.extend({
	defaults: {
		description: ""
	}
});

var Slides = Backbone.Collection.extend({
    model: SlideModel
});

var MySlides = new Slides([
        { description: "test1"},
        { description: "test2"},
        { description: "test3"}
    ]);

var Slide = Backbone.View.extend({
	el: $('#block'),
	defaults: {
		content: "1"
	},
	template: _.template($('.b_slider').html()),
	render: function () {
		$(this.el).html(this.template());
		this.createSlides();
	},
	createSlides: function () {
		console.log(MySlides.models);

		MySlides.each(this.createSlide, this);
		console.log(this.defaults.content);
		$('.b_slide_list').html(this.defaults.content);
	},
	createSlide: function (slide) {
		console.log(slide);
		this.defaults.content += "<li>" + slide.attributes.description + "</li>";
	}

});



var Controller = Backbone.Router.extend({
    ushState: true,
    routes: {
        "": "slide", // Пустой hash-тэг
        "#": "slide", // Пустой hash-тэг
    },

    slide: function () {
        if (Views.slide != null) {
            Views.slide.render();
        }
    }
});

var Views = {
	"slide": new Slide()
}

var controller = new Controller(); // Создаём контроллер

Backbone.history.start();  // Запускаем HTML5 History push 



















