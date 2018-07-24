import { connect } from "react-redux";

import StatItem from "components/StatItem";
import { getGameMovesCount } from "selectors";

function mapStateToProps(state) {
  return {
    stat: getGameMovesCount(state),
    label: "Pairs found"
  };
}

export default connect(mapStateToProps)(StatItem);
