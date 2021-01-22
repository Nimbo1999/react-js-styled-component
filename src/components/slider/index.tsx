import { useState } from 'react';

import {
    SlideShowContainer, SlideItem, SlideCounter, Img, Text, SlideButtons,
    DotsContainer, Dot
} from './styledSlide';

export interface Slide {
    text: string,
    img: string
};

interface Props {

    slides: Array<Slide>

};

const Slider = ({ slides }: Props) => {
    const [ slideIndex, setSlideIndex ] = useState(0);

    return (
        <SlideShowContainer>

            {slides.map((slide, index) => (
                <SlideItem
                    key={ slide.text }
                    active={ slideIndex === index }
                    style={{ backgroundImage: `url(${slide.img})` }}
                >
                    <SlideCounter>{`${index + 1} / ${slides.length}`}</SlideCounter>

                    <Text>{ slide.text }</Text>
                </SlideItem>
            ))}

            <SlideButtons onClick={() => {
                if (slideIndex === 0) {
                    setSlideIndex(slides.length - 1);
                    return;
                }
                setSlideIndex(slideIndex - 1);
            }}>
                <i className="fas fa-angle-left" />
            </SlideButtons>

            <SlideButtons
            onClick={() => {
                if (slideIndex === slides.length -1 ) {
                    setSlideIndex(0);
                    return;
                }
                setSlideIndex(slideIndex + 1);
            }}
                right
            >
                <i className="fas fa-angle-right" />
            </SlideButtons>

            <DotsContainer>

                {slides.map((_, index) => (<Dot
                        key={ _.text }
                        onClick={() => setSlideIndex(index)}
                        active={slideIndex === index}
                    />)
                )}

            </DotsContainer>
        </SlideShowContainer>
    );
};

export default Slider;