# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require "open-uri"

User.destroy_all

demo = User.create!(first_name: "demo user", last_name: "!", email: "demo11", password: "passwordz")
u1 = User.create!(first_name: "Pete", last_name: "Ichien", email: "sakaguchi@rodney.com", password: "nicebreeze")
u2 = User.create!(first_name: "Julia", last_name: "Follestad", email: "follestad@julia.com", password: "nicebreeze")
u3 = User.create!(first_name: "Kate", last_name: "Meyers", email: "bey@khalil.com", password: "nicebreeze")
u4 = User.create!(first_name: "Jameson", last_name: "Moore", email: "valdez@jimonte.com", password: "nicebreeze")
u5 = User.create!(first_name: "Amy", last_name: "Emerson", email: "singh@priyanka.com", password: "nicebreeze")

u6 = User.create!(first_name: "Ashby", last_name: "Kearnin", email: "ashby@kearnin.com", password: "nicebreeze")
u7 = User.create!(first_name: "Michelle", last_name: "Camaray", email: "camaray@jaime.com", password: "nicebreeze")
u8 = User.create!(first_name: "Nathan", last_name: "Lan", email: "tsang@nathan.com", password: "nicebreeze")
u9 = User.create!(first_name: "Alyson", last_name: "Price", email: "farley@demitrias.com", password: "nicebreeze")
u10 = User.create!(first_name: "Jen", last_name: "Wells", email: "ong@jennifer.com", password: "nicebreeze")



Park.destroy_all
#______________________________________________________________________________________________

p1 = Park.create!(name: "Point Reyes National Seashore", 
                  description: "Point Reyes is a few miles north of San Francisco and offers a number of great hiking options. There are short hikes to the beach from several entrances, as well as longer backpacking options. There are many campsites near the beaches with water and facilities. The lighthouse on the point is also a major tourist attraction, as are the wildflowers in the spring.",
                  acreage: 71028,
                  contact: '415-464-5100',
                  park_type: "National",
                  lat: 38.0512, 
                  lon: 122.8663) 

p1_parkpic = URI.open("https://more-trails-seeds.s3-us-west-1.amazonaws.com/point-reyes-bg.png")
p1.backgroundPhoto.attach(io: p1_parkpic, filename: "point-reyes-bg.png")


#______________________________________________________________________________________________


p2 = Park.create!(name: "Sequoia National Park", 
                  description: "The beautiful Sequoia National Park features the tallest peak in the continental United States and the largest trees on the planet. Covering an impressive 404,063 acres, there is so much to explore including the Giant Forest. There you will find the world's largest tree, General Sherman, and many of the world's other largest trees. There are numerous caves, Mount Whitney, and the granite dome Moro Rock.",
                  acreage: 404063,
                  contact: '559-565-3341',
                  park_type: "National",
                  lat: 36.4864, 
                  lon: 118.5658) 

p2_parkpic = URI.open("https://more-trails-seeds.s3-us-west-1.amazonaws.com/sequoia-bg.png")
p2.backgroundPhoto.attach(io: p2_parkpic, filename: "sequoia-bg.png")



#______________________________________________________________________________________________

p3 = Park.create!(name: "Mt. Diablo State Park", 
                  description: "Mount Diablo State Park is one of the ecological treasures of the San Francisco Bay Area. Every season in the park has its special qualities. Discover them for yourself, from the mountain's 3,849-foot summit to its beautiful wildflowers, extensive trail system, fascinating wildlife, and distinctive rock formations.",
                  acreage: 20000,
                  contact: '925-837-2525',
                  park_type: "State",
                  lat: 37.8816, 
                  lon: 121.9142) 

p3_parkpic = URI.open("https://more-trails-seeds.s3-us-west-1.amazonaws.com/mt-diablo-bg.png")
p3.backgroundPhoto.attach(io: p3_parkpic, filename: "mt-diablo-bg.png")

                  

#______________________________________________________________________________________________

p4 = Park.create!(name: "Tilden Regional Park", 
                  description: "Tilden Nature Area is a 740-acre preserve located just North of Tilden Regional Park. With over 10 miles of hiking trails, the preserve contains a blend of native and introduced plant communities, including oak/bay woodlands, grasslands, eucalyptus forests, and streams. Hikes range from the leisurely, self-guided Jewel Lake Nature Trail to a vigorous climb up Wildcat Peak (elevation 1,211 ft.) for panoramic, San Francisco Bay views. A 750-foot boardwalk through the woods leads to Jewel Lake, a historic reservoir and waterworks, and a peaceful place to watch wildlife. At Tilden Nature Area one can also find the renowned Environmental Education Center (EEC), headquarters for the area's interpretive programs, and the historic Little Farm.",
                  acreage: 2079,
                  contact: '510-544-2233',
                  park_type: "State",
                  lat: 37.8928, 
                  lon: 122.2424) 


p4_parkpic = URI.open("https://more-trails-seeds.s3-us-west-1.amazonaws.com/tilden-bg.png")
p4.backgroundPhoto.attach(io: p4_parkpic, filename: "tilden-bg.png")


Trail.destroy_all
#______________________________________________________________________________________________

# reyes
t1 = Trail.create!(name: "Alamere Falls via Olema Valley, Bolema, Lake Ranch, Coast Trail", 
                    description: "Alamere Falls is a tidefall waterfall that flows into the Pacific Ocean. This quintessential Marin County hike is located in Point Reyes National Seashore, northwest of San Francisco. The hike to Alamere Falls can be started from the Coast Trail via the Palomarin Trailhead.  Alamere Falls via Coast Trail from Palomarin Trailhead is a 11 mile heavily trafficked out and back trail located near Bolinas, California that features a lake and is rated as moderate. The trail is primarily used for hiking, nature trips, and bird watching and is accessible year-round.",
                    difficulty: "moderate", 
                    distance: 14.6, 
                    route_type: "Out & back",
                    lat: 37.99684,
                    lon: -122.75794,
                    elevation_gain: 2641,
                    time: 'Est. 5 h 44 m',
                    locale: "Point Reyes National Seashore",
                    park_id: p1.id)

t1_trailpic = URI.open("https://more-trails-seeds.s3-us-west-1.amazonaws.com/alamere_falls.png")
t1.coverPhoto.attach(io: t1_trailpic, filename: "alamere_falls.png")
#______________________________________________________________________________________________

t2 = Trail.create!(name: "Tomales Point Trail", 
                    description: "Tomales Point Trail is a 9.4 mile heavily trafficked out and back trail located near Marshall, California that offers the chance to see wildlife and is rated as moderate. The trail is primarily used for hiking, walking, running, and horses and is accessible year-round. Horses are also able to use this trail.",
                    difficulty: "moderate", 
                    distance: 9.4, 
                    route_type: "Out & back",
                    lat: 38.21188,
                    lon: -122.97306,
                    elevation_gain: 1177,
                    time: "Est 4 h 35 m",
                    locale: "Point Reyes National Seashore",
                    park_id: p1.id)

t2_trailpic = URI.open("https://more-trails-seeds.s3-us-west-1.amazonaws.com/tomales_point.png")
t2.coverPhoto.attach(io: t2_trailpic, filename: "tomales_point.png")

#______________________________________________________________________________________________

t3 = Trail.create!(name: "Coast Trail to Bass Lake", 
                    description: "Coast Trail to Bass Lake is a 6 mile heavily trafficked out and back trail located near Bolinas, California that offers the chance to see wildlife and is rated as moderate. The trail is primarily used for hiking, walking, nature trips, and bird watching and is accessible year-round.",
                    difficulty: "moderate", 
                    distance: 6.0, 
                    route_type: "Out & back",
                    lat: 37.93441,
                    lon: -122.74705,
                    elevation_gain: 784,
                    locale: "Point Reyes National Seashore",
                    time: "Est. 2 h 57 m",
                    park_id: p1.id)

t3_trailpic = URI.open("https://more-trails-seeds.s3-us-west-1.amazonaws.com/bass_lake.png")
t3.coverPhoto.attach(io: t3_trailpic, filename: "bass_lake.png")
#______________________________________________________________________________________________


t4 = Trail.create!(name: "Limantour Beach Trail", 
                    description: "Limantour Beach Trail is a 5.3 mile moderately trafficked out and back trail located near Inverness, California that offers the chance to see wildlife and is good for all skill levels. The trail is primarily used for hiking, walking, and nature trips and is accessible year-round.",
                    difficulty: "moderate", 
                    distance: 5.3, 
                    route_type: "Out & back",
                    lat: 38.02921,
                    lon: -122.88281,
                    elevation_gain: 72,
                    locale: "Point Reyes National Seashore",
                    time: "Est. 2 h 11 m",
                    park_id: p1.id)

t4_trailpic = URI.open("https://more-trails-seeds.s3-us-west-1.amazonaws.com/04_limantour_beach.png")
t4.coverPhoto.attach(io: t4_trailpic, filename: "04_limantour_beach.png")
#______________________________________________________________________________________________

t5 = Trail.create!(name: "Muddy Hollow, Coast Trail, Sky Trail, Laguna Trail", 
                    description: "Muddy Hollow, Coast Trail, Sky Trail, Laguna Trail is a 12.4 mile heavily trafficked loop trail located near Point Reyes Station, California that features beautiful wild flowers and is rated as moderate. The trail offers a number of activity options and is accessible year-round.",
                    difficulty: "moderate", 
                    distance: 12.4, 
                    route_type: "Out & back",
                    lat: 38.04809,
                    lon: -122.86925,
                    elevation_gain: 1548,
                    locale: "Point Reyes National Seashore",
                    time: "Est. 6 h 2 m",
                    park_id: p1.id)

