class Api::PokemonController < ApplicationController
  def index
    @pokemon = Pokemon.all
    render :index
  end

  def show
    @pokemon = Pokemon.find(params[:id])
    render :show
  end

  def create
    @pokemon = Pokemon.new(poke_params)
    if @pokemon.save
      debugger;
      render :show
    else
      render json: @pokemon.errors.full_messages, status: 422
    end
  end

  def poke_params
    params.require(:pokemon).permit(:image_url, :name, :attack, :defense, :poke_type, moves: [])
  end
end
