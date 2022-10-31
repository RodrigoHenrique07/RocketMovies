import {AiFillStar} from 'react-icons/ai'
import { Tags } from '../../components/Tags'

import { Container } from "./style";


export function Section ({title, children, description}){

    return(
        <Container>

            <h2>{title}</h2>
            {children}

            <div className="icon">
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
            </div>
            <p>
            Pragas nas colheitas fizeram a civilização humana regredir para uma 
            sociedade agrária em futuro de data desconhecida. Cooper, 
            ex-piloto da NASA, tem uma fazenda con sua família. Murphy, a filha de 
            dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que ten

            </p>
            <div className="tags">
                <Tags title="Ficção científica"/>
                <Tags title="Drama"/>
                <Tags title="Família"/>
            </div>
            
        </Container>
    )
}