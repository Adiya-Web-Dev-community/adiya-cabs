import {BsBuildings} from 'react-icons/bs'
import {TbBeach} from 'react-icons/tb'
import {LiaMapMarkedAltSolid,LiaHomeSolid,LiaCitySolid} from 'react-icons/lia'
import {FaRoute} from 'react-icons/fa'
import {MdEmojiTransportation,MdOutlineLocalOffer} from 'react-icons/md'
import {GiCastle,GiModernCity,GiPathDistance,GiIndianPalace}from 'react-icons/gi'
import {PiHandshakeDuotone} from 'react-icons/pi'
import {FcSupport} from 'react-icons/fc'
import {CgProfile,CgSearchFound} from 'react-icons/cg'

//1 Please ensure that the 'icons' property holds type functions. 
//2 Avoid adding duplicate paths anywhere in the code.
//4 Path working here as collection id as well  
//3 Organize the navigation data in a structured manner."

//!importent
//This data structure is designed to work effectively up to three levels deep in the navbar,
// as the user interface may not look ideal beyond this depth. However, there are no restrictions 
//on how deep you can go in the sidebar.



const navigationData = [
    {path:'/',name:'Home',icon:LiaHomeSolid,type:'both'},
    {path:'/outstation',name:'Papular Outstation Routes',icon:FaRoute,type:'both',items:[
        {path:'/oustation-mumbai',name:'Mumbai',icon:LiaMapMarkedAltSolid,items:[
            {path:'/oustation-mumbai/mumbai-to-goa',name:'Mumbai To Goa',icon:TbBeach},
            {path:'/oustation-mumbai/mumbai-to-pune',name:'Mumbai To Pune',icon:BsBuildings},
            {path:'/oustation-mumbai/mumbai-to-nashik',name:'Mumbai To Nashik',icon:GiModernCity},
            {path:'/oustation-mumbai/mumbai-to-lonavala',name:'Mumbai To Lonavala',icon:BsBuildings},
            {path:'/oustation-mumbai/mumbai-to-mahabaleshwar',name:'Mumbai To Mahabaleshwar',icon:BsBuildings},
            {path:'/oustation-mumbai/mumbai-to-shirdi',name:'Mumbai To Shirdi Route',icon:GiModernCity},
            {path:'/oustation-mumbai/mumbai-to-nashik',name:'Mumbai To Surat Route',icon:BsBuildings},
            {path:'/oustation-mumbai/mumbai-to-nashik',name:'Mumbai To Surat Route',icon:BsBuildings},
        ]}, 
        {path:'/oustation-Pune',name:'Pune',icon:LiaMapMarkedAltSolid,type:'both',items:[
            {path:'/outstation/pune-to-kolhapur',name:'Pune to Kolhapur',icon:GiCastle},
            {path:'/outstation/pune-to-mumbai',name:'Pune to Mumbai',icon:GiModernCity},
            {path:'/outstation/pune-to-nashik',name:'Pune To Nashik',icon:LiaCitySolid},
            {path:'/outstation/pune-to-mahabaleshwar',name:'Pune To Mahabaleshwar',icon:GiCastle},
            {path:'/outstation/pune-to-shirdi',name:'Pune To Shirdi',icon:LiaCitySolid},

        ]}, 
        {path:'/oustation-Bangalore',name:'Bangalore',icon:LiaMapMarkedAltSolid,items:[
            {path:'/outstation/bangalore-to-chennai',name:'Bangalore to Kolhapur',icon:GiCastle},
            {path:'/outstation/bangalore-to-coorg',name:'Bangalore to Mumbai',icon:GiModernCity},
            {path:'/outstation/bangalore-to-kodaikanal',name:'Bangalore To Nashik',icon:LiaCitySolid},
            {path:'/outstation/bangalore-to-mysore',name:'Bangalore To Mysore',icon:GiModernCity},
            {path:'/outstation/bangalore-to-ooty',name:'bangalore To Ooty',icon:LiaCitySolid},
            {path:'/outstation/bangalore-to-tirupati',name:'Bangalore To Tirupati',icon:LiaCitySolid},
            {path:'/outstation/bangalore-to-shravanabelagola',name:'Bangalore To Shravanabelagola',icon:LiaCitySolid},

        ]}, 
        {path:'/oustation-chennai',name:'Chennai',icon:LiaMapMarkedAltSolid,items:[
            {path:'/outstation/chennai-to-pondicherry',name:'Chennai To Pondicherry',icon:GiCastle},
            {path:'/outstation/chennai-to-tirupati',name:'Chennai To Tirupati',icon:GiModernCity},
            {path:'/outstation/chennai-to-vellore',name:'Chennai To Vellore',icon:LiaCitySolid},
            {path:'/outstation/chennai-to-bangalore',name:'Chennai To Bangalore',icon:GiModernCity},
        ]}, 
        
        {path:'/oustation-delhi',name:'Delhi',icon:LiaMapMarkedAltSolid,items:[
            {path:'/outstation/delhi-to-manali',name:'Delhi To Manali',icon:GiModernCity},
            {path:'/outstation/delhi-to-haridwar',name:'Delhi To Haridwar',icon:LiaCitySolid},
            {path:'/outstation/delhi-to-jaipur',name:'Delhi To Jaipur',icon:GiModernCity},
            {path:'/outstation/delhi-to-ludhiana',name:'Delhi To Ludhiana',icon:LiaCitySolid},
            {path:'/outstation/delhi-to-nainital',name:'Delhi To Nainital',icon:GiModernCity},
            {path:'/outstation/delhi-to-rishikesh',name:'Delhi To Rishikesh',icon:LiaCitySolid},
            {path:'/outstation/delhi-to-shimla',name:'Delhi to Shimla',icon:GiModernCity},
            {path:'/outstation/delhi-to-bareilly',name:'Delhi To Bareilly',icon:LiaCitySolid},
        ]}, 
        {path:'/oustation-jaipur',name:'Jaipur',icon:LiaMapMarkedAltSolid,items:[
            {path:'/outstation/jaipur-to-udaipur',name:'Jaipur to udaipur',icon:GiCastle},
            {path:'/outstation/jaipur-to-agra',name:'Jaipur To Agra',icon:GiIndianPalace},
            {path:'/outstation/jaipur-to-ajmer',name:'Jaipur To Ajmer ',icon:LiaCitySolid},
        ]}, 
        {path:'/oustation-Ahmedabad',name:'Ahmedabad',icon:LiaMapMarkedAltSolid,items:[
            {path:'/outstation/ahmedabad-to-surat',name:'Ahmedabad To Surat',icon:GiCastle},
            {path:'/outstation/ahmedabad-to-rajkot',name:'Ahmedabad To Rajkot',icon:GiIndianPalace},
            {path:'/outstation/ahmedabad-to-vadodara',name:'Ahmedabad To Vadodara ',icon:LiaCitySolid},
        ]}, 
        {path:'/oustation-Chandigarh',name:'Chandigarh',icon:LiaMapMarkedAltSolid,items:[
            {path:'/outstation/chandigarh-to-shimla',name:'Chandigarh To Shimla',icon:GiCastle},
            {path:'/outstation/chandigarh-to-manali',name:'Chandigarh To Manali',icon:GiIndianPalace},
            {path:'/outstation/chandigarh-to-dehradun',name:'Chandigarh To Dehradun',icon:LiaCitySolid},
        ]}, 
    ]},
    {path:'/meru-biz',name:'Meru Biz',icon:MdEmojiTransportation,type:'both'},
    {path:'/about-us',name:'About Meru',icon:MdOutlineLocalOffer,type:'both',items:[
        {path:'/about-us/our-journey',name:'About our Journey',icon:GiCastle},
        {path:'/about-us/mahindra-logistics',name:'Mahindra Logistics',icon:GiModernCity},
        {path:'/about-us/our-services',name:'Our Services',icon:LiaCitySolid},
        {path:'/about-us/our-investors',name:'Our Investors',icon:GiCastle},
        {path:'/media-centre/press-releases',name:'Media Centere',icon:LiaCitySolid},
        {path:'/media-centre/press-releases',name:'Media Centere',icon:LiaCitySolid},
    ]},
    {path:'knnfjvn',name:'Offers',icon:MdOutlineLocalOffer,type:'both'},
    {path:'/collobrate-with-us',name:'Partners With Us',icon:PiHandshakeDuotone,type:'both'},
    {path:'fg',name:'Support',icon:FcSupport,type:'left'},
    {path:'fd',name:'Ultimate Guide',icon:GiPathDistance,type:'left'},
    {path:'dfg',name:'Your Profile',icon:CgProfile,type:'left'},
    {path:'dff',name:'Lost And Found',icon:CgSearchFound,type:'left'}
]

const sidebarNavData =navigationData.filter((el)=>['left','both'].includes(el.type))
const navBarData =navigationData.filter((el)=>['top','both'].includes(el.type))



export {sidebarNavData,navBarData} 