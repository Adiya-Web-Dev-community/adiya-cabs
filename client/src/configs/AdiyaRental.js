import carTataImgUrl from '../assets/rentals/Offers/pexels-mike-bird.jpg'
import carHondaImgUrl from '../assets/rentals/Offers/pexels-zachary-vessels-6794815.jpg'
import tajMhalImg from '../assets/rentals/Offers/tajMhal.jpg'
// pexels-zachary-vessels-6794815.jpg
const trendingOffers = {
    buttonName:['Daily Offers','Monthly Offers','Bank Offers'],
    ['Daily Offers']:[
            {
                title:'Taj Mhal',
                imgUrl:tajMhalImg,
                content:
                `Taj Mahal bound: Enjoy a 20% discount on your cab ride. 
                Book now for a discounted journey to this iconic destination!`
            },
            {
                title:'Taj Mhal',
                imgUrl:tajMhalImg,
                content:
                `Taj Mahal bound: Enjoy a 20% discount on your cab ride. 
                Book now for a discounted journey to this iconic destination!`
            },
            {
                title:'Taj Mhal',
                imgUrl:tajMhalImg,
                content:
                `Taj Mahal bound: Enjoy a 20% discount on your cab ride. 
                Book now for a discounted journey to this iconic destination!`
            }
    ],
    ['Monthly Offers']:[
        {
            title:'Taj Mhal',
            imgUrl:tajMhalImg,
            content:
            `Taj Mahal bound: Enjoy a 20% discount on your cab ride. 
            Book now for a discounted journey to this iconic destination!`
        },
        {
            title:'Taj Mhal',
            imgUrl:tajMhalImg,
            content:
            `Taj Mahal bound: Enjoy a 20% discount on your cab ride. 
            Book now for a discounted journey to this iconic destination!`
        },
        {
            title:'Taj Mhal',
            imgUrl:tajMhalImg,
            content:
            `Taj Mahal bound: Enjoy a 20% discount on your cab ride. 
            Book now for a discounted journey to this iconic destination!`
        }
    ],
    ['Bank Offers']:[
        {
            title:'Taj Mhal',
            imgUrl:tajMhalImg,
            content:
            `Taj Mahal bound: Enjoy a 20% discount on your cab ride. 
            Book now for a discounted journey to this iconic destination!`
        },
        {
            title:'Taj Mhal',
            imgUrl:tajMhalImg,
            content:
            `Taj Mahal bound: Enjoy a 20% discount on your cab ride. 
            Book now for a discounted journey to this iconic destination!`
        },
        {
            title:'Taj Mhal',
            imgUrl:tajMhalImg,
            content:
            `Taj Mahal bound: Enjoy a 20% discount on your cab ride. 
            Book now for a discounted journey to this iconic destination!`
        }
    ]
}

const featAndBanifict = [
'24/7 Accessibility',
'Drive with limitless kilometers',
'Over 200 locations spanning 20 cities',
'Flexible delivery to your location.',
'privacy and absolute freedom guarante',
'Transparent Pricing and Discounts',
'Airport Services',
'Safety and Reliability'
]


const experience = [
    {
    title:'Flexible Payment Choices',
    content:`No obstacles between you and your dream car. Opt for convenience with credit cards,
     debit cards, net banking, or UPI.`
    },
    {
    title:'Effortless Reservation Changes',
    content:`Plans changed? No worries with Adiya cab. Cancel your car reservation with ease in just a few clicks.`
    },
    {
    title:'Lowest Price Commitment',
    content:`Experience the best rates guaranteed on self-drive car rentals and subscriptions across India with our commitment to unbeatable prices!"'
        `
    }
]

const rentalCarsDummy = [
    {
        title: 'Maruti',
        imgUrl:carTataImgUrl,
        brandName: 'Tata',
        content: {
            description: 'This is created by Maruti company and is considered one of the best.',
            features: ['Fuel-efficient', 'Compact design', 'Advanced safety features'],
            specifications: {
                engine: '1.5L V4',
                transmission: 'Automatic',
                seatingCapacity: 5,
            },
            rentalInfo: {
                dailyRate: '$50',
                weeklyRate: '$300',
                availability: 'Available for rent',
            },
        },
    },
    {
        title: 'Honda Civic',
        imgUrl:carHondaImgUrl,
        brandName: 'Honda',
        content: {
            description: 'A stylish and reliable option from the Honda lineup.',
            features: ['Sleek design', 'Sporty performance', 'Infotainment system'],
            specifications: {
                engine: '2.0L Inline-4',
                transmission: 'CVT',
                seatingCapacity: 5,
            },
            rentalInfo: {
                dailyRate: '$60',
                weeklyRate: '$350',
                availability: 'Available for rent',
            },
        },
    },
    {
        title: 'Ford Explorer',
        imgUrl:carTataImgUrl,
        brandName: 'Ford',
        content: {
            description: 'The Ford Explorer is a versatile and spacious SUV for family trips.',
            features: ['Third-row seating', 'Advanced safety tech', 'Off-road capability'],
            specifications: {
                engine: '3.5L V6',
                transmission: 'Automatic',
                seatingCapacity: 7,
            },
            rentalInfo: {
                dailyRate: '$70',
                weeklyRate: '$400',
                availability: 'Available for rent',
            },
        },
    },
    {
        title: 'Toyota Camry',
        imgUrl:carTataImgUrl,
        brandName: 'Toyota',
        content: {
            description: 'Known for its fuel efficiency and comfortable ride, the Camry is a popular choice.',
            features: ['Spacious interior', 'Advanced tech', 'Smooth ride'],
            specifications: {
                engine: '2.5L Inline-4',
                transmission: 'Automatic',
                seatingCapacity: 5,
            },
            rentalInfo: {
                dailyRate: '$55',
                weeklyRate: '$330',
                availability: 'Available for rent',
            },
        },
    },
    {
        title: 'Chevrolet Malibu',
        imgUrl:carTataImgUrl,
        brandName: 'Chevrolet',
        content: {
            description: 'The Malibu offers a smooth ride and modern features for a comfortable driving experience.',
            features: ['Elegant design', 'Fuel-efficient', 'Tech-savvy'],
            specifications: {
                engine: '1.5L Inline-4',
                transmission: 'Automatic',
                seatingCapacity: 5,
            },
            rentalInfo: {
                dailyRate: '$58',
                weeklyRate: '$340',
                availability: 'Available for rent',
            },
        },
    },
    // Add more entries with detailed content and rental information as needed
];

