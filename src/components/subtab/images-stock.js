/**
 * Created by dodo on 11.01.2017.
 */
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { getStockImagesList } from '../../actions/';

class ImagesStock extends Component {
    componentDidMount() {
        // get stock images list
        this.props.dispatchGetStockImagesList();
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

ImagesStock.propTypes = {
    dispatchGetStockImagesList: PropTypes.func,
    areLoading: PropTypes.bool,
    list: PropTypes.array,
};

ImagesStock.defaultProps = {
    list: [],
    dispatchGetStockImagesList: () => {},
    areLoading: false,
};

export default connect(
    // mapStateToProps
    (state) => ({
        list: state.imagesStock.list,
        areLoading: state.imagesStock.areLoading,
    }),
    // mapPropsToDispatch
    (dispatch) => ({
        dispatchGetStockImagesList: () => {
            dispatch(getStockImagesList());
        },
    })
)(ImagesStock);
