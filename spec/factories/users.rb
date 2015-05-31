FactoryGirl.define do
  factory :user do
    email { Faker::Internet.email }
    password 'fakepassword'
    password_confirmation 'fakepassword'
  end
end
