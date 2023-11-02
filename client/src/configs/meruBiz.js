import { FaBeer } from 'react-icons/fa';
import employeeCommute from '../assets/meru-biz/Employee-Commute.jpg'
import airoplaneImg from '../assets/meru-biz/airoplane-miru-biz.jpg'
import rentalCarImg from '../assets/meru-biz/rental-car.jpeg'

import savingPng from '../assets/meru-biz/MerubizPreferred/salary.png'
import secretPng from '../assets/meru-biz/MerubizPreferred/secret.png'
import controlPng from '../assets/meru-biz/MerubizPreferred/qa.png'
import financilPng from '../assets/meru-biz/MerubizPreferred/inspection.png'
import transportEvent from '../assets/meru-biz/MerubizPreferred/roadshow.png'
import securityPng from '../assets/meru-biz/MerubizPreferred/insurance.png'
import skillePng from '../assets/meru-biz/MerubizPreferred/skills.png'
import optimizeSaving from '../assets/meru-biz/MerubizPreferred/optimization.png'






import priority from '../assets/meru-biz/MerbizAdvantage/priority.png'
import cabAssured from '../assets/meru-biz/MerbizAdvantage/taxi.png'
import driver from '../assets/meru-biz/MerbizAdvantage/driver.png'
import protedtion from '../assets/meru-biz/MerbizAdvantage/protection.png'
import bestPrice from '../assets/meru-biz/MerbizAdvantage/best-price.png'
import fixedRate from '../assets/meru-biz/MerbizAdvantage/fixed-interest-rate.png'
import  texGst    from '../assets/meru-biz/MerbizAdvantage/tax.png'



const meruBizAdvantages=[
{
    icon:priority,
    title:'Cab Allocation on Priority'
},
{
    icon:driver,
    title:'Chauffeur. Verification.'
},
{
    icon:protedtion,
    title:'Safety. Features.'
},
{
    icon:cabAssured,
    title:'Assured Cab. Availability'
},
{
    icon:bestPrice,
    title:'Preferential. Pricing.'
},{
    icon:fixedRate,
    title:'Fixed. Rate'
},{
    icon:texGst,
    title:'GST. Billing'
},

]

const meruComprehensiveBusiness=[
    {
        title:'Employee Commute',
        description:`your gateway to a wide-ranging array of tailored, expertly designed, and client-focused offerings that address
         the multifaceted needs of corporate travel. With our meticulously crafted suite of services, we provide a holistic approach 
         to streamline, enhance, and manage every aspect of your business travel requirements, ensuring cost-efficiency and employee
          well-being are at the forefront of our commitment to your success..`,
        imagePath:employeeCommute
    },
    {
        title:'Airport Transfers',
        description:`Discover the ultimate in reliability with our airport pickup and drop-off
         services. Our experienced chauffeurs, real-time flight tracking, and well-maintained 
         vehicles guarantee punctuality and peace of mind. We prioritize your comfort, safety, and convenience,
          ensuring that your airport transfers are a seamless and stress-free part of your travel experience. 
          Choose us for dependable, hassle-free transportation to and from the airport.`,
        imagePath:airoplaneImg
    },
    {
        title:'Car Rentals',
        description:`Secure a premium fleet of chauffeured cars for rent, at your beck and call, 
        regardless of your location. Our flexible and comprehensive car rental service is here to meet your diverse travel needs, 
        be it for business or leisure. With a well-maintained range of vehicles, we aim to ensure your journey is not just
         comfortable and reliable but also stress-free, giving you peace of mind.`,
        imagePath:rentalCarImg
    },
    {
        title:'Customized Business Travel',
        description:`Welcome to our world of Travel Concierges. We go beyond ordinary travel services by offering 
        a comprehensive suite of transportation solutions. From coordinating coach bookings for group travel to 
        facilitating smooth and efficient nodal transfers, ensuring your journey is seamless and hassle-free is our top priority. 
        Additionally, we embrace modernity with electric ride options, ensuring that your transportation experience aligns with 
        environmental sustainability.`,
        imagePath:employeeCommute
    }

]

const merBizWhy = [
 {
    title:'Optimize your savings.',
    pngIcon:savingPng,
    description:[
        `Billing point-to-point`
        , 'Special pricing'
         ,'GST-compliant invoicing.',
         'Single dashboard for all expenses.'
    ]
 },
 {
    title:'Absolutely peerless convenience',
    pngIcon:secretPng,
    description:[
        `Booking made easy: three steps.`
        ,'Guaranteed taxi availability'
         ,'Driver denials eliminated',
         'Payment through company billing'
    ]
 },
 {
    title:'Complete financial transparency',
    pngIcon:financilPng,
    description:[
        `incitant receipts`
        , 'Dynamic real-time reporting.'
         ,'Each ride is traceable.',
         'No Surprises,fixed rate'
    ]
 }, {
    title:'Transportation for all events.',
    pngIcon:transportEvent,
    description:[
        `Typical sedans and hatchbacks.`
        , 'Premium sedans'
         ,'Elegant automobiles and SUVs.',
         'Vans (TT) and buses'
    ]
 }
 , {
    title:'Guaranteed security.',
    pngIcon:securityPng,
    description:[
        `Strict driver screening process`
        , 'ICE alert and trip status sharing '
         ,'Real-time GPS tracking',
         'In-vehicle camera.'
    ]
 },
 {
    title:'Achieve full control',
    pngIcon:controlPng,
    description:[
        `User-friendly dashboard.`
        , 'Monitor and control rides remotely.'
         ,'Establish policies and instructions.',
         'Fully technology-driven.'
    ]
 },
 {
    title:'Continuous support',
    pngIcon:skillePng,
    description:[
        `Dedicated round-the-clock support.`
        , 'Tailorable and versatile services.'
         ,'Expert and courteous support.',
         'Regular maintenance and feedback..'
    ]
 },
 {
    title:'Optimize your savings.',
    pngIcon:savingPng,
    description:[
        `Billing point-to-point`
        , 'Special pricing'
         ,'GST-compliant invoicing.',
         'Single dashboard for all expenses.'
    ]
 },
 {
    title:'Achieve full control',
    pngIcon:controlPng,
    description:[
        `User-friendly dashboard.`
        , 'Monitor and control rides remotely.'
         ,'Establish policies and instructions.',
         'Fully technology-driven.'
    ]
 },
]


const meruBizVersus = [
    {name:'Allocating cabs based on priority', meruBuz:'Yes',appBased:'No',traditional:'Not All'},
    {name:'Guaranteed cab availability', meruBuz:'Yes',appBased:'Not Always',traditional:'No'},
    {name:'Special pricing', meruBuz:'Yes',appBased:'No',traditional:'Yes'},
    {name:'Fixed Rates', meruBuz:'Yes',appBased:'No',traditional:'No'},
    {name:'GST-compliant billing', meruBuz:'Yes',appBased:'Yes',traditional:'Not All'},
    {name:'Adherence to regulatory requirements', meruBuz:'Yes',appBased:'Not All',traditional:'Not All'},
    {name:'Driver background checks.', meruBuz:'Yes',appBased:'Not Always',traditional:'Yes'},
    {name:'Safety enhancements',meruBuz:'Yes',appBased:'Yes',traditional:'Not Always'},
    {name:'Around-the-clock helpline.',meruBuz:'Yes',appBased:'Not All	',traditional:'No'},
]




export {meruBizAdvantages,meruComprehensiveBusiness,merBizWhy,meruBizVersus}