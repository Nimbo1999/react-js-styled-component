import { CategoriesContainer } from './styledCategories';

import { TitleH2 } from '../../components/typografy';
import CategoryItem from '../../components/category';
import { Row, Col } from '../../components/bootstrap';

interface Props {

}

const Categories = ({}: Props) => {
    return (
        <CategoriesContainer className="container">
            <TitleH2>Categories</TitleH2>
            <Row>
                <Col xs={6} className="mt-3">
                    <CategoryItem title="Boys" />
                </Col>
                <Col xs={6} className="mt-3">
                    <CategoryItem title="Girls" />
                </Col>
                <Col xs={6} className="mt-3">
                    <CategoryItem title="Childs" />
                </Col>
                <Col xs={6} className="mt-3">
                    <CategoryItem title="More +" />
                </Col>
            </Row>
        </CategoriesContainer>
    );
}

export default Categories;
