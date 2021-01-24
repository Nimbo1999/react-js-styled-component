import { SaleWrapper } from './styledSale';

import HorizontalScroll from '../../components/horizontalScroll';
import { TitleH2 } from '../../components/typografy';
import ProductCell from '../../components/product-cell';

import MaleClothes from '../../assets/images/products/productMale.jpg';

interface Props {

}

const SaleContainer = ({}: Props) => {

    return (
        <SaleWrapper className="container">
                <TitleH2>Sales</TitleH2>
                <HorizontalScroll>
                    <ProductCell
                        image={MaleClothes}
                        name="Blusa masculina"
                        price={19.00}
                        discountprice={15.99}
                        description="Blusa moderna da polo na promoção da casa, tamanhos de P a GG"
                    />
                    <ProductCell
                        image={MaleClothes}
                        name="Blusa masculina"
                        price={19.00}
                        discountprice={15.99}
                        description="Blusa moderna da polo na promoção da casa, tamanhos de P a GG"
                    />
                    <ProductCell
                        image={MaleClothes}
                        name="Blusa masculina"
                        price={19.00}
                        discountprice={15.99}
                        description="Blusa moderna da polo na promoção da casa, tamanhos de P a GG"
                    />
                    <ProductCell
                        image={MaleClothes}
                        name="Blusa masculina"
                        price={19.00}
                        discountprice={15.99}
                        description="Blusa moderna da polo na promoção da casa, tamanhos de P a GG"
                    />
                    <ProductCell
                        image={MaleClothes}
                        name="Blusa masculina"
                        price={19.00}
                        discountprice={15.99}
                        description="Blusa moderna da polo na promoção da casa, tamanhos de P a GG"
                    />
                </HorizontalScroll>
        </SaleWrapper>
    );
}

export default SaleContainer;
