class Bank < ApplicationRecord
  NAMES = %w(unibank).freeze

  DATA_FIELDS = %i(
    username password key_path
  ).freeze

  DATA_FIELDS.each do |field|
    define_method("data_#{field}") do
      data[field]
    end
  end

  acts_as_paranoid

  serialize :data

  def data
    self['data'] ||= {}
  end

  def data=(values)
    send "#{name}=", values
  end

  def unibank
    "--username='#{data_username}' --password='#{data_password}' --key_path='#{data_key_path}'"
  end

  def unibank=(values)
    self['data'] = {
      username: values['username'],
      password: values['password'],
      key_path: values['key_path']
    }
  end
end
