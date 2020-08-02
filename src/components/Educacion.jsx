import React from 'react';
import H2Styled from '../styled/H2Styled';
import H3Styled from '../styled/H3Styled';
import PStyled from '../styled/PStyled';

const Educacion = props => (
    <div className="Educacion">
        <H2Styled name="Educacion"/>
        <div className="Educacion-container">     
            {props.data.map((edu, index)=>(
                <div className="Educacion-item" key={`edu-${index}`}>
                    <H3Styled>{edu.degree} @ {edu.institution} 
            <span> {edu.startDate} - {edu.endDate}</span>
                    </H3Styled><PStyled name={edu.description}/>
                </div>
            ))}       
        </div>
    </div>
);

export default Educacion;