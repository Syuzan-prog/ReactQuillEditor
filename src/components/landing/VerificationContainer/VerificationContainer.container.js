import { connect } from 'react-redux';

import { fetchMeta } from 'state/modules/verification';
import { getVerificationStep } from 'state/selectors/verification.selectors';

import VerificationContainer from './VerificationContainer';

const mapStateToProps = (state) => ({
    step: getVerificationStep(state),
});

const mapDispatchToProps = {
    fetchMeta,
};

export default connect(mapStateToProps, mapDispatchToProps)(VerificationContainer);
