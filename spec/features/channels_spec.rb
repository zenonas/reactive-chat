require 'rails_helper'

feature 'Channels' do
  given(:user) { create(:user) }
  given!(:channel) { create(:channel) }

  background do
    login_as user, scope: :user
  end

  scenario 'a list of channels is displayed' do
    visit root_path
    expect(page).to have_content channel.name
  end

  scenario 'join a channel' do
    visit channels_path(channel)
    expect(page).to have_content "Channel: #{channel.name}"
    expect(page).to have_content channel.description
  end
end
