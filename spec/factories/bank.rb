FactoryBot.define do
  factory :bank do
    name { Bank::NAMES.sample }
    enabled { true }
  end
end
