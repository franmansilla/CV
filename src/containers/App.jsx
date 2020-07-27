import React from 'react';
import { createGlobalStyle } from 'styled-components';
import Main from '../components/Main';
import Sidebar from '../components/Sidebar';
import Info from '../components/Info';
import About from '../components/About';
import Skills from '../components/Skils';
import Educacion from '../components/Educacion';
import Experiencia from '../components/Experiencia';
import useGetData from '../hooks/useGetData';
import Certificado from '../components/certificados';


const GlobalStyle = createGlobalStyle`
    body{
        font-family: 'Lato', sans-serif;
        margin: 0;
        padding: 0:
        background: #f5f5f5;
    }
`;

const App = () => {
    const data=useGetData();
    console.log(data);
    return data.length === 0 ? <h1>Cargando...</h1> :(
        <Main>
            <GlobalStyle />
            <Sidebar>
                <About
                avatar={data.avatar}
                name={data.name}
                profession={data.profession}
                bio={data.bio}
                address={data.address}
                social={data.social}
                />
            </Sidebar>
            <Info>
                <Educacion 
                    data={data.education}
                />
                <Experiencia
                    data={data.experience}
                />
                <Certificado
                    data={data.certificate}
                />
                <Skills
                    data={data.skills}
                />
            </Info>
        </Main>
    );
}
export default App;