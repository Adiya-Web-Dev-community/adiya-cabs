import Outstation from "../pages/Outstation";
import About from "../pages/About";
import MeruBizz from "../pages/MeruBizz";
import CollaboratewithUs from "../pages/CollaboratewithUs";
import {Login} from "../pages/Login";

const routes = [
{path:'/collobrate-with-us',name:'Collobrate with us',element:CollaboratewithUs},
{path:'/:outstation/:route',name:'Outstation',element:Outstation},
{path:'about/:query',name:'About Page',element:About},
{path:'/meru-biz',name:'Meru Page',element:MeruBizz},
{path:'/sign-in',name:'Sign in',element:Login},
]

export default routes