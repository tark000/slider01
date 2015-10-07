var Slides = Backbone.Collection.extend({
    model: SlideModel,
    url: "api/sliders"
});