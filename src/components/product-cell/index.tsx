import {
    ProductCellWrapper, CurrentPrice, LastPrice, Row, PName, PDescription, ImageDiv
 } from './styledProductCell';

interface Props {
    image?: string,
    price: number,
    discountprice?: number,
    name: string,
    description?: string,
}

const ProductCell = ({ image, price, discountprice, name, description }:Props) => {

    // Use the male photos directory at assets to mock the images.
    return (
        <ProductCellWrapper>
            <ImageDiv style={{ backgroundImage: `url(${image})` }} />

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

            <PDescription>{description}</PDescription>
        </ProductCellWrapper>
    );
}

export default ProductCell;
