import React, { Component } from 'react'

export default class Douban extends Component {

	constructor(props) {
		super()
		this.state = {
			delay: 0
		}
	}

    componentDidMount() {
        // 第一次进入时
        if (this.props.page == 0) {
            this.props.fetchData()
            this.timer = setInterval(() => {
                this.setState({delay: this.state.delay+1})
            }, 1000)
        }
        
	}

	_click() {
		this.props.showNext()
		console.log(this.props.current)
        // 提前10张爬取
        this.props.urls.length - this.props.current == 10 && this.props.fetchData()
	}

	render() {
        if (this.props.page == 0) {
            return (
                <div style={styles.container}>
                    <span>爬取数据中 {this.state.delay}s... (10s~15s)</span>
                </div>
            )
        }
        
        this.timer && clearInterval(this.timer)

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
		flex: 1
	},
}