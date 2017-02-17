import React, { Component } from 'react'
import App from '../containers/Image'
import Douban from '../containers/Douban'
export default class Main extends Component {

    constructor(props) {
		super()
		this.state = {
			title: true
		}
	}
    render() {
        return (
            <div style={styles.main}>
                <div style={styles.header}>
                    <span 
                        style={styles.title}
                    >
                        {this.state.title ? '煎蛋网' : '害羞组'}
                    </span>
                    
                    <span 
                        style={{ flex: 1, textAlign: 'right', fontSize: 14 }}
                        onClick={() => this.setState({title: !this.state.title})}
                    >
                        切换
                    </span>
                </div>
                <div style={styles.content}>
                    {this.state.title ? <App /> : <Douban />}
                </div>

            </div>
        )
    }
}


const styles = {
    main: {
        display: 'flex',
        flexDirection: 'column',
        flex: 1
    },
    header: {
        backgroundColor: 　'#FFDB42',
        height: 60,
        minHeight: 60,
        display: 'flex',
        alignItems: 'center',
        paddingLeft: 20,
        paddingRight: 20
    },
    title: {
        fontWeight: 'bold',
        fontSize: 20, 
        letterSpacing: 2, 
        flex: 1, 
    },
    content: {
        flex: 1,
        display: 'flex'
    }
}