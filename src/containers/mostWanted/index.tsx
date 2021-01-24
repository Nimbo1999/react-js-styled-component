import { TitleH3 } from '../../components/typografy';
import ProductCell from '../../components/product-cell';
import HorizontalScroll from '../../components/horizontalScroll';

import { MostWantedContainer } from './styledMostWanted';

interface Props {

}

const MostWanted = ({}:Props) => {
    return (
        <MostWantedContainer className="container">
            <TitleH3>Most wanteds</TitleH3>

            <HorizontalScroll>
                <ProductCell
                    name="Blusa jeans Masculina"
                    price={45.99}
                    small
                    inverted
                />
                <ProductCell
                    name="Blusa jeans Masculina"
                    price={45.99}
                    small
                    inverted
                />
                <ProductCell
                    name="Blusa jeans Masculina"
                    price={45.99}
                    small
                    inverted
                />
                <ProductCell
                    name="Blusa jeans Masculina"
                    price={45.99}
                    small
                    inverted
                />
                <ProductCell
                    name="Blusa jeans Masculina"
                    price={45.99}
                    small
                    inverted
                />
                <ProductCell
                    name="Blusa jeans Masculina"
                    price={45.99}
                    small
                    inverted
                />
                <ProductCell
                    name="Blusa jeans Masculina"
                    price={45.99}
                    small
                    inverted
                />
                <ProductCell
                    name="Blusa jeans Masculina"
                    price={45.99}
                    small
                    inverted
                />
            </HorizontalScroll>
        </MostWantedContainer>
    );
}

export default MostWanted;
