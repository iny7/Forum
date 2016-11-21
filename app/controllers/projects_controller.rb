class ProjectsController < ApplicationController

  def index
    @projects = Project.all
  end

  def show
    @project = Project.find(params[:id])
  end

  def new
    @project = Project.new
  end

  def edit
    @project = Project.find(params[:id])
  end

  def create
    @project = Project.new(project_params)
    @project.user_id = current_user.id
    if @project.save
      redirect_to root_path
    else
      render 'new'
    end
  end

  def destroy
    @project = Project.find(params[:id])
    @project.destroy
    redirect_to projects_path
  end

  def update
    @project = Article.find(params[:id])
    if @project.update(article_params)
      redirect_to @project
    else
      render 'edit'
    end
  end

  private
    def project_params
      params.require(:project).permit(:name, :bool, :password)
    end

end
