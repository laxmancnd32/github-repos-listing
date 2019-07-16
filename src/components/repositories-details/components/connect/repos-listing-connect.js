import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { select } from '../../../dashboard/connect/dashboard-selectors';
import * as appActions from '../../../dashboard/connect/dashboard-actions';
import { withRouter } from 'react-router';
import ReposListingComponent from '../repos-listing-component';

const mapDispatchToProps = dispatch => {
    const actions = bindActionCreators(appActions, dispatch);

    return { actions };
}

export default withRouter(
    connect(
        select,
        mapDispatchToProps
    )(ReposListingComponent)
);
