<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
class ProductsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $electronicsCategoryId = 1;
        $SportCategoryId = 2;
        $FoodCategoryId = 3;
        $GamesCategoryId = 4;
        $MusicCategoryId = 5;
        DB::table('products')->insert([
            [
                'category_id'=> $electronicsCategoryId,
                'title'=> 'Noise Cancelling Headphoness',
                'description'=> "These noise cancelling headphones block out external noise for a truly immersive listening experience. With their comfortable fit and high-quality sound, you'll never want to take them off.",
                'image'=> 'headphone.jpeg',
                'price'=> '99',
                'quantity'=> 10,
                 'created_at' => '2023-05-11 17:59:02' ,
                    'updated_at' => '2023-05-11 17:59:12'
            ],
            [
                'category_id'=> $electronicsCategoryId,
                'title'=> 'Smart Home Hub',
                'description'=> "Control your smart home devices with a smart home hub. With its voice-activated assistant and easy-to-use interface, you'll be able to control everything from your lights to your thermostat with just a few words.",
                'image'=> 'Smarthome.jpeg',
                'price'=> '299',
                'quantity'=> 50,
                 'created_at' => '2023-05-11 17:59:11',
                    'updated_at' => '2023-05-11 17:59:33'
            ],
            [
                'category_id'=> $electronicsCategoryId,
                'title'=> 'DSLR Camera',
                'description'=> "Capture stunning photos and videos with a high-quality DSLR camera. With its interchangeable lenses and advanced features, you'll be able to take your photography skills to the next level.",
                'image'=> 'camera.jpeg',
                'price'=> '349',
                'quantity'=> 20,
                 'created_at' => '2023-05-11 17:59:07',
                    'updated_at' => '2023-05-11 17:59:28'
            ],
            [
                'category_id'=> $electronicsCategoryId,
                'title'=> 'Wireless Bluetooth Earbuds',
                'description'=> "These wireless earbuds offer high-quality sound without the hassle of cords. With their sleek design and comfortable fit, they're perfect for anyone on the go.",
                'image'=> 'earbods.jpeg',
                'price'=> '69',
                'quantity'=> 80,
                 'created_at' => '2023-05-11 17:59:01',
                    'updated_at' => '2023-05-11 17:59:15'
            ],
            [
                'category_id'=> $electronicsCategoryId,
                'title'=> 'Wireless Router',
                'description'=> "Stay connected with a high-performance wireless router. With its fast speeds and reliable connection, you'll be able to stream, browse, and download with ease.",
                'image'=> 'router.jpeg',
                'price'=> '40',
                'quantity'=> 30,
                 'created_at' => '2023-05-11 17:59:13',
                    'updated_at' => '2023-05-11 17:59:20'
            ],
            [
                'category_id'=> $electronicsCategoryId,
                'title'=> 'Fitness Tracker',
                'description'=> " Keep track of your fitness goals with a fitness tracker. With its heart rate monitor, step tracker, and sleep tracker, you'll be able to monitor your progress and stay motivated.",
                'image'=> 'fittracker.jpeg',
                'price'=> '799.99',
                'quantity'=> 60,
                 'created_at' => '2023-05-11 17:59:02',
                    'updated_at' => '2023-05-11 17:59:17'
            ],
            [
                'category_id'=> $electronicsCategoryId,
                'title'=> 'Wireless Charging Pad',
                'description'=> "This wireless charging pad makes it easy to charge your phone without the hassle of cords. Simply place your phone on the pad and let it charge.",
                'image'=> 'chargingpad.jpeg',
                'price'=> '139',
                'quantity'=> 40,
                 'created_at' => '2023-05-11 17:59:08',
                    'updated_at' => '2023-05-11 17:59:30'
            ],
            [
                'category_id'=> $electronicsCategoryId,
                'title'=> 'Portable Power Bank',
                'description'=> "Keep your devices charged on the go with a portable power bank. With its compact size and high-capacity battery, you'll never have to worry about running out of juice.",
                'image'=> 'powerbank.jpeg',
                'price'=> '199',
                'quantity'=> 10,
                 'created_at' => '2023-05-11 17:59:09',
                    'updated_at' => '2023-05-11 17:59:41'
            ],
            [
                'category_id'=> $electronicsCategoryId,
                'title'=> 'VR Headset',
                'description'=> "Immerse yourself in virtual reality with a VR headset. With its high-resolution display and 360-degree tracking, you'll be able to explore new worlds and have unforgettable experiences.",
                'image'=> 'vr.jpeg',
                'price'=> '400',
                'quantity'=> 20,
                 'created_at' => '2023-05-11 16:59:09',
                    'updated_at' => '2023-05-11 18:59:41'
            ],
            [
                'category_id'=> $electronicsCategoryId,
                'title'=> 'Gaming Laptop',
                'description'=> "Take your gaming to the next level with a high-performance gaming laptop. With its powerful processor and dedicated graphics card, you'll enjoy smooth gameplay and stunning graphics.",
                'image'=> 'laptop.jpeg',
                'price'=> '2499',
                'quantity'=> 30,
                 'created_at' => '2023-05-11 15:59:09',
                    'updated_at' => '2023-05-11 19:59:41'
            ],
            [
                'category_id'=> $electronicsCategoryId,
                'title'=> 'Streaming Device',
                'description'=> "Enjoy your favorite movies and TV shows with a streaming device. With access to popular streaming services like Netflix and Hulu, you'll never run out of things to watch.",
                'image'=> 'wrouter.jpg',
                'price'=> '100',
                'quantity'=> 50,
                 'created_at' => '2023-05-11 13:59:09',
                    'updated_at' => '2023-05-11 16:59:41'
            ],
            [
                'category_id'=> $electronicsCategoryId,
                'title'=> 'Smart TV samsung',
                'description'=> "Enjoy your favorite movies and TV shows in stunning 4K resolution with a smart TV. With its built-in streaming apps and voice-activated assistant, you'll be able to find and watch your favorite content with ease.",
                'image'=> 'TV.jpeg',
                'price'=> '279',
                'quantity'=> 100,
                 'created_at' => '2023-05-11 18:59:09',
                    'updated_at' => '2023-05-11 21:59:41'
            ],




            [
                'category_id'=> $SportCategoryId,
                'title'=> 'Garmin Forerunner 945 GPS Smartwatch',
                'description'=> "The Garmin Forerunner 945 is a high-performance GPS smartwatch built for serious athletes. It offers advanced running dynamics, heart rate monitoring, built-in music storage, and detailed mapping capabilities. With its long battery life and comprehensive training features, it's perfect for tracking your progress and pushing your limits.",
                'image'=> 'sportheure.jpeg',
                'price'=> '549.99',
                'quantity'=> 10,
                 'created_at' => '2023-05-11 17:59:02' ,
                    'updated_at' => '2023-05-11 17:59:12'
            ],
            [
                'category_id'=> $SportCategoryId,
                'title'=> 'Wilson Pro Staff RF97 Tennis Racket',
                'description'=> "The Wilson Pro Staff RF97 is the signature racket of tennis legend Roger Federer. It combines precision, power, and control to enhance your game on the court. With its large sweet spot and stable frame, this racket allows you to generate powerful shots while maintaining accuracy.",
                'image'=> 'racket.jpeg',
                'price'=> '219.99',
                'quantity'=> 50,
                 'created_at' => '2023-05-11 17:59:11',
                    'updated_at' => '2023-05-11 17:59:33'
            ],
            [
                'category_id'=> $SportCategoryId,
                'title'=> 'Callaway Rogue Driver',
                'description'=> "The Callaway Rogue Driver is a game-changing golf club that delivers exceptional distance and forgiveness. Its innovative Jailbreak Technology stiffens the body, allowing for more energy transfer to the ball, resulting in faster ball speed and longer drives. Experience maximum performance and consistency off the tee with this driver.",
                'image'=> 'golf.jpeg',
                'price'=> '499.99',
                'quantity'=> 20,
                 'created_at' => '2023-05-11 17:59:07',
                    'updated_at' => '2023-05-11 17:59:28'
            ],
            [
                'category_id'=> $SportCategoryId,
                'title'=> 'Adidas Predator 20.3 Firm Ground Soccer Cleats',
                'description'=> "The Adidas Predator 20.3 soccer cleats are designed for players who want enhanced control and accuracy on firm ground surfaces. These cleats feature a synthetic upper with a textured control embossing, providing excellent ball grip. The firm ground outsole offers reliable traction and agility during fast-paced matches.",
                'image'=> 'adidas.jpeg',
                'price'=> '79.99',
                'quantity'=> 80,
                 'created_at' => '2023-05-11 17:59:01',
                    'updated_at' => '2023-05-11 17:59:15'
            ],
            [
                'category_id'=> $SportCategoryId,
                'title'=> 'Easton Ghost Advanced Fastpitch Softball Bat',
                'description'=> " The Easton Ghost Advanced is a high-performance fastpitch softball bat engineered for maximum power and responsiveness. It features a two-piece composite construction and utilizes advanced barrel technology for a larger sweet spot and reduced vibration. This bat is approved for use in all major softball leagues.",
                'image'=> 'bat.jpeg',
                'price'=> '349.99',
                'quantity'=> 30,
                 'created_at' => '2023-05-11 17:59:13',
                    'updated_at' => '2023-05-11 17:59:20'
            ],
            [
                'category_id'=> $SportCategoryId,
                'title'=> 'Salomon QST 99 All-Mountain Skis',
                'description'=> "The Salomon QST 99 skis are versatile all-mountain skis that excel in a variety of snow conditions. With a lightweight yet sturdy construction, they offer stability, agility, and excellent edge grip. Whether you're carving on groomers or exploring off-piste terrain, these skis will keep you in control.",
                'image'=> 'ski.jpeg',
                'price'=> '599.99',
                'quantity'=> 60,
                 'created_at' => '2023-05-11 17:59:02',
                    'updated_at' => '2023-05-11 17:59:17'
            ],
            [
                'category_id'=> $SportCategoryId,
                'title'=> 'Everlast Pro Style Boxing Gloves',
                'description'=> "The Everlast Pro Style Boxing Gloves are perfect for both beginners and experienced boxers. Made with durable synthetic leather, they provide excellent hand protection and wrist support. The gloves feature a full mesh palm for enhanced breathability and a secure closure system for a snug fit.",
                'image'=> 'box.jpeg',
                'price'=> '39.99',
                'quantity'=> 40,
                 'created_at' => '2023-05-11 17:59:08',
                    'updated_at' => '2023-05-11 17:59:30'
            ],
            [
                'category_id'=> $SportCategoryId,
                'title'=> 'YETI Tundra 45 Cooler',
                'description'=> "The YETI Tundra 45 Cooler is a rugged and reliable companion for your outdoor adventures. It offers superior insulation to keep your food and drinks cold for extended periods, even in hot weather. With its durable construction, bear-resistant design, and non-slip feet, this cooler is built to withstand the toughest conditions.",
                'image'=> 'sportcooler.jpeg',
                'price'=> '299.99',
                'quantity'=> 10,
                 'created_at' => '2023-05-11 17:59:09',
                    'updated_at' => '2023-05-11 17:59:41'
            ], 
            [
                'category_id'=> $SportCategoryId,
                'title'=> 'Adidas Copa Mundial Soccer Cleats',
                'description'=> "The Adidas Copa Mundial Soccer Cleats are a classic choice for football players seeking comfort, durability, and superior performance. These cleats are crafted with a premium kangaroo leather upper, offering exceptional touch and a snug fit. The stud configuration on the outsole ensures excellent traction on a variety of playing surfaces, giving you the stability and grip you need to make quick cuts and accelerate with confidence. Whether you're playing on grass or turf, the Adidas Copa Mundial Soccer Cleats deliver timeless style and unmatched performance.",
                'image'=> 'sbrdila1.jpeg',
                'price'=> '149.99',
                'quantity'=> 50,
                 'created_at' => '2023-05-11 13:59:09',
                    'updated_at' => '2023-05-11 14:59:41'
            ],
            [
                'category_id'=> $SportCategoryId,
                'title'=> 'Nike Mercurial Superfly VII Elite Football Boots',
                'description'=> "The Nike Mercurial Superfly VII Elite Football Boots are designed for the fastest players on the pitch. These boots feature a lightweight and breathable Flyknit upper that conforms to your foot for a secure fit. The high-cut collar provides ankle support and a seamless connection between your foot and leg. The revolutionary soleplate with chevron-shaped studs enhances traction and acceleration, allowing you to leave your opponents in the dust. With its cutting-edge technology and sleek design, the Nike Mercurial Superfly VII Elite Football Boots are a game-changer.",
                'image'=> 'sbrdila2.jpeg',
                'price'=> '249.99',
                'quantity'=> 80,
                 'created_at' => '2023-05-11 14:59:09',
                    'updated_at' => '2023-05-11 15:59:41'
            ],
            [
                'category_id'=> $SportCategoryId,
                'title'=> 'Nike Air Zoom Pegasus 38 Running Shoes',
                'description'=> "The Nike Air Zoom Pegasus 38 is a versatile running shoe designed for athletes seeking comfort and speed. It features responsive Zoom Air cushioning, a breathable mesh upper, and a durable rubber outsole for traction on various surfaces.",
                'image'=> 'sbrdila3.jpeg',
                'price'=> '129.99',
                'quantity'=> 60,
                 'created_at' => '2023-05-11 17:59:09',
                    'updated_at' => '2023-05-11 20:59:41'
            ],
            [
                'category_id'=> $SportCategoryId,
                'title'=> 'PUMA evoPOWER Vigor 1+ FG Soccer Cleats',
                'description'=> "The PUMA evoPOWER Vigor 1+ FG Soccer Cleats are engineered to enhance your power and precision on the field. These cleats feature a lightweight and flexible upper constructed with a combination of premium leather and synthetic materials. The AccuFoam technology provides a consistent and clean striking surface, enabling you to deliver accurate shots and passes. The stud configuration on the outsole ensures optimal traction and stability, allowing you to maintain control even during quick changes in direction. Unleash your true potential with the PUMA evoPOWER Vigor 1+ FG Soccer Cleats.",
                'image'=> 'sbrdila4.jpeg',
                'price'=> '189.99',
                'quantity'=> 40,
                 'created_at' => '2023-05-11 11:59:09',
                    'updated_at' => '2023-05-11 12:59:41'
            ],

            [
                'category_id'=> $FoodCategoryId,
                'title'=> 'Nutritious Superfood Quinoa',
                'description'=> "Our organic quinoa is a powerhouse of nutrition. Packed with protein, fiber, and essential minerals, it is perfect for a healthy and balanced diet. Use it in salads, stir-fries, or as a side dish. Each package contains 1 lb of organic quinoa,and it is sold per package.",
                'image'=> 'choufane.jpeg',
                'price'=> '4.99',
                'quantity'=> 10,
                 'created_at' => '2023-05-11 17:59:02' ,
                    'updated_at' => '2023-05-11 17:59:12'
            ],
            [
                'category_id'=> $FoodCategoryId,
                'title'=> 'Premium Cold-Pressed Olive Oil',
                'description'=> "Indulge in the rich flavor and health benefits of our extra virgin olive oil. Carefully cold-pressed from the finest olives, it retains its natural antioxidants and vitamins. Drizzle it over salads, use it for sautéing, or as a dipping oil. Each bottle contains 16 fl oz of premium olive oil,and it is sold per bottle.",
                'image'=> 'zit.jpeg',
                'price'=> '9.99',
                'quantity'=> 50,
                 'created_at' => '2023-05-11 17:59:11',
                    'updated_at' => '2023-05-11 17:59:33'
            ],
            [
                'category_id'=> $FoodCategoryId,
                'title'=> 'Creamy Organic Greek Yogurt',
                'description'=> "Start your day with a creamy and wholesome treat - our organic Greek yogurt. Made from organic milk and strained to perfection, it is packed with protein and probiotics. Enjoy it plain or add your favorite fruits and granola. Each container holds 32 oz of organic Greek yogurt,and it is sold per container.",
                'image'=> 'danone.jpeg',
                'price'=> '5.49',
                'quantity'=> 20,
                 'created_at' => '2023-05-11 17:59:07',
                    'updated_at' => '2023-05-11 17:59:28'
            ],
            [
                'category_id'=> $FoodCategoryId,
                'title'=> 'Decadent Dark Chocolate Delight',
                'description'=> "Indulge in the rich and velvety taste of our dark chocolate bar. Crafted from the finest cocoa beans, it boasts a high cocoa percentage and a smooth texture that melts in your mouth. Perfect for a sweet treat or as a gift for chocolate lovers. Each bar weighs 3.5 oz which is sold per bar.",
                'image'=> 'chocolat.jpeg',
                'price'=> '3.99',
                'quantity'=> 80,
                 'created_at' => '2023-05-11 17:59:01',
                    'updated_at' => '2023-05-11 17:59:15'
            ],
            [
                'category_id'=> $FoodCategoryId,
                'title'=> 'Delicious Gluten-Free Bread Loaf',
                'description'=> "Experience the joy of gluten-free bread with our delicious loaf. Made from a blend of premium gluten-free flours, it is soft, flavorful, and perfect for sandwiches or toast. Each loaf weighs 16 oz and is sliced for convenience,which is sold per loaf.",
                'image'=> 'bread.jpeg',
                'price'=> '6.49',
                'quantity'=> 30,
                 'created_at' => '2023-05-11 17:59:13',
                    'updated_at' => '2023-05-11 17:59:20'
            ],
            [
                'category_id'=> $FoodCategoryId,
                'title'=> 'Creamy Organic Almond Butter',
                'description'=> "Enjoy the pure goodness of our organic almond butter. Made from carefully selected organic almonds, it is a rich source of healthy fats, protein, and vitamins. Spread it on toast, use it in baking, or blend it into smoothies. Each jar contains 12 oz of organic almond butter,which sold per jar.",
                'image'=> 'zabda.jpeg',
                'price'=> '8.99',
                'quantity'=> 60,
                 'created_at' => '2023-05-11 17:59:02',
                    'updated_at' => '2023-05-11 17:59:17'
            ],
            [
                'category_id'=> $FoodCategoryId,
                'title'=> 'Handcrafted Artisan Pasta Collection',
                'description'=> "Elevate your pasta dishes with our artisanal pasta collection. Made from premium durum wheat and carefully crafted in small batches, our pasta offers a delightful texture and authentic taste. Each box contains a variety of four unique pasta shapes, totaling 1 lb and it is sold per box.",
                'image'=> 'pasta.jpeg',
                'price'=> '6.99',
                'quantity'=> 40,
                 'created_at' => '2023-05-11 17:59:08',
                    'updated_at' => '2023-05-11 17:59:30'
            ],
            [
                'category_id'=> $FoodCategoryId,
                'title'=> 'Nutritious Delight: Organic Quinoa Salad Mix',
                'description'=> "Enjoy a healthy and flavorful meal with our Organic Quinoa Salad Mix. This versatile blend features a combination of nutrient-rich quinoa, fresh vegetables, and a zesty dressing. Packed with protein, fiber, and essential vitamins, this salad mix is a perfect choice for anyone seeking a balanced and delicious meal option. The organic ingredients ensure that you're nourishing your body while supporting sustainable farming practices. Whether you're a health enthusiast or just looking to add more wholesome foods to your diet, our Organic Quinoa Salad Mix is a must-try!",
                'image'=> 'couscous.jpeg',
                'price'=> '9.99',
                'quantity'=> 10,
                 'created_at' => '2023-05-11 17:59:09',
                    'updated_at' => '2023-05-11 17:59:41'
            ],
            [
                'category_id'=> $FoodCategoryId,
                'title'=> 'Pure and Natural Organic Matcha Green Tea Powder',
                'description'=> "Treat yourself to the ultimate chocolate experience with our Artisanal Dark Chocolate Truffles. Made from the finest cocoa beans and handcrafted by expert chocolatiers, these truffles offer a velvety smooth texture and an intense, bittersweet flavor that lingers on your palate. Each truffle is carefully adorned with a dusting of cocoa powder or a drizzle of dark chocolate, making them visually appealing as well. Whether you want to satisfy your sweet tooth or surprise someone with a luxurious gift, our Artisanal Dark Chocolate Truffles are a true delight.",
                'image'=> 'choco.jpeg',
                'price'=> '19.99',
                'quantity'=> 180,
                 'created_at' => '2023-05-11 17:38:09',
                    'updated_at' => '2023-05-11 18:49:41'
            ],
            [
                'category_id'=> $FoodCategoryId,
                'title'=> 'Decadent Indulgence: Artisanal Dark Chocolate Truffles',
                'description'=> "Indulge in the rich and vibrant flavor of our Organic Matcha Green Tea Powder. Sourced from the finest tea leaves, this powdered beverage is carefully handpicked and stone-ground to preserve its exquisite taste and nutritional benefits. Packed with antioxidants, vitamins, and minerals, our Matcha Green Tea Powder provides a natural energy boost while promoting a sense of calm and focus. Whether enjoyed as a traditional hot tea or blended into smoothies and desserts, this premium-grade matcha powder is a healthy and delicious addition to your daily routine.",
                'image'=> 'green.jpeg',
                'price'=> '14.99',
                'quantity'=> 80,
                 'created_at' => '2023-05-11 17:28:09',
                    'updated_at' => '2023-05-11 17:49:41'
            ],
            [
                'category_id'=> $FoodCategoryId,
                'title'=> 'Luxurious Gourmet Truffle Infused Olive Oil',
                'description'=> "Elevate your culinary creations with our exquisite Gourmet Truffle Infused Olive Oil. Crafted from the finest extra virgin olive oil and infused with aromatic truffle essence, this luxurious condiment adds a sophisticated touch to any dish. Drizzle it over roasted vegetables, pasta, or grilled meats to enhance their flavors with the earthy and distinctive taste of truffles. With its captivating aroma and rich, smooth texture, our Truffle Infused Olive Oil is a must-have for food enthusiasts and connoisseurs.",
                'image'=> 'whiskey.jpeg',
                'price'=> '29.99',
                'quantity'=> 50,
                 'created_at' => '2023-05-11 14:28:09',
                    'updated_at' => '2023-05-11 19:49:41'
            ],
            [
                'category_id'=> $FoodCategoryId,
                'title'=> 'Artisanal Dark Chocolate Collection - Assorted Flavors',
                'description'=> "Indulge your senses with our decadent Artisanal Dark Chocolate Collection. Carefully crafted by expert chocolatiers, this assortment features a variety of rich and velvety dark chocolates with delightful fillings. From smooth caramel to tangy raspberry, each piece is a blissful combination of intense flavors and premium ingredients. Made with ethically sourced cacao beans and meticulously selected natural flavors, our Artisanal Dark Chocolate Collection is the perfect gift for chocolate lovers or a well-deserved treat for yourself.",
                'image'=> 'marija.jpeg',
                'price'=> '24.99',
                'quantity'=> 50,
                 'created_at' => '2023-05-11 16:28:09',
                    'updated_at' => '2023-05-11 18:49:41'
            ],

            [
                'category_id'=>  $GamesCategoryId,
                'title'=> "Legend of Eldoria - Collector's Edition",
                'description'=> "Immerse yourself in the epic world of Eldoria with this limited edition collector's set. It includes the game on a deluxe DVD, a beautifully illustrated artbook, a soundtrack CD, and an exclusive in-game armor set. Unleash the hero within and save the realm from darkness!",
                'image'=> '1.jpeg',
                'price'=> '79.99',
                'quantity'=> 100,
                 'created_at' => '2023-05-11 17:59:02' ,
                    'updated_at' => '2023-05-11 17:59:12'
            ],
            [
                'category_id'=> $GamesCategoryId,
                'title'=> 'Galactic Wars VR - Virtual Reality Headsetl',
                'description'=> "Dive into the ultimate space adventure with the Galactic Wars VR headset. This high-quality virtual reality device transports you to a galaxy far, far away, where you can engage in thrilling dogfights, explore alien worlds, and unravel the mysteries of the universe. Prepare for an immersive gaming experience like no other!",
                'image'=> '2.jpeg',
                'price'=> '299.99',
                'quantity'=> 50,
                 'created_at' => '2023-05-11 17:59:11',
                    'updated_at' => '2023-05-11 17:59:33'
            ],
            [
                'category_id'=> $GamesCategoryId,
                'title'=> 'Fantasy Realms Board Game',
                'description'=> " Enter a realm of magic and strategy with the Fantasy Realms board game. Build your kingdom, recruit powerful allies, and conquer your opponents in this epic battle for dominance. With stunning artwork, intricate gameplay mechanics, and endless replayability, this game is a must-have for any board game enthusiast.",
                'image'=> '3.jpeg',
                'price'=> '49.99',
                'quantity'=> 20,
                 'created_at' => '2023-05-11 17:59:07',
                    'updated_at' => '2023-05-11 17:59:28'
            ],
            [
                'category_id'=> $GamesCategoryId,
                'title'=> "Assassin's Creed: Origins - Limited Edition Statue",
                'description'=> "Celebrate the rich history of the Assassin's Creed franchise with this limited edition statue inspired by Assassin's Creed: Origins. Crafted with exquisite detail, the statue depicts the game's protagonist in a dynamic pose, ready to take on any challenge. Display it proudly as a centerpiece in your gaming collection.",
                'image'=> '4.jpeg',
                'price'=> '129.99',
                'quantity'=> 80,
                 'created_at' => '2023-05-11 17:59:01',
                    'updated_at' => '2023-05-11 17:59:15'
            ],
            [
                'category_id'=> $GamesCategoryId,
                'title'=> 'Pokémon Trading Card Game Booster Box',
                'description'=> "Unleash the power of Pokémon with this booster box filled with 36 packs of trading cards. Expand your collection, discover rare cards, and build a formidable deck to compete against friends and foes. Will you become the ultimate Pokémon Master? Open the packs and find out!",
                'image'=> '5.jpeg',
                'price'=> '99.99',
                'quantity'=> 30,
                 'created_at' => '2023-05-11 17:59:13',
                    'updated_at' => '2023-05-11 17:59:20'
            ],
            [
                'category_id'=> $GamesCategoryId,
                'title'=> 'Razer Huntsman Elite Gaming Keyboard',
                'description'=> "Dominate the competition with the Razer Huntsman Elite gaming keyboard. Equipped with Razer's groundbreaking Opto-Mechanical switches, this keyboard offers lightning-fast responsiveness and unrivaled precision. Its customizable Chroma lighting and plush wrist rest elevate your gaming experience to new heights.",
                'image'=> '6.jpeg',
                'price'=> '199.99',
                'quantity'=> 60,
                 'created_at' => '2023-05-11 17:59:02',
                    'updated_at' => '2023-05-11 17:59:17'
            ],
            [
                'category_id'=> $GamesCategoryId,
                'title'=> 'FIFA 23 - Ultimate Edition (PS5)',
                'description'=> ": Experience the beautiful game like never before with FIFA 23 - Ultimate Edition for PlayStation 5. Immerse yourself in stunning graphics, realistic gameplay, and unrivaled authenticity. This edition includes exclusive bonus content, such as additional player packs and in-game perks, to enhance your football journey.",
                'image'=> '7.jpeg',
                'price'=> '79.99',
                'quantity'=> 40,
                 'created_at' => '2023-05-11 17:59:08',
                    'updated_at' => '2023-05-11 17:59:30'
            ],
            [
                'category_id'=> $GamesCategoryId,
                'title'=> "The Legend of Zelda: Breath of the Wild - Collector's Box Set",
                'description'=> " Embark on a breathtaking adventure with The Legend of Zelda: Breath of the Wild - Collector's Box Set. This limited edition package includes the game for Nintendo Switch, a detailed map of Hyrule, a soundtrack CD, and a Master Sword replica. It's a must-have for any Zelda fan and a collector's dream.",
                'image'=> '8.jpeg',
                'price'=> '149.99',
                'quantity'=> 10,
                 'created_at' => '2023-05-11 17:59:09',
                    'updated_at' => '2023-05-11 17:59:41'
            ],
            [
                'category_id'=> $GamesCategoryId,
                'title'=> "HyperX Cloud Alpha Gaming Headset",
                'description'=> " The HyperX Cloud Alpha Gaming Headset delivers an immersive audio experience, perfect for gamers seeking top-tier sound quality. It features dual chamber drivers for enhanced clarity and less distortion, along with comfortable memory foam ear cushions for extended gaming sessions. The detachable noise-canceling microphone ensures clear communication with your teammates. With a durable aluminum frame and braided cable, this headset is built to withstand rigorous gaming sessions.",
                'image'=> '9.jpeg',
                'price'=> '99.99',
                'quantity'=> 10,
                 'created_at' => '2023-05-11 17:59:09',
                    'updated_at' => '2023-05-11 17:59:41'
            ],
            [
                'category_id'=> $GamesCategoryId,
                'title'=> "Logitech G502 HERO Gaming Mouse",
                'description'=> "The Logitech G502 HERO Gaming Mouse is designed for precision and speed, making it a must-have for gamers. It boasts a high-accuracy HERO 25K sensor with customizable DPI settings, allowing you to fine-tune your sensitivity for optimal performance. The mouse features 11 programmable buttons, including a customizable scroll wheel, for personalized control. With a comfortable ergonomic design and customizable RGB lighting, the G502 HERO offers both style and functionality. ",
                'image'=> '10.jpeg',
                'price'=> '79.99',
                'quantity'=> 10,
                 'created_at' => '2023-05-11 17:59:09',
                    'updated_at' => '2023-05-11 17:59:41'
            ],
            [
                'category_id'=> $GamesCategoryId,
                'title'=> "Razer BlackWidow Elite Mechanical Gaming Keyboard",
                'description'=> " The Razer BlackWidow Elite Mechanical Gaming Keyboard is engineered to provide the ultimate gaming experience. It features Razer's award-winning mechanical switches, offering precise actuation and unparalleled durability. The keyboard is equipped with customizable Chroma RGB lighting, allowing you to personalize your setup with vibrant lighting effects. With dedicated media keys, a detachable wrist rest, and programmable macros, the BlackWidow Elite caters to gamers' every need. ",
                'image'=> '11.jpeg',
                'price'=> '169.99',
                'quantity'=> 10,
                 'created_at' => '2023-05-11 17:59:09',
                    'updated_at' => '2023-05-11 17:59:41'
            ],
            [
                'category_id'=> $GamesCategoryId,
                'title'=> "PlayStation 5 (PS5) Gaming Console",
                'description'=> "The PlayStation 5 (PS5) Gaming Console is the next-generation gaming system that takes gaming to a whole new level. With its powerful custom CPU and GPU, the PS5 delivers stunning graphics and lightning-fast load times. The console supports 4K gaming and features ray tracing technology for realistic visuals. The DualSense controller offers haptic feedback and adaptive triggers for immersive gameplay. With a vast library of exclusive titles, the PS5 is the ultimate gaming console for avid gamers.",
                'image'=> '12.jpeg',
                'price'=> '499.99',
                'quantity'=> 10,
                 'created_at' => '2023-05-11 17:59:09',
                    'updated_at' => '2023-05-11 17:59:41'
            ]

        ]);
    }
}
