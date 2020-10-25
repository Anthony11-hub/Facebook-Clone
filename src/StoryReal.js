import React from 'react';
import './StoryReal.css';
import Story from './Story';

function StoryReal() {
    return (
        <div className="storyReal">
            <Story
             image='https://media1.fdncms.com/orlando/imager/u/original/17439873/19024937_1360632917361245_6881010964195682249_o.jpg' 
             profileSrc='https://pyxis.nymag.com/v1/imgs/41d/9fb/46c48b6f0a02a5609a28c29bdef932b304-travis-scott.rsquare.w330.jpg' 
             title='LA Flame'
              />
            <Story
             image='https://i.ytimg.com/vi/3LC2PQbd9K0/maxresdefault.jpg' 
             profileSrc='https://urbanislandz.com/wp-content/uploads/2019/09/Young-Thug-77.jpg' 
             title='Jeffrey'
              />
            <Story
             image='https://miro.medium.com/max/955/1*ZN0Q1OxcXtRh7qXM0OWUCQ.jpeg' 
             profileSrc='https://content.fortune.com/wp-content/uploads/2020/02/GettyImages-1078542150.jpg' 
             title='Jeff Bezos'
              />
            <Story
             image='https://c.files.bbci.co.uk/FF8E/production/_108122456_mediaitem108122455.jpg' 
             profileSrc='https://s.hdnux.com/photos/01/13/24/12/19743415/7/920x920.jpg' 
             title='Mack Zuckerberg'
              />
            <Story
             image='https://static.techspot.com/images2/news/bigimage/2019/09/2019-09-30-image-4.jpg' 
             profileSrc='https://media.gq.com/photos/566afb0d93d6666946f8bcd7/16:9/w_2560%2Cc_limit/musk.LONG-FORM.1.jpg' 
             title='Elon Musk'
              />
        </div>
    )
}

export default StoryReal;