const cityAvailable = [ 
     { cityName:'Delhi',selfDrive:true,subscription:true},
     { cityName:'Bengaluru',selfDrive:true,subscription:true},
     { cityName:'Pune',selfDrive:true,subscription:true},
     { cityName:'Jaipur',selfDrive:true,subscription:true},
     { cityName:'Hyderabad',selfDrive:true,subscription:true},
     { cityName:'Ahemdabad',selfDrive:true,subscription:true},
     { cityName:'Amritsar',selfDrive:true,subscription:true},
     { cityName:'Chandigarh',selfDrive:true,subscription:true},
     { cityName:'Chennai',selfDrive:true,subscription:true},
     { cityName:'Haridwar',selfDrive:true,subscription:true},
     { cityName:'Indore',selfDrive:true,subscription:true},
     { cityName:'Jodhpur',selfDrive:true,subscription:true},
     { cityName:'Kolkata',selfDrive:true,subscription:true},
     { cityName:'Rishikesh',selfDrive:true,subscription:true},
     { cityName:'Udaipur',selfDrive:true,subscription:true},
     { cityName:'Lucknow',selfDrive:true,subscription:true},
     { cityName:'Dehradun',selfDrive:true,subscription:true},
]


const rentalVehicleFAQs = [
    {
      question: "How do I book a rental vehicle?",
      answer: "You can easily book a rental vehicle on our website or by visiting one of our rental locations. Online booking is available 24/7 for your convenience."
    },
    {
      question: "What types of vehicles do you offer for rent?",
      answer: "We offer a variety of vehicles, including sedans, SUVs, trucks, and vans. You can choose the type of vehicle that best suits your needs and preferences."
    },
    {
      question: "What documents do I need to rent a vehicle?",
      answer: "Typically, you'll need a valid driver's license, a major credit card, and proof of insurance. Specific requirements may vary, so it's advisable to check our rental policies for more details."
    },
    {
      question: "Is there an age requirement for renting a vehicle?",
      answer: "Yes, the minimum age for renting a vehicle is usually 21, but it may vary by location and vehicle type. Additional fees may apply for drivers under 25 years old."
    },
    {
      question: "Can I modify or cancel my reservation?",
      answer: "Yes, you can usually modify or cancel your reservation online. Keep in mind that there might be specific policies regarding changes and cancellations, so check the terms and conditions when making a reservation."
    },
    {
      question: "What is included in the rental rate?",
      answer: "The rental rate typically includes the cost of the vehicle and basic insurance coverage. Additional services like GPS, child seats, and extended insurance may be available for an extra fee. Check the rental agreement for a detailed breakdown."
    }
    // Add more questions and answers as needed
  ];

  const adiyaCabRentalBenefits = [
    {
      point: "Nationwide Availability",
      description: "Rent a car from Adiya Cab anywhere in India with our extensive network of convenient pickup and drop-off locations."
    },
    {
      point: "Diverse Fleet Selection",
      description: "Choose from a diverse range of well-maintained cars, including compact vehicles, sedans, SUVs, and more for your travel needs."
    },
    {
      point: "Effortless Online Booking Process",
      description: "Experience a seamless and user-friendly online booking process, allowing you to reserve your car quickly and efficiently from anywhere."
    },
    {
      point: "Transparent and Competitive Pricing Packages",
      description: "Enjoy transparent pricing with no hidden fees. Our competitive packages include fuel and insurance costs, providing clarity in your rental expenses."
    },
    {
      point: "24/7 Roadside Assistance Support",
      description: "Drive with peace of mind, knowing our 24/7 roadside assistance support is available to help you in case of any unexpected issues during your journey."
    },
    {
      point: "Flexible Rental Durations for Personalized Travel Plans",
      description: "Adiya Cab offers flexible rental durations, accommodating your unique travel plans, whether you need a car for a few hours, a day, a week, or more."
    },
    {
      point: "Quality Maintenance for Reliability and Passenger Safety",
      description: "Our rental cars undergo regular maintenance checks to ensure reliability and safety, prioritizing your comfort and peace of mind on the road."
    },
    // Add more points as needed
  ];
  
  

export {trendingOffers,featAndBanifict,experience,rentalCarsDummy,cityAvailable,rentalVehicleFAQs,adiyaCabRentalBenefits}