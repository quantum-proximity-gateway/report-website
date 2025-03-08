import React from "react";

const SurveyTable = () => {
  return (
    <div className="p-6 w-full">
      <h2 className="text-2xl font-bold mb-6 text-white text-center">Survey Evaluation</h2>
      <div className="overflow-x-auto">
        <table className="w-full border border-gray-700 rounded-lg shadow-lg">
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="p-4 text-left border-b border-gray-700 text-lg w-1/2">Strengths ✅</th>
              <th className="p-4 text-left border-b border-gray-700 text-lg w-1/2">Limitations ⚠️</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-gray-900 text-white">
              <td className="p-4 border-b border-gray-700">
                <strong>✅ Direct User Insights</strong>  
                <p>The survey provided first-hand responses from individuals who regularly experience authentication challenges, making the data highly relevant.</p>
              </td>
              <td className="p-4 border-b border-gray-700">
                <strong>⚠️ Limited Sample Size</strong>  
                <p>The survey was conducted with a relatively small group of users, which may not be fully representative of all potential users. A larger dataset would improve the reliability of conclusions.</p>
              </td>
            </tr>
            <tr className="bg-gray-800 text-white">
              <td className="p-4 border-b border-gray-700">
                <strong>✅ Broad Applicability</strong>  
                <p>The inclusion of various user groups (corporate employees, students, users with advanced accessibility requirements) ensured that diverse perspectives were captured.</p>
              </td>
              <td className="p-4 border-b border-gray-700">
                <strong>⚠️ Potential Response Bias</strong>  
                <p>Respondents may have given answers that they thought were socially desirable or aligned with the project’s goals rather than their actual preferences. For example, some users might have expressed support for facial recognition authentication without fully considering the privacy implications.</p>
                </td>
            </tr>
            <tr className="bg-gray-900 text-white">
              <td className="p-4 border-b border-gray-700">
                <strong>✅ Balanced Question Design</strong>  
                <p>The mix of multiple-choice, closed-ended and open-ended questions allowed for both statistical analysis and deeper qualitative insights. Open-ended responses specifically provided valuable user-driven feature suggestions, such as 2-factor authentication and an AI chatbot for editing accessibility settings.</p>
              </td>
              <td className="p-4 border-b border-gray-700">
                <strong>⚠️ Lack of Longitudinal Data</strong>  
                <p>The survey only captured a single point in time and did not account for changing user preferences over time. A user’s opinion on the access control mechanisms might evolve as they gain experience with new authentication technologies or encounter real-world security breaches.</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SurveyTable;
