import React, {Component, Fragment} from 'react';
import NavTopSection from "../../component/common/navTopSection/NavTopSection";
import RoomDetails from "../../component/roomDetails/RoomDetails";
import Footer from "../../component/common/footer/Footer";

class RoomDetailsPage extends Component {
    constructor({match}) {
        super();
        this.state={
            room_id:match.params.room_id,
        }
    }


    componentDidMount() {
        window.scroll(0,0)
    }

    render() {
        return (
            <Fragment>
                <NavTopSection/>
                <RoomDetails room_id={this.state.room_id}/>
                <Footer/>
            </Fragment>
        );
    }
}

export default RoomDetailsPage;