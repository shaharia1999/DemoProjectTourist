import React, {Component,Fragment} from 'react';
import NavTopSection from "../../component/common/navTopSection/NavTopSection";
import HomeSearchMain from "../../component/HomeSearchMain/HomeSearchMain";
import SearchPagePlaceholder from "../../component/placeholder/SearchPagePlaceholder";
import Footer from "../../component/common/footer/Footer";
import ApiUrl from "../../api/ApiURL";
import axios from "axios";

class HomeSearchPage extends Component {
    constructor({match}) {
        super();
        this.state={
            SearchKey:match.params.SearchKey,
            HotelDataData:[],
            HomeSearchHotelFacilities:[],
            isLoading:"",
            MainDiv:"d-none"
        }
    }

    componentDidMount() {
        window.scroll(0,0)
        axios.get(ApiUrl.HomeSearchHotelResult+ this.state.SearchKey).then(response=> {
            this.setState({
                HotelDataData:response.data.data,
                HomeSearchHotelFacilities:response.data.data.hotel_facilities,
                isLoading:"d-none",MainDiv:" "
            })
        }).catch(error=> {

        });
    }

    render() {
        return (
            <Fragment>
                <NavTopSection/>

                    <SearchPagePlaceholder isLoading={this.state.isLoading}/>
                    <div className={this.state.MainDiv}>
                        <HomeSearchMain SearchKey={this.state.SearchKey}  HotelDataData={this.state.HotelDataData} HomeSearchHotelFacilities={this.state.HomeSearchHotelFacilities}/>
                    </div>

                <Footer/>
            </Fragment>
        );
    }
}

export default HomeSearchPage;