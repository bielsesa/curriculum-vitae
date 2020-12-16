import React, { Component } from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';

class Education extends Component {
    render() {
        return (
            <div>
                <Accordion>
                    <AccordionSummary>Education Degrees</AccordionSummary>
                    <AccordionDetails>
                        <Accordion>
                            <AccordionSummary>Computer Science Degree</AccordionSummary>
                            <AccordionDetails>AAAAAAA</AccordionDetails>
                        </Accordion>
                    </AccordionDetails>
                </Accordion>
                <h1>Education Degrees</h1>
                <div className="education-degree">
                    <h3>Computer Science Degree</h3>
                    <p></p>
                </div>
                <div className="education-degree">
                    <h3>Web Applications Development - Higher Technical Certificate</h3>
                    <p></p>
                </div>
                <div className="education-degree">
                    <h3>Multi-platform Applications Development - Higher Technical Certificate</h3>
                    <p></p>
                </div>
                <div className="education-degree">
                    <h3>Scientific Baccalaureate</h3>
                    <p></p>
                </div>
                <h1>Other Courses</h1>
                <div className="course">
                </div>
                <h1>Languages</h1>
            </div>
        );
    }
}

export default Education;