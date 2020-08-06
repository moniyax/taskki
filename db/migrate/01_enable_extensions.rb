# frozen_string_literal: true

class EnableExtensions < ActiveRecord::Migration[5.2]
  def change
    enable_extension 'pgcrypto' unless extension_enabled?('pgcrypto')
  end
end
