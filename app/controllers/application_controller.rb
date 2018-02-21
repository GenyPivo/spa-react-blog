class ApplicationController < ActionController::API
  def api_error(instance)
    { json: { error: instance.errors.full_messages.join(', ') }, status: 400 }
  end
end
