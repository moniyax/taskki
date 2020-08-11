# frozen_string_literal: true

class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users, id: :uuid do |t|
      t.string :token
      t.string :password_digest
      t.string :username
      t.string :email

      t.timestamps
    end
  end
end
