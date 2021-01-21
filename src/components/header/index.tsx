import { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import {
    StyledHeader, Navigation, Title, NavigationMenu, MenuItem, DivTitleWrapper,
    HamburgerButton, MobileNavigationMenu, MobileMenuItem
} from './styledHeader';

const Header = () => {

    const navigationRef = useRef<HTMLDivElement>(document.createElement("div"));

    const [ expanded, setExpand ] = useState<boolean>(false);

    useEffect(() => {
    }, [navigationRef.current]);

    return (
        <StyledHeader id="header-component">
            <Navigation ref={ navigationRef }>
                <DivTitleWrapper>
                    <Title>
                        <Link to="/">Company Name</Link>
                    </Title>
                </DivTitleWrapper>

                <NavigationMenu height={ navigationRef.current.offsetHeight }>
                    <MenuItem>
                        <Link to="/features">Features</Link>
                    </MenuItem>
                    <MenuItem>
                        <span>Boys</span>
                    </MenuItem>
                    <MenuItem>
                        <span>Girls</span>
                    </MenuItem>
                    <MenuItem>
                        <span>Contact</span>
                    </MenuItem>
                    <MenuItem>
                        <span>Login</span>
                    </MenuItem>
                </NavigationMenu>

                <HamburgerButton
                    onClick={() => setExpand(!expanded)}
                >
                    <i className="fas fa-bars" />
                </HamburgerButton>

                <MobileNavigationMenu expanded={expanded}>
                    <MobileMenuItem>
                        <Link
                            to="/features"
                            onClick={() => setExpand(false)}
                        >Features</Link>
                    </MobileMenuItem>
                    <MobileMenuItem>
                        <span>Boys</span>
                    </MobileMenuItem>
                    <MobileMenuItem>
                        <span>Girls</span>
                    </MobileMenuItem>
                    <MobileMenuItem>
                        <span>Contact</span>
                    </MobileMenuItem>
                    <MobileMenuItem>
                        <span>Login</span>
                    </MobileMenuItem>
                </MobileNavigationMenu>
            </Navigation>
        </StyledHeader>
    );
}

export default Header;
