import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import { ExpandMore } from '@mui/icons-material';

function FAQ() {
  const faqs = [
    { question: 'What is Recht Tech Pvt Ltd?', answer: 'Recht Tech Pvt Ltd is...' },
    { question: 'How can I contact you?', answer: 'You can contact us via...' },
    // Add more FAQs as needed
  ];

  return (
    <div>
      {faqs.map((faq, index) => (
        <Accordion key={index}>
          <AccordionSummary expandIcon={<ExpandMore />}>
            <Typography>{faq.question}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{faq.answer}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}

export default FAQ;
