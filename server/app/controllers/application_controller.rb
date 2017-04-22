class ApplicationController < ActionController::Base
  protect_from_forgery with: :null_session

  # 422 unprocessable entity
  skip_before_action :verify_authenticity_token

  # before_filter :authenticate_user!, unless: lambda { |controller| controller.request.format == :json }
  before_filter :layout_only#, :if => lambda { |controller| controller.request.format == :html }

  acts_as_token_authentication_handler_for User#, unless: lambda { |controller| controller.request.format.html? }

  def index
    layout_only
  end

  def log(args)
    Rails.logger.info '*' * 20
    Rails.logger.info args
    Rails.logger.info '*' * 20
  end

  private

  # Overwriting the sign_out redirect path method by devise
  def after_sign_out_path_for(resource_or_scope)
    render text: nil, layout: 'application'
    return
  end

  def layout_only
    is_admin = request.path =~ /admin/
    log request.path

    if is_admin
      log 'admin'
    elsif request.format.html?
      render text: nil, layout: true
    else
      # reset_session
      # log request.session_options.inspect
      # request.session_options[:skip] = true
      # env['rack.session.options'][:skip] = true
      log 'fuck'
    end
  end


end
