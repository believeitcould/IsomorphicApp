import React, { Component } from 'react'
import './App.css'
export default class App extends Component {

	constructor(props) {
		super()
		this.state = {
			
		}
	}
	
	componentDidMount() {
		if (this.props.page == 0) {
            this.props.fetchData()
        }
	}

	_click() {
		this.props.showNext()
		console.log(this.props.current)

		// 提前10张爬取
        this.props.urls.length - this.props.current == 10 && this.props.fetchData()
	}

	render() {
		return (
			<div 
				style={styles.container}
				onClick={this._click.bind(this)}
			>
				<img
					style={{maxHeight: '100%', maxWidth: '100%'}}
					src={this.props.urls[this.props.current]}
				/>
				<img
					src={this.props.urls[this.props.current+1]}
					style={{width: 0}}
				/>
			</div>
		)
	}
}

const styles = {
	container: {
		justifyContent: 'center',
		display: 'flex',
		alignItems: 'center',
		flex: 1,
	},
}