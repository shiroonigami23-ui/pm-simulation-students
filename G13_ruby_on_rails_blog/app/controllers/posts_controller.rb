class PostsController < ApplicationController
  before_action :require_login, only: [:new, :create, :edit, :update, :destroy]
  before_action :set_post, only: [:show, :edit, :update, :destroy]

  def index
    @posts = Post.published.includes(:user).recent.page(params[:page]).per(9)
  end

  def show
    @comment = Comment.new
    @comments = @post.comments.includes(:user).order(:created_at)
  end

  def new    = render :form
  def create
    @post = current_user.posts.new(post_params)
    if @post.save
      redirect_to post_path(@post), notice: 'Post published!'
    else
      render :form, status: :unprocessable_entity
    end
  end

  private
  def set_post = @post = Post.friendly.find(params[:slug])
  def post_params = params.require(:post).permit(:title, :body, :published)
end
