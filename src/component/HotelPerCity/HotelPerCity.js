import React, {Component, Fragment} from 'react';
import {Link} from "react-router-dom";
import {IoMdPin} from "react-icons/all";
import {FaStar} from "react-icons/fa";
import hotel1 from "../../asset/images/Hotel/HotelSarina.jpg";
import hotel2 from "../../asset/images/Hotel/TheRaintreeHotel.jpg";
import hotel3 from "../../asset/images/Hotel/LeMéridienDhaka.jpg";
import hotel4 from "../../asset/images/Hotel/SixSeasonsHotel.jpg";
import hotel5 from "../../asset/images/Hotel/PanPacificSonargaonDhaka.jpg";
import hotel6 from "../../asset/images/Hotel/TheMermaidBeachResort.jpg";
import hotel7 from "../../asset/images/Hotel/InterContinentalDhaka.jpg";

class HotelPerCity extends Component {
    render() {
        return (
            <Fragment>
                <div className="container-fluid p-5">
                    <h5 className="section-title text-center mb-3">Dhaka City Hotel</h5>
                     <div className="row">

                        <div className="col-lg-2 col-md-3 col-sm-4 col-6 p-3">
                            <Link to="/hotelDetails" className="TwentyFourHoursCard card TwentyFourHoursAnimation">
                                <img className="mostPopularHotelImage" src={hotel1} alt="Photo of sunset"/>
                                <div className="mostPopularHotelBoxCard">
                                    <h6 className="mostPopularHotelTitle"><IoMdPin className="TwentyFourHoursLocationIcon"/> Dhaka, Bangladesh</h6>
                                </div>
                                <h5 className="room-title">DELUXE KING SPECIAL</h5>
                                <h6 className="roomStar"><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></h6>
                            </Link>
                        </div>

                         <div className="col-lg-2 col-md-3 col-sm-4 col-6 p-3">
                             <Link to="/hotelDetails" className="TwentyFourHoursCard card TwentyFourHoursAnimation">
                                 <img className="mostPopularHotelImage" src={hotel2} alt="Photo of sunset"/>
                                 <div className="mostPopularHotelBoxCard">
                                     <h6 className="mostPopularHotelTitle"><IoMdPin className="TwentyFourHoursLocationIcon"/> Dhaka, Bangladesh</h6>
                                 </div>
                                 <h5 className="room-title">DELUXE KING SPECIAL</h5>
                                 <h6 className="roomStar"><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></h6>
                             </Link>
                         </div>

                         <div className="col-lg-2 col-md-3 col-sm-4 col-6 p-3">
                             <Link to="/hotelDetails" className="TwentyFourHoursCard card TwentyFourHoursAnimation">
                                 <img className="mostPopularHotelImage" src={hotel3} alt="Photo of sunset"/>
                                 <div className="mostPopularHotelBoxCard">
                                     <h6 className="mostPopularHotelTitle"><IoMdPin className="TwentyFourHoursLocationIcon"/> Dhaka, Bangladesh</h6>
                                 </div>
                                 <h5 className="room-title">DELUXE KING SPECIAL</h5>
                                 <h6 className="roomStar"><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></h6>
                             </Link>
                         </div>

                         <div className="col-lg-2 col-md-3 col-sm-4 col-6 p-3">
                             <Link to="/hotelDetails" className="TwentyFourHoursCard card TwentyFourHoursAnimation">
                                 <img className="mostPopularHotelImage" src={hotel4} alt="Photo of sunset"/>
                                 <div className="mostPopularHotelBoxCard">
                                     <h6 className="mostPopularHotelTitle"><IoMdPin className="TwentyFourHoursLocationIcon"/> Dhaka, Bangladesh</h6>
                                 </div>
                                 <h5 className="room-title">DELUXE KING SPECIAL</h5>
                                 <h6 className="roomStar"><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></h6>
                             </Link>
                         </div>

                         <div className="col-lg-2 col-md-3 col-sm-4 col-6 p-3">
                             <Link to="/hotelDetails" className="TwentyFourHoursCard card TwentyFourHoursAnimation">
                                 <img className="mostPopularHotelImage" src={hotel5} alt="Photo of sunset"/>
                                 <div className="mostPopularHotelBoxCard">
                                     <h6 className="mostPopularHotelTitle"><IoMdPin className="TwentyFourHoursLocationIcon"/> Dhaka, Bangladesh</h6>
                                 </div>
                                 <h5 className="room-title">DELUXE KING SPECIAL</h5>
                                 <h6 className="roomStar"><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></h6>
                             </Link>
                         </div>

                         <div className="col-lg-2 col-md-3 col-sm-4 col-6 p-3">
                             <Link to="/hotelDetails" className="TwentyFourHoursCard card TwentyFourHoursAnimation">
                                 <img className="mostPopularHotelImage" src={hotel6} alt="Photo of sunset"/>
                                 <div className="mostPopularHotelBoxCard">
                                     <h6 className="mostPopularHotelTitle"><IoMdPin className="TwentyFourHoursLocationIcon"/> Dhaka, Bangladesh</h6>
                                 </div>
                                 <h5 className="room-title">DELUXE KING SPECIAL</h5>
                                 <h6 className="roomStar"><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></h6>
                             </Link>
                         </div>

                         <div className="col-lg-2 col-md-3 col-sm-4 col-6 p-3">
                             <Link to="/hotelDetails" className="TwentyFourHoursCard card TwentyFourHoursAnimation">
                                 <img className="mostPopularHotelImage" src={hotel7} alt="Photo of sunset"/>
                                 <div className="mostPopularHotelBoxCard">
                                     <h6 className="mostPopularHotelTitle"><IoMdPin className="TwentyFourHoursLocationIcon"/> Dhaka, Bangladesh</h6>
                                 </div>
                                 <h5 className="room-title">DELUXE KING SPECIAL</h5>
                                 <h6 className="roomStar"><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></h6>
                             </Link>
                         </div>


                         <div className="col-lg-2 col-md-3 col-sm-4 col-6 p-3">
                             <Link to="/hotelDetails" className="TwentyFourHoursCard card TwentyFourHoursAnimation">
                                 <img className="mostPopularHotelImage" src={hotel4} alt="Photo of sunset"/>
                                 <div className="mostPopularHotelBoxCard">
                                     <h6 className="mostPopularHotelTitle"><IoMdPin className="TwentyFourHoursLocationIcon"/> Dhaka, Bangladesh</h6>
                                 </div>
                                 <h5 className="room-title">DELUXE KING SPECIAL</h5>
                                 <h6 className="roomStar"><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></h6>
                             </Link>
                         </div>

                         <div className="col-lg-2 col-md-3 col-sm-4 col-6 p-3">
                             <Link to="/hotelDetails" className="TwentyFourHoursCard card TwentyFourHoursAnimation">
                                 <img className="mostPopularHotelImage" src={hotel2} alt="Photo of sunset"/>
                                 <div className="mostPopularHotelBoxCard">
                                     <h6 className="mostPopularHotelTitle"><IoMdPin className="TwentyFourHoursLocationIcon"/> Dhaka, Bangladesh</h6>
                                 </div>
                                 <h5 className="room-title">DELUXE KING SPECIAL</h5>
                                 <h6 className="roomStar"><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></h6>
                             </Link>
                         </div>

                         <div className="col-lg-2 col-md-3 col-sm-4 col-6 p-3">
                             <Link to="/hotelDetails" className="TwentyFourHoursCard card TwentyFourHoursAnimation">
                                 <img className="mostPopularHotelImage" src={hotel6} alt="Photo of sunset"/>
                                 <div className="mostPopularHotelBoxCard">
                                     <h6 className="mostPopularHotelTitle"><IoMdPin className="TwentyFourHoursLocationIcon"/> Dhaka, Bangladesh</h6>
                                 </div>
                                 <h5 className="room-title">DELUXE KING SPECIAL</h5>
                                 <h6 className="roomStar"><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></h6>
                             </Link>
                         </div>

                         <div className="col-lg-2 col-md-3 col-sm-4 col-6 p-3">
                             <Link to="/hotelDetails" className="TwentyFourHoursCard card TwentyFourHoursAnimation">
                                 <img className="mostPopularHotelImage" src={hotel1} alt="Photo of sunset"/>
                                 <div className="mostPopularHotelBoxCard">
                                     <h6 className="mostPopularHotelTitle"><IoMdPin className="TwentyFourHoursLocationIcon"/> Dhaka, Bangladesh</h6>
                                 </div>
                                 <h5 className="room-title">DELUXE KING SPECIAL</h5>
                                 <h6 className="roomStar"><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></h6>
                             </Link>
                         </div>


                         <div className="col-lg-2 col-md-3 col-sm-4 col-6 p-3">
                             <Link to="/hotelDetails" className="TwentyFourHoursCard card TwentyFourHoursAnimation">
                                 <img className="mostPopularHotelImage" src={hotel2} alt="Photo of sunset"/>
                                 <div className="mostPopularHotelBoxCard">
                                     <h6 className="mostPopularHotelTitle"><IoMdPin className="TwentyFourHoursLocationIcon"/> Dhaka, Bangladesh</h6>
                                 </div>
                                 <h5 className="room-title">DELUXE KING SPECIAL</h5>
                                 <h6 className="roomStar"><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></h6>
                             </Link>
                         </div>


                         <div className="col-lg-2 col-md-3 col-sm-4 col-6 p-3">
                             <Link to="/hotelDetails" className="TwentyFourHoursCard card TwentyFourHoursAnimation">
                                 <img className="mostPopularHotelImage" src={hotel7} alt="Photo of sunset"/>
                                 <div className="mostPopularHotelBoxCard">
                                     <h6 className="mostPopularHotelTitle"><IoMdPin className="TwentyFourHoursLocationIcon"/> Dhaka, Bangladesh</h6>
                                 </div>
                                 <h5 className="room-title">DELUXE KING SPECIAL</h5>
                                 <h6 className="roomStar"><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></h6>
                             </Link>
                         </div>


                         <div className="col-lg-2 col-md-3 col-sm-4 col-6 p-3">
                             <Link to="/hotelDetails" className="TwentyFourHoursCard card TwentyFourHoursAnimation">
                                 <img className="mostPopularHotelImage" src={hotel5} alt="Photo of sunset"/>
                                 <div className="mostPopularHotelBoxCard">
                                     <h6 className="mostPopularHotelTitle"><IoMdPin className="TwentyFourHoursLocationIcon"/> Dhaka, Bangladesh</h6>
                                 </div>
                                 <h5 className="room-title">DELUXE KING SPECIAL</h5>
                                 <h6 className="roomStar"><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></h6>
                             </Link>
                         </div>


                         <div className="col-lg-2 col-md-3 col-sm-4 col-6 p-3">
                             <Link to="/hotelDetails" className="TwentyFourHoursCard card TwentyFourHoursAnimation">
                                 <img className="mostPopularHotelImage" src={hotel4} alt="Photo of sunset"/>
                                 <div className="mostPopularHotelBoxCard">
                                     <h6 className="mostPopularHotelTitle"><IoMdPin className="TwentyFourHoursLocationIcon"/> Dhaka, Bangladesh</h6>
                                 </div>
                                 <h5 className="room-title">DELUXE KING SPECIAL</h5>
                                 <h6 className="roomStar"><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></h6>
                             </Link>
                         </div>

                    </div>
                </div>
            </Fragment>
        );
    }
}

export default HotelPerCity;