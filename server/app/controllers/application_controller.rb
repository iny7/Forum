class ApplicationController < ActionController::API
  include ActionView::Layouts

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
