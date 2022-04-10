# frozen_string_literal: true

class CreateBanks < ActiveRecord::Migration[6.0]
  def change
    create_table :banks do |t|
      t.string :name
      t.boolean :enabled
      t.text :data
      t.timestamps
      t.datetime :deleted_at
    end
  end
end
