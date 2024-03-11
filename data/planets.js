function Travel(image, name, destination, description, brief, activity, stay, weather, duration, price) {
    this.image = image,
    this.name = name,
    this.destination = destination,
    this.description = description,
    this.brief = brief,
    this.activity = activity,
    this.stay = stay,
    this.weather = weather,
    this.duration = duration,
    this.price = price
}

const redhaven = new Travel (
    "./images/mars-redhaven.jpg",
    "Mars",
    "Redhaven Plateau",
    "Imagine landing on Mars and stumbling upon the Redhaven Plateau, a vast expanse of rusty red terrain. Hike along winding trails for panoramic views that make you question if you're still in the same galaxy. Stargaze under Martian skies, where even the aliens peek out for a celestial show. Explore ancient ruins scattered about, like Mars's very own version of an interplanetary treasure hunt. And don't forget to snap a selfie with the Martian sunset – it's the ultimate bragging right in the universe.",
    "Redhaven Plateau: Where hikes offer otherworldly views and stargazing feels like a close encounter. With Martian ruins and elusive wildlife, it's like stepping into a sci-fi flick. Plus, the sunset is Instagram gold – literally!",
    "Hiking, Stargazing, Exploring Ruins, Sunset Viewing",
    "The Spacehotel Redhaven Plateau",
    "The Redhaven Plateau experiences predominantly dry and clear weather, ideal for hiking and stargazing. Temperatures on the plateau tend to be moderate, with cool nights and comfortable daytime temperatures.",
    "7 months one way, stay 2 marsian night totaly 14 months",
    "500.000 US dollar",
)

const crystalline = new Travel (
    "./images/mars-crystalline.jpg",
    "Mars",
    "Crystalline Canyons",
    "Welcome to the Crystalline Canyons, where the Martian landscape looks like it got bedazzled by aliens. Wander through narrow passages adorned with crystals that make even the Kardashians jealous. For the adrenaline junkies, there's spelunking – because nothing says 'fun' like exploring caves on another planet. And let's not forget the rainbow show when sunlight hits those crystals – it's like nature's disco party, Martian style!",
    "Crystalline Canyons: Where nature's bling is on full display and spelunking is the new Martian pastime. Catch the sunlight dancing on crystals, and who knows, you might find ancient Martian bling hidden in the caves!",
    "Wandering, Spelunking, Crystal watching, Petroglyph hunting",
    "The Crystalline Bunker",
    "The weather in the Crystalline Canyons remains relatively stable, with minimal atmospheric disturbances. Precipitation is rare, contributing to the preservation of the crystalline formations within the canyons.",
    "7 months one way, stay 2 marsian nights totally 14 months",
    "530.000 US dollar",
)

const echoing = new Travel (
    "./images/mars-echoing.jpg",
    "Mars",
    "Echoing Dunes",
    "Step onto the Echoing Dunes and let the Martian wind serenade you with its haunting melody. Sandboarding here is like surfing through Martian waves – just watch out for cosmic wipeouts! And have you heard about the singing sands? It's like the universe decided to add a soundtrack to your desert adventure. Oh, and keep an eye out for Martian fossils – you never know what prehistoric party animals you might stumble upon!",
    "Echoing Dunes: Where sandboarding gets otherworldly and the wind sings you a lullaby. Hunt for Martian fossils while dodging sand avalanches, and don't forget to listen to the sands' serenade!",
    "Sandboarding, Listening, Singing Sands, Fossil Hunting",
    "The Echoing Dunes motel",
    "Echoing Dunes are characterized by frequent winds that shape the landscape and contribute to the phenomenon of 'singing sands'. The region experiences a dry climate, with minimal moisture and little to no rainfall.",
    "7 months one way, stay 4 marsian nights totally 14 months",
    "550.000 US dollar",
)

const aurora = new Travel (
    "./images/mars-aurora.jpg",
    "Mars",
    "Aurora Valley",
    "Welcome to Aurora Valley, where the night sky puts on a show that makes Vegas look like child's play. Picture yourself stargazing under curtains of shimmering light – it's like Mother Nature went wild with the disco ball. And if you're up for a bit of exploring, ancient ruins and hidden caves await your discovery. Just watch out for the ghost foxes – they're the real party animals of Aurora Valley!",
    "Aurora Valley: Where the night sky throws a party and ancient ruins are the perfect backdrop for stargazing adventures. Keep an eye out for ghost foxes and prepare for a night you'll never forget!",
    "Aurora Watching, Stargazing, Exploring, Wildlife Spotting",
    "Aurora Valley Hostel",
    "Aurora Valley enjoys clear skies, providing optimal conditions for aurora viewing and stargazing.  Nights in the valley can be cold due to the clear skies, but the stunning auroras make braving the chill worthwhile.",
    "7 months one way, stay 5 marsian nights totally 14 months",
    "580.000 US dollar",
)

