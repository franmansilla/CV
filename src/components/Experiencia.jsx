import React from 'React';
import H2Styled from '../styled/H2Styled';
import H3Styled from '../styled/H3Styled';
import PStyled from '../styled/PStyled';
const Experiencia = props => (
    <div className="Experiencia">
        <H2Styled name="Experiencias"/>
        <div className="Experiencia-container">
        {props.data.map((job, index)=>(
                <div className="Experiencia-item" key={`job-${index}`}>
                    <H3Styled>{job.jobTitle} @ {job.company} 
            <span> {job.startDate} - {job.endDate}</span>
                    </H3Styled>
        <PStyled name={job.jobDescription}/>
                </div>
            ))}
        </div>
    </div>
);
export default Experiencia;