import {FiMail, FiLock} from 'react-icons/fi'
import {Input} from '../../components/Input'
import {Button} from '../../components/Button'
import { Container, Form, Background } from "./style";

export function SignIn (){


    return(
        <Container>
            <Form>
                <h1>RocketMovies</h1>
                <p>Aplicação para acompanhar tudo que assistir.</p>
                <h2>Faça seu login</h2>

                <Input
                    type="text"
                    placeholder="E-mail"
                    icon={FiMail}

                />
                <Input
                    type="password"
                    placeholder="Senha"
                    icon={FiLock}
                />
                <Button className='button' title="Salvar" />
                <a  href="#">Criar conta</a>
            </Form>
            <Background/>
        </Container>
    )
}