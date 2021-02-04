import { ClientsOpinionContainer, ShowMoreButton } from './styledClientsOpinions';

import { TitleH2 } from '../../components/typografy';
import Commentary from '../../components/commentary';
import { Row, Col } from '../../components/bootstrap';

interface Props {

}

const ClientsOpinions = ({}:Props) => {

    return (
        <ClientsOpinionContainer className="container">
            <Row>
                <TitleH2>What clients say</TitleH2>
                <Col xs={12}>
                    <Commentary
                        commentary="Adorei a entrega, fiz o pedido de 2 peças masculinas e o prazo de entrega era de 7 dias úteis. O meu pedido veio chegar no 4 dia e em perfeito estado."
                        owner="Matheus Lopes"
                    />
                </Col>
                <Col xs={12}>
                    <Commentary
                        commentary="Adorei a entrega, fiz o pedido de 2 peças masculinas e o prazo de entrega era de 7 dias úteis. O meu pedido veio chegar no 4 dia e em perfeito estado."
                        owner="Matheus Lopes"
                        ownerCountry="Brasília - DF"
                    />
                </Col>
                <Col xs={12}>
                    <Commentary
                        commentary="Adorei a entrega, fiz o pedido de 2 peças masculinas e o prazo de entrega era de 7 dias úteis. O meu pedido veio chegar no 4 dia e em perfeito estado."
                        owner="Matheus Lopes"
                    />
                </Col>
                <Col xs={12} className="d-flex justify-content-end">
                    <ShowMoreButton>Mostrar  mais</ShowMoreButton>
                </Col>
            </Row>
        </ClientsOpinionContainer>
    );
}

export default ClientsOpinions;
