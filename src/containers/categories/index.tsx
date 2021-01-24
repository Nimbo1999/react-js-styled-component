import { CategoriesContainer } from './styledCategories';

import { TitleH2 } from '../../components/typografy';
import { Row } from '../../components/bootstrap';

interface Props {

}

const Categories = ({}: Props) => {
    return (
        <CategoriesContainer className="container">
            <Row>
                <TitleH2>Categories</TitleH2>
            </Row>
        </CategoriesContainer>
    );
}

export default Categories;
