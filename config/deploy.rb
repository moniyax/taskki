# frozen_string_literal: true

# config valid only for current version of Capistrano
lock '3.11.0'

set :application, ENV['APPLICATION']
set :repo_url, ENV['REPO_URL']
set :user, ENV['USER']

# Default deploy_to directory is /var/www/my_app_name
set :deploy_to, "/home/#{fetch(:user)}/apps/#{fetch(:application)}"
set :deploy_via, :remote_cache
append :linked_files, '.rbenv-vars'

append :linked_files, 'config/cable.yml'

append :linked_dirs, 'log', 'tmp/pids', 'tmp/cache', 'tmp/sockets', 'public/system'
set :rbenv_ruby, File.read('.ruby-version').strip
