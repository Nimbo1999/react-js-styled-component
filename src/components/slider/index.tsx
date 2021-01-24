import { useEffect, useState } from 'react';

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

    const nextStep = () => {
        if (slideIndex === slides.length -1 ) {
            setSlideIndex(0);
            return;
        }
        setSlideIndex(slideIndex + 1);
    }

    useEffect(() => {
        setTimeout(() => {
            nextStep();
        }, 4000);
    }, [slideIndex]);

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

            <SlideButtons onClick={nextStep} right>
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