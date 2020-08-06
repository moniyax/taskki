# frozen_string_literal: true

namespace :deploy do
  desc 'Builds the react client'
  before :starting, :build_client do
    run_locally do
      puts "echo 'Running task'"
      unless dry_run?
        execute "cd client && yarn && REACT_APP_API_ROOT=#{ENV['SERVER']} REACT_APP_S3_URL=#{ENV['S3_URL']} REACT_APP_CLOUDFRONT_URL=#{ENV['CLOUDFRONT_URL']} REACT_APP_S3_BUCKET_NAME=#{ENV['S3_BUCKET_NAME']} yarn build"
      end
    end
  end

  desc 'Pushes latest commit to remote repo'
  after :build_client, :push do
    run_locally do
      execute 'git add . ' unless dry_run?
      execute "git commit -m 'Client build'" unless dry_run?
      execute 'git push'  unless dry_run?
    end
  end
end
