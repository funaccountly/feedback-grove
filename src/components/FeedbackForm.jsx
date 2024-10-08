import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { toast } from 'sonner';
import { createMailtoLink } from '../utils/emailUtils';

const FeedbackForm = () => {
  const { register, handleSubmit, control, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    const mailtoLink = createMailtoLink(data);
    window.location.href = mailtoLink;
    toast.success('Email client opened with feedback data. Please send the email to complete the process.');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">Basic Information</h2>
        <div>
          <Label htmlFor="clientName">Client Name</Label>
          <Input id="clientName" {...register('clientName', { required: 'Client name is required' })} className="mt-1" />
          {errors.clientName && <span className="text-red-500 text-sm">{errors.clientName.message}</span>}
        </div>
        <div>
          <Label htmlFor="company">Company/Organization</Label>
          <Input id="company" {...register('company', { required: 'Company is required' })} className="mt-1" />
          {errors.company && <span className="text-red-500 text-sm">{errors.company.message}</span>}
        </div>
        <div>
          <Label htmlFor="projectName">Project Name/ID</Label>
          <Input id="projectName" {...register('projectName', { required: 'Project name is required' })} className="mt-1" />
          {errors.projectName && <span className="text-red-500 text-sm">{errors.projectName.message}</span>}
        </div>
        <div>
          <Label htmlFor="completionDate">Date of Completion</Label>
          <Input id="completionDate" type="date" {...register('completionDate', { required: 'Completion date is required' })} className="mt-1" />
          {errors.completionDate && <span className="text-red-500 text-sm">{errors.completionDate.message}</span>}
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">Service Evaluation</h2>
        <div>
          <Label>Overall Satisfaction</Label>
          <Controller
            name="overallSatisfaction"
            control={control}
            rules={{ required: 'Please select your overall satisfaction' }}
            render={({ field }) => (
              <RadioGroup onValueChange={field.onChange} defaultValue={field.value} className="flex flex-col space-y-1">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="very-satisfied" id="very-satisfied" />
                  <Label htmlFor="very-satisfied">Very Satisfied</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="satisfied" id="satisfied" />
                  <Label htmlFor="satisfied">Satisfied</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="neutral" id="neutral" />
                  <Label htmlFor="neutral">Neutral</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="dissatisfied" id="dissatisfied" />
                  <Label htmlFor="dissatisfied">Dissatisfied</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="very-dissatisfied" id="very-dissatisfied" />
                  <Label htmlFor="very-dissatisfied">Very Dissatisfied</Label>
                </div>
              </RadioGroup>
            )}
          />
          {errors.overallSatisfaction && <span className="text-red-500 text-sm">{errors.overallSatisfaction.message}</span>}
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">Specific Feedback</h2>
        <div>
          <Label htmlFor="strengths">Strengths</Label>
          <Textarea id="strengths" {...register('strengths')} className="mt-1" />
        </div>
        <div>
          <Label htmlFor="improvements">Areas for Improvement</Label>
          <Textarea id="improvements" {...register('improvements')} className="mt-1" />
        </div>
        <div>
          <Label htmlFor="additionalServices">Additional Services</Label>
          <Textarea id="additionalServices" {...register('additionalServices')} className="mt-1" />
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">Future Engagement</h2>
        <div>
          <Label htmlFor="recommendation">Likelihood of Recommending</Label>
          <Controller
            name="recommendation"
            control={control}
            rules={{ required: 'Please select your recommendation likelihood' }}
            render={({ field }) => (
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <SelectTrigger>
                  <SelectValue placeholder="Select likelihood" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="very-likely">Very Likely</SelectItem>
                  <SelectItem value="likely">Likely</SelectItem>
                  <SelectItem value="neutral">Neutral</SelectItem>
                  <SelectItem value="unlikely">Unlikely</SelectItem>
                  <SelectItem value="very-unlikely">Very Unlikely</SelectItem>
                </SelectContent>
              </Select>
            )}
          />
          {errors.recommendation && <span className="text-red-500 text-sm">{errors.recommendation.message}</span>}
        </div>
        <div>
          <Label htmlFor="futureProjects">Future Projects</Label>
          <Controller
            name="futureProjects"
            control={control}
            rules={{ required: 'Please select your likelihood for future projects' }}
            render={({ field }) => (
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <SelectTrigger>
                  <SelectValue placeholder="Select likelihood" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="definitely">Definitely</SelectItem>
                  <SelectItem value="probably">Probably</SelectItem>
                  <SelectItem value="might">Might</SelectItem>
                  <SelectItem value="probably-not">Probably Not</SelectItem>
                  <SelectItem value="definitely-not">Definitely Not</SelectItem>
                </SelectContent>
              </Select>
            )}
          />
          {errors.futureProjects && <span className="text-red-500 text-sm">{errors.futureProjects.message}</span>}
        </div>
      </div>

      <div>
        <Label htmlFor="additionalComments">Additional Comments</Label>
        <Textarea id="additionalComments" {...register('additionalComments')} className="mt-1" />
      </div>

      <Button type="submit" className="w-full">Submit Feedback</Button>
    </form>
  );
};

export default FeedbackForm;
