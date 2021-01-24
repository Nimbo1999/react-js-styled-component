import {
    ProductCellWrapper, CurrentPrice, LastPrice, Row, PName, PDescription, ImageDiv
} from './styledProductCell';

import DefaultImage from '../../assets/images/products/defaultImage.png';

interface Props {
    image?: string,
    price: number,
    discountprice?: number,
    name: string,
    description?: string,
    small?: boolean;
    inverted?: boolean;
}

const ProductCell = ({ image, price, discountprice, name, description, small, inverted }:Props) => {

    // Use the male photos directory at assets to mock the images.
    return (
        <ProductCellWrapper small={small}>
            <ImageDiv style={{ backgroundImage: `url(${image || DefaultImage})` }} small={small} />

            {inverted ? (
                <>
                    <PName inverted>{name}</PName>

                    <Row inverted={inverted}>
                        {discountprice
                            ? (<>
                                <CurrentPrice>{discountprice.toLocaleString('pt-BR', {currency: 'BRL', style: 'currency'})}</CurrentPrice>
                                <LastPrice>{price.toLocaleString('pt-BR', {currency: 'BRL', style: 'currency'})}</LastPrice>
                            </>) : (
                                <CurrentPrice inverted={inverted}>{price.toLocaleString('pt-BR', {currency: 'BRL', style: 'currency'})}</CurrentPrice>
                            ) }
                    </Row>
                </>
            ) : (
                <>
                    <Row>
                        {discountprice
                            ? (<>
                                <CurrentPrice>{discountprice.toLocaleString('pt-BR', {currency: 'BRL', style: 'currency'})}</CurrentPrice>
                                <LastPrice>{price.toLocaleString('pt-BR', {currency: 'BRL', style: 'currency'})}</LastPrice>
                            </>) : (
                                <CurrentPrice>{price.toLocaleString('pt-BR', {currency: 'BRL', style: 'currency'})}</CurrentPrice>
                            ) }
                    </Row>

                    <PName>{name}</PName>
                </>
            )}

            <PDescription>{description}</PDescription>
        </ProductCellWrapper>
    );
}

export default ProductCell;
