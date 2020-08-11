# frozen_string_literal: true

class ApplicationController < ActionController::Base
  protect_from_forgery with: :null_session
  around_action :handle_exceptions, if: proc { request.path.include?('/api') }

  def render_json_validation_error(messages, tag)
    title = I18n.t("error_messages.#{tag}.title")
    code = I18n.t("error_messages.#{tag}.code")

    render json: {
      messages: messages,
      tag: tag,
      title: title,
      code: code,
      status: 400
    }, status: 400
  end

  def render_json_error(status, tag)
    status = Rack::Utils::SYMBOL_TO_STATUS_CODE[status] if status.is_a? Symbol
    title = I18n.t("error_messages.#{tag}.title")
    code = I18n.t("error_messages.#{tag}.code")
    detail = I18n.t("error_messages.#{tag}.detail", default: '')

    render json: {
      messages: [detail],
      tag: tag,
      title: title,
      code: code,
      status: 400
    }, status: status
  end

  def handle_exceptions
    begin
      yield
    rescue ActiveRecord::RecordNotFound => e
      log_application_error(e)
      status = 404
    rescue ActiveRecord::RecordInvalid => e
      log_application_error(e)
      status = 422
    rescue ArgumentError => e
      log_application_error(e)
      status = 400
    rescue StandardError => e
      log_application_error(e)
      status = 505
    end
    json_response(status) unless e.class == NilClass
  end

  def json_response(status)
    tag = :application_error
    title = I18n.t("error_messages.#{tag}.title")
    code = I18n.t("error_messages.#{tag}.code")
    detail = I18n.t("error_messages.#{tag}.detail")

    render json: {
      messages: [detail],
      status: status,
      code: code,
      tag: tag,
      title: title

    }, status: status
  end

  def log_application_error(exception)
    logger.error ([exception.message] + exception.backtrace).join($INPUT_RECORD_SEPARATOR)
  end
end
