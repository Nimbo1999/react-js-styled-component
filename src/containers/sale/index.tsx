import { SaleWrapper, Title } from './styledSale';

interface Props {

}

const SaleContainer = ({}: Props) => {

    return (
        <SaleWrapper className="container">
                <Title>Sales</Title>
        </SaleWrapper>
    );
}

export default SaleContainer;
