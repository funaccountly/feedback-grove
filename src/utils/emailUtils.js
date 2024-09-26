export const createMailtoLink = (formData) => {
  const subject = encodeURIComponent(`Feedback for ${formData.projectName}`);
  const body = encodeURIComponent(`
Client Name: ${formData.clientName}
Company/Organization: ${formData.company}
Project Name/ID: ${formData.projectName}
Date of Completion: ${formData.completionDate}

Overall Satisfaction: ${formData.overallSatisfaction}

Strengths: ${formData.strengths}
Areas for Improvement: ${formData.improvements}
Additional Services: ${formData.additionalServices}

Likelihood of Recommending: ${formData.recommendation}
Future Projects: ${formData.futureProjects}

Additional Comments: ${formData.additionalComments}
  `);

  return `mailto:adnanmuhammad4393@gmail.com?subject=${subject}&body=${body}`;
};