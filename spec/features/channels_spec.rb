require 'rails_helper'

feature 'Channels' do
  given(:user) { create(:user) }
  given!(:channel) { create(:channel) }

  background do
    login_as user, scope: :user
  end

  scenario 'a list of channels is displayed' do
    visit '/'
    expect(page).to have_content channel.name
  end
end
