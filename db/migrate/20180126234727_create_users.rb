class CreateUsers < ActiveRecord::Migration[5.1]
  def change
    create_table :users do |t|
      t.string :first_name
      t.string :last_name
      t.string :email
      t.integer :age
      t.integer :height_feet
      t.integer :height_inches
      t.integer :weight
      t.string :favorite_color

      t.timestamps
    end
  end
end