const flufftopia = new Travel (
    "./images/jupiter-fluff.jpg",
    "Jupiter",
    "Flufftopia",
    "Welcome to Flufftopia, where the clouds are fluffier than your grandma's pillows and the atmosphere is more jovial than a comedy club. Here, you can bounce around on buoyant clouds like a hyperactive kangaroo on a trampoline. Don't be surprised if you find yourself in a cloud pillow fight – it's the preferred method of settling disputes. And for the ultimate adrenaline rush, try cloud surfing during a storm – just make sure your umbrella doesn't blow away!",
    "Where clouds are fluffier than cotton candy, and pillow fights are the norm. Visitors can bounce around on buoyant clouds and try their hand at cloud surfing. Just beware of sudden rain showers – they're the universe's way of saying, 'time for a water balloon fight!'",
    "Cloud Bouncing, Pillow Fights, Cloud Surfing",
    "Space submarine Flufftopia",
    "Flufftopia is characterized by frequent thunderstorms and lightning displays, making it the perfect spot for electrifying adventures. The atmosphere is filled with dense clouds, providing ample opportunities for cloud-related activities.",
    "1 year one way, stay 2 jupiter nights totally 2 years",
    "800.000 US dollar",
)

const gaseous = new Travel (
    "./images/jupiter-gaseous.jpg",
    "Jupiter",
    "Gaseous Gardens",
    "Behold the Gaseous Gardens, where the flora is as colorful as a unicorn's dream and the aroma is... well, let's just say it's out of this world. Stroll through fields of fartflowers and gasaniums, but watch your step – you never know when a gaseous geyser might erupt! And for the botanically inclined, try your hand at growing your own cosmic crop of methane melons.",
    "Gaseous Gardens: Where the flora is as vibrant as a psychedelic painting, and the air is filled with fragrances that are... unique. Visitors can explore fields of fartflowers and gasaniums, with opportunities for botanic experiments.",
    "Botanical explorations, Botanic experiments",
    "The Spaceship Gaseous",
    "The temperatures in the Gaseous Gardens are relatively stable, with moderate warmth throughout. Expect occasional methane showers, adding an extra dose of excitement to your botanical adventures.",
    "1 year one way, stay 3 jupiter nights totally 2 years",
    "820.000 US dollar",
)

const stormy = new Travel (
    "./images/jupiter-stormy.jpg",
    "Jupiter",
    "Stormy Symphony",
    "Welcome to Stormy Symphony, where the thunder rumbles like a cosmic drum solo and the lightning puts on a dazzling light show that would make even fireworks jealous. Dance in the rain to the rhythm of the storm or conduct your own lightning orchestra – just remember to wear your rubber gloves! And if you're lucky, you might catch a glimpse of the elusive thunderbird, whose booming cries rival the thunder itself.",
    "Stormy Symphony: Where thunderstorms are the main attraction, and lightning strikes serve as the cosmic fireworks. Visitors can dance in the rain or conduct their own lightning orchestra for a truly electrifying experience.",
    "Dancing in the rain, Lightning Orchestra",
    "Spaceship Stormy Symphony",
    "Stormy Symphony is known for its frequent thunderstorms, providing an electrifying atmosphere for visitors. Lightning flashes illuminate the sky in a dazzling display of cosmic fireworks.",
    "1 year one way, stay 1 jupiter day totally 2 years",
    "100.000 US dollar (at your own risk, death might occur if you get struck by lightning)", 
)

const zephyr = new Travel (
    "./images/jupiter-zephyr.jpg",
    "Jupiter",
    "Zephyr Zephyr",
    "Step into Zephyr Zephyr, where the winds blow harder than a cosmic hurricane and the air is as brisk as your grandma's slap on the wrist. Hold onto your hats (and anything else that isn't bolted down) as you navigate through wind tunnels that'll send you flying faster than a rocket launch. And if you're feeling adventurous, try kite surfing – just remember to bring a sturdy kite (and maybe a parachute, just in case)!",
    "Where the winds blow with hurricane force, and kite surfing is the preferred mode of transportation. Visitors can navigate through wind tunnels or try their hand at kite surfing for an exhilarating experience.",
    "Wind tunnel navigation, Kite surfing",
    "The Zephyr space submarine",
    "Zephyr Zephyr experiences consistently strong winds, creating an exhilarating atmosphere for visitors. Temperatures can vary depending on the altitude and location within the wind tunnels.",
    "1 year one way, stay 2 jupiter nights totally 2 years",
    "150.000 US dollar (at your own risk, death might occur if you get blown away and we won't be able to rescue you)", 
)