t5_trailpic = URI.open("https://more-trails-seeds.s3-us-west-1.amazonaws.com/muddy_hollow.png")
t5.coverPhoto.attach(io: t5_trailpic, filename: "muddy_hollow.png")


#______________________________________________________________________________________________

#sequoia
t6 = Trail.create!(name: "Mount Whitney Trail", 
                    description: 'Mount Whitney Trail is a 20.9 mile heavily trafficked out and back trail located near Lone Pine, California that features a lake and is only recommended for very experienced adventurers. The trail is primarily used for hiking, camping, and backpacking and is best used from April until October. This strenuous out-and-back trail leads past rocky switchbacks, sheer cliffs, and flowing waterfalls to the summit of Mt. Whitney, the highest point in the contiguous United States. Reaching the summit of Whitney is an incredible accomplishment, but the journey is sure to challenge even the fittest of hikers.',
                    difficulty: "hard", 
                    distance: 20.9, 
                    route_type: "Out & back",
                    lat: 36.58747,
                    lon: -118.23942,
                    elevation_gain: 6646,
                    time: "Est. 13 h 20 m",
                    locale: "John Muir Wilderness",
                    park_id: p2.id)

t6_trailpic = URI.open("https://more-trails-seeds.s3-us-west-1.amazonaws.com/mt_whitney.png")
t6.coverPhoto.attach(io: t6_trailpic, filename: "mt_whitney.png")
#______________________________________________________________________________________________

t7 = Trail.create!(name: "General Sherman Tree Trail", 
                    description: 'General Sherman Tree Trail is a 1.2 mile heavily trafficked loop trail located near Three Rivers, California that features beautiful wild flowers and is good for all skill levels. The trail is primarily used for hiking, walking, and nature trips and is accessible year-round.',
                    difficulty: "easy", 
                    distance: 1.2, 
                    route_type: "Loop",
                    lat: 36.58163,
                    lon: -118.75145,
                    elevation_gain: 196,
                    time: "Est. 29 m",
                    locale: "Sequoia National Park",
                    park_id: p2.id)

t7_trailpic = URI.open("https://more-trails-seeds.s3-us-west-1.amazonaws.com/general_sherman.png")
t7.coverPhoto.attach(io: t7_trailpic, filename: "general_sherman.png")
#______________________________________________________________________________________________

t8 = Trail.create!(name: "Heather Lake, Emerald Lake, and Pear Lake", 
                    description: 'Heather Lake, Emerald Lake, and Pear Lake is a 12.3 mile heavily trafficked out and back trail located near Three Rivers, California that features a waterfall and is rated as difficult. The trail is primarily used for hiking, camping, and backpacking and is best used from June until October.',
                    difficulty: "hard", 
                    distance: 12.3, 
                    route_type: "Out & back",
                    lat: 36.59654,
                    lon: -118.73438,
                    elevation_gain: 2936,
                    time: "Est. 5 h 58 m",
                    locale: "Sequoia National Park",
                    park_id: p2.id)

t8_trailpic = URI.open("https://more-trails-seeds.s3-us-west-1.amazonaws.com/heather_lake.png")
t8.coverPhoto.attach(io: t8_trailpic, filename: "heather_lake.png")
#______________________________________________________________________________________________

t9 = Trail.create!(name: "Giant Forest Loop Trail", 
                    description: 'Giant Forest Loop Trail is a 7 mile moderately trafficked loop trail located near Sequoia National Park, California that features beautiful wild flowers and is good for all skill levels. The trail is primarily used for hiking, running, nature trips, and bird watching and is best used from May until October.',
                    difficulty: "easy", 
                    distance: 12.3, 
                    route_type: "Loop",
                    lat: 36.58487,
                    lon: -118.74967,
                    elevation_gain: 1272,
                    time: "Est. 2 h 50 m",
                    locale: "Sequoia National Park",
                    park_id: p2.id)

t9_trailpic = URI.open("https://more-trails-seeds.s3-us-west-1.amazonaws.com/giant_forest_loop.png")
t9.coverPhoto.attach(io: t9_trailpic, filename: "giant_forest_loop.png")
#______________________________________________________________________________________________

t10 = Trail.create!(name: "Johnsondale Bridge River Trail", 
                    description: 'Johnsondale Bridge River Trail is a 5.2 mile moderately trafficked out and back trail located near Kernville, California that features a waterfall and is rated as moderate. The trail offers a number of activity options and is accessible year-round. Dogs are also able to use this trail but must be kept on leash.',
                    difficulty: "moderate", 
                    distance: 5.2, 
                    route_type: "Out & back",
                    lat: 35.96948,
                    lon: -118.48731,
                    elevation_gain: 561,
                    time: "Est. 2 h 32 m",
                    locale: "Sequoia National Park",
                    park_id: p2.id)

t10_trailpic = URI.open("https://more-trails-seeds.s3-us-west-1.amazonaws.com/johnsondale.png")
t10.coverPhoto.attach(io: t10_trailpic, filename: "johnsondale.png")

#______________________________________________________________________________________________

t11 = Trail.create!(name: "Eagle Peak Loop", 
                    description: 'Everybody loves to visit the summit of Mount Diablo, but many seasoned San Francisco Bay Area hikers prefer this hike to Eagle Peak via Mitchell Canyon, which takes in all the features that make Mount Diablo State Park unique. Mitchell Canyon is shady with abundant wildflowers in the spring; Eagle Peak culminates a rugged hike to jaw-dropping vistas of the East Bay and surrounding terrain. On a clear winter day you might be able to spot the snow-capped peaks of the Sierra Nevada.Eagle Peak Loop is a 7.6 mile heavily trafficked loop trail located near Clayton, California that features beautiful wild flowers and is rated as difficult. The trail is primarily used for hiking, running, nature trips, and bird watching and is accessible year-round.',
                    difficulty: "hard", 
                    distance: 7.6, 
                    route_type: "Loop",
                    lat: 37.92096,
                    lon: -121.94127,
                    elevation_gain: 2198,
                    time: "Est. 4 h 33 m",
                    locale: "Mount Diablo State Park",
                    park_id: p3.id)

t11_trailpic = URI.open("https://more-trails-seeds.s3-us-west-1.amazonaws.com/eagle_peak_loop.png")
t11.coverPhoto.attach(io: t11_trailpic, filename: "eagle_peak_loop.png")
#______________________________________________________________________________________________


t12 = Trail.create!(name: "Rock City, Wind Caves, and Sentinel Rock", 
                    description: 'Rock City, Wind Caves, and Sentinel Rock is a 1.2 mile heavily trafficked loop trail located near Diablo, California that features beautiful wild flowers and is good for all skill levels. The trail is primarily used for walking and nature trips and is accessible year-round.',
                    difficulty: "easy", 
                    distance: 1.2, 
                    route_type: "Loop",
                    lat: 37.85008,
                    lon: -121.93384,
                    elevation_gain: 213,
                    time: "Est. 35 m",
                    locale: "Mount Diablo State Park",
                    park_id: p3.id)

t12_trailpic = URI.open("https://more-trails-seeds.s3-us-west-1.amazonaws.com/rock_city.png")
t12.coverPhoto.attach(io: t12_trailpic, filename: "rock_city.png")

#______________________________________________________________________________________________

t13 = Trail.create!(name: "Mitchell Creek to Diablo Summit", 
                    description: 'Mitchell Creek to Diablo Summit is a 13.1 mile heavily trafficked loop trail located near Clayton, California that features beautiful wild flowers and is only recommended for very experienced adventurers. The trail offers a number of activity options and is best used from September until June',
                    difficulty: "hard", 
                    distance: 13.1, 
                    route_type: "Loop",
                    lat: 37.91983,
                    lon: -121.94195,
                    elevation_gain: 3858,
                    time: "Est. 7 h 42 m",
                    locale: "Mount Diablo State Park",
                    park_id: p3.id)

t13_trailpic = URI.open("https://more-trails-seeds.s3-us-west-1.amazonaws.com/mitchell_creek.png")
t13.coverPhoto.attach(io: t13_trailpic, filename: "mitchell_creek.png")
#______________________________________________________________________________________________


t14 = Trail.create!(name: "Riggs Canyon Loop", 
                    description: 'Riggs Canyon Loop is a 8.2 mile moderately trafficked loop trail located near Danville, California that offers scenic views and is rated as moderate. The trail is primarily used for hiking, walking, nature trips, and bird watching and is accessible year-round.',
                    difficulty: "moderate", 
                    distance: 8.2, 
                    route_type: "Loop",
                    lat: 37.8131,
                    lon: -121.85744,
                    elevation_gain: 1230,
                    time: "Est. 4 h 28 m",
                    locale: "Mount Diablo State Park",
                    park_id: p3.id)

t14_trailpic = URI.open("https://more-trails-seeds.s3-us-west-1.amazonaws.com/riggs_canyon.png")
t14.coverPhoto.attach(io: t14_trailpic, filename: "riggs_canyon.png")

#______________________________________________________________________________________________

