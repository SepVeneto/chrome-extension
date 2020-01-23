import { connect } from 'react-redux';
import { setVisibilityFilter } from '../../action';
import Link from '../components/Link';
import { Store, Action } from '../../type';

interface FooterProps {
  filter: string,
}

const mapStateToProps = (state: Store, ownProps: FooterProps) => {
  return {
    active: ownProps.filter === state.visibilityFilter,
  }
}

const mapDispatchToProps = (dispatch: any, ownProps: FooterProps) => {
  return {
    onClick: () => {
      dispatch(setVisibilityFilter(ownProps.filter));
    }
  }
};

const FilterLink = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Link);

export default FilterLink;