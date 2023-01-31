import React from 'react';
import './App.css';


const App = () => {
    return (
        <div className={'app-wrapper'}>
            <header className={'header'}>
                <img src={'https://cdn.dribbble.com/users/1790995/screenshots/5089886/dfsdfsdfsdf_4x.jpg'}/>
            </header>
            <nav className={'nav'}>
                <div>
                    <a>Profile</a>
                </div>
                <div>
                    <a>Message</a>
                </div>
                <div>
                    <a>News</a>
                </div>
                <div>
                    <a>Music</a>
                </div>
                <div>
                    <a>Settings</a>
                </div>
            </nav>
            <div className={'content'}>
                <div>
                    <img src={'https://look.com.ua/pic/202010/640x480/look.com.ua-362136.jpg'}/>
                </div>
                <div>
                    ava + description
                </div>
                <div>
                    My posts
                    <div>
                        New post
                    </div>
                    <div>
                        <div>
                            Post 1
                        </div>
                        <div>
                            Post 2
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default App;
