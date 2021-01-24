interface RowProps {
    children?: any,
    className?: string,
}

export const Row = ({ children, className }: RowProps) => {

    const cssClasses = ['row'];

    if(className) cssClasses.push(className);

    return (
        <div className={ cssClasses.join(' ') }>
            {children}
        </div>
    );
};
