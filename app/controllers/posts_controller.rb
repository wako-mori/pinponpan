class PostsController < ApplicationController
  include PostsHelper

  def index
  end

  def new
    @quest = Post.new
  end

  def create
    @quest = Post.new(post_params)
    if @quest.valid?
      @quest.save
      redirect_to root_path, notice: 'タイピングワードが追加されました'
    else
      flash.now[:alert] = 'ワードを入力してください'
      render :new
    end
  end

  private
  def post_params
    params.require(:post).permit(:type_quest)
  end

end
