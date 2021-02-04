import { PartnerContainer } from './styledPartners';

import { TitleH2 } from '../../components/typografy';
import { Row, Col } from '../../components/bootstrap';
import PartnerCard from '../../components/partnerCard';

interface Props {

}

const PartnersContainer = ({}:Props) => {

    return (
        <PartnerContainer className="container">
            <TitleH2>Partners</TitleH2>
            <Col xs={5}>
                <PartnerCard
                    title="Lojas americanas"
                    image="https://99prod.s3.amazonaws.com/uploads/image/file/657486/4dda1ee4a4f732e5c02a2f06964fa45c.jpg"
                />
            </Col>
        </PartnerContainer>
    );
}

export default PartnersContainer;
