User = Struct.new(:name, :email, :height_feet, :height_inches, :age, :weight, :favorite_color)
RSpec.describe User.new("Kristy", 'test@test.com', 5, 9, 29, 120, 'red') do
  it { is_expected.to have_attributes(:name => 'Kristy') }
  it { is_expected.to have_attributes(:email => 'test@test.com') }
  it { is_expected.to have_attributes(:height_feet => 5) }
  it { is_expected.to have_attributes(:height_inches => 9,) }
  it { is_expected.to have_attributes(:age => 29) }
  it { is_expected.to have_attributes(:weight => 120,) }
  it { is_expected.to have_attributes(:favorite_color => 'red') }
end
