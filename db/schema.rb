# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20140917154638) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "categories", force: true do |t|
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "category_translations", force: true do |t|
    t.integer  "category_id", null: false
    t.string   "locale",      null: false
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "title"
  end

  add_index "category_translations", ["category_id"], name: "index_category_translations_on_category_id", using: :btree
  add_index "category_translations", ["locale"], name: "index_category_translations_on_locale", using: :btree

  create_table "comments", force: true do |t|
    t.integer  "author_id"
    t.string   "author_type"
    t.integer  "entity_id"
    t.string   "entity_type"
    t.text     "content",     default: ""
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "likes", force: true do |t|
    t.integer  "author_id"
    t.string   "author_type"
    t.integer  "entity_id"
    t.string   "entity_type"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "publishers", force: true do |t|
    t.string   "title"
    t.boolean  "has_avatar"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "description",         default: ""
    t.json     "profile",             default: {}
    t.string   "avatar_file_name"
    t.string   "avatar_content_type"
    t.integer  "avatar_file_size"
    t.datetime "avatar_updated_at"
  end

  create_table "publishers_users", id: false, force: true do |t|
    t.integer "user_id",      null: false
    t.integer "publisher_id", null: false
  end

  create_table "ratings", force: true do |t|
    t.integer  "entity_id"
    t.string   "entity_type"
    t.integer  "user_id"
    t.integer  "value"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "slide_translations", force: true do |t|
    t.integer  "slide_id",    null: false
    t.string   "locale",      null: false
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "question"
    t.text     "description"
  end

  add_index "slide_translations", ["locale"], name: "index_slide_translations_on_locale", using: :btree
  add_index "slide_translations", ["slide_id"], name: "index_slide_translations_on_slide_id", using: :btree

  create_table "slides", force: true do |t|
    t.boolean  "has_image"
    t.integer  "author_id"
    t.string   "author_type"
    t.string   "has_background_color"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "picture_file_name"
    t.string   "picture_content_type"
    t.integer  "picture_file_size"
    t.datetime "picture_updated_at"
  end

  create_table "slides_tests", id: false, force: true do |t|
    t.integer "test_id",  null: false
    t.integer "slide_id", null: false
  end

  create_table "test_translations", force: true do |t|
    t.integer  "test_id",     null: false
    t.string   "locale",      null: false
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "title"
    t.string   "description"
  end

  add_index "test_translations", ["locale"], name: "index_test_translations_on_locale", using: :btree
  add_index "test_translations", ["test_id"], name: "index_test_translations_on_test_id", using: :btree

  create_table "tests", force: true do |t|
    t.integer  "author_id"
    t.string   "author_type"
    t.boolean  "has_background"
    t.integer  "answers_count",        default: 0
    t.boolean  "published",            default: false
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "category_id"
    t.string   "picture_file_name"
    t.string   "picture_content_type"
    t.integer  "picture_file_size"
    t.datetime "picture_updated_at"
    t.integer  "rating",               default: 0
    t.integer  "comments_count"
  end

  create_table "tests_users", id: false, force: true do |t|
    t.integer "test_id", null: false
    t.integer "user_id", null: false
  end

  create_table "user_answers", force: true do |t|
    t.integer  "user_id"
    t.integer  "test_id"
    t.integer  "answers",    array: true
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "users", force: true do |t|
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "email",                  default: "",   null: false
    t.string   "encrypted_password",     default: "",   null: false
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",          default: 0,    null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string   "current_sign_in_ip"
    t.string   "last_sign_in_ip"
    t.integer  "roles_mask"
    t.string   "name"
    t.json     "profile",                default: {}
    t.string   "language",               default: "en"
    t.string   "avatar_file_name"
    t.string   "avatar_content_type"
    t.integer  "avatar_file_size"
    t.datetime "avatar_updated_at"
  end

  add_index "users", ["email"], name: "index_users_on_email", unique: true, using: :btree
  add_index "users", ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true, using: :btree

end
