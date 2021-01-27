import { ClientsOpinionContainer, ShowMoreButton } from './styledClientsOpinions';

import { TitleH2 } from '../../components/typografy';
import Commentary from '../../components/commentary';

interface Props {

}

const ClientsOpinions = ({}:Props) => {

    return (
        <ClientsOpinionContainer className="container">
            <TitleH2>What clients say</TitleH2>
            <Commentary
                commentary="Adorei a entrega, fiz o pedido de 2 peças masculinas e o prazo de entrega era de 7 dias úteis. O meu pedido veio chegar no 4 dia e em perfeito estado."
                owner="Matheus Lopes"
            />
            <Commentary
                commentary="Adorei a entrega, fiz o pedido de 2 peças masculinas e o prazo de entrega era de 7 dias úteis. O meu pedido veio chegar no 4 dia e em perfeito estado."
                owner="Matheus Lopes"
                ownerCountry="Brasília - DF"
            />
            <Commentary
                commentary="Adorei a entrega, fiz o pedido de 2 peças masculinas e o prazo de entrega era de 7 dias úteis. O meu pedido veio chegar no 4 dia e em perfeito estado."
                owner="Matheus Lopes"
            />
            <ShowMoreButton>Mostrar  mais</ShowMoreButton>
        </ClientsOpinionContainer>
    );
}

export default ClientsOpinions;
