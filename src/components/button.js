import React, { Component } from 'react'
import '../scss/button.scss'
import TopArrow from '../media/top-arrow.svg'
import { Fade } from 'react-reveal'

class TopButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            height: false,
        }
        this.handleScreen = this.handleScreen.bind(this);
    }
    componentDidMount() {
        window.addEventListener("scroll", this.handleScreen);
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScreen);
    }

    handleScreen() {
        const windowHeight = "innerHeight" in window ? window.innerHeight : document.documentElement.offsetHeight;
        const body = document.body;
        const html = document.documentElement;
        const docHeight = Math.min(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
        const docScreen = docHeight * (7 / 5);
        const windowBottom = windowHeight + window.pageYOffset;
        if (windowBottom >= docScreen) {
            this.setState({ height: true });
        }
        else {
            this.setState({ height: false });
        }
    }

    render() {

        let handleArrow = this.state.height ? "show-button" : "hide-button";

        return (
            <a href="#" className={handleArrow + " top-button"}>
                <img src={TopArrow} alt="all the way up" />
            </a>
        )
    }
}


export default TopButton
