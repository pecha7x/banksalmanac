class AddUserToBank < ActiveRecord::Migration[6.0]
  def change
    add_reference :banks, :user, null: false, foreign_key: true # rubocop:disable Rails/NotNullColumn
  end
end
