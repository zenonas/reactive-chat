FactoryGirl.define do
  factory :channel do
    name { Faker::Name.name }
    description { Faker::Lorem.sentence }
  end
end
