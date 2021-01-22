import { useState } from 'react';

import {
    SlideShowContainer, SlideItem, Text, SlideButtons, DotsContainer,
    Dot, SlideTitle
} from './styledSlide';

export interface Slide {
    text: string,
    img: string
};

interface Props {

    slides: Array<Slide>,
    title?: string,

};

const Slider = ({ title, slides }: Props) => {
    const [ slideIndex, setSlideIndex ] = useState(0);

    return (
        <SlideShowContainer>
            <SlideTitle>{title}</SlideTitle>

            {slides.map((slide, index) => (
                <SlideItem
                    key={ slide.text }
                    active={ slideIndex === index }
                    style={{ backgroundImage: `url(${slide.img})` }}
                >
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