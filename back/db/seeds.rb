# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

cases = Case.create([{
    title: "title 1",
    description: "description 1",
    video: "video 1",
    },
    {
    title: "title 2",
    description: "description 2",
    video: "video 2"
    },
    {
    title: "title 3",
    description: "description 3",
    video: "video 3"
    },
])