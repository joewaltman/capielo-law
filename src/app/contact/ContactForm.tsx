'use client';

import { useState, FormEvent } from 'react';
import { Button, Input, Textarea, Select } from '@/components/ui';
import { practiceAreas } from '@/data/practice-areas';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  practiceArea: string;
  preferredOffice: string;
  message: string;
  howHeard: string;
}

const initialFormData: FormData = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  practiceArea: '',
  preferredOffice: '',
  message: '',
  howHeard: '',
};

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Please describe how we can help you';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission
    console.log('Form submitted:', formData);

    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData(initialFormData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  if (isSubmitted) {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto mb-4">
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h3 className="font-display text-2xl font-semibold text-primary mb-2">
          Thank You!
        </h3>
        <p className="text-text-muted mb-6">
          We&apos;ve received your message and will contact you within one business
          day to schedule your consultation.
        </p>
        <Button onClick={() => setIsSubmitted(false)} variant="outline">
          Send Another Message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid sm:grid-cols-2 gap-6">
        <Input
          label="First Name"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          error={errors.firstName}
          required
          placeholder="John"
        />
        <Input
          label="Last Name"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          error={errors.lastName}
          required
          placeholder="Smith"
        />
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        <Input
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          error={errors.email}
          required
          placeholder="john@example.com"
        />
        <Input
          label="Phone"
          name="phone"
          type="tel"
          value={formData.phone}
          onChange={handleChange}
          error={errors.phone}
          required
          placeholder="(555) 555-5555"
        />
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        <Select
          label="Practice Area of Interest"
          name="practiceArea"
          value={formData.practiceArea}
          onChange={handleChange}
          placeholder="Select a practice area"
          options={[
            { value: '', label: 'Not sure / Other' },
            ...practiceAreas.map((area) => ({
              value: area.slug,
              label: area.title,
            })),
          ]}
        />
        <Select
          label="Preferred Office"
          name="preferredOffice"
          value={formData.preferredOffice}
          onChange={handleChange}
          placeholder="Select an office"
          options={[
            { value: '', label: 'No preference' },
            { value: 'sf-bay-area', label: 'San Francisco Bay Area' },
            { value: 'san-diego', label: 'San Diego' },
          ]}
        />
      </div>

      <Textarea
        label="How Can We Help?"
        name="message"
        value={formData.message}
        onChange={handleChange}
        error={errors.message}
        required
        placeholder="Please briefly describe your legal matter..."
        rows={5}
      />

      <Select
        label="How Did You Hear About Us?"
        name="howHeard"
        value={formData.howHeard}
        onChange={handleChange}
        placeholder="Select an option"
        options={[
          { value: '', label: 'Prefer not to say' },
          { value: 'referral', label: 'Referral from friend/family' },
          { value: 'attorney-referral', label: 'Referral from another attorney' },
          { value: 'search', label: 'Online search' },
          { value: 'social', label: 'Social media' },
          { value: 'other', label: 'Other' },
        ]}
      />

      <div className="pt-4">
        <Button type="submit" size="lg" disabled={isSubmitting} className="w-full sm:w-auto">
          {isSubmitting ? (
            <>
              <svg
                className="animate-spin -ml-1 mr-2 h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
              Submitting...
            </>
          ) : (
            'Request Consultation'
          )}
        </Button>
      </div>

      <p className="text-xs text-text-light">
        By submitting this form, you agree to our privacy policy. Your
        information will be kept confidential and will only be used to respond
        to your inquiry.
      </p>
    </form>
  );
}
