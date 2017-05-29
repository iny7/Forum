class ApplicationController < ActionController::Base
  protect_from_forgery with: :null_session

  # 422 unprocessable entity
  skip_before_action :verify_authenticity_token
  # skip_before_filter :authenticate_user!, :if => lambda { |controller| controller.request.path =~ /^\/admin/ }

  # before_filter :authenticate_user!, unless: lambda { |controller| controller.request.format == :json }

  acts_as_token_authentication_handler_for User#, unless: lambda { |controller| controller.request.format.html? }

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

end
