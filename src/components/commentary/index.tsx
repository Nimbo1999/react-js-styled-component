import { CommentaryContainer, CommentaryText, CommentaryOwner } from './styledCommentary';

import { Col, Row } from '../bootstrap';

interface Props {
    commentary: string,
    owner?: string,
    ownerCountry?: string,
}

const Commentary = ({ commentary, owner, ownerCountry }:Props) => {

    const getOwnerInfo = [owner, ownerCountry];

    console.log(getOwnerInfo);

    return (
        <CommentaryContainer>
            <Row>
                <Col xs={12}>
                    <CommentaryText>{commentary}</CommentaryText>
                </Col>
                <Col xs={12} className="d-flex">
                    { owner && <CommentaryOwner>{getOwnerInfo.join('. ')}</CommentaryOwner>}
                </Col>
            </Row>
        </CommentaryContainer>
    );
}

export default Commentary;
