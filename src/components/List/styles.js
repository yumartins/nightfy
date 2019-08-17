import styled from 'styled-components';

export const Container = styled.div`
    padding: 0 1rem;
    height:100%;
    flex: 0 0 20rem;
    opacity: ${props => props.done ? 0.6 : 1};

    & + div {
        border-left: 1px solid rgba(0, 0, 0, .05);
    }

    header {
        display: flex;
        justify-content: space-between;
        align-items: center;

        h2 {
            font-weight: 500;
            font-size: 1rem;
            padding: 0 .625rem;
        }

        button {
            height: 2.5rem;
            width: 2.5rem;
            border-radius: 1rem;
            background: #3B5BFD;
            border: 0;
            cursor: pointer;
        }

    }

    ul {
        margin-top: 2rem;
    }

`;
