import React, { useState } from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function MUIAccordion() {

    //state which keeps track of which panel is open
    //initially it is emty string or false (because no panel is open)
    const [expanded, setExpanded] = useState('' | false);

    //function to be run when accordion is clicked
    // expanded parameter: shows us that accordion is open or close
    const handleChange = (panelName) => (event, expanded) => {
        //if the accordion is open, save the name of this panel
        //if it is not, save false ,(bacause no panel is open)
        setExpanded(expanded ? panelName : false)
    }

  return (
    <div style={{marginTop:"50px", marginBottom:"100px"}}>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} >
        <AccordionSummary expandIcon={<ExpandMoreIcon/>} >Section 1</AccordionSummary>
        <AccordionDetails>
        <Typography>
            Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
            Aliquam eget maximus est, id dignissim quam.
          </Typography>
        </AccordionDetails>
      </Accordion>
      
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} >
        <AccordionSummary expandIcon={<ExpandMoreIcon/>} >Section 2</AccordionSummary>
        <AccordionDetails>
        <Typography>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat odit unde distinctio tempora! Obcaecati, maiores.
          </Typography>
        </AccordionDetails>
      </Accordion>
      
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')} >
        <AccordionSummary expandIcon={<ExpandMoreIcon/>} >Section 3</AccordionSummary>
        <AccordionDetails>
        <Typography>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas voluptatum aliquam animi tenetur sunt! Aspernatur earum consequatur ducimus dolorum beatae.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  )
}

export default MUIAccordion
