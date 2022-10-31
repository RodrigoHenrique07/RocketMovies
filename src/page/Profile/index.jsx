import { FiCamera, FiUser, FiMail, FiLock} from 'react-icons/fi'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import {Container, Form, Avatar} from './style'
import { ButtonText } from '../../components/ButtonText'

export function Profile (){

    return(
        <Container>
            <header>
                <ButtonText/>
            </header>

            <Form>
                <Avatar>
                   <img 
                   src="https://github.com/RodrigoHenrique07.png" 
                   alt="Foto perfil usuario" /> 

                   <label htmlFor="avatar">
                        <FiCamera/>
                        <input
                        id='avatar'
                        type="file"
                        />
                   </label>
                </Avatar>
                <Input
                    type="text"
                    placeholder="Nome"
                    icon={FiUser}

                />
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
                 <Input
                    type="password"
                    placeholder="Nova senha"
                    icon={FiLock}
                    
                    
                />
                <Button 
                className='button' 
                title="Salvar"
                disabled
                />
                
               
            </Form>
        </Container>
    )
}