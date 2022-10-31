import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import {Section} from "../../components/Section"
import {IoIosAdd} from "react-icons/io"
import { Container, Content } from "./style";



export function Home (){

    return(
        <Container>

           <Header/>
           <main>
            <Content>
                <header>
                    <h2>Meus filmes</h2>
                    <div>   
                        <Button 
                        icon={IoIosAdd}
                        title="Adicionar filme"
                        />
                    </div>
                </header>
                <Section
                title="Interestellar"

                />
                 <Section
                title="Interestellar"
                
                />
                 <Section
                title="Interestellar"
                
                />
                 <Section
                title="Interestellar"
                
                />
            </Content>
           </main>
            
          
        
        </Container>
    )
}