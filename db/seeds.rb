# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require "open-uri"

User.destroy_all

demo = User.create!(first_name: "demo", last_name: "user", email: "demo11", password: "passwordz")
user1 = User.create!(first_name: "Steph", last_name: "Harper", email: "harper@steph.com", password: "nicebreeze")
user2 = User.create!(first_name: "Julia", last_name: "Follestad", email: "follestad@julia.com", password: "nicebreeze")
user3 = User.create!(first_name: "Amir", last_name: "Chopra", email: "chopra@amir.com", password: "nicebreeze")
user4 = User.create!(first_name: "Donna", last_name: "Fong", email: "fong@donna.com", password: "nicebreeze")

