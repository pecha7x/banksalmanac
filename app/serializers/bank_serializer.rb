class BankSerializer < ActiveModel::Serializer
  attributes :id, :name, :enabled, :data
end
