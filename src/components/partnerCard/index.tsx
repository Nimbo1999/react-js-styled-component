import { CardContainer, ImageDiv, PartnerTitle } from './styledCard';

interface Props {
    image?: string,
    title: string
}

const PartnerCard = ({ image, title }: Props) => {
    return (
        <CardContainer>
            <ImageDiv image={image || 'Nope'} />
            <PartnerTitle>{ title }</PartnerTitle>
        </CardContainer>
    );
}

export default PartnerCard;
