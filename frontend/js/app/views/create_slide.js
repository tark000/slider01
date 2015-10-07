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