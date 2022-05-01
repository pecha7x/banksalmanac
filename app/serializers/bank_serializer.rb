class BankSerializer < ActiveModel::Serializer
  attributes :id, :name, :status, :country, :enabled, :data
end
