import React from 'react'
//import {connect} from 'react-redux'
import { newHazard } from '../utils/apiclient'

class HazardForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            Hazard: '',
            Risk: '',
            Control: '',
            Daily: 'true'
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
        this.refreshForm = this.refreshForm.bind(this)
    }

    onSubmit(evt) {
        this.setState({ [evt.target.name]: evt.target.value })
    }

    handleSubmit(evt) {
        evt.preventDefault()
        newHazard(this.state, () => {
            this.props.history.push('/dashboard')
        })
        // console.log(this.state)
    }

    refreshForm() {
        this.setState({
        })
        this.render()
    }

    render() {
        return (
          <div>    
            <div className="block">
                <h1 className="title">Hazard Form</h1>
                <p className="content">
                    Please fill in this form to generate a new hazard that applies to todays work. <br />
                    All submitted hazards will be visible on the dashboard.
                </p>
            </div>
            <form onSubmit={this.handleSubmit}>
                <label className="label">Hazard:
                    <input className="input" type="text" name="Hazard" onChange={this.onSubmit}></input>
                </label>
                <br></br>
                <label className="label">Risk:
                    <input className="input" type="text" name="Risk" onChange={this.onSubmit}></input>
                </label>
                <br></br>
                <label className="label">Control:
                    <input className="input" type="text" name="Control" onChange={this.onSubmit}></input>
                </label>
                <br></br>
                <div className="control">
                    <button className="button is-info">Add Hazard to Dashboard</button>
                </div>
            </form>
          </div>  
        )
    }
}

export default HazardForm