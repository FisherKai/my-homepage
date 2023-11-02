import type { MenuItem } from '../types/menu';

const menuList: Array<MenuItem> =[{
    name:'首页',
    path:'/',
    children:[],
    index: 0,
},{
    name:'视频监控',
    path:'/video',
    children:[],
    index: 0,
},{
    name:'关于我的',
    path:'/about',
    children:[],
    index: 1,
}];

export default menuList;