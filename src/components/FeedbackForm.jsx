import React from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

const FeedbackForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Here you would typically send the data to your backend
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">Basic Information</h2>
        <div>
          <Label htmlFor="clientName">Client Name</Label>
          <Input id="clientName" {...register('clientName', { required: true })} className="mt-1" />
          {errors.clientName && <span className="text-red-500 text-sm">This field is required</span>}
        </div>
        <div>
          <Label htmlFor="company">Company/Organization</Label>
          <Input id="company" {...register('company', { required: true })} className="mt-1" />
          {errors.company && <span className="text-red-500 text-sm">This field is required</span>}
        </div>
        <div>
          <Label htmlFor="projectName">Project Name/ID</Label>
          <Input id="projectName" {...register('projectName', { required: true })} className="mt-1" />
          {errors.projectName && <span className="text-red-500 text-sm">This field is required</span>}
        </div>
        <div>
          <Label htmlFor="completionDate">Date of Completion</Label>
          <Input id="completionDate" type="date" {...register('completionDate', { required: true })} className="mt-1" />
          {errors.completionDate && <span className="text-red-500 text-sm">This field is required</span>}
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">Service Evaluation</h2>
        <div>
          <Label>Overall Satisfaction</Label>
          <RadioGroup defaultValue="satisfied">
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
        </div>
        {/* Add similar RadioGroup components for other evaluation criteria */}
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
          <Select id="recommendation" {...register('recommendation')}>
            <option value="very-likely">Very Likely</option>
            <option value="likely">Likely</option>
            <option value="neutral">Neutral</option>
            <option value="unlikely">Unlikely</option>
            <option value="very-unlikely">Very Unlikely</option>
          </Select>
        </div>
        <div>
          <Label htmlFor="futureProjects">Future Projects</Label>
          <Select id="futureProjects" {...register('futureProjects')}>
            <option value="definitely">Definitely</option>
            <option value="probably">Probably</option>
            <option value="might">Might</option>
            <option value="probably-not">Probably Not</option>
            <option value="definitely-not">Definitely Not</option>
          </Select>
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