t15 = Trail.create!(name: "Mount Diablo Grand Loop Trail", 
                    description: 'Mount Diablo Grand Loop Trail is a 6.2 mile heavily trafficked loop trail located near Clayton, California that features beautiful wild flowers and is rated as difficult. The trail is primarily used for hiking, walking, running, and bird watching and is accessible year-round.',
                    difficulty: "moderate", 
                    distance: 6.2, 
                    route_type: "Loop",
                    lat: 37.87679,
                    lon: -121.93099,
                    elevation_gain: 1797,
                    time: "Est. 3 h 30 m",
                    locale: "Mount Diablo State Park",
                    park_id: p3.id)

t15_trailpic = URI.open("https://more-trails-seeds.s3-us-west-1.amazonaws.com/grand_loop.png")
t15.coverPhoto.attach(io: t15_trailpic, filename: "grand_loop.png")
#______________________________________________________________________________________________


t16 = Trail.create!(name: "Meadows Canyon, Wildcat Gorge and Curran Trail Loop ", 
                    description: 'Meadows Canyon, Wildcat Gorge and Curran Trail Loop is a 3.4 mile heavily trafficked loop trail located near Berkeley, California that features beautiful wild flowers and is rated as moderate. The trail offers a number of activity options and is accessible year-round. Dogs are also able to use this trail but must be kept on leash.',
                    difficulty: "moderate", 
                    distance: 3.4, 
                    route_type: "Loop",
                    lat: 37.90515,
                    lon: -122.2445,
                    elevation_gain: 518,
                    time: "Est. 2 h 05 m",
                    locale: "Tilden Regional Park, Berkeley, California",
                    park_id: p4.id)

t16_trailpic = URI.open("https://more-trails-seeds.s3-us-west-1.amazonaws.com/meadows.png")
t16.coverPhoto.attach(io: t16_trailpic, filename: "meadows.png")

#______________________________________________________________________________________________

t17 = Trail.create!(name: "Grizzly Peak to Skyline", 
                    description: 'Grizzly Peak to Skyline is an 11.5 mile out and back trail located near Berkeley, California that features beautiful wild flowers and is good for all skill levels. The trail is primarily used for nature trips and is accessible year-round.',
                    difficulty: "moderate", 
                    distance: 11.5, 
                    route_type: "Out & back",
                    lat: 37.88324,
                    lon: -122.24464,
                    elevation_gain: 2444,
                    time: "Est. 6 h 30 m",
                    locale: "Tilden Regional Park, Berkeley, California",
                    park_id: p4.id)

t17_trailpic = URI.open("https://more-trails-seeds.s3-us-west-1.amazonaws.com/cycling.png")
t17.coverPhoto.attach(io: t17_trailpic, filename: "cycling.png")

#______________________________________________________________________________________________

t18 = Trail.create!(name: "Seaview, Meadows Canyon, Wildcat Gorge",
                    description: 'Seaview, Meadows Canyon, Wildcat Gorge is a 9 mile moderately trafficked loop trail located near Berkeley, California that features beautiful wild flowers and is rated as moderate. The trail is primarily used for hiking, nature trips, and mountain biking and is accessible year-round. Dogs are also able to use this trail.',
                    difficulty: "moderate", 
                    distance: 9.0, 
                    route_type: "Loop",
                    lat: 37.8816,
                    lon: -122.22231,
                    elevation_gain: 1797,
                    time: "Est. 5 h 04 m",
                    locale: "Tilden Regional Park, Berkeley, California",
                    park_id: p4.id)

t18_trailpic = URI.open("https://more-trails-seeds.s3-us-west-1.amazonaws.com/seaview.png")
t18.coverPhoto.attach(io: t18_trailpic, filename: "seaview.png")

#______________________________________________________________________________________________

t19 = Trail.create!(name: "Lomas Cantadas to Skyline", 
                    description: 'Lomas Cantadas to Skyline is a 11 mile moderately trafficked out and back trail located near Orinda, California that offers the chance to see wildlife and is rated as moderate. The trail offers a number of activity options and is accessible year-round. Horses are also able to use this trail.',
                    difficulty: "moderate", 
                    distance: 11.0, 
                    route_type: "Out & back",
                    lat: 37.87979,
                    lon: -122.22145,
                    elevation_gain: 2309,
                    time: "Est. 6 h 12 m",
                    locale: "Tilden Regional Park, Berkeley, California",
                    park_id: p4.id)

t19_trailpic = URI.open("https://more-trails-seeds.s3-us-west-1.amazonaws.com/llomas.png")
t19.coverPhoto.attach(io: t19_trailpic, filename: "llomas.png")

#______________________________________________________________________________________________
t20 = Trail.create!(name: "Nimitz Way", 
                    description: 'Nimitz Way is a 8.2 mile heavily trafficked out and back trail located near Berkeley, California that features beautiful wild flowers and is rated as moderate. The trail offers a number of activity options and is accessible year-round. Dogs are also able to use this trail but must be kept on leash.',
                    difficulty: "moderate", 
                    distance: 8.2, 
                    route_type: "Out & back",
                    lat: 37.90546,
                    lon: -122.24435,
                    elevation_gain: 662,
                    time: "Est. 4 h 22 m",
                    locale: "Tilden Regional Park, Berkeley, California",
                    park_id: p4.id)

t20_trailpic = URI.open("https://more-trails-seeds.s3-us-west-1.amazonaws.com/nimitz.png")
t20.coverPhoto.attach(io: t20_trailpic, filename: "nimitz.png")


#______________________________________________________________________________________________

t21 = Trail.create!(name: "Point Reyes Extended Loop", 
                    description: 'Point Reyes Extended Loop is a 28.5 mile lightly trafficked loop trail located near Point Reyes Station, California that features a lake and is rated as difficult. The trail offers a number of activity options and is accessible year-round',
                    difficulty: "hard", 
                    distance: 28.5, 
                    route_type: "Loop",
                    lat: 37.98943,
                    lon: -122.78829,
                    elevation_gain: 4747,
                    time: "Est. Multi-day",
                    locale: "Point Reyes National Seashore",
                    park_id: p1.id)

t21_trailpic = URI.open("https://more-trails-seeds.s3-us-west-1.amazonaws.com/extended_loop.png")
t21.coverPhoto.attach(io: t21_trailpic, filename: "extended_loop.png")


#______________________________________________________________________________________________

t22 = Trail.create!(name: "Tokopah Falls via Tokopah Valley Trail", 
                    description: 'Tokopah Falls via Tokopah Valley Trail is a 4 mile heavily trafficked out and back trail located near Sequoia National Park, California that features a waterfall and is rated as moderate. The trail offers a number of activity options and is best used from March until November.',
                    difficulty: "moderate", 
                    distance: 4.0, 
                    route_type: "Out & back",
                    lat: 36.60485,
                    lon: -118.72401,
                    elevation_gain: 639,
                    time: "Est. 2 h 55 m",
                    locale: "Sequoia National Park",
                    park_id: p2.id)

t22_trailpic = URI.open("https://more-trails-seeds.s3-us-west-1.amazonaws.com/tokopah.png")
t22.coverPhoto.attach(io: t22_trailpic, filename: "tokopah.png")


#______________________________________________________________________________________________

t23 = Trail.create!(name: "Stage Road to Mount Diablo Summit", 
                    description: 'Stage Road to Mount Diablo Summit is a 14.3 mile loop trail located near Alamo, California that features beautiful wild flowers and is rated as difficult. The trail is primarily used for hiking, running, and nature trips.',
                    difficulty: "hard", 
                    distance: 14.3, 
                    route_type: "Loop",
                    lat: 37.86259,
                    lon: -121.97883,
                    elevation_gain: 3966,
                    time: "Est. 10 h 50 m",
                    locale: "Mount Diablo State Park",
                    park_id: p3.id)

t23_trailpic = URI.open("https://more-trails-seeds.s3-us-west-1.amazonaws.com/stage_road.png")
t23.coverPhoto.attach(io: t23_trailpic, filename: "stage_road.png")


#______________________________________________________________________________________________

t24 = Trail.create!(name: "Bay Area Ridge Trail", 
                    description: 'This hike is on a very nice portion of the Bay Area Ridge Trail which starts at the Tilden Regional Park and goes to Redwood regional park.  The hike covers EBMUD lands, and goes through several East Bay regional parks, including Tilden, Sibley, Huckleberry, and Redwood Regional Parks.  The terrain and scenery actually varies quite a bit, from open, dry hillsides, to fern and moss covered grottos.  Some portions are completely in the open, offering great views, while others are under extremely dense tree cover.  You actually walk over the Caldecott tunnel on this hike. Portions of the trail are in such dense greenery, you literally walk in tunnels through the brush.',
                    difficulty: "hard", 
                    distance: 9.9, 
                    route_type: "Point to point",
                    lat: 37.90503,
                    lon: -122.24439,
                    elevation_gain: 2122,
                    time: "Est. 6 h 20 m",
                    locale: "Tilden Regional Park, Berkeley, California",
                    park_id: p4.id)

t24_trailpic = URI.open("https://more-trails-seeds.s3-us-west-1.amazonaws.com/bay_area.png")
t24.coverPhoto.attach(io: t24_trailpic, filename: "bay_area.png")


#______________________________________________________________________________________________












































Review.destroy_all

