class CreatePosts < ActiveRecord::Migration[5.2]
  def change
    create_table :posts do |t|
      t.text :type_quest
      t.timestamps
    end
  end
end
