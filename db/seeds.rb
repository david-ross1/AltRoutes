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
u1 = User.create!(first_name: "Rodney", last_name: "Sakaguchi", email: "sakaguchi@rodney.com", password: "nicebreeze")
u2 = User.create!(first_name: "Julia", last_name: "Follestad", email: "follestad@julia.com", password: "nicebreeze")
u3 = User.create!(first_name: "Khalil", last_name: "Bey", email: "bey@khalil.com", password: "nicebreeze")
u4 = User.create!(first_name: "Jimonte", last_name: "Valdez", email: "valdez@jimonte.com", password: "nicebreeze")
u5 = User.create!(first_name: "Priyanka", last_name: "Singh", email: "singh@priyanka.com", password: "nicebreeze")



Park.destroy_all

p1 = Park.create!(name: "Point Reyes National Seashore", 
                  description: "Point Reyes is a few miles north of San Francisco and offers a number of great hiking options. There are short hikes to the beach from several entrances, as well as longer backpacking options. There are many campsites near the beaches with water and facilities. The lighthouse on the point is also a major tourist attraction, as are the wildflowers in the spring.",
                  acreage: 71028,
                  contact: 415-464-5100,
                  park_type: "National",
                  lat: 38.0512, 
                  lon: 122.8663) 


p2 = Park.create!(name: "Sequoia National Park", 
                  description: "The beautiful Sequoia National Park features the tallest peak in the continental United States and the largest trees on the planet. Covering an impressive 404,063 acres, there is so much to explore including the Giant Forest. There you will find the world's largest tree, General Sherman, and many of the world's other largest trees. There are numerous caves, Mount Whitney, and the granite dome Moro Rock.",
                  acreage: 404063,
                  contact: 559-565-3341,
                  park_type: "National",
                  lat: 36.4864, 
                  lon: 118.5658) 

Trail.destroy_all

# reyes
t1 = Trail.create!(name: "Alamere Falls via Olema Valley, Bolema, Lake Ranch, Coast Trail", 
                    description: "Alamere Falls is a tidefall waterfall that flows into the Pacific Ocean. This quintessential Marin County hike is located in Point Reyes National Seashore, northwest of San Francisco. The hike to Alamere Falls can be started from the Coast Trail via the Palomarin Trailhead.  Alamere Falls via Coast Trail from Palomarin Trailhead is a 11 mile heavily trafficked out and back trail located near Bolinas, California that features a lake and is rated as moderate. The trail is primarily used for hiking, nature trips, and bird watching and is accessible year-round.",
                    difficulty: "moderate", 
                    distance: 14.6, 
                    route_type: "Out & back",
                    lat: 37.99684,
                    lon: -122.75794,
                    elevation_gain: 2641,
                    park_id: p1.id)

t1_trailpic = URI.open("https://more-trails-seeds.s3-us-west-1.amazonaws.com/t1_1.png")
t1.coverPhoto.attach(io: t1_trailpic, filename: "t1_1.png")

t2 = Trail.create!(name: "Tomales Point Trail", 
                    description: "Tomales Point Trail is a 9.4 mile heavily trafficked out and back trail located near Marshall, California that offers the chance to see wildlife and is rated as moderate. The trail is primarily used for hiking, walking, running, and horses and is accessible year-round. Horses are also able to use this trail.",
                    difficulty: "moderate", 
                    distance: 9.4, 
                    route_type: "Out & back",
                    lat: 38.21188,
                    lon: -122.97306,
                    elevation_gain: 1177,
                    park_id: p1.id)

t2_trailpic = URI.open("https://more-trails-seeds.s3-us-west-1.amazonaws.com/t1_2.png")
t2.coverPhoto.attach(io: t2_trailpic, filename: "t1_2.png")


