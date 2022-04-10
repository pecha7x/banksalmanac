# == Schema Information
#
# Table name: banks
#
#  id         :bigint           not null, primary key
#  name       :string
#  enabled    :boolean
#  data       :text
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  deleted_at :datetime
#
require 'test_helper'

class BankTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
