import React, {Component, PropTypes} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import ListItem from '../components/ListItem'
import AppTextInput from '../components/AppTextInput'
import * as AppActions from '../actions'

class App extends Component{
  componentDidMount(){
    this.props.actions.loadPhoneBooks()
  }
  render(){
      const {data,actions} = this.props

      return(
        <div className="container">
          <h1>Hi, Anonymous</h1>
          <AppTextInput name="" phone="" onSave={actions.addPhoneBook} />
          <div className="panel panel-primary">
            <div className="panel-heading"> <h3 className="panel-title">Data </h3>
            </div>
            <div className="panel-body">
              <div className="bs-example" data-example-id="striped-table"> <table className="table table-striped"> <thead> <tr> <th>#</th> <th>Name</th> <th>Phone</th> <th>Menu</th> </tr> </thead>
                <ListItem data={data} actions={actions} />

                  </table>
              </div>

            </div>

          </div>

        </div>
      )
  }
}


App.propTypes = {
  data: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}

function mapStateToProps(state){
  return {data: state.data}
}

function mapDispatchToProps(dispath){
  return {
    actions:bindActionCreators(AppActions, dispath)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
