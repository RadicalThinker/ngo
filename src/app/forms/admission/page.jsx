'use client'
import { Formik, Field, Form } from 'formik'
import * as Yup from 'yup'
import FormCard from '@/components/FormCard'

const AdmissionSchema = Yup.object().shape({
  name: Yup.string().required('Required'),
  fathersName: Yup.string().required('Required'),
  age: Yup.number().min(12, 'Invalid age').required('Required'),
  address: Yup.string().required('Required'),
  education: Yup.string().required('Required'),
  substance: Yup.string().required('Required'),
  contact: Yup.string().matches(/^[0-9]{10}$/, 'Invalid phone number'),
  admissionDate: Yup.date().required('Required'),
  admissionTime: Yup.string().required('Required'),
})

export default function AdmissionForm() {
  return (
    <FormCard title="Client Admission" description="Please fill in client details">
      <Formik
        initialValues={{ 
          name: '',
          fathersName: '', 
          age: '', 
          address: '',
          education: '',
          substance: '', 
          contact: '',
          admissionDate: '',
          admissionTime: ''
        }}
        validationSchema={AdmissionSchema}
        onSubmit={(values) => console.log(values)}
      >
        {({ errors, touched }) => (
          <Form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <Field
                  name="name"
                  className={`w-full p-2 border rounded-lg ${errors.name && touched.name ? 'border-red-500' : 'border-gray-300'}`}
                  placeholder="John Doe"
                />
                {errors.name && touched.name && (
                  <p className="mt-1 text-sm text-red-600">{errors.name}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Father's Name
                </label>
                <Field
                  name="fathersName"
                  className={`w-full p-2 border rounded-lg ${errors.fathersName && touched.fathersName ? 'border-red-500' : 'border-gray-300'}`}
                  placeholder="Robert Doe"
                />
                {errors.fathersName && touched.fathersName && (
                  <p className="mt-1 text-sm text-red-600">{errors.fathersName}</p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Age
                </label>
                <Field
                  name="age"
                  type="number"
                  className={`w-full p-2 border rounded-lg ${errors.age && touched.age ? 'border-red-500' : 'border-gray-300'}`}
                  placeholder="32"
                />
                {errors.age && touched.age && (
                  <p className="mt-1 text-sm text-red-600">{errors.age}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Education
                </label>
                <Field
                  as="select"
                  name="education"
                  className={`w-full p-2 border rounded-lg ${errors.education && touched.education ? 'border-red-500' : 'border-gray-300'}`}
                >
                  <option value="">Select education level</option>
                  <option value="highSchool">High School</option>
                  <option value="associate">Associate's Degree</option>
                  <option value="bachelor">Bachelor's Degree</option>
                  <option value="master">Master's Degree</option>
                  <option value="doctorate">Doctorate</option>
                  <option value="other">Other</option>
                </Field>
                {errors.education && touched.education && (
                  <p className="mt-1 text-sm text-red-600">{errors.education}</p>
                )}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Address
              </label>
              <Field
                as="textarea"
                name="address"
                rows="3"
                className={`w-full p-2 border rounded-lg ${errors.address && touched.address ? 'border-red-500' : 'border-gray-300'}`}
                placeholder="123 Main St, City, State, ZIP"
              />
              {errors.address && touched.address && (
                <p className="mt-1 text-sm text-red-600">{errors.address}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Primary Substance
              </label>
              <Field
                as="select"
                name="substance"
                className={`w-full p-2 border rounded-lg ${errors.substance && touched.substance ? 'border-red-500' : 'border-gray-300'}`}
              >
                <option value="">Select substance</option>
                <option value="alcohol">Alcohol</option>
                <option value="opioids">Opioids</option>
                <option value="cannabis">Cannabis</option>
              </Field>
              {errors.substance && touched.substance && (
                <p className="mt-1 text-sm text-red-600">{errors.substance}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Contact Number
              </label>
              <Field
                name="contact"
                className={`w-full p-2 border rounded-lg ${errors.contact && touched.contact ? 'border-red-500' : 'border-gray-300'}`}
                placeholder="9876543210"
              />
              {errors.contact && touched.contact && (
                <p className="mt-1 text-sm text-red-600">{errors.contact}</p>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Admission Date
                </label>
                <Field
                  name="admissionDate"
                  type="date"
                  className={`w-full p-2 border rounded-lg ${errors.admissionDate && touched.admissionDate ? 'border-red-500' : 'border-gray-300'}`}
                />
                {errors.admissionDate && touched.admissionDate && (
                  <p className="mt-1 text-sm text-red-600">{errors.admissionDate}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Admission Time
                </label>
                <Field
                  name="admissionTime"
                  type="time"
                  className={`w-full p-2 border rounded-lg ${errors.admissionTime && touched.admissionTime ? 'border-red-500' : 'border-gray-300'}`}
                />
                {errors.admissionTime && touched.admissionTime && (
                  <p className="mt-1 text-sm text-red-600">{errors.admissionTime}</p>
                )}
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Submit Admission
            </button>
          </Form>
        )}
      </Formik>
    </FormCard>
  )
}