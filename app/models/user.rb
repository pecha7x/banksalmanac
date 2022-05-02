class User < ApplicationRecord
  devise :database_authenticatable,
         :rememberable, :validatable

  has_many :banks, dependent: :destroy

  def remember_me
    super || true
  end
end
