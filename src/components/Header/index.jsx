import {FiSearch} from 'react-icons/fi'
import { Input } from "../../components/Input";
import { Container, Profile } from "./style";



export function Header (){
    return(
        <Container>
            <h1>RocketMovies</h1>
            <Input
            type="text"
            placeholder="Pesquisar pelo título"
            icon={FiSearch}
            />
            <Profile>
                <div>
                    <strong>Rodrigo Henrique</strong>
                    <a>sair</a>
                </div>
                <img 
                src="https://github.com/RodrigoHenrique07.png"
                alt="Foto Perfil" 
                />
            </Profile>

        </Container>
    )

    
}