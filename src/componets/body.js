import React, { Component } from 'react';
import Logo from '../images/gx1.png'
import Logo2 from '../images/gx2.png'
import Logo3 from '../images/gx3.png'
export default class Body extends Component{
    render(){
        return(
            <div className="bc">
                <div className="bgblock5">
                    <div className="block5">
                     <div className="block-text">
                         <div className="t2b">
                         Ever plan to do all your work but then get sidetracked? You're left asking questions like, "Where did all the time go? It seems like it's only been a few minutes! How has it been an hour?!"
                         </div>
                         <div className="row" >
                            <div className="blackheading"> Introducing </div>
                             <div className="greyheading"> ReflectPad </div>
                         </div>                     
                        </div>
                    </div>
                </div>
                <div className="bgblock3" >
                    <div className="block3">
                        <div className="t1w">
                                    What is ReflectPad?
                        </div>
                        <div className="block-text-image">
                            <div className='block-img'>
                                <img className="img" src={Logo} alt="gx2" width='250' height='200'/>
                            </div>
                            <div className="t2w" style={{flex: 1}}>
                                ReflectPad is an app meant to do one thing: help users be productive.
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bgblock2">
                    <div className="block2">
                        <div className="t1w"> How does it work? </div>
                        <div className="t2w"> ReflectPad has three components to it: </div>
                        <div className='row'>
                            <div className='colloum'>
                                <div className="t2w">
                                    Productivity Score
                                </div>
                                <div className="t3w">
                                    You enter your productivity score every day (it takes like 5 seconds) and at the end of the month, you get an average score telling you how productive you were for the month.
                                </div>
                            </div>
                            <div className='colloum'>
                                <div className="t2w">
                                Activity Log
                                </div>
                                <div className="t3w">
                                You can plan your day here and log everything you have done with the times to allow you to have more control over your time and minimize the time spent getting distracted.
                                </div>
                            </div>
                            <div className='colloum'>
                                <div className="t2w">
                                Daily Planner
                                </div>
                                <div className="t3w">
                                The daily planner is like a to-do list. Have a lot of things to do in one day and can't keep track? Just enter them here and they'll neatly be displayed for you so you can get all your tasks done.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bgblock">
                    <div className="block">
                        <div className="t1w">
                               Inspiration
                        </div>
                        <div className="block-text-image">
                            <div className="t3w" style={{flex: 3}}>
                                As high school students, no one finds themselves in this situation more than us. While looking through various apps and social media on the bus, we realized spending so much time on our phones was a problem. Despite there being many productivity apps on the Play Store, many require payment, have ads, track/sell data, run too many background processes killing battery life, or are just too complicated to use for a productivity app. Thinking back, we all procrastinated on our work on our phones and stayed up all night doing work instead of sleeping. So, we decided to make a brand new app to help with productivity that is free, lightweight, and easy to use. We ended up with ReflectPad
                            </div>
                            <div className='block-img'>
                                <img className="img" src={Logo2} alt="gx2" width='250' height='250'/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bgblock4">
                    <div className="block4">
                        <div className="t1b">
                                    Download
                        </div>
                        <div className="block-text-image">
                            <div className='block-img'>
                                <img className="img" src={Logo3} alt="gx2" width='250' height='250'/>
                            </div>
                            <div className="t2b" style={{flex: 1}}>
                                Android users, download from this website! It's not on the Google Play Store yet. Not supported on iOS
                            </div>
                        </div>
                        <div className="t2b" style={{flex: 1}}>
                            Stay tuned for future updates with added functionality!
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