# trail 1 Alamere Falls via Olema Valley, Bolema, Lake Ranch, Coast Trail _____________________________________________________________________________________________________________
r1 = Review.create!(
                         rating: 5, 
                         user_id: u1.id, 
                         trail_id: t1.id,
                         text: "Amazing trek.  Challenging to get to the falls and back in one day but well worth the effort.  Gorgeous views and standing in Alamere Falls at the halfway mark (if you are doing a day hike) and feeling the cool fresh water and mist is a good break for your hike back.  Would love to camp at Wildcat next time and explore other trails in the area.", 
                         date: "2021-03-23"
                        )

r2 = Review.create!(
                         rating: 5, 
                         user_id: u2.id, 
                         trail_id: t1.id,
                         text: "It was one of the best hikes I’ve done in Northern California. The whole trail was gorgeous, passing different sceneries on the way to the waterfall. Combination of lake, forest, ocean and waterfall is rare! The elevation gain is gradual, not bad. There is one point in the trail that branchs out and it’s overgrown and covered, but it’s the right path. There is no sign so download the trail offline and track the correct path. At the end of trail, path to the ocean is rocky and dangerous, so you have to use your hands and sometimes move forward seated.  Highly recommend this trail", 
                         date: "2021-06-05"
                        )
r3 = Review.create!(
                         rating: 4,
                         user_id: u3.id, 
                         trail_id: t1.id, 
                         text: "Not Hard but not Moderate. The scenery was beautiful, including the lakes and little waterfalls leading to Alamere Falls. Came across some poison oak and weeds were over grown in some spots. This trail is open and beautiful, but I recommend wear long pants.", 
                         date: "2021-04-23"
                        )
r4 = Review.create!(
                         rating: 5, 
                         user_id: u4.id, 
                         trail_id: t1.id,
                         text: "Awesome trail! Awesome sights and cool views if you make it to the end. Note: Quiet in the early morning. Water and good hiking/climbing boots are a good idea to have. Long sleeves and pants as some areas are over grown. This is you’re next adventure if your looking for a challenging yet doable experience!", 
                         date: "2021-06-12"
                        )
r5 = Review.create!(
                         rating: 5, 
                         user_id: u5.id, 
                         trail_id: t1.id,
                         text: "Beautiful hike! A great trail to Alamare Falls for hikers looking for a more challenging and less crowded route. Starting on the other side of the Bolinas Ridge you meander through a variety of ecosystems before making the final descent toward the Pacific. 
                         We used a series of other trails to make a loop and found some sections had heavy horse traffic and were almost too muddy to pass through. It’s hard to find a more beautiful piece of Earth than this trail.", 
                         date: "2021-05-18"
                        )


# trail 2   Tomales Point Trail _____________________________________________________________________________________________________________
r6 = Review.create!(
                         rating: 5, 
                         user_id: u1.id, 
                         trail_id: t2.id,
                         text: "Spectacular!  The Tule Elk were all along the trail (including a whole group of them on the trail itself).  Wildflowers are exploding right now with every color represented.  And a whole pod of whales out on a show in the bay, so pack a lunch and find a spot at the point to watch.", 
                         date: "2021-03-23"
                        )

r7 = Review.create!(
                         rating: 5, 
                         user_id: u2.id, 
                         trail_id: t2.id,
                         text: "Got what we were looking for - flowers. There were some good patches throughout but about 3/4ths through, it became an explosion of wild flowers. There were also elk, fuzzy caterpillars, and whales in the bay! People were camped on the hill at the end having lunch and watching the whales feed. Super super windy though. Glad we took layers for the kids because they kept fluctuating from hot to freezing.", 
                         date: "2021-06-10"
                        )

r8 = Review.create!(
                         rating: 5, 
                         user_id: u3.id, 
                         trail_id: t2.id,
                         text: "This trail was fantastic, specially for the incredible hike by the sea as well as the sheer abundance of wildlife. You will see the herds of Tule Elk as well as the numerous other species such as coyote, black-tailed deer, many many birds, and during the summer, the vast number of bees and wildflowers. For wildlife photographers, this trail is one of the best places to see wildlife up close in all of California. Absolutely one of my favorite hiking trails in California, and I highly recommend.", 
                         date: "2021-04-14"
                        )

r9 = Review.create!(
                         rating: 5, 
                         user_id: u4.id, 
                         trail_id: t2.id,
                         text: "One of the most scenic and accessible hikes around. No wonder it’s so popular. Beautiful wildflowers (maybe wait til late April/early May for full bloom), lots of wildlife (saw plenty of elk) and scenic views throughout. The trail is mostly flat with the last mile in loose, dry sand. Highly recommend and worth the drive.",
                         date: "2021-05-24"
                        )

r10 = Review.create!(
                         rating: 5, 
                         user_id: u5.id, 
                         trail_id: t2.id,
                         text: "One of the most beautiful and gorgeous trails in and around the Bay Area. A long drive but the drive itself was so scenic. Go in SPRING! The wildflowers all through your hike and the lush greens around will make the hike so much more fun and pleasurable. Windy, so make sure you bring a windbreaker! Also the trail is reasonably flat and well maintained.  Lots of elk, caterpillars, birds, and even sighted a pod of whales!", 
                         date: "2021-03-23"
                        )



# trail 3 coast to bass  _____________________________________________________________________________________________________________
r11 = Review.create!(
                         rating: 5, 
                         user_id: u1.id, 
                         trail_id: t3.id,
                         text: "I absolutely love this trail. The waterfalls were amazing. The only thing that was a bit challenging was getting down to the waterfalls. It is very rocky and steep, they have a rope for you to hold.Other than that the trail was great we did not go all the way around we just went to the waterfalls and back￼. Make sure you bring lots of water and something to snack on.", 
                         date: "2021-03-30"
                        )

r12 = Review.create!(
                         rating: 5, 
                         user_id: u2.id, 
                         trail_id: t3.id,
                         text: "Great Hike! The shortcut is marked the a rock arrow on the ground. Lots of poison oak right now so beware- also if you go in that way be prepared fir a steep ascent and loose rocks- it’s worth it to see the upper falls though! Lots of green right now and beautiful flowers! Must see!", 
                         date: "2021-04-02"
                        )

r13 = Review.create!(
                         rating: 4, 
                         user_id: u3.id, 
                         trail_id: t3.id,
                         text: "it’s easy at the beginning, slightly harder after that. If you want to see falls, you should be really careful. Wear good hiking shoes, you definitely need a very good grip. Better carry some layers and water.  Good mixture of inclines and declines a bit of a scramble down the rock if you want to see the falls from the beach", 
                         date: "2021-04-06"
                        )

r14 = Review.create!(
                         rating: 5, 
                         user_id: u4.id, 
                         trail_id: t3.id,
                         text: "Tide was too high to go down to the beach and see the big falls from the bottom. Look at tide charts if that’s make or break for you! BEAUTIFUL trail. Definitely easy to moderate. Take the short cut 4.2 miles in on the left side of the trail. It’s rocks in the shape of an arrow. ",
                         date: "2021-05-24"
                        )

r15 = Review.create!(
                         rating: 5, 
                         user_id: u5.id, 
                         trail_id: t3.id,
                         text: "Really awesome trail.  There are sunny and shaded parts, ocean and lake views, and just overall interesting multidimensional trail.  Only annoying part of experience was when eating our beef jerky snack along the walk, a random dog out of nowhere showed up and wouldn't stop riding our tail (no dog owner in sight).  Your mileage may vary.", 
                         date: "2021-06-04"
                        )







# trail 4  Limantour beach trail _____________________________________________________________________________________________________________
r16 = Review.create!(
                         rating: 5, 
                         user_id: u1.id, 
                         trail_id: t4.id,
                         text: "Absolutely gorgeous beach walk/hike. Beach is secluded so not too many people. Dogs are welcome on leashes and trails are now open in the Point Reyes area. We 100% will be back to hike around the area and beach.", 
                         date: "2021-05-02"
                        )

r17 = Review.create!(
                         rating: 5, 
                         user_id: u2.id, 
                         trail_id: t4.id,
                         text: "Beautiful, easy walk along the shoreline. Lots of birds, sea dollars and, on my walk, sea lions (or harbor seals). I was alone on the beach for the vast majority of the walk, especially toward the end tip of the shore where it meets the estuary. Two seals followed me from the water for most of the way back which was fun. When I’d stop walking they’d just bob in front of me until I began walking again. Overall very peacefu", 
                         date: "2021-04-16"
                        )

r18 = Review.create!(
                         rating: 1, 
                         user_id: u3.id, 
                         trail_id: t4.id,
                         text: "Overgrown path that cannot be followed. We found three deer ticks on our clothes, shoes, and neckline. Finally, came across a giant whale carcass, sea lion carcass, hundreds of dead crabs, seagull carcasses, etc., Awful.", 
                         date: "2021-06-06"
                        )

r19 = Review.create!(
                         rating: 5, 
                         user_id: u4.id, 
                         trail_id: t4.id,
                         text: "The portion of the hike that we took was pretty much along the beach. We did about a 5 mile out and back. The beach was beautiful, as always, and we encountered a range of wildlife both alive and dead! Live sea lions, birds, and the remains of a whale.",
                         date: "2021-05-25"
                        )

r20 = Review.create!(
                         rating: 5, 
                         user_id: u5.id, 
                         trail_id: t4.id,
                         text: "Gorgeous views of Point Reyes to the north and Alamere Falls to the south. Walk a couple miles south at a negative low tide to find keyholes, interesting rock formations, waterfalls and some caves.", 
                         date: "2021-04-04"
                        )





