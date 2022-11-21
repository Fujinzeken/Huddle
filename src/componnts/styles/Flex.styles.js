import styled from 'styled-components'

export const Flex = styled.div`
    display:flex;
    align-items: center;
    gap: 10px;

    & >div, & >ul{
        flex:1;
    }

    p{
        width:70%;
        margin: 20px 0px;
    }

    @media(max-width:${({theme})=> theme.mobile}){
        flex-direction:column;
        text-align:center;


        p{
            width:100%;
        }
      
    }
`