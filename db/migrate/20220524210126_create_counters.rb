# frozen_string_literal: true

class CreateCounters < ActiveRecord::Migration[7.0]
  def change
    create_table :counters do |t|
      t.string :name
      t.string :description
      t.datetime :deadline

      t.timestamps
    end
  end
end