# trail 5 Muddy Hollow, Coast Trail, Sky Trail, Laguna Trail  _____________________________________________________________________________________________________________



r21 = Review.create!(
                         rating: 5, 
                         user_id: u1.id, 
                         trail_id: t5.id,
                         text: " The trails undulate a lot: up and over coastal hill after coastal hill which means the views are always changing.  Parts of the trail are through bright tall forests with oaks, parts go through pines, and parts go through denser woods with lots of underbrush. There are many, many kinds of ferns and moss and mushrooms everywhere. Parts of the trail are on coastal grassland. Some parts of the trail are shared with cyclists, some with horses and some with ranger trucks. ", 
                         date: "2021-03-23"
                        )

r22 = Review.create!(
                         rating: 5, 
                         user_id: u2.id, 
                         trail_id: t5.id,
                         text: "On the day of my hike, the Tule Elk were in abundance.  Docents were stationed in a few keys areas with binoculars and talking with hikers.  It was a great day with mild weather.  The inclines are not difficult even for a beginner level hiker.  A great 4 hour hike!", 
                         date: "2021-03-23"
                        )

r23 = Review.create!(
                         rating: 5, 
                         user_id: u3.id, 
                         trail_id: t5.id,
                         text: "Nice way to get out in the bay aera for the weekend. We started down at the visitors center and hiked in to one of the beach campsites. Campfires are aloud on the beach. Made for a great weekend.", 
                         date: "2021-03-23"
                        )

r24 = Review.create!(
                         rating: 3, 
                         user_id: u4.id, 
                         trail_id: t5.id,
                         text: "This was a pretty intense hike. We started from Muddy Hollow trail heading toward the beach. Then we hiked up the mountain. Took us 7 hrs to complete. We ran into a mountain lion. If I do this hike again I will start Sky trail side and towards the beach. Be ready this is an intense hike.", 
                         date: "2021-03-23"
                        )

r25 = Review.create!(
                         rating: 5, 
                         user_id: u5.id, 
                         trail_id: t6.id,
                         text: "Cute trail with nice mixture of terrain. Recommend doing this clockwise, so that you end up with a nice walk along the beach. Also wear pants...there's a section where you're walking through overgrown grass and prickly little things.", 
                         date: "2021-03-23"
                        )

# trail 6 mt whitney trail   _____________________________________________________________________________________________________________


r26 = Review.create!(
                         rating: 5, 
                         user_id: u1.id, 
                         trail_id: t6.id,
                         text: "Did this as a day hike today starting at 3:25am and it took me 13 hours round trip. I had been to 13k feet but between 13k-summit was still really hard with the lack of oxygen in the air. It really slows you down. Super rewarding to conquer this beast and enjoy the panoramic views below. Almost no snow at all on the trail and definitely no need for spikes. Met some cool people along the way who I ended up hiking with. This definitely helped with morale. Bring a water filter and sunscreen.", 
                         date: "2021-04-14"
                        )

r27 = Review.create!(
                         rating: 5, 
                         user_id: u2.id, 
                         trail_id: t6.id,
                         text: "I trained about 3 months moderately for this hike and it really paid off when it came to the altitude. I did not feel a headache until going to bed and a little nausea in the morning. Both remedied by advil and a tums. Otherwise I felt great being up there! Training does pay off but you can suffer through without but you will suffer as I observed by other we met and discussed training prior to the hike. Pack good food if you can, I brought an extra backpacking meal that I ended up scarfing down because I was so hungry mid descent. ", 
                         date: "2021-06-22"
                        )

r28 = Review.create!(
                         rating: 5, 
                         user_id: u3.id, 
                         trail_id: t6.id,
                         text: "This is a truly astounding trail in terms of its demands on the human body.  I have done a fair amount of hiking throughout the United States.  Even with the expectation that it would be quite difficult, it blew those expectations out of the water.  It is not just the elevation gain, altitude, and length, but the nature of the terrain: rough, rugged, steep, and in many places, precarious", 
                         date: "2021-03-03"
                        )

r29 = Review.create!(
                         rating: 5, 
                         user_id: u4.id, 
                         trail_id: t6.id,
                         text: "I was honestly shocked that there were not more safety measures in place.  For example, there was a tiny amount of railing in the middle of the 99 Switchbacks...but for several hundred yards there, you are hiking across a narrow ledge, with precious little margin for error.  All in all, this is a once in a lifetime experience, but not to be taken lightly. It was a slog all the way back to the trailhead, but luckily altitude sickness had subsided. Trekking poles and preventative advil saved my knees! We made it back to the car at 6:25, clocking in just over 16 hours for the whole hike. Again, this hike was AMAZING but also the most difficult physical feat I have ever done!", 
                         date: "2021-05-23"
                        )

r30 = Review.create!(
                         rating: 5, 
                         user_id: u5.id, 
                         trail_id: t6.id,
                         text: "Just did this one today, awesome trail, no crampons needed just some trekking poles and maybe some microspikes.  Scenery is breathtaking, a must-do before permit season starts again", 
                         date: "2021-04-23"
                        )



                        
 # trail 7  general sherman  _____________________________________________________________________________________________________________




r31 = Review.create!(
                         rating: 5, 
                         user_id: u1.id, 
                         trail_id: t7.id,
                         text: "Nice, paved trail down to the General Sherman tree with lots of photo opportunities for families. It can get quite populated, even on a Monday morning. There is an accessible parking near the bottom, so elderly or disabled don't have to make the climb up, which can be pretty tiring. Overall, short, and moderately easy walk to see beautiful Sequoia giants.", 
                         date: "2021-03-23"
                        )

r32 = Review.create!(
                         rating: 5, 
                         user_id: u2.id, 
                         trail_id: t7.id,
                         text: "With all of the signs about the walk up and the seats on the trail I was scared for the hike back but it was nothing. It hurt worse to walk down lol but the trail was worth it! I loved seeing all the trees and getting some amazing pictures. Definitely worth the time!", 
                         date: "2021-03-23"
                        )

r33 = Review.create!(
                         rating: 5, 
                         user_id: u3.id, 
                         trail_id: t7.id,
                         text: "First time visiting Sequoia. Spectacular experience. Road to sequoia requiredno chain, high temperatures cleared all snow making it easy to drive, 6k elevation winding, lucky nobody was car sick. Light snow around, the trail was clear. Medium crowd. Walking next to such giant trees is one of a kind experience.", 
                         date: "2021-03-23"
                        )

r34 = Review.create!(
                         rating: 5, 
                         user_id: u4.id, 
                         trail_id: t7.id,
                         text: "Beautiful! We parked at 9am and there were still plenty of spaces. Highly recommend ice cleats or crampons because parts of the trail were very icy. We did the whole trail to Tharp’s Log and we’re pretty much alone after the main area near the General Sherman tree. We finished around 2pm and the Sherman tree and parking area was PACKED.", 
                         date: "2021-03-23"
                        )

r35 = Review.create!(
                         rating: 5, 
                         user_id: u5.id, 
                         trail_id: t7.id,
                         text: "Very busy naturally. Tree is beautiful and of course big (largest on the planet after all) but it’s not spectacular and with so many large sequoias in this park (and others !) you wouldn’t know it was the largest without a sign.", 
                         date: "2021-03-23"
                        )



                                                
 # trail 8 Heather Lake, Emerald Lake, and Pear Lake  _____________________________________________________________________________________________________________




r36 = Review.create!(
                         rating: 5, 
                         user_id: u1.id, 
                         trail_id: t8.id,
                         text: "Well, there is no other way to put it, simply gorgeous. A couple of my buddies were complaining about the length of it and the height at which we were hiking, but they made it through. The view is stunning and unlike any other. If there is any part of you that is thinking to not do this, ignore that, you need to hike this trail. Bring water, snacks, and sunscreen or you’ll rue the day. This is one of the most stunning spots in the country so get ready for something unforgettable.", 
                         date: "2021-03-23"
                        )

r37 = Review.create!(
                         rating: 5, 
                         user_id: u2.id, 
                         trail_id: t8.id,
                         text: "Completely breath taking! The hike was filled with beautiful views and wonderful sights (even some wild flowers on the way)! Totally recommend this to anyone looking for an adventure!", 
                         date: "2021-03-23"
                        )

r38 = Review.create!(
                         rating: 5, 
                         user_id: u3.id, 
                         trail_id: t8.id,
                         text: "Beautiful scenery as you trek through the lush forest and around the mountain until you reach the lakes. The trailhead is at the Wolverton Picnic area and there is plenty of parking. It is shaded most of the way until a mile from Heather Lake. There is also an outhouse by Emerald Lake.", 
                         date: "2021-03-23"
                        )

r39 = Review.create!(
                         rating: 5, 
                         user_id: u4.id, 
                         trail_id: t8.id,
                         text: "Tremendous hike to see the grandeur of the Sierras as well as some magnificent alpine lakes. Be sure to get to Emerald and Pear Lake if you have the time. This area can be prone to thunderstorms, hail and lightning in the summer, so keep an eye on the skies. Be careful when walking on the Watchtower section of the trail, especially when snow or ice may still be present.", 
                         date: "2021-03-23"
                        )

