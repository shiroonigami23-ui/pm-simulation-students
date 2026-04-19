ActiveRecord::Schema[7.0].define(version: 2024_01_01) do
  create_table "users" do |t|
    t.string "username", null: false
    t.string "email", null: false
    t.string "password_digest", null: false
    t.timestamps
  end
  add_index "users", "email", unique: true
  add_index "users", "username", unique: true

  create_table "posts" do |t|
    t.string  "title", null: false
    t.string  "slug"
    t.boolean "published", default: false
    t.bigint  "user_id", null: false
    t.timestamps
  end
  add_index "posts", "slug", unique: true
  add_index "posts", "user_id"

  create_table "comments" do |t|
    t.text   "body", null: false
    t.bigint "post_id", null: false
    t.bigint "user_id", null: false
    t.timestamps
  end
end
