class CreateSlides < ActiveRecord::Migration
  def change
    create_table :slides do |t|
      t.string :img
      t.text :description
      t.string :name

      t.timestamps null: false
    end
  end
end
