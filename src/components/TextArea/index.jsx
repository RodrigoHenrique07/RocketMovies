import {Container} from './style'

export function Textarea({value, ...rest}){


    return(
        <Container 
        type="text"
        {...rest}
        >
            {value}
        </Container>
    )
}