import React from 'React';
import H2Styled from '../styled/H2Styled';
import H3Styled from '../styled/H3Styled';
import PStyled from '../styled/PStyled';

const Certificado = props => (
    <div className="Certificado">
        <H2Styled name="Certificados"/>
        <div className="Certificado-container">
        {props.data.map((cer, index)=>(
                <div className="Certificado-item" key={`cer-${index}`}>
                    <H3Styled>{cer.name} @ {cer.institution} <span> {cer.date}</span>
                    </H3Styled><PStyled name={cer.description}/></div>
            ))}
        </div>
    </div>
);
export default Certificado;