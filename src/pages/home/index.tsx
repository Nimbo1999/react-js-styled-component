import Slider, { Slide } from '../../components/slider';

import Image1 from '../../assets/images/clothes.jpg';
import Image2 from '../../assets/images/clothes2.jpg';
import Image3 from '../../assets/images/clothes3.jpg';
import Image4 from '../../assets/images/clothes4.jpg';

interface Props {

}

const HomePage = ({}: Props) => {

    const slides:Array<Slide> = [
        {
            img: Image1,
            text: 'Primeira Imagem',
        },
        {
            img: Image2,
            text: 'Segunda Imagem',
        },
        {
            img: Image3,
            text: 'Terceira Imagem',
        },
        {
            img: Image4,
            text: 'Quarta Imagem',
        },
    ];

    return (
        <>
            <Slider slides={slides} />
        </>
    );
}

export default HomePage;
