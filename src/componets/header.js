import React, { Component} from 'react';

export default class Header extends Component{
    render(){
        return(
            <div className="header-banner">
                <span className="header">
                    ReflectPad
                    <p className="sub">Goodbye sleepless nights.</p>
                    <button className="button" onClick={_ => this.download()}>Download APK</button>
                </span>
            </div>
        )
    }

    download = () => {
        window.open('http://www.mediafire.com/file/rgga3zm3qfyswas/ReflectPad_%25281%2529.apk/file');
    }
}
