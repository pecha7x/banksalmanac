# frozen_string_literal: true
user = User.create( # rubocop:disable Layout/EmptyLineAfterMagicComment
  username: 'Artem Pecherin',
  email: 'pecha7x@gmail.com',
  password: '12345678',
  password_confirmation: '12345678'
)

Bank::NAMES.each do |bank_name|
  Bank.create(name: bank_name, status: 'active', user: user)
end
