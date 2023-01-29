import React from "react";

import "./Outlet.css"
import BarbequeImg from "../../Images/Outlet/barbeque.png"
import BurgerImg from "../../Images/Outlet/burger.png"
import FoodcourtImg from "../../Images/Outlet/foodcourt.png"
import HotelImg from "../../Images/Outlet/hotel.png"
import TableImg from "../../Images/Outlet/table.png"
import WineImg from "../../Images/Outlet/wine.png"


const outletItems = [{
    img :WineImg,
    title:"Fine dine"
},
{
    img:TableImg,
    title:"Cafe"
},
{
    img :BarbequeImg,
    title:"BBQ & Bar"
},
{
    img :BurgerImg,
    title:"QSR"
},
{
    img :FoodcourtImg,
    title:"Food Court"
},{
    img :HotelImg,
    title:"Large chains"
},]

const Outlet = ()=>{
    return(<>
        <h2 className="Home--titles">Outlet Types</h2>
        <div className="Outlet">
            {
                outletItems.map((item)=>{
                    return(<div className="Outlet__Card" key={item.title}>
                        <div>
                            <img src={item.img} alt={item.titile} />
                        </div>
                        <p>{item.title}</p>
                    </div>)
                })
            }
        </div></>
    )
}

export default Outlet;