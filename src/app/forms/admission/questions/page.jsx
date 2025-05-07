'use client'
import { useState, useRef } from 'react';

export default function AlcoholismQuestionnaire() {
  const [answers, setAnswers] = useState(Array(20).fill(null));
  const [submitted, setSubmitted] = useState(false);
  const [userName, setUserName] = useState('');
  const [contactInfo, setContactInfo] = useState('');
  const formRef = useRef(null);

  const questions = [
    "Do you lose time from work due to your drinking?",
    "Is drinking making your home life unhappy?",
    "Do you drink because you are shy with other people?",
    "Is drinking affecting your reputation?",
    "Have you ever felt remorse after drinking?",
    "Have you gotten into financial difficulties as a result of your drinking?",
    "Do you turn to lower companions and an inferior environment when drinking?",
    "Does your drinking make you careless of your family's welfare?",
    "Has your ambition decreased since drinking?",
    "Do you crave a drink at a definite time daily?",
    "Do you want a drink the next morning?",
    "Does drinking cause you to have difficulty in sleeping?",
    "Has your efficiency decreased since drinking?",
    "Is drinking jeopardizing your job or business?",
    "Do you drink to escape from worries or troubles?",
    "Do you drink alone?",
    "Have you ever had a complete loss of memory as a result of your drinking?",
    "Has your physician ever treated you for drinking?",
    "Do you drink to build up your self-confidence?",
    "Have you ever been in a hospital or institution on account of drinking?"
  ];

  const handleAnswerChange = (index, value) => {
    const newAnswers = [...answers];
    newAnswers[index] = value;
    setAnswers(newAnswers);
  };

  const countYesAnswers = () => {
    return answers.filter(answer => answer === true).length;
  };

  const getResult = () => {
    const yesCount = countYesAnswers();
    if (yesCount === 0) {
      return "Based on your responses, you show no signs of alcohol addiction.";
    } else if (yesCount === 1) {
      return "You have answered YES to one question. There is a definite warning that you may be an alcoholic.";
    } else if (yesCount === 2) {
      return "You have answered YES to two questions. The chances are that you are an alcoholic.";
    } else {
      return "You have answered YES to three or more questions. You are definitely an alcoholic.";
    }
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  const handlePrint = () => {
    const printContent = document.getElementById('printableArea');
    const originalContents = document.body.innerHTML;
    
    document.body.innerHTML = printContent.innerHTML;
    window.print();
    document.body.innerHTML = originalContents;
    
    // Reattach event listeners
    setTimeout(() => {
      window.location.reload();
    }, 100);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div id="printableArea" className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-indigo-800">Alcoholism Self-Assessment Questionnaire</h1>
          <p className="mt-2 text-gray-600">To answer this questionnaire, please respond to the following questions as honestly as you can.</p>
          <p className="mt-2 text-red-600 font-medium">You do not ever have to show this to anyone, nor should you!</p>
        </div>

        {!submitted ? (
          <div className="space-y-6">
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name (Optional)</label>
                <input
                  type="text"
                  id="name"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
              
              <div>
                <label htmlFor="contact" className="block text-sm font-medium text-gray-700">Contact Information (Optional)</label>
                <input
                  type="text"
                  id="contact"
                  value={contactInfo}
                  onChange={(e) => setContactInfo(e.target.value)}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
            </div>

            <div className="space-y-4">
              {questions.map((question, index) => (
                <div key={index} className="p-4 bg-gray-50 rounded-md">
                  <p className="font-medium">{index + 1}. {question}</p>
                  <div className="mt-2 flex items-center space-x-6">
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        name={`question-${index}`}
                        checked={answers[index] === true}
                        onChange={() => handleAnswerChange(index, true)}
                        className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
                      />
                      <span className="ml-2 text-gray-700">Yes</span>
                    </label>
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        name={`question-${index}`}
                        checked={answers[index] === false}
                        onChange={() => handleAnswerChange(index, false)}
                        className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
                      />
                      <span className="ml-2 text-gray-700">No</span>
                    </label>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-center">
              <button
                onClick={handleSubmit}
                className="w-full sm:w-auto bg-indigo-600 border border-transparent rounded-md shadow-sm py-2 px-4 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Submit Assessment
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            {userName && (
              <div>
                <p className="font-medium">Name: {userName}</p>
              </div>
            )}
            {contactInfo && (
              <div>
                <p className="font-medium">Contact: {contactInfo}</p>
              </div>
            )}
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Your Results:</h2>
              <p className="text-lg font-medium text-indigo-700">{getResult()}</p>
              
              <div className="mt-4">
                <p className="font-medium">Total "Yes" answers: {countYesAnswers()}</p>
              </div>
              
              <div className="mt-6 space-y-4">
                <h3 className="font-medium text-gray-900">Your answers:</h3>
                {questions.map((question, index) => (
                  <div key={index} className="flex">
                    <span className="font-medium w-6">{index + 1}.</span>
                    <div className="flex-1">
                      <p>{question}</p>
                      <p className={`font-medium ${answers[index] ? 'text-red-600' : 'text-green-600'}`}>
                        {answers[index] ? 'Yes' : 'No'}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-500 mb-4">
                This is a self-assessment tool and does not replace professional medical advice.
                If you are concerned about your drinking habits, please consult a healthcare professional.
              </p>
              
              <button
                onClick={handlePrint}
                className="bg-indigo-600 border border-transparent rounded-md shadow-sm py-2 px-4 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Print Results
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}