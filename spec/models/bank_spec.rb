# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Bank, type: :model do
  subject { create :bank }

  context 'Validations' do
    it 'validates of name value' do
      expect(subject).to validate_inclusion_of(:name).in_array(described_class::NAMES)
    end
  end

  context 'Data' do
    it 'sets the data' do
      subject.data = { 'username' => 'test', 'password' => '12345', 'key_path' => '/test/path' }
      expect(subject.data_username).to eql 'test'
      expect(subject.data_password).to eql '12345'
      expect(subject.data_key_path).to eql '/test/path'
    end
  end
end
