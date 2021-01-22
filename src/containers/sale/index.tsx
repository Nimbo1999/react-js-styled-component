import { SaleWrapper, Title } from './styledSale';
import ProductCell from '../../components/product-cell';

interface Props {

}

const SaleContainer = ({}: Props) => {

    return (
        <SaleWrapper className="container">
                <Title>Sales</Title>
                <div>
                    <ProductCell />
                </div>
        </SaleWrapper>
    );
}

export default SaleContainer;
