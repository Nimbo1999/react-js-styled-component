interface BasicComponentsProps {
    children?: any,
    className?: string,
}

type JustifyContent = 'justify-content-start' | 'justify-content-center' |
'justify-content-end' | 'justify-content-between' | 'justify-content-around'|
'justify-content-evenly';

type AlignItens = 'align-items-start' | 'align-items-end' |
'align-items-center' | 'align-items-baseline' | 'align-items-stretch';

interface RowProps extends BasicComponentsProps {
    justifyContent?: JustifyContent,
    alignItens?: AlignItens,
}

export const Row = ({ className, children, justifyContent, alignItens }: RowProps) => {

    const cssClasses = ['row'];

    if (className) cssClasses.push(className);
    if (justifyContent) cssClasses.push(justifyContent);
    if (alignItens) cssClasses.push(alignItens);

    return (
        <div className={ cssClasses.join(' ') }>
            {children}
        </div>
    );
};

interface ColProps extends BasicComponentsProps {
    xs?: number,
    sm?: number,
    md?: number,
    lg?: number,
    xl?: number,
    xxl?: number,
}

export const Col = ({ className, xs, sm, md, lg, xl, xxl, children }:ColProps) => {

    const cssClasses = className ? [ className ] : [];

    if (xs) cssClasses.push(`col-${xs}`);
    if (sm) cssClasses.push(`col-sm-${sm}`);
    if (md) cssClasses.push(`col-md-${md}`);
    if (lg) cssClasses.push(`col-lg-${lg}`);
    if (xl) cssClasses.push(`col-xl-${xl}`);
    if (xxl) cssClasses.push(`col-xxl-${xxl}`);

    return (
        <div className={ cssClasses.join(' ') }>
            {children}
        </div>
    );
}