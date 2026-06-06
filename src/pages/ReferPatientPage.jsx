import { useState } from 'react'
import FallbackImage from '../components/FallbackImage'
import Icon from '../components/Icon'
import Reveal from '../components/Reveal'
import { BRAND } from '../data/site'
import { FORM_SUBMIT_ACTION, submitFormToEmail } from '../utils/formSubmit'

const MAX_REFERRAL_FILE_SIZE = 10 * 1024 * 1024

export default function ReferPatientPage() {
  const [submission, setSubmission] = useState({ status: 'idle', message: '' })

  async function handleReferralSubmit(event) {
    event.preventDefault()
    const form = event.currentTarget
    const referralOrder = form.elements.referralOrder?.files?.[0]

    if (referralOrder && referralOrder.size > MAX_REFERRAL_FILE_SIZE) {
      setSubmission({
        status: 'error',
        message: 'Referral order files must be 10MB or smaller.',
      })
      return
    }

    setSubmission({ status: 'loading', message: 'Sending the referral securely...' })

    try {
      await submitFormToEmail(form, {
        subject: 'New DreamCare patient referral',
        source: 'Refer a Patient page form',
      })
      form.reset()
      setSubmission({
        status: 'success',
        message: 'Thank you. The referral has been sent to DreamCare.',
      })
    } catch (error) {
      setSubmission({
        status: 'error',
        message: error?.message || 'Sorry, the referral could not be sent. Please call or email DreamCare directly.',
      })
    }
  }

  return (
    <section className="section refer-page">
      <div className="shell shell--tight">
        <Reveal className="refer-card-wrap">
          <form
            className="form-card refer-card"
            action={FORM_SUBMIT_ACTION}
            method="POST"
            encType="multipart/form-data"
            onSubmit={handleReferralSubmit}
          >
            <input type="hidden" name="_subject" value="New DreamCare patient referral" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_captcha" value="false" />
            <input className="form-honey" type="text" name="_honey" tabIndex="-1" autoComplete="off" aria-hidden="true" />

            <header className="refer-card__header">
              <div className="refer-card__brand">
                <FallbackImage
                  className="refer-card__logo"
                  src="/images/dreamcare-logo-transparent.png"
                  fallback="/images/dreamcare-logo.jpg"
                  alt="DreamCare PT"
                />
              </div>
              <div className="refer-card__title">
                <p className="eyebrow">Provider Referral</p>
                <h1 className="h2">Refer a Patient</h1>
                <p>Thank you for trusting {BRAND.name}. Please complete the form below to refer a patient.</p>
              </div>
              <span className="refer-card__header-icon" aria-hidden="true">
                <Icon name="clipboard" size={30} />
              </span>
            </header>

            <div className="refer-form-section">
              <div className="refer-form-section__head">
                <span className="refer-form-section__icon" aria-hidden="true">
                  <Icon name="briefcase" size={20} />
                </span>
                <div>
                  <h2>Provider Information</h2>
                  <p>Tell us about you and your facility.</p>
                </div>
              </div>

              <div className="form-grid">
                <label>Provider Name *
                  <input name="providerName" type="text" placeholder="Enter provider name" required />
                </label>
                <label>Practice / Facility Name *
                  <input name="facilityName" type="text" placeholder="Enter facility name" required />
                </label>
                <label>Phone Number *
                  <input name="providerPhone" type="tel" placeholder="Enter phone number" required />
                </label>
                <label>Email Address *
                  <input name="providerEmail" type="email" placeholder="Enter email address" required />
                </label>
              </div>
            </div>

            <div className="refer-form-section">
              <div className="refer-form-section__head">
                <span className="refer-form-section__icon" aria-hidden="true">
                  <Icon name="user" size={20} />
                </span>
                <div>
                  <h2>Patient Information</h2>
                  <p>Tell us about the patient you are referring.</p>
                </div>
              </div>

              <div className="form-grid">
                <label>Patient Full Name *
                  <input name="patientName" type="text" placeholder="Enter patient full name" required />
                </label>
                <label>Patient Phone Number *
                  <input name="patientPhone" type="tel" placeholder="Enter patient phone number" required />
                </label>
              </div>
            </div>

            <div className="refer-form-section">
              <div className="refer-form-section__head">
                <span className="refer-form-section__icon" aria-hidden="true">
                  <Icon name="plus" size={20} />
                </span>
                <div>
                  <h2>Clinical Information</h2>
                  <p>Help us understand the reason for this referral.</p>
                </div>
              </div>

              <div className="form-grid">
                <label className="form-grid--full">Reason for Referral / Diagnosis *
                  <textarea
                    name="referralReason"
                    rows="5"
                    placeholder="Enter reason for referral or primary diagnosis"
                    required
                  />
                </label>
                <label className="form-grid--full">Additional Notes (Optional)
                  <textarea
                    name="additionalNotes"
                    rows="4"
                    placeholder="Add any additional notes or relevant information"
                  />
                </label>
                <label className="form-grid--full refer-file-field">Upload Referral Order (Optional)
                  <input name="referralOrder" type="file" accept=".pdf,.jpg,.jpeg,.png" />
                  <span>PDF, JPG, PNG. Max. 10MB.</span>
                </label>
                <label className="form-grid--full refer-confirm">
                  <input name="authorizedToSubmit" type="checkbox" value="Confirmed" required />
                  <span>I confirm I am authorized to submit this referral. *</span>
                </label>
              </div>
            </div>

            {submission.message && (
              <p
                className={`form-status form-status--${submission.status}`}
                role={submission.status === 'error' ? 'alert' : 'status'}
                aria-live="polite"
              >
                {submission.message}
              </p>
            )}

            <button type="submit" className="btn btn--primary refer-submit" disabled={submission.status === 'loading'}>
              <Icon name="send" size={18} />
              {submission.status === 'loading' ? 'Sending...' : 'Submit Referral'}
            </button>

            <p className="refer-card__secure">
              <Icon name="shield" size={15} />
              All submissions are secure and confidential.
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  )
}
