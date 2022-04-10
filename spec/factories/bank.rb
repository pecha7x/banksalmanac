# frozen_string_literal: true

FactoryBot.define do
  factory :bank do
    name { Bank::NAMES.sample }
    enabled { true }
  end
end
