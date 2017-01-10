/**
 * Created by Andra on 09-Jan-17.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';

class Magazines extends Component {
    componentDidMount() {
        // get magazines list
        this.props.dispatchGetMagazinesList();
    }

    render() {
        return (
            <div>Test</div>
        );
    }
}

Magazines.defaultProps = {
    list: [],
};

export default connect(
    // mapStateToProps
    () => {

    },
        // mapPropsToDispatch
    (dispatch) => ({
        dispatchGetMagazinesList: (id) => {
            dispatch(getMagazinesList(id));
        },
    })
)(Magazines);
