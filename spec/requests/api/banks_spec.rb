require 'rails_helper'

describe 'Banks API', type: :request do
  let(:api_url) { '/api/banks' }
  let!(:bank) { create :bank }

  describe '#index' do
    it 'returns list of banks' do
      get api_url

      expect(response.status).to be 200
      expect(json.count).to eq 1
      expect(json[0]['id']).to eq bank.id
    end
  end

  describe '#show' do
    it 'returns data of the bank' do
      get "#{api_url}/#{bank.id}"

      expect(response.status).to be 200
      expect(json['id']).to eq bank.id
      expect(json['name']).to eq bank.name
      expect(json['enabled']).to eq bank.enabled
      expect(json['data']).to eq bank.data
    end
  end

  describe '#update' do
    let(:data_params) do
      {
        username: 'username',
        password: 'password',
        key_path: '/test/path.key'
      }
    end
    it 'completes success and returns a new bank' do
      put "#{api_url}/#{bank.id}", params: { data: data_params }

      expect(response.status).to be 200
      expect(bank.reload.data_username).to eq data_params[:username]
      expect(bank.reload.data_password).to eq data_params[:password]
      expect(bank.reload.data_key_path).to eq data_params[:key_path]
    end
  end
end
