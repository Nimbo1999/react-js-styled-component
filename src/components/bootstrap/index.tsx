interface BasicComponentsProps {
    children?: any,
    className?: string,
}

export const Row = ({ className, children }: BasicComponentsProps) => {

    const cssClasses = ['row'];

    if(className) cssClasses.push(className);

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