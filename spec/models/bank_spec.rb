require 'rails_helper'

RSpec.describe Bank, type: :model do
  context 'data' do
    subject { create :bank, name: 'unibank' }

    it 'sets the data' do
      subject.data = { 'username' => 'test', 'password' => '12345', 'key_path' => '/test/path' }
      expect(subject.data_username).to eql 'test'
      expect(subject.data_password).to eql '12345'
      expect(subject.data_key_path).to eql '/test/path'
    end
  end
end
