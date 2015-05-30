require 'rails_helper'

feature 'Sign in' do
  given(:user) { create(:user) }

  scenario 'can sign in through the front end' do
    visit '/'
    within '#navbar' do
      fill_in 'Email', with: user.email
      fill_in 'Password', with: 'fakepassword'
    end
    click_on 'Sign in'
    expect(page).to have_content 'Success'

  end
end
