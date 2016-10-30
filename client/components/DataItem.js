import React, {Component, PropTypes} from 'react'

class DataItem extends Component{
  constructor(props,context){
    super(props, context) //super harus dijalanin kalau extend class lain
    this.state = {
      id :this.props.data.id,
      name: this.props.data.name || '',
      phone: this.props.data.phone || '',
      update: false
    }
  }

  update(){
    this.setState({update:true})
    //console.log(this.state.update);
  }

  handleNameChange(e){
    this.setState({name: e.target.value})
  }
  handlePhoneChange(e){
    this.setState({phone: e.target.value})
  }
  updated(e){

    e.preventDefault()
    var id = this.state.id
    var name = this.state.name
    var phone = this.state.phone
    this.props.updateData(id,name,phone)
    this.setState({update:false})
  }
  render(){
    const {data, deleteData} = this.props
    const listStyle = {
      'color' : '#ffffff',
      'backgroundColor' : '#000000'
    }
    if(this.state.update){
      return(
        <form>
          <tr>
            <th scope="row">1</th>
            <td><input type="text" className="form-control"value={this.state.name} onChange={this.handleNameChange.bind(this)} /></td>
          <td><input type="text" className="form-control" value={this.state.phone} onChange={this.handlePhoneChange.bind(this)} />
          </td>
          <td><input type="hidden" value={data.id} onChange={this.handlePhoneChange.bind(this)} /></td>
          <td><button type="submit" className="btn btn-primary" onClick={this.updated.bind(this)}>Save</button>
          </td>
          </tr>
       </form>
      )
    }
    else {
    }
    return(
      <tr> <th scope="row">1</th> <td>{data.name}</td> <td>{data.phone}</td> <td><button className="btn btn-danger" type="button" onClick={()=>deleteData(data.id)}>delete</button>
      <button className="btn btn-success" onClick={this.update.bind(this)}>Update</button></td> </tr>



    )
  }
}


DataItem.propTypes = {
  data: PropTypes.object.isRequired,
  deleteData: PropTypes.func.isRequired
}

export default DataItem
