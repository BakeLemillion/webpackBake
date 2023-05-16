import styled from 'styled-components';

export const LayoutStyle = styled.div`
    min-height: 100vh;
    min-width: 100vw;
    max-width: 100vw;
    dispaly: flex;
    position: relative;
`;

// header start

export const HeaderLayoutStyle = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
`

export const HeaderLayoutTopStyle = styled.div`
    width: 100%;
    height: 60px;
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: between;
    background: #FFF;
`

export const HeaderSideContentStyle = styled.div`
    width: 100%;
    min-height: calc(100vh - 60px);
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: between;
    background: #EBECF0;
`

export const HeaderSideBarStyle = styled.div`
    width: 360px;
    display: flex;
    position: relative;
    justify-content: flex-start;
    align-items: flex-start;
`

// header end



// footer start

export const FooterLayoutStyled = styled.div`
    width: 100%;
    height: 70px;
    display: none;
    background:red;
    
    @media (max-width: 750px) {
        display: flex;
    }
`

// footer end