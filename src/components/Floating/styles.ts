import styled from "styled-components";

const StyledFloating = styled.div`
    position: fixed;
    z-index: 8;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 0.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    background-color: rgba(0, 0, 0, 0.2);
    transform-origin: bottom;
    transition: transform 0.3s linear;

    & > a {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        background-color: #25d366;
        color: #fff;
        border-radius: 50%;
        outline: none;
        width: 3.5rem;
        height: 3.5rem;
        box-shadow: 0 0 6px 2px rgb(0 0 0 / 20%);
        transition: all 0.3s ease-in-out;

        & > svg {
            width: 1.7rem;
            height: 1.7rem;
        }

        @media (min-width: 768px) {
            width: 5rem;
            height: 5rem;
            & > svg {
                width: 2.5rem;
                height: 2.5rem;
            }
        }
    }

    @media (min-width: 768px) {
        gap: 30px;
        padding: 1rem;
    }

    @media (min-width: 1100px) {
        width: fit-content;
        background-color: transparent;
        margin-left: auto;
    }
`;

export { StyledFloating };
