# This file is copied to spec/ when you run 'rails generate rspec:install'
ENV['RAILS_ENV'] ||= 'test'
require 'spec_helper'
require File.expand_path('../../config/environment', __FILE__)
require 'rspec/rails'
require 'capybara/rspec'
require 'capybara/poltergeist'
require 'capybara-screenshot/rspec'

ActiveRecord::Migration.maintain_test_schema!
Capybara.default_driver = :webkit

RSpec.configure do |config|

  config.fixture_path = "#{::Rails.root}/spec/fixtures"

  config.before(:suite) do
    Warden.test_mode!
    FactoryGirl.lint
    DatabaseCleaner.strategy = :truncation
    DatabaseCleaner.clean_with(:truncation)
  end

  config.after(:each) do
    DatabaseCleaner.clean
  end

  config.include FactoryGirl::Syntax::Methods
  config.include Devise::TestHelpers, type: :controller
  config.include Warden::Test::Helpers

  config.after(:each) do
    Warden.test_reset!
  end

  config.use_transactional_fixtures = false
  config.infer_spec_type_from_file_location!
end
