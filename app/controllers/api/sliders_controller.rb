class Api::SlidersController < ApplicationController
	skip_before_action :verify_authenticity_token
	def index
		@slides = Slide.all
		render json: @slides
	end

	def create
		binding.pry
		@slide = Slide.create(slide_params)
		render json: @slide
	end

	private

  def slide_params
    params.require(:slider).permit(:description, :img, :name)
  end

end
