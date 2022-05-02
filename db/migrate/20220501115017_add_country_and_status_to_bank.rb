class AddCountryAndStatusToBank < ActiveRecord::Migration[6.0]
  def change
    add_column :banks, :country, :string
    add_column :banks, :status, :string
  end
end
