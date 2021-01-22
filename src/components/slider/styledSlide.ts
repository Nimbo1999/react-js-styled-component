import styled, { css } from 'styled-components';

export const SlideShowContainer = styled.div`
    max-width: 100vw;
    position: relative;
    width: 100%;
    height: 100%;
    max-height: 300px;
    
    @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
        max-height: 500px;
    }
`;

interface SlideItemIterface {
    active?: boolean
}

export const SlideItem = styled.div<SlideItemIterface>`
    display: ${({ active }) => active ? 'block' : 'none' };
    animation-name: fade;
    animation-duration: 1.5s;
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;

    @keyframes fade {
        from {opacity: .4}
        to {opacity: 1}
    }
`;

export const SlideCounter = styled.div`
    color: #f2f2f2;
    font-size: 12px;
    padding: 8px 12px;
    position: absolute;
    top: 0;
`;

export const Img = styled.img`
    width: 100%
`;

export const Text = styled.div`
    position: absolute;
    bottom: 0;
    color: #f2f2f2;
    font-size: 15px;
    padding: 8px 12px 44px;
    width: 100%;
    text-align: center;
    background-color: rgba(0, 0, 0, 0.5)
`;

interface SlideButtonInterface {
    right?: boolean
};

export const SlideButtons = styled.button<SlideButtonInterface>`
    position: absolute;
    appearance: none;
    cursor: pointer;
    outline: none;
    top: 50%;
    width: auto;
    margin-top: -22px;
    padding: 16px;
    color: ${({ theme }) => theme.colors.white};
    font-weight: bold;
    font-size: 18px;
    border-radius: 0 3px 3px 0;
    user-select: none;
    transition: 0.6s ease;
    background-color: transparent;
    border-color: transparent;

    ${({ right }) => right && css`
        right: 0;
        border-radius: 3px 0 0 3px;
    `}

    &:hover {
        background-color: rgba(0,0,0,0.8);
        border-color: rgba(0, 0, 0, 0.4);
    }
`;

export const DotsContainer = styled.div`
    text-align: center;
    position: absolute;
    bottom: 0;
    width: 100%
`;

export const Dot = styled.span<SlideItemIterface>`
cursor: pointer;
  height: 15px;
  width: 15px;
  margin: 0 2px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
  transition: background-color 0.6s ease;

  &:hover {
    background-color: #717171;
  }

  ${({ active }) => active && css`
    background-color: #717171;
  `}
`;