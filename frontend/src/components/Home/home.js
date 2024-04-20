import { Link } from "react-router-dom"
import { useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'
import './home.css'
import { useEffect, useState } from "react"
import axios from 'axios'
import RoomDetails from "../RoomDetails"
function Home(){


    const [rdata,setdata] = useState([])
    const navigate = useNavigate();

    const RentalDetails = [
        {
            id:1,
            Area:"L.B Nagar",
            City:"Hyderabad",
            Rooms:"3bhk",
            Des:"Family Apartments",
            Price:"20,000 rs",
            LandMark:"Near SBI Bank",
            Active:true
        },
        
        {
            id:13,
            Area:"Uppal",
            City:"Hyderabad",
            Rooms:"1bhk",
            Des:"Family Apartments",
            Price:"6,000 rs",
            LandMark:"Near Metro",
            Active:true
        },
        {
            id:3,
            Area:"Ammerpet",
            City:"Hyderabad",
            Rooms:"3bhk",
            Des:"Family Apartments",
            Price:"20,000 rs",
            LandMark:"Road No 2",
            Active:true
        },{
            id:4,
            Area:"Panjagutta",
            City:"Hyderabad",
            Rooms:"2bhk",
            Des:"Family Apartments",
            Price:"14,000 rs",
            LandMark:"Near Hospital",
            Active:true
        },{
            id:5,
            Area:"Ameerpet",
            City:"Hyderabad",
            Rooms:"1bhk",
            Des:"Family Apartments",
            Price:"7,000 rs",
            LandMark:"Near Church",
            Active:true
        },{
            id:6,
            Area:"JNTU",
            City:"Hyderabad",
            Rooms:"2bhk",
            Des:"Family Apartments",
            Price:"15,000 rs",
            LandMark:"Near Metro Station"
        },{
            id:7,
            Area:"Hitech City",
            City:"Hyderabad",
            Rooms:"3bhk",
            Des:"Family Apartments",
            Price:"20,000 rs",
            LandMark:"Near DMart"
        },{
            id:8,
            Area:"Dilsuknagar",
            City:"Hyderabad",
            Rooms:"2bhk",
            Des:"Family Apartments",
            Price:"10,000 rs",
            LandMark:"Near Sai Baba Temple"
        },{
            id:9,
            Area:"Secunderabad",
            City:"Hyderabad",
            Rooms:"2bhk",
            Des:"Family Apartments",
            Price:"12,000 rs",
            LandMark:"Near West Metro"
        },
        {
            id:10,
            Area:"L.B Nagar",
            City:"Hyderabad",
            Rooms:"2bhk",
            Des:"Family Apartments",
            Price:"15,000 rs",
            LandMark:"Near Metro",
            Active:true
        },
        
        {
            id:2,
            Area:"Uppal",
            City:"Hyderabad",
            Rooms:"3bhk",
            Des:"Family Apartments",
            Price:"15,000 rs",
            LandMark:"Near Metro",
            Active:true
        }
    ]

    /*useEffect(()=>{
        const fetchData = async() => {
            const url = 'https://zillow-com4.p.rapidapi.com/properties/search?location=Houston%2C%20TX';
            const options = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': '61cc94a0e5mshb8eb4a6eb4eacfcp101b9ejsn0441dd88ca39',
                    'X-RapidAPI-Host': 'zillow-com4.p.rapidapi.com'
                }
            };

            try {
                const response = await fetch(url, options);
                const result = await response.json();
                console.log(result.data);
                setdata(result.data)
            } catch (error) {
                console.error(error);
            }
        }
        fetchData()
    },[])*/
    
    function onClickLogout(){
        Cookies.remove("jwt")
        navigate('/login',{replace:true})
    }

    

    return(
        <div>
            <h2 className="p-3 bg-light w-50 sheading m-auto mt-3">Room Rentals</h2>
            <button className="btn btn-primary logout d-none d-md-block" onClick={onClickLogout}>Logout</button>
            <button className="btn btn-primary logout2 mt-3 d-md-none" onClick={onClickLogout}>Logout</button>
            <div className="d-flex flex-row allcards">
                {RentalDetails.map(Details =>(
                    
                    <Link to={`${Details.id}`}  key={Details.ID} className="shadow card m-3 p-3">
                        <h3>{Details.City}</h3>
                        <h3>{Details.Area}</h3>
                        <h3>{Details.Rooms}</h3>
                        <h3>{Details.Des}</h3>
                        <h3>{Details.Price}</h3>
                        <h3>{Details.LandMark}</h3>
                        
                        <button className="btn btn-success w-50 m-auto" >See More Details</button>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Home