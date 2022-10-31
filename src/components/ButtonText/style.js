import styled from "styled-components";


export const Container = styled.a`


>div{
            display:flex;
            align-items: center;
            gap: 8px;
            .iconLeft{
                >a{
                    svg{
                        height: 16px;
                        width: 16px;
                        display:flex;
                        color: ${({theme}) => theme.COLORS.PINKY};
                    }
                }
            }
            >a{
                font-weight: 400;
                font-size: 16px;
                line-height: 21px;
                color: ${({theme}) => theme.COLORS.PINKY};
            }
        }


`
;