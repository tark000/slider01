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