r40 = Review.create!(
                         rating: 5, 
                         user_id: u5.id, 
                         trail_id: t8.id,
                         text: "What an epic hike. The difficult part of the trail is the steep incline but stopping at each lake to vibe and dip in the cold water is so refreshing and rewarding. The views are absolutely breath taking. Take snacks and at minimum 2.5 liters of water. When you get to Emerald Lake, don’t stop there, keep trekking another 30 minutes or so to Pear Lake. Trust me it will be worth it!", 
                         date: "2021-03-23"
                        )



                                                
 # trail 9  Giant forest loop trail  _____________________________________________________________________________________________________________




r41 = Review.create!(
                         rating: 5, 
                         user_id: u1.id, 
                         trail_id: t9.id,
                         text: "Incredible trail, this one is a must do. Between this and the General Sherman Tree trail, we ended up doing a full 9 miles. Our kids (10 & 13) were able to handle it pretty well and they absolutely loved it. Don’t be scared of the length, the whole route is beautiful.", 
                         date: "2021-03-23"
                        )

r42 = Review.create!(
                         rating: 5, 
                         user_id: u2.id, 
                         trail_id: t9.id,
                         text: "One of the most peaceful trail we did while in Sequoia. We did the whole trail and did not see anyone at all after the General Sherman area. There is snow and ice on and off the trail. We did it mostly without microspikes but used them in a few areas. The forest and the magnificent Sequoias are absolutely amazing and just so beautiful. ", 
                         date: "2021-03-23"
                        )

r43 = Review.create!(
                         rating: 5, 
                         user_id: u3.id, 
                         trail_id: t9.id,
                         text: "Lots of giant sequoias on this trail. We barely saw anybody on this loop. Make sure to keep an eye on each directory to prevent getting lost. Highly recommend! ", 
                         date: "2021-03-23"
                        )

r44 = Review.create!(
                         rating: 5, 
                         user_id: u4.id, 
                         trail_id: t9.id,
                         text: "Hiked 8.8 miles, perfect temperature, saw plenty of deer running and chasing each other, several unknown large rodents, and 2 BEARS!! Momma and cub!!",
                         date: "2021-03-23"
                        )

r45 = Review.create!(
                         rating: 5, 
                         user_id: u5.id, 
                         trail_id: t9.id,
                         text: "Great hike through the Sequioas! Great views and once you get away from the tourist crowd it's a very peaceful hike surrounded by nature.  Took a lunch break at Crescent Meadows then made our way back to General Sherman and boy was it crowded.  It was a steep hike back up to the trailhead.", 
                         date: "2021-03-23"
                        )



                                                
 # trail 10   Johnsondale Bridge River Trail _____________________________________________________________________________________________________________




r46 = Review.create!(
                         rating: 5, 
                         user_id: u1.id, 
                         trail_id: t10.id,
                         text: "This trail is definitely moderate only because most of it is narrow trails and a lot of rocks to walk over. We took our dog who loved it! There are some points you can go down to the river, as well. Some parts were shady, but a lot of sun so plan accordingly. We don’t hike very often and did great. It was a great workout!", 
                         date: "2021-03-23"
                        )

r47 = Review.create!(
                         rating: 5, 
                         user_id: u2.id, 
                         trail_id: t10.id,
                         text: "Beautiful trail and the varying terrain made it really fun. There was a decent amount of shade in the afternoon hours, but a lot of the trail was under direct sun, so as we get further into the warmer months a morning start on this hike will be the best bet. The trail is pretty narrow and if you bring your pup, they’ll probably need paw protectors (or to be carried if small enough) because of the sharp/rough rock throughout the trail. We ran into a few dogs off leash which was worrisome- the trail is so narrow in some parts that a misstep or an excited run in with another group could mean falling over the side into the water. The teacups were not accessible due to the high water, but it was still a great experience.", 
                         date: "2021-03-23"
                        )

r48 = Review.create!(
                         rating: 5, 
                         user_id: u3.id, 
                         trail_id: t10.id,
                         text: "Georgeous trail that follows the Kern River. Several places to stop and swim or camp. the teacups were not accessible when we went due to high water and intense currents but we could view the waterfall from across the river.", 
                         date: "2021-03-23"
                        )

r49 = Review.create!(
                         rating: 5, 
                         user_id: u4.id, 
                         trail_id: t10.id,
                         text: "This hike was absolutely beautiful. The sound of the river and wildlife is so therapeutic and relaxing, views are picturesque and stunning with giant granite walls and giant boulders, pine trees and wildlife. We didn’t make it to the teacups because we ran out of time but i will definitely be returning to see the teacups soon.", 
                         date: "2021-03-23"
                        )

r50 = Review.create!(
                         rating: 4, 
                         user_id: u5.id, 
                         trail_id: t10.id,
                         text: "We completely loved it! The hike was beautiful! Although,  it may need to be reviewed after the fires and the winter season. I don’t think it’s very kid friendly all the way In as it’s narrow and at some points you need to go through and walk over larger rocks. I would not recommend it for kids that are not used to hiking. Take plenty of water.", 
                         date: "2021-03-23"
                        )



# eagle peak loop  _____________________________________________________________________________________________________________



r51 = Review.create!(
                         rating: 4, 
                         user_id: u6.id, 
                         trail_id: t11.id,
                         text: "Just a heads up, if you follow the direction on the map you get nice wide trails most of the way up, but a terrible single path, technical footing, scree and dry loose dirt much of the down. Also, the Mitchell canyon parking area doesn't technically open until 8am. We got there just before 7 and took a back road around, but got yelled at and told we'd get ticketed (though then the guy went and just opened the gate anyway). Also, don't forget your 6 dollar fee and a pen to fill out the envelope!", 
                         date: "2021-06-29"
                        )



r52 = Review.create!(
                         rating: 5, 
                         user_id: u7.id, 
                         trail_id: t11.id,
                         text: "The trail was awesome.  But beware of loose rocks coming down from the summit. I fell on my backside twice but no injuries. An amazing hike with beautiful views. It was my first time doing this hike and it tested me but it was awesome.", 
                         date: "2021-03-03"
                        )



r53 = Review.create!(
                         rating: 5, 
                         user_id: u8.id, 
                         trail_id: t11.id,
                         text: "Gorgeous hike with all the wildflowers out, and not too busy on a weekday. I did it clockwise and I'm glad I did. not so much to preserve my knees but because a narrow steep trail is less intimidating going uphill then down, given my agoraphobia. so a hard climb but then a nice peaceful descent along a wide gradual rough road.", 
                         date: "2021-04-01"
                        )



r54 = Review.create!(
                         rating: 5, 
                         user_id: u9.id, 
                         trail_id: t11.id,
                         text: "Beautiful hike. Went clockwise to avoid the steep downhill climb, and highly recommend this. Some pretty tough cardio in the first ~4 miles if you keep a quick pace, but once you hit Deer Flats, it's easy gradual descent the rest of the way, makes for a nice cool down. Not nearly as exhausting as I anticipated - still energy to spare the rest of the day! Took us 3.5 hours including a lunch break at Eagle Peak.", 
                         date: "2021-06-12"
                        )



r55 = Review.create!(
                         rating: 5, 
                         user_id: u10.id, 
                         trail_id: t11.id,
                         text: "Hiking the trail clockwise will be gentle on the knees on the downhill and ensure a good workout on the uphill! The stretch around Eagle peak has some screen and can be slippery, so prepare accordingly", 
                         date: "2021-02-10"
                        )

# rock city wind caves and sentinel rock _____________________________________________________________________________________________________________

r56 = Review.create!(
                         rating: 5, 
                         user_id: u6.id, 
                         trail_id: t2.id,
                         text: "Are you on a trail? Are you not on a trail? who knows?! But part of the fun of this area in particular is just exploring so download the map ahead of time but don't worry about sticking too close to it.", 
                         date: "2021-07-02"
                        )



r57 = Review.create!(
                         rating: 5, 
                         user_id: u7.id, 
                         trail_id: t12.id,
                         text: "Interesting area - super dry right now. If you park at this trailhead, there are several other enjoyable trails (not appearing on AllTrails) that are right in this area that are not too challenging. Take a hat and sunscreen. ", 
                         date: "2021-06-19"
                        )



r58 = Review.create!(
                         rating: 3, 
                         user_id: u8.id, 
                         trail_id: t12.id,
                         text: "We got so lost! Not easy to identify what is a trail and what isn't. It's a beautiful area though!", 
                         date: "2021-05-03"
                        )



r59 = Review.create!(
                         rating: 5, 
                         user_id: u9.id, 
                         trail_id: t12.id,
                         text: "Great trail but I would have gotten lost without the GPS map because there are a lot of intersecting trails. Beautiful views from Sentinel Rock.", 
                         date: "2021-05-20"
                        )



r60 = Review.create!(
                         rating: 5, 
                         user_id: u10.id, 
                         trail_id: t12.id,
                         text: "Our first time to hike with my family. Real good rock formations but has lots of graffiti. We got off track because there’s lots of trails even though we used the recording. My family enjoyed the hike immensely. Just watch out for poison oak. The road going up here is winding and not for the faint hearted if you’re scared of heights specially sharing it with bikers. ", 
                         date: "2021-04-07"
                        )


# mitchell creek to diablo summit_____________________________________________________________________________________________________________


