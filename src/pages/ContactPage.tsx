import { useState } from 'react'
import './ContactPage.css'

// TODO: Replace with your own Formspree endpoint ID
// Sign up at https://formspree.io and create a new form to get your endpoint ID.
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID'

type InquiryType = 'fan-mail' | 'booking' | 'media'

interface FormFields {
  name: string
  email: string
  inquiryType: InquiryType | ''
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  inquiryType?: string
  message?: string
}

function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

function validateForm(fields: FormFields): FormErrors {
  const errors: FormErrors = {}

  if (!fields.name.trim()) {
    errors.name = 'Name is required.'
  }

  if (!fields.email.trim()) {
    errors.email = 'Email is required.'
  } else if (!validateEmail(fields.email)) {
    errors.email = 'Please enter a valid email address.'
  }

  if (!fields.inquiryType) {
    errors.inquiryType = 'Please select an inquiry type.'
  }

  if (!fields.message.trim()) {
    errors.message = 'Message is required.'
  }

  return errors
}

export function ContactPage() {
  const [fields, setFields] = useState<FormFields>({
    name: '',
    email: '',
    inquiryType: '',
    message: '',
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target
    setFields((prev) => ({ ...prev, [name]: value }))
    // Clear the error for the field being edited
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const validationErrors = validateForm(fields)
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    setStatus('submitting')

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: fields.name,
          email: fields.email,
          inquiryType: fields.inquiryType,
          message: fields.message,
        }),
      })

      if (response.ok) {
        setStatus('success')
        setFields({ name: '', email: '', inquiryType: '', message: '' })
        setErrors({})
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  function handleReset() {
    setStatus('idle')
    setErrors({})
  }

  return (
    <main className="contact-page">
      <div className="contact-page__inner">
        <h1 className="contact-page__heading">Contact</h1>

        <div className="contact-page__notice">
          <p>
            <strong>Fan mail &amp; general inquiries:</strong> Use the form below.
          </p>
          <p>
            <strong>Booking:</strong> For corporate events, club bookings, and festival
            appearances, select <em>Booking</em> in the dropdown. For urgent booking
            requests, please also reach out directly through Mike&rsquo;s management.
          </p>
        </div>

        {status === 'success' ? (
          <div className="contact-page__success" role="alert">
            <p>Thanks for reaching out! Mike (or his team) will be in touch soon.</p>
            <button className="contact-page__reset-btn" onClick={handleReset}>
              Send another message
            </button>
          </div>
        ) : (
          <form
            className="contact-form"
            onSubmit={handleSubmit}
            noValidate
            aria-label="Contact form"
          >
            {status === 'error' && (
              <div className="contact-form__error-banner" role="alert">
                Something went wrong. Please try again, or email directly if the problem
                persists.
              </div>
            )}

            <div className="contact-form__field">
              <label className="contact-form__label" htmlFor="contact-name">
                Name <span aria-hidden="true">*</span>
              </label>
              <input
                className={`contact-form__input${errors.name ? ' contact-form__input--error' : ''}`}
                id="contact-name"
                type="text"
                name="name"
                value={fields.name}
                onChange={handleChange}
                autoComplete="name"
                aria-required="true"
                aria-describedby={errors.name ? 'contact-name-error' : undefined}
              />
              {errors.name && (
                <span
                  id="contact-name-error"
                  className="contact-form__field-error"
                  role="alert"
                >
                  {errors.name}
                </span>
              )}
            </div>

            <div className="contact-form__field">
              <label className="contact-form__label" htmlFor="contact-email">
                Email <span aria-hidden="true">*</span>
              </label>
              <input
                className={`contact-form__input${errors.email ? ' contact-form__input--error' : ''}`}
                id="contact-email"
                type="email"
                name="email"
                value={fields.email}
                onChange={handleChange}
                autoComplete="email"
                aria-required="true"
                aria-describedby={errors.email ? 'contact-email-error' : undefined}
              />
              {errors.email && (
                <span
                  id="contact-email-error"
                  className="contact-form__field-error"
                  role="alert"
                >
                  {errors.email}
                </span>
              )}
            </div>

            <div className="contact-form__field">
              <label className="contact-form__label" htmlFor="contact-inquiry-type">
                Inquiry Type <span aria-hidden="true">*</span>
              </label>
              <select
                className={`contact-form__select${errors.inquiryType ? ' contact-form__input--error' : ''}`}
                id="contact-inquiry-type"
                name="inquiryType"
                value={fields.inquiryType}
                onChange={handleChange}
                aria-required="true"
                aria-describedby={errors.inquiryType ? 'contact-inquiry-type-error' : undefined}
              >
                <option value="">Select an inquiry type…</option>
                <option value="fan-mail">Fan Mail</option>
                <option value="booking">Booking</option>
                <option value="media">Media</option>
              </select>
              {errors.inquiryType && (
                <span
                  id="contact-inquiry-type-error"
                  className="contact-form__field-error"
                  role="alert"
                >
                  {errors.inquiryType}
                </span>
              )}
            </div>

            <div className="contact-form__field">
              <label className="contact-form__label" htmlFor="contact-message">
                Message <span aria-hidden="true">*</span>
              </label>
              <textarea
                className={`contact-form__textarea${errors.message ? ' contact-form__input--error' : ''}`}
                id="contact-message"
                name="message"
                value={fields.message}
                onChange={handleChange}
                rows={6}
                aria-required="true"
                aria-describedby={errors.message ? 'contact-message-error' : undefined}
              />
              {errors.message && (
                <span
                  id="contact-message-error"
                  className="contact-form__field-error"
                  role="alert"
                >
                  {errors.message}
                </span>
              )}
            </div>

            <button
              className="contact-form__submit-btn"
              type="submit"
              disabled={status === 'submitting'}
            >
              {status === 'submitting' ? 'Sending…' : 'Send Message'}
            </button>
          </form>
        )}
      </div>
    </main>
  )
}
