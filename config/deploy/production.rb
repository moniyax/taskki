# frozen_string_literal: true

server ENV['SERVER'], user: ENV['USER'], roles: %w[app db web]

set :ssh_options, {
  forward_agent: true
}
