"use client"

import { useTranslation } from "react-i18next"
import UploadComponent from "../compononets/UploadComponent"
import { useState } from "react"
import { createTicket } from "../api/axios"

const Support = () => {
  const { t } = useTranslation()

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    product: "",
    subject: "",
    message: "",
    attachments: [], // To store uploaded files
  })

  const [errors, setErrors] = useState({})
  const [isSubmitted, setIsSubmitted] = useState(false)

  // Function to handle file uploads (attachments)
  const handleFileUpload = (files) => {
    setFormData((prev) => ({
      ...prev,
      attachments: files,
    }))
  }

  const validateForm = () => {
    const tempErrors = {}
    let isValid = true

    if (!formData.firstName.trim()) {
      tempErrors.firstName = "First name is required"
      isValid = false
    }

    if (!formData.lastName.trim()) {
      tempErrors.lastName = "Last name is required"
      isValid = false
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!formData.email.trim() || !emailRegex.test(formData.email)) {
      tempErrors.email = "Valid email is required"
      isValid = false
    }

    const phoneRegex = /^\+?[\d\s-]{10,}$/
    if (!formData.phoneNumber.trim() || !phoneRegex.test(formData.phoneNumber)) {
      tempErrors.phoneNumber = "Valid phone number is required"
      isValid = false
    }

    if (!formData.product) {
      tempErrors.product = "Please select a product"
      isValid = false
    }

    if (!formData.subject.trim()) {
      tempErrors.subject = "Subject is required"
      isValid = false
    }

    if (!formData.message.trim()) {
      tempErrors.message = "Message is required"
      isValid = false
    }

    setErrors(tempErrors)
    return isValid
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (validateForm()) {
      // Format form data according to the backend model
      const ticketData = {
        subject: formData.subject,
        description: formData.message,
        productType: formData.product,
        user: {
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phoneNumber: formData.phoneNumber,
        },
        attachments: formData.attachments.map((file) => ({
          path: file.path, // Assuming each file has a 'path' property
          type: file.type, // Assuming each file has a 'type' property
        })),
      }

      try {
        const result = await createTicket(ticketData) // Send the ticket data to the backend
        console.log("API Response:", result) // Log the API response

        // After successful submission, show confirmation and reset form
        setIsSubmitted(true)
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phoneNumber: "",
          product: "",
          subject: "",
          message: "",
          attachments: [], // Clear attachments after submission
        })
      } catch (error) {
        console.error("Submission error:", error)
        setErrors((prev) => ({
          ...prev,
          submit: "Failed to submit form. Please try again.",
        }))
      }
    }
  }

  return (
    <>
      <div className="flex pt-20 flex-col font-inter items-center mx-auto w-[90%] max-sm:w-[95%] h-fit mb-[35%] max-sm:mb-[115%]">
        <div className="h-screen flex flex-col items-center">
          <h1 className="font-semibold text-3xl my-5">{t("support.1")}</h1>
          <p className="mb-8">{t("support.2")}</p>

          <div className="rounded-md bg-[#F8F8F8] sm:w-[80%] w-[100%] h-fit py-10">
            {isSubmitted ? (
              <div className="text-center my-56">
                <h3 className="text-2xl font-bold mb-4">Your support request has been successfully submitted.</h3>
                <p className="text-lg mb-8">Thank you for reaching out! </p>
                <button onClick={() => setIsSubmitted(false)} className="bg-black rounded-xl text-white px-6 py-2">
                  Submit Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="w-full h-full flex flex-col justify-around gap-6 items-center">
                <h1 className="font-semibold text-2xl my-4 text-center">{t("support.3")}</h1>

                {/* Form fields here */}
                <div className="flex sm:flex-row flex-col sm:gap-14 gap-4 w-full justify-center items-center">
                  <div className="sm:w-2/6 w-[75%]">
                    <input
                      className={`bg-white rounded-lg w-full h-10 p-4 border-2 ${errors.firstName ? "border-red-500" : "border-gray-100"}`}
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      placeholder={t("contact.first_name")}
                    />
                    {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
                  </div>
                  <div className="sm:w-2/6 w-[75%]">
                    <input
                      className={`bg-white rounded-lg w-full h-10 p-4 border-2 ${errors.lastName ? "border-red-500" : "border-gray-100"}`}
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      placeholder={t("contact.last_name")}
                    />
                    {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>}
                  </div>
                </div>

                <div className="w-9/12">
                  <input
                    className={`bg-white rounded-lg w-full h-10 p-4 border-2 ${errors.email ? "border-red-500" : "border-gray-100"}`}
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder={t("contact.email")}
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>

                <div className="w-9/12">
                  <input
                    className={`bg-white rounded-lg w-full h-10 p-4 border-2 ${errors.phoneNumber ? "border-red-500" : "border-gray-100"}`}
                    type="tel"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    placeholder={t("support.phone")}
                  />
                  {errors.phoneNumber && <p className="text-red-500 text-sm mt-1">{errors.phoneNumber}</p>}
                </div>

                <div className="relative w-9/12">
                  <select
                    className={`bg-white rounded-lg w-full h-10 px-4 border-2 ${errors.product ? "border-red-500" : "border-gray-100"} appearance-none text-gray-400 [&:not(:placeholder-shown)]:text-black`}
                    name="product"
                    value={formData.product}
                    onChange={handleInputChange}
                  >
                    <option value="" disabled className="text-gray-400">
                      {t("support.Type")}
                    </option>
                    <option value="time_fund" className="text-black">
                      Time Fund
                    </option>
                    <option value="sitota" className="text-black">
                      Sitota
                    </option>
                    <option value="sms_service" className="text-black">
                      SMS Service
                    </option>
                    <option value="property_management" className="text-black">
                      Property Management
                    </option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4">
                    <svg className="h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                  {errors.product && <p className="text-red-500 text-sm mt-1">{errors.product}</p>}
                </div>

                <div className="w-9/12">
                  <input
                    className={`bg-white rounded-lg w-full h-10 p-4 border-2 ${errors.subject ? "border-red-500" : "border-gray-100"}`}
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder={t("contact.subject")}
                  />
                  {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject}</p>}
                </div>

                <div className="w-9/12">
                  <textarea
                    rows={3}
                    className={`bg-white rounded-lg w-full p-3 border-2 resize-none ${errors.message ? "border-red-500" : "border-gray-100"}`}
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder={t("support.message")}
                  />
                  {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                </div>

                {/* Upload Component */}
                <UploadComponent onFileUpload={handleFileUpload} />

                <button type="submit" className="bg-black rounded-xl text-white w-36 h-9">
                  {t("contact.send")}
                </button>

                {errors.submit && <p className="text-red-500 text-sm text-center">{errors.submit}</p>}
              </form>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default Support