t3 = Trail.create!(name: "Coast Trail to Bass Lake", 
                    description: "Coast Trail to Bass Lake is a 6 mile heavily trafficked out and back trail located near Bolinas, California that offers the chance to see wildlife and is rated as moderate. The trail is primarily used for hiking, walking, nature trips, and bird watching and is accessible year-round.",
                    difficulty: "moderate", 
                    distance: 6.0, 
                    route_type: "Out & back",
                    lat: 37.93441,
                    lon: -122.74705,
                    elevation_gain: 784,
                    park_id: p1.id)

t3_trailpic = URI.open("https://more-trails-seeds.s3-us-west-1.amazonaws.com/t1_3.png")
t3.coverPhoto.attach(io: t3_trailpic, filename: "t1_3.png")


t4 = Trail.create!(name: "Limantour Beach Trail", 
                    description: "Limantour Beach Trail is a 5.3 mile moderately trafficked out and back trail located near Inverness, California that offers the chance to see wildlife and is good for all skill levels. The trail is primarily used for hiking, walking, and nature trips and is accessible year-round.",
                    difficulty: "moderate", 
                    distance: 5.3, 
                    route_type: "Out & back",
                    lat: 38.02921,
                    lon: -122.88281,
                    elevation_gain: 72,
                    park_id: p1.id)

t4_trailpic = URI.open("https://more-trails-seeds.s3-us-west-1.amazonaws.com/t1_4.png")
t4.coverPhoto.attach(io: t4_trailpic, filename: "t1_4.png")

t5 = Trail.create!(name: "Muddy Hollow, Coast Trail, Sky Trail, Laguna Trail", 
                    description: "Muddy Hollow, Coast Trail, Sky Trail, Laguna Trail is a 12.4 mile heavily trafficked loop trail located near Point Reyes Station, California that features beautiful wild flowers and is rated as moderate. The trail offers a number of activity options and is accessible year-round.",
                    difficulty: "moderate", 
                    distance: 12.4, 
                    route_type: "Out & back",
                    lat: 38.04809,
                    lon: -122.86925,
                    elevation_gain: 1548,
                    park_id: p1.id)

t5_trailpic = URI.open("https://more-trails-seeds.s3-us-west-1.amazonaws.com/t1_5.png")
t5.coverPhoto.attach(io: t5_trailpic, filename: "t1_5.png")



#sequoia
t6 = Trail.create!(name: "Mount Whitney Trail", 
                    description: 'Mount Whitney Trail is a 20.9 mile heavily trafficked out and back trail located near Lone Pine, California that features a lake and is only recommended for very experienced adventurers. The trail is primarily used for hiking, camping, and backpacking and is best used from April until October. This strenuous out-and-back trail leads past rocky switchbacks, sheer cliffs, and flowing waterfalls to the summit of Mt. Whitney, the highest point in the contiguous United States. Reaching the summit of Whitney is an incredible accomplishment, but the journey is sure to challenge even the fittest of hikers.',
                    difficulty: "hard", 
                    distance: 20.9, 
                    route_type: "Out & back",
                    lat: 36.58747,
                    lon: -118.23942,
                    elevation_gain: 6646,
                    park_id: p2.id)

# t6_cover =  URI.open("https://more-trails-seeds.s3.amazonaws.com/     .jpeg")
# t6.coverPhoto.attach(io: t6_cover, filename: "     .jpeg")

t7 = Trail.create!(name: "General Sherman Tree Trail", 
                    description: 'General Sherman Tree Trail is a 1.2 mile heavily trafficked loop trail located near Three Rivers, California that features beautiful wild flowers and is good for all skill levels. The trail is primarily used for hiking, walking, and nature trips and is accessible year-round.',
                    difficulty: "easy", 
                    distance: 1.2, 
                    route_type: "Loop",
                    lat: 36.58163,
                    lon: -118.75145,
                    elevation_gain: 196,
                    park_id: p2.id)

# t7_cover =  URI.open("https://more-trails-seeds.s3.amazonaws.com/     .jpeg")
# t7.coverPhoto.attach(io: t7_cover, filename: "     .jpeg")