r61 = Review.create!(
                         rating: 5, 
                         user_id: u6.id, 
                         trail_id: t13.id,
                         text: "I got nothing but respect for this trail, put me in the hospital for 5 days for hiking it all in one day (FYI ran out of water for the last 3 hours of the hike) the quick change in elevation with the heat  really makes you put some respect on some of these trails.  Still... 5 stars!", 
                         date: "2021-03-17"
                        )



r62 = Review.create!(
                         rating: 5, 
                         user_id: u7.id, 
                         trail_id: t13.id,
                         text: "I’m so proud to have gone through this one successfully. We’ve been working up to this level for months. The summit was less interesting to me than the trail itself, which was chock full of wildlife and wild flora when we went. Got a late start 11:30 am and we’re out of our camelback and thermoses by the summit, so we used the water fountain by the visitor center to refill for the way down. The way up we took the reviewers advice who said to start by going left in order to enjoy the other peaks on the way up. Definitely the right choice - more challenging and rewarding going up and rewardingly simple to get down. This was an amazing day of hiking. Also this time the visitor center was open at the staging area and super friendly and helpful there. ", 
                         date: "2021-06-27"
                        )



r63 = Review.create!(
                         rating: 5, 
                         user_id: u8.id, 
                         trail_id: t13.id,
                         text: " The hike up took roughly 5-6 hours with lots of breaks. The hike down the gravely fire road took about 3-4 hours with lots of breaks. Saw more people the second day which was sunnier, including a few mountain bikes. The whole trail was beautiful - climbing up into the thick grey clouds was magical and waking up to them dissipating into little fluffy clouds and seeing the sun was very special. There are so many different kinds of wildflowers that are in bloom that the whole trail smelled floral and sweet from start to finish. I saw a coyote on the trail, as well as some quail, lots of bees and ground squirrels. I think I did a little closer to 15.5 miles but my navigator kept turning off for some reason ¯\_(ツ)_/¯", 
                         date: "2021-04-15"
                        )



r64 = Review.create!(
                         rating: 5, 
                         user_id: u9.id, 
                         trail_id: t13.id,
                         text: "Great views and lots of wildflowers in bloom. There’s lots of poison oak on the way up so watch out! ", 
                         date: "2021-05-25"
                        )



r65 = Review.create!(
                         rating: 5, 
                         user_id: u10.id, 
                         trail_id: t13.id,
                         text: "The trail is hard but worth it. It took us 9 hours with a generous stop for lunch and another at the top. The top was magnificent, we could see from the Golden Gate to the Sierras. We started at 8:30 am from the parking lot, which was filling up fast.", 
                         date: "2021-03-01"
                        )

#  riggs canyon loop _____________________________________________________________________________________________________________

r66 = Review.create!(
                         rating: 5, 
                         user_id: u6.id, 
                         trail_id: t14.id,
                         text: "Very nice trial. Great views, with parts that are shaded and some that are out in the open. Beautiful all around.", 
                         date: "2021-04-24"
                        )



r67 = Review.create!(
                         rating: 5, 
                         user_id: u7.id, 
                         trail_id: t14.id,
                         text: "This was a top notch hike trail with lots of shade and very few people. I don't think it makes much difference, but I noticed that going clockwise you'd get the one bit of sun-exposed grade going downhill. For a trail of this length, it doesn't get much easier apart from the Bay Shoreline & Slough trails.", 
                         date: "2021-05-02"
                        )



r68 = Review.create!(
                         rating: 5, 
                         user_id: u8.id, 
                         trail_id: t14.id,
                         text: "Nice trail. Very few people. Probably saw 10 folks in a 8 mile loop. Good to experience the nature!", 
                         date: "2021-03-15"
                        )



r69 = Review.create!(
                         rating: 5, 
                         user_id: u9.id, 
                         trail_id: t14.id,
                         text: "it was beautiful, peaceful, and calm. Well shaded and not too hard.", 
                         date: "2021-03-23"
                        )



r70 = Review.create!(
                         rating: 5, 
                         user_id: u10.id, 
                         trail_id: t14.id,
                         text: "Really great trail with lots of landscape variety and some nice ups and downs. Great lunch spot looking out towards Mt Diablo", 
                         date: "2021-03-28"
                        )

# Mt diablo grand loop trail_____________________________________________________________________________________________________________


r71 = Review.create!(
                         rating: 5, 
                         user_id: u6.id, 
                         trail_id: t15.id,
                         text: "On a Wednesday afternoon, we didn’t see a single person on the whole trail. There is near constant views and a lot of wildlife to observe. We saw several lizards (including a horned lizard that looked like a tiny dinosaur!), deer, and a huge bee hive. We went up to the summit instead of going around it like this trail listing suggests. So the hike ended up being about 7.3 miles and 2100 ft of elevation gain. Some parts are very steep. Be prepared with food, sunscreen and a lot of water!", 
                         date: "2021-06-23"
                        )



r72 = Review.create!(
                         rating: 5, 
                         user_id: u7.id, 
                         trail_id: t15.id,
                         text: "Beautiful hike. Has some shade. Beautiful scenery. Took a very steep slippery detour. Totally worth it at the top.", 
                         date: "2021-02-23"
                        )



r73 = Review.create!(
                         rating: 5, 
                         user_id: u8.id, 
                         trail_id: t15.id,
                         text: "Good variety of up and downs. Poles are definitely recommended! The hard rating is accurate.", 
                         date: "2021-06-29"
                        )



r74 = Review.create!(
                         rating: 5, 
                         user_id: u9.id, 
                         trail_id: t15.id,
                         text: "Beautiful views the whole way. Still decent wildflowers in the end of May. We also saw a big snake right on the trail. Bring lots of water, very exposed and sunny. Lots of poison oak in places. Keep an eye on your map and the trail sign posts, as there are a couple turns that are easy to miss if you’re not paying attention. 30 minute drive from park gate to trailhead; have to go slow for bicycles.", 
                         date: "2021-03-20"
                        )



r75 = Review.create!(
                         rating: 5, 
                         user_id: u10.id, 
                         trail_id: t15.id,
                         text: "It was really difficult but the views are incredible!", 
                         date: "2021-04-10"
                        )

#_meadows canyon, wildcat gorge____________________________________________________________________________________________________________


r76 = Review.create!(
                         rating: 5, 
                         user_id: u6.id, 
                         trail_id: t16.id,
                         text: "Getting onto the path by the creek is hard - very steep descent with ruts, kind of hard to find the right trail. But after that, lovely. Walked in late April, and there was still some running water in the creek. Mix of shade and sun, more easy than moderate.", 
                         date: "2021-04-11"
                        )



r77 = Review.create!(
                         rating: 5, 
                         user_id: u7.id, 
                         trail_id: t16.id,
                         text: "Nice, mostly shaded hike. The air smelled lovely of eucalyptus in the groves and incredibly fresh among the redwoods. This was a pretty heavily trafficked loop on a Saturday afternoon. The trail was super compacted, and extremely cracked from tree roots and minimal rainfall. Multiple groups of people were not wearing masks and walking 2 across, when some of the paths were not wide enough for safe social distancing. It was frustrating to constantly have to pull off to the side to make room for those people; and for that reason I give this route 4 stars. On a weekday in the middle of the day I’m sure this would be less of an issue. Be kind and wear a mask. ", 
                         date: "2021-04-17"
                        )



r78 = Review.create!(
                         rating: 4, 
                         user_id: u8.id, 
                         trail_id: t16.id,
                         text: "Great trail and easy to access from Berkeley.  As of 12/28 the conditions are very muddy so plan accordingly with proper shoes and maybe a hiking pole.", 
                         date: "2021-05-01"
                        )



r79 = Review.create!(
                         rating: 5, 
                         user_id: u9.id, 
                         trail_id: t16.id,
                         text: "Great hike with wide trails and expansive views. Great for bringing dogs. Nice climbs but nothing too steep.", 
                         date: "2021-03-19"
                        )



r80 = Review.create!(
                         rating: 5, 
                         user_id: u10.id, 
                         trail_id: t16.id,
                         text: "Nice short loop in Tilden! Trails are nice and none of it is too steep.", 
                         date: "2021-05-02"
                        )

#_grizzly peak to skyline____________________________________________________________________________________________________________

r81 = Review.create!(
                         rating: 5, 
                         user_id: u6.id, 
                         trail_id: t17.id,
                         text: "A lovely out and back that mainly follows the Bay Area Ridge trail. Nice to cover some distance and make the connections between parks", 
                         date: "2021-04-24"
                        )



r82 = Review.create!(
                         rating: 5, 
                         user_id: u7.id, 
                         trail_id: t17.id,
                         text: "Really nice change in elevation. Has a few steep uphills sprinkled throughout the hike but nothing absolutely terrible. I went off the main path on the Lupine trail on the way back to catch a view. Parts of the trail have a lot of vegetation over it but was always clear where the trail was.", 
                         date: "2021-05-13"
                        )



r83 = Review.create!(
                         rating: 5, 
                         user_id: u8.id, 
                         trail_id: t17.id,
                         text: "Solid, pretty decent for trail running. The morning fog and mist is absolutely unbeatable and the views atop Vollmer Peak are worth all the effort ", 
                         date: "2021-06-01"
                        )



