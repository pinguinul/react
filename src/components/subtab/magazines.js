/**
 * Created by Andra on 09-Jan-17.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getMagazinesList } from '../../actions/';

class Magazines extends Component {
    componentDidMount() {
        // get magazines list
        this.props.dispatchGetMagazinesList();
    }

    render() {
        if (this.props.areLoading) {
            return (
                <p>Loading...</p>
            );
        }

        let list = [];

        if (this.props.list) {
            list = this.props.list.map((option, index) =>
                <li key={index} className="option">
                    {option.src}
                </li>
            );
        }

        return (
            <div>
                <ul>
                    {list}
                </ul>
            </div>
        );
    }
}

Magazines.defaultProps = {
    list: [],
};

export default connect(
    // mapStateToProps
    (state) => {
        console.log('state', state);
        return {
            list: state.magazines.magazinesList,
            areLoading: state.magazines.areLoading,
        };
    },
        // mapPropsToDispatch
    (dispatch) => ({
        dispatchGetMagazinesList: () => {
            dispatch(getMagazinesList());
        },
    })
)(Magazines);
