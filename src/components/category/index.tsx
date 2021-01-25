import { CategoryContainer } from './styledCategory';

import { TitleH5 } from '../../components/typografy';

interface Props {
    title: string,
}

const CategoryItem = ({ title }:Props) => {

    return (
        <CategoryContainer>
            <TitleH5>{title}</TitleH5>
        </CategoryContainer>
    );
}

export default CategoryItem;