const fizzlepop = new Travel (
    "./images/zogorbia-fizzlepop.jpg",
    "Zogorbia",
    "Fizzlepop Forest",
    "Step into Fizzlepop Forest, where the trees hum with delight and the mushrooms sing catchy tunes. Keep an eye out for the mischievous Snickerdoodles, who love to play pranks on unsuspecting visitors. If you're lucky, you might stumble upon the legendary Giggleberries – just be prepared for a case of uncontrollable laughter!",
    "A whimsical wonderland where trees hum and mushrooms sing. Beware of mischievous Snickerdoodles and keep an eye out for Giggleberries – they'll leave you in stitches!",
    "Mushroom Sing-along, Snickerdoodle spotting",
    "Fizzlepop treehouse",
    "The weather in Fizzlepop Forest is mild and pleasant, with gentle breezes rustling through the trees. Expect occasional rainbows that stretch across the sky, adding to the magical atmosphere.",
    "40 years one way and no turning back, (be aware for some older people you wont live long enough to get back to Earth).",
    "1000.000 US dollar one way and other costs for staying there",
)

const glimmer = new Travel (
    "./images/zogorbia-glimmer.jpg",
    "Zogorbia",
    "Glimmer Glades",
    "Welcome to the Glimmering Glades, where everything sparkles like it's been dusted with fairy glitter. Frolic with the Sparklepuffs, fluffy creatures that emit a glow so bright, they make fireflies jealous. And if you're feeling adventurous, dive into the shimmering pools and discover the hidden treasures that lie beneath the surface – just watch out for the glitter sharks!",
    "Glimmering Glades: Where everything sparkles brighter than a disco ball, and the Sparklepuffs light up the night. Dive into shimmering pools for aquatic adventures and watch out for glitter sharks!",
    "Sparklepuff frolicking, Treasure diving",
    "Glimmer Glades caves",
    " Expect sunny days with occasional showers of glitter, adding to the dazzling ambiance. The temperatures in the Glimmering Glades are mild and comfortable, perfect for outdoor activities.",
    "40 years one way and no turning back, (be aware for some older people you wont live long enough to get back to Earth).",
    "1300.000 US dollar one way and other costs for staying there",
)

const quirky = new Travel (
    "./images/zogorbia-quicksand.jpg",
    "Zogorbia",
    "Quirky Quicksand Quagmire",
    "Prepare to sink into the Quirky Quicksand Quagmire, where the ground shifts like a hyperactive toddler and the mud giggles with glee. Keep your wits about you as you navigate through this wacky terrain, dodging bouncing boulders and evading the ticklish Tumbletots. And whatever you do, don't forget to bring a change of clothes – you never know when the mud might decide to give you a hug!",
    "Quirky Quicksand Quagmire: A land of shifting sands and giggling mud, where Tumbletots tickle your funny bone. Navigate through bouncing boulders and prepare for unexpected hugs from the mud!",
    "Quicksand Hopping, Tumbletot Tickling",
    "Underground Quicksand appartments",
    "The Quirky Quicksand Quagmire often experiences misty mornings, adding to the mysterious ambiance. Weather conditions can vary wildly, from sunny spells to sudden showers of mud.",
    "40 years one way and no turning back, (be aware for some older people you wont live long enough to get back to Earth).",
    "890.000 US dollar one way and other costs for staying there and risk of sudden death drowning in the quicksand",
)

const whimsy = new Travel (
    "./images/zogorbia-wobble.jpg",
    "Zogorbia",
    "Whimsy Wobble Wasteland",
    "Welcome to the Whimsy Wobble Wasteland, where the ground wobbles like a Jell-O mold at a cosmic picnic. Watch out for the Whirlygigs, creatures with spinning heads that love to whirl around in a dizzying dance. And if you're feeling brave, venture into the Wobble Maze – just be prepared for a few twists and turns (and maybe a case of the giggles) along the way!",
    "Whimsy Wobble Wasteland: Where the ground wobbles beneath your feet and Whirlygigs spin like tops. Navigate the Wobble Maze for a whirlwind adventure filled with twists, turns, and plenty of giggles!",
    "Whirlygig watchning, wobble maze navigation",
    "Whimsy house",
    "Expect gusts of wobbly winds that make walking a comical challenge. Weather in the Whimsy Wobble Wasteland can be unpredictable, with sudden changes adding to the whimsical atmosphere.",
    "40 years one way and no turning back, (be aware for some older people you wont live long enough to get back to Earth).",
    "1350.000 US dollar one way and other costs for staying there",
)

export const mars = [redhaven, crystalline, echoing, aurora];
export const jupiter = [flufftopia, gaseous, stormy, zephyr];
export const zogorbia = [fizzlepop, glimmer, quirky, whimsy];

export const travels = [...mars, ...jupiter, ...zogorbia];
