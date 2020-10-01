import React from 'react'
import SimpleImageSlider from "react-simple-image-slider";

export class SlideChangeHooks extends React.Component {
    render() {
        const images = [
            { url: "images/cafe.jpeg" },
            { url: "images/Landscape.jpeg" },
            { url: "images/cafe3.jpeg" },
            {url:"images/jungle&NorthStar.jpeg"},
            {url:"images/images/Alienation.jpeg"},

        ];

        return (
<diV style={{width: 595,
display: "grid",
position: "relative",
left: 393,
top: -10,
border: "solid",
height: 447}}>
            
                <SimpleImageSlider
                   width={'100%'}
                   height={'100%'}
                    images={images}
                    
                    
                />
            </diV>
        );
    }
}