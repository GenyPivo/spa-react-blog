class AddFileToPosts < ActiveRecord::Migration[5.1]
  def up
    add_attachment :posts, :file
  end

  def down
    remove_attachment :posts, :file
  end
end
