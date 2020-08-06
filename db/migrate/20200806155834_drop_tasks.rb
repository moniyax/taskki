# frozen_string_literal: true

class DropTasks < ActiveRecord::Migration[5.2]
  def change
    drop_table :tasks do |t|
      t.string :text
      t.boolean :completed

      t.timestamps
    end
  end
end
