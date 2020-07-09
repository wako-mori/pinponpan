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
      pquest.save
    else
      redirect_to root_path
    end
  end
end
