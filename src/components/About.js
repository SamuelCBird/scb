import React from 'react';
import '../styles/About.css';
// import about_me from '../images/about_me.png';

export const About = () => {
    return (
        <div id='wrapper'>
            <div id='misc_content' className='on_paper'>
                {/* <div id='top_row'> */}

                    {/* <img src={about_me} alt='' id='polaroid'></img> */}

                    <div className='about_text'>
                        <h1>Hey! </h1>
                        {/* <h2>As you can see, I scrub up pretty good.</h2>                     */}
                        <br/>
                        <p>
                            I'm a passionate and creative person, and I've always had an artistic streak run through me. 
                            <br /><br/>
                            I love music. I studied it at university and have travelled the world playing in a band. 
                            <br /><br/>
                            I've also come to love photography and programming, and no matter what I do I let my artistic taste add a special touch to my work.
                        </p>
                    </div>
                {/* </div> */}
                <div className='about_text'>
                    <h1>Contact Me</h1>
                    <h2>If you'd like to get in touch, feel free to drop me an email.</h2><br />
                    <p>
                        chat@samuelcbird.co.uk
                    </p>
                </div>
            </div>
        </div>
    )
}