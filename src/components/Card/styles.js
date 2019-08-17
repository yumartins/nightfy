import styled, { css } from 'styled-components';

export const Container = styled.div`
    position: relative;
    background: #FFF;
    border-radius: .25rem;
    margin-bottom: .625rem;
    padding: 1rem;
    box-shadow: 0 1px .25rem 0 rgba(192, 208, 230, .8);
    border-top: 1.25rem solid rgba(230, 236, 245, .4);
    cursor: grab;

    header {
        position: absolute;
        top: -1.375rem;
        left: 1rem;
    }

    p {
        font-weight: 500;
        line-height: 1.25rem;
    }
  
    img {
        width: 1.5rem;
        height: 1.5rem;
        border-radius: .125rem;
        margin-top: .25rem;
    }

    ${props => props.isDragging && css`
        border: .125rem dashed rgba(0, 0, 0, .2);
        padding-top: 2rem;
        border-radius: 0;
        background: transparent;
        box-shadow: none;
        cursor: grabbing;

        p, img, header {
            opacity: 0;
        }

    `}

`;

export const Label = styled.span`
    width: .625rem;
    height: .625rem;
    border-radius: .125rem;
    display: inline-block;
    background: ${props => props.color};
`;

