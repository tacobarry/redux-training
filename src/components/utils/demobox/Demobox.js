import React from 'react';
import { connect } from 'react-redux'

const DemoBox = props => {

  return (
    <div>
      Meu tema é: <strong><i>{props.theme.name}</i></strong>
    </div>
  );
}

const mapStateToProps = state => ({ theme: state.theme.theme })

export default connect(mapStateToProps)(DemoBox)