r84 = Review.create!(
                         rating: 5, 
                         user_id: u9.id, 
                         trail_id: t17.id,
                         text: " Wildflowers are awesome right now- get out there if you can!! Tree work happening on Grizzly Peak trail, according to signage, but no activity when I hiked. I saw a coyote and lots of great birds. This trail passes through a few trailheads at which there are restrooms available.", 
                         date: "2021-07-02"
                        )



r85 = Review.create!(
                         rating: 5, 
                         user_id: u10.id, 
                         trail_id: t17.id,
                         text: "It’s was shaded about 50% of the trail. Started at Grizzly Peak trailhead. On April first there was trail maintenance on Skyline that prevented me from completing the last mile before turning around.", 
                         date: "2021-07-23"
                        )


#_seaview, meadows canyon, wildcat gorge____________________________________________________________________________________________________________

r86 = Review.create!(
                         rating: 5, 
                         user_id: u6.id, 
                         trail_id: t18.id,
                         text: "Lovely loop that covers most of Tilden Park! One section past Lake Anza is steep, but the views are great. Trails in excellent shape. Beautiful flowers blooming in the Spring! ", 
                         date: "2021-05-01"
                        )



r87 = Review.create!(
                         rating: 5, 
                         user_id: u7.id, 
                         trail_id: t18.id,
                         text: "This has to be one of the best hikes in the bay area I've ever done! Amazing views of entire north bay including San Francisco and golden gate bridge with lots of different terrain.", 
                         date: "2021-07-11"
                        )



r88 = Review.create!(
                         rating: 5, 
                         user_id: u8.id, 
                         trail_id: t18.id,
                         text: "I’ve been here a few times and it’s a really nice hike. Can get pretty crowded, and there are lots of bikes and dogs. One thing I’d note, a ton of dogs off leash, and a lot of them kinda wander which can be a pain if you’re walking your dog on leash. I take my pup here and we tend to hike at a pretty brisk pace, so it can be a tad annoying to have to stop and say hi to every dog that approaches. Also, if you have a dog that’s a little leash reactive, it’s probably not a great trail for the aforementioned reason", 
                         date: "2021-07-01"
                        )



r89 = Review.create!(
                         rating: 5, 
                         user_id: u9.id, 
                         trail_id: t18.id,
                         text: "Truly one of the best, most complete trails in Tilden with views of everything. You’ll love this one!", 
                         date: "2021-07-04"
                        )



r90 = Review.create!(
                         rating: 5, 
                         user_id: u10.id, 
                         trail_id: t18.id,
                         text: "The hike started off very beautiful we parked by the train and took the Seaview trail. Lots of trees and shade starts up hill right away. When you get to the peak you can see San Francisco and San Pablo Reservoir so pretty. But there is multiple trails out there and the sign post do not lead you very well. We ended up on a cement road and walked back for several miles up hill and did not see one trail sign , thankfully there is service out there to use gps. Ended doing about 8 miles in 3 hours ", 
                         date: "2021-03-04"
                        )
#_____________________________________________________________________________________________________________


r91 = Review.create!(
                         rating: 5, 
                         user_id: u6.id, 
                         trail_id: t19.id,
                         text: "From Tilden to Sibley to Huckleberry, loop through Redwood and back. Amazing views and awesomely insane workout. Connecting all 4 parks, from Berkeley to Oakland and back. Cool to pass over the Caldecott tunnel! Lots of bunnies and birds throughout the trails. Highly recommended, but you can do smaller hikes throughout any of the regionals. We are blessed with some beautiful parks in the Bay Area. Enjoy getting into nature.", 
                         date: "2021-03-05"
                        )



r92 = Review.create!(
                         rating: 5, 
                         user_id: u7.id, 
                         trail_id: t19.id,
                         text: "This is a nice hike, especially if you live in Oakland or Berkeley and just want to practice going a longish distance. I just didn't like hearing cars rush by on the highway for the first 3 miles. It was like a constant white noise sound in the air.  It eventually gets quieter. The chaparral is nice, and I saw a non-poisonous snake on trail! I liked that it passed through a couple parks. It was encouraging each time I crossed a border into a new park. And the bathroom at Sibley was really convenient.", 
                         date: "2021-03-19"
                        )



r93 = Review.create!(
                         rating: 5, 
                         user_id: u8.id, 
                         trail_id: t19.id,
                         text: "This portion of Bay Area Ridge Trail takes you from Tilden to Redwood Regional and passes by Sibley and Huckleberry.  The foliage changes from dry at the start of the hike and becomes progressively more lush and wooded as you get closer to Huckleberry Nature area.  The hike isn't too difficult.  The only hard climb is when you are approaching Sibley and there are restrooms and water fountains at the staging area when you crest the hill.", 
                         date: "2021-04-22"
                        )



r94 = Review.create!(
                         rating: 5, 
                         user_id: u9.id, 
                         trail_id: t19.id,
                         text: "Great hike that was done as an out and back that goes through several regional parks including Tilden, Sibley, Huckleberry and Redwood.  There are some nice hills and some great views.  It's very good to do on a nice, dry winter day or in the spring when everything is green.", 
                         date: "2021-05-14"
                        )



r95 = Review.create!(
                         rating: 4, 
                         user_id: u10.id, 
                         trail_id: t19.id,
                         text: "If you don't have time (or want) to out & back best to shuttle with someone between the two trailheads because getting an Uber was impossible. ", 
                         date: "2021-07-02"
                        )

#_____________________________________________________________________________________________________________

r96 = Review.create!(
                         rating: 5, 
                         user_id: u6.id, 
                         trail_id: t20.id,
                         text: "Gorgeous views of the reservoirs, rolling hills and the bay. I did a 4 mile run out and back. Plenty of room for runners, bicyclists and pedestrians. At about 3.5 miles there is a steep incline but besides that it is all gradual inclines. Saw cows and quail that day. Parking gets full FAST! I arrived around 9am and had to park on the side, so get here early. Plus it started to heat up by 10:30am and there are parts of no shade. Loved it!", 
                         date: "2021-04-23"
                        )



r97 = Review.create!(
                         rating: 5, 
                         user_id: u7.id, 
                         trail_id: t20.id,
                         text: "This is my favorite run in the Bay Area. This trail is worth it to walk, run, or bike, but I highly recommend leaving enough time to do the full 8 miles — the last 1.5 miles or so before the turnaround is the best part (although it's all great) and the old Nike missile site at the turnaround has spectacular views.", 
                         date: "2021-05-07"
                        )



r98 = Review.create!(
                         rating: 5, 
                         user_id: u8.id, 
                         trail_id: t20.id,
                         text: "Only hiked to Wildcat Canyon and back but the views on the way were fantastic! Lovely hike during Winter since its not hot. Great tree area. The pavement is really nice so you and your dog don't get as dirty. Highly recommend. ", 
                         date: "2021-03-08"
                        )



r99 = Review.create!(
                         rating: 5, 
                         user_id: u9.id, 
                         trail_id: t20.id,
                         text: "Amazing views throughout, and gets better past 3 miles. Perfect hike for an overcast day.", 
                         date: "2021-06-17"
                        )



r100 = Review.create!(
                         rating: 5, 
                         user_id: u10.id, 
                         trail_id: t20.id,
                         text: "Love this trail. We have been twice - my husband runs and I walk, then we meet up. It’s a nice easy walk and run with minimal elevation changed and fully paved. The first time we went it was completely foggy and therefore not as impressive. But the second time, the views were great! Had no idea I could run into cow pastures on the same trail as a view of the Golden Gate Bridge.", 
                         date: "2021-05-10"
                        )
#_____________________________________________________________________________________________________________


r101 = Review.create!(
                         rating: 5, 
                         user_id: u6.id, 
                         trail_id: t21.id,
                         text: "Just completed this one with a couple friends 3-21 - 3-23. We had a lot of fun. We didn't do the exact trail on here but still ended up clocking about 28.5 miles over 3 days. Wildcat is an awesome campground. Stayed at site 5 and it was pretty solid. Everything promised! If I were to go again, I would bring more water resistant gear, not because of rain but because of high wet brush. Beautiful way to see the full coast line, hills, and lakes of the area. The terrain and scenery varies quite a bit, and so can the weather.  This is a long trail, bring layers!", 
                         date: "2021-03-23"
                        )



r102 = Review.create!(
                         rating: 5, 
                         user_id: u7.id, 
                         trail_id: t22.id,
                         text: "Elevation grade was very gradual, with a slightly more challenging final half mile. Well maintained trail, follwing near the river almost the entire time with plenty of spots to step aside and take a rest, if needed. I wouldn't call it easy, but definitely DOABLE, and a what a magnificent payoff of a view at the end. Glad we went all the way. Completely worth it!!! ", 
                         date: "2021-04-11"
                        )



r103 = Review.create!(
                         rating: 5, 
                         user_id: u8.id, 
                         trail_id: t23.id,
                         text: "This is a fabulous hike. Definitely one of the more difficult hikes on Diablo. A clear winter day gave me great views. This is a great training hike; it’s got good gain, a variety of terrain and decent mileage. Stoked!", 
                         date: "2021-04-10"
                        )



r104 = Review.create!(
                         rating: 5, 
                         user_id: u9.id, 
                         trail_id: t24.id,
                         text: "Gorgeous hike, mostly shaded throughout. Lots of dense, cool forest. Great views. The inclines can get pretty tough and there are a lot of them. Pretty challenging overall but very rewarding.", 
                         date: "2021-03-20"
                        )

#_____________________________________________________________________________________________________________

