
import {FiArrowLeft} from 'react-icons/fi'
import {Container} from './style'


export function ButtonText ()

{
    return (
        <Container>

            <div>
                <div className="iconLeft">
                    <a href="#">
                        <FiArrowLeft/>
                    </a>
                </div>
                <a  href="#">
                    Voltar
                </a>
            </div>

    </Container>
)
}