t8 = Trail.create!(name: "Heather Lake, Emerald Lake, and Pear Lake", 
                    description: 'Heather Lake, Emerald Lake, and Pear Lake is a 12.3 mile heavily trafficked out and back trail located near Three Rivers, California that features a waterfall and is rated as difficult. The trail is primarily used for hiking, camping, and backpacking and is best used from June until October.',
                    difficulty: "hard", 
                    distance: 12.3, 
                    route_type: "Out & back",
                    lat: 36.59654,
                    lon: -118.73438,
                    elevation_gain: 2936,
                    park_id: p2.id)

# t8_cover =  URI.open("https://more-trails-seeds.s3.amazonaws.com/     .jpeg")
# t8.coverPhoto.attach(io: t8_cover, filename: "     .jpeg")

t9 = Trail.create!(name: "Giant Forest Loop Trail", 
                    description: 'Giant Forest Loop Trail is a 7 mile moderately trafficked loop trail located near Sequoia National Park, California that features beautiful wild flowers and is good for all skill levels. The trail is primarily used for hiking, running, nature trips, and bird watching and is best used from May until October.',
                    difficulty: "easy", 
                    distance: 12.3, 
                    route_type: "Loop",
                    lat: 36.58487,
                    lon: -118.74967,
                    elevation_gain: 1272,
                    park_id: p2.id)

# t9_cover =  URI.open("https://more-trails-seeds.s3.amazonaws.com/     .jpeg")
# t9.coverPhoto.attach(io: t9_cover, filename: "     .jpeg")

t10 = Trail.create!(name: "Johnsondale Bridge River Trail", 
                    description: 'Johnsondale Bridge River Trail is a 5.2 mile moderately trafficked out and back trail located near Kernville, California that features a waterfall and is rated as moderate. The trail offers a number of activity options and is accessible year-round. Dogs are also able to use this trail but must be kept on leash.',
                    difficulty: "moderate", 
                    distance: 5.2, 
                    route_type: "Out & back",
                    lat: 35.96948,
                    lon: -118.48731,
                    elevation_gain: 561,
                    park_id: p2.id)

# t10_cover =  URI.open("https://more-trails-seeds.s3.amazonaws.com/     .jpeg")
# t10.coverPhoto.attach(io: t10_cover, filename: "     .jpeg")

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
                         text: "Absolutely gorgeous beach walk/hike. Beach is secluded so not too many people. Dogs are welcome on leashes and despite what All Trails is showing all trails are now open in the Point Reyes area. We 100% will be back to hike around the area and beach. ", 
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
                         trail_id: t6.id,
                         text: " The trails undulate a lot: up and over coastal hill after coastal hill which means the views are always changing.  Parts of the trail are through bright tall forests with oaks, parts go through pines, and parts go through denser woods with lots of underbrush. There are many, many kinds of ferns and moss and mushrooms everywhere. Parts of the trail are on coastal grassland. Some parts of the trail are shared with cyclists, some with horses and some with ranger trucks. ", 
                         date: "2021-03-23"
                        )

r22 = Review.create!(
                         rating: 5, 
                         user_id: u2.id, 
                         trail_id: t6.id,
                         text: "On the day of my hike, the Tule Elk were in abundance.  Docents were stationed in a few keys areas with binoculars and talking with hikers.  It was a great day with mild weather.  The inclines are not difficult even for a beginner level hiker.  A great 4 hour hike!", 
                         date: "2021-03-23"
                        )

r23 = Review.create!(
                         rating: 5, 
                         user_id: u3.id, 
                         trail_id: t6.id,
                         text: "Nice way to get out in the bay aera for the weekend. We started down at the visitors center and hiked in to one of the beach campsites. Campfires are aloud on the beach. Made for a great weekend.", 
                         date: "2021-03-23"
                        )

r24 = Review.create!(
                         rating: 3, 
                         user_id: u4.id, 
                         trail_id: t6.id,
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









