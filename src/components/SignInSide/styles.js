import styled from "@emotion/styled";

export const LoaderWrapper = styled.div`
    width: 100%;
    height: 100vh;
    position: fixed;
    background-color: rgba(0, 0, 0, 0.834);
    top: 0;
    left: 0;
    z-index: 1000;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const AdminLogin = styled.button`
    box-shadow: 0 4px 12px rgba(0, 0, 0, .12);
    background-color: #e9ecf1;
    font-size: 14px;
    font-family: 'Saira Semi Condensed', sans-serif;
    font-weight: 400;
    letter-spacing: 0.8px;
    outline: none;
    border: 1px solid #d6d9de;
    color: rgba(0, 0, 0, 0.87);
    width: 250px;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    cursor: pointer;
    gap: 10px;
`
export const LanguageSelectorWrapper = styled.div`
    position: relative;
`

export const SelectedLanguage = styled.div`
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, .12);
    border: 1px solid #d6d9de;
    cursor: pointer;
    background-color: #45B5AA;
    width: 50px;
    height: 44px;
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    align-items: center;
    color: #FFFFFF;
`

export const LanguageList = styled.ul`
    margin: 0;
    padding: 0;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 4px 12px rgba(0, 0, 0, .12);
    width: 50px;
    position: absolute;
    top: 50px;
    /* visibility: hidden; */
    /* transition: all .5s; */
    display: ${props => props.open? 'block':'none'};
`

export const LanguageListItem = styled.li`
    margin: 0;
    padding: 0;
    cursor: pointer;
    width: 100%;
    height: 44px;
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    align-items: center;
    color: #45B5AA;
    background-color: #FFFFFF;
    transition: all .5s;
    :hover {
        background-color: #45B5AA;
        color: #FFFFFF;
    }
`