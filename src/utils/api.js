export const sendEmail = async (data) => {
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // Log the data that would be sent
  console.log('Sending email to: adnanmuhammad4393@gmail.com');
  console.log('Form data:', data);
  
  // Simulate a successful response
  return { success: true, message: 'Email sent successfully' };
};