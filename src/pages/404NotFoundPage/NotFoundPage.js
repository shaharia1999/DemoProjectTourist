import React, {Component, Fragment} from 'react';
import NotFound from "../../component/NotFound/NotFound";

class NotFoundPage extends Component {
    componentDidMount() {
        window.scroll(0,0)
    }
    render() {
        return (
            <Fragment>
                <NotFound/>
            </Fragment>
        );
    }
}

export default NotFoundPage;