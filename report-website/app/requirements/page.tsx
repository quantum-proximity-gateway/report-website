import { SidebarTrigger } from "@/components/ui/sidebar"
import { Separator } from "@/components/ui/separator"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Metadata } from 'next';
import Image from "next/image";


export const metadata: Metadata = {
    title: 'Requirements',
  };

export default function Requirements() {
  return (
    <main className="w-full">
      <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
        <SidebarTrigger />
        <Separator orientation="vertical" className="mr-2 h-4 hidden md:block" />
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem className="hidden md:block">
              <BreadcrumbLink href="/">Quantum Proximity Gateway</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator className="hidden md:block" />
            <BreadcrumbItem className="hidden md:block">
              <BreadcrumbPage>Requirements</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </header>
      <div className="flex flex-col items-center shrink-0 border-b p-8">
        <h1 className="text-6xl text-center my-6">Requirements</h1>
      </div>
      <div className="flex justify-center p-6">
        <div className="max-w-4xl">
          <div id="project-background">
            <h1 className="text-4xl font-bold my-6">Project Background and Partner Introduction</h1>
            <p className="text-lg my-6">
              The Quantum Proximity Gateway (QPG) is a cutting-edge authentication system developed in collaboration with IBM. This system aims to revolutionise user authentication and access control by eliminating manual logins and streamlining authentication through proximity detection, facial recognition, and AI-driven profile management.         
            </p>
            <p className="text-lg">
              Our project sets a precedent for an innovative way to interact with LLMs via a method we named <strong>Proximity Prompting</strong>. By leveraging the proximity detection capabilities of our system, users can engage with IBM's Granite 3.2 AI model contextually and intuitively, without the friction of traditional interfaces.
            </p>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  <p className="text-2xl font-bold">
                    Why is this project needed?
                  </p>
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-lg">
                    Traditional authentication methods, such as password-based logins and manual profile configurations, are slow, inefficient, and prone to security vulnerabilities. Our research has shown that employees waste an average of XX minutes per day logging into various systems, setting up profiles and ensuring access permissions are correctly assigned, which translates into hundreds of hours per year in lost productivity. More specifically, however, current authentication methods drastically fail to include all members of society, creating additional barriers for disabled, elderly and neurodivergent users, who may require a more automated, handsfree authentication process. 
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  <p className="text-2xl font-bold">
                    Who benefits from this project?
                  </p>  
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-lg">
                    The QPG is designed with all users in mind - from corporate employees in large enterprises, to students and faculty memnbers in educational institutions, and even individual users who frequently switch between multiple devices, this system provides seamless, context-aware authentication to improve the lives of all. By integrating IBM’s Granite 3.2 AI model and post-quantum cryptography, this solution further ensures that users experience effortless, secure, and adaptive authentication in their work environments. 
                  </p>
                  <p className="text-lg my-6">
                    We believe the QPG will especially revolutionise the way in which neurodivergent, elderly and quadriplegic users interact with their devices. By eliminating the need for traditional passwords and reducing cognitive load, the QPG enables increased overall accessibility - for neurodivergent users, the system minimises disruptions by automatically loading personalised settings upon login, and providing intuitive, frictionless access. Elderly users benefit from simplified authentication that does not rely on memorisation of passwords or fine motor skills, ensuring security without added complexity. Quadriplegic users can authenticate effortlessly through multimodal inputs, such as facial recognition and proximity detection, eliminating barriers to device interaction. 
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          <div id="goals">
            <h1 className="text-4xl font-bold my-6">Goals</h1>
            <p className="text-lg my-6">
              The Quantum Proximity Gateway is designed to:
            </p>
            <ul className="text-lg list-disc pl-6">
              <li>
                <strong>Enhance Accessibility & User Experience</strong>
                <ul className="text-lg list-disc my-3 pl-6">
                  <li>Eliminate manual logins by using BLE proximity sensing and real-time facial recognition via Raspberry Pi.</li>
                  <li>Offer automated authentication to reduce cognitive load for neurodivergent users.</li>
                  <li>Provide customised experiences by dynamically loading user profiles and accessibility settings.</li>
                  <li>Enable easy settings configuration via an AI agent, implemented using Granite 3.2</li>

                </ul>
              </li>
              <li>
                <strong>Improve Security & Privacy</strong>
                <ul className="text-lg list-disc my-3 pl-6">
                  <li>Implement post-quantum encryption (PQC) to safeguard sensitive user data.</li>
                  <li>Ensure zero-trust authentication by using biometric verification (facial recognition) before granting access.</li>
                  <li>Enable role-based access control (RBAC) for shared devices.</li>
                </ul>
              </li>
              <li>
                <strong>Create a Scalable IoT Ecosystem</strong>
                <ul className="text-lg list-disc my-3 pl-6">
                  <li>Establish a centralised authetnication architecture that can validate users.</li>
                  <li>Develop a modular authentication system adaptable to various industries.</li>
                </ul>
              </li>
              <li>
                <strong>Increase Efficiency & Reduce Downtime</strong>
                <ul className="text-lg list-disc my-3 pl-6">
                  <li>Minimise login friction in shared spaces by automatically configuring devices upon user entry.</li>
                  <li>Improve productivity in corporate environments, education institutions, and hot-desking scenarios.</li>
                </ul>
              </li>
            </ul>
          </div>
          {/* TODO: Add interviews/proof of survey */}
          <div id="requirements-gathering">
            <h1 className="text-4xl font-bold my-6">Requirements Gathering</h1>
            <p className="text-lg my-6">
              In order to collect the requirements needed to design the QPG, we used a multi-phase approach to ensure that our system is user-centric and industry-relevant:
            </p>
            <ul className="text-lg list-disc pl-6">
              <li>
                <strong>User Surveys and Feedback</strong>
                <ul className="text-lg list-disc my-3 pl-6">
                  <li>We conducted structured surveys via questionnaires to assess the challenges with traditional authentication.</li>
                  <li>All participants were asked to sign a research participation consent form, which outlined the details of the survey to participants and allowed them to make an informed decision on whether to participate.</li>
                  <li>Participants were asked about hot-desking difficulties, privacy concerns, and preferred authentication methods.</li>
                  <li>We used a combination of open and closed questions, allowing us to gather both detailed, qualitative insights from open-ended questions while also getting quantifiable data and clear structure from closed-ended questions.</li>
                </ul>
              </li>
              <li>
                <strong>Stakeholder and Client Interviews</strong>
                <ul className="text-lg list-disc my-3 pl-6">
                  <li>We had several discussions with IBM engineers, IT security specialists and accessibility experts which helped to shape our security and usability priorities.</li>
                  <li>Detailed feedback was gathered on encryption protocols, AI-driven authentication, and privacy policies.</li>
                </ul>
              </li>
              <li>
                <strong>Prototyping and Iterative Testing</strong>
                <ul className="text-lg list-disc my-3 pl-6">
                  <li>Initial sketches were drawn, and prototypes were designed, which we tested with real users. [link to sketches and interactive wireframe URL]</li>
                  <li>A heuristic evaluation was then conducted to refine interface design, accessibility, and user workflow. (maybe expand on this? Another subheading?)</li>
                </ul>
              </li>
            </ul>
            <h1 className="text-2xl font-bold my-6">Survey Data Analysis</h1>
            <p className="text-lg mb-6">
              Our user survey produced valuable insights:
            </p>

            <div className="grid gap-6 my-8">
              {/* Survey Insight 1 */}
              <div className="rounded-lg p-6 shadow-lg border border-gray-700">
                <div className="flex items-start">
                  <div className="text-3xl text-blue-400 mr-4">67%</div>
                  <p className="text-lg">
                    of respondents stated that they had trouble with hot-desking, and found manual logins inconvenient and time-consuming.
                  </p>
                </div>
              </div>
              
              {/* Survey Insight 2 */}
              <div className="rounded-lg p-6 shadow-lg border border-gray-700">
                <div className="flex items-start">
                  <div className="text-3xl text-green-400 mr-4">100%</div>
                  <p className="text-lg">
                    of respondents suggested that having a mechanism to automatically load up your profile and settings would be helpful, with many commenting that "it would save time by eliminating the need to log in and configure settings manually, making the process smoother and faster, especially when switching between devices".
                  </p>
                </div>
              </div>

              {/* Survey Insight 3 */}
              <div className="rounded-lg p-6 shadow-lg border border-gray-700">
                <div className="flex items-start">
                  <div className="text-3xl text-purple-400 mr-4">
                    <Image src="/chatbot.svg" alt="Chat Bot Icon" width={90} height={100}/>
                  </div>
                  <p className="text-lg">
                    Users with accessibility needs strongly supported AI-driven chatbot assistance for modifying settings, noting that this would be "a great feature".
                  </p>
                </div>
              </div>

              {/* Survey Insight 4 */}
              <div className="rounded-lg p-6 shadow-lg border border-gray-700">
                <div className="flex items-start">
                  <div className="text-3xl text-amber-400 mr-4">67%</div>
                  <div className="text-lg">
                    <p>
                      When asked specifically whether a proximity-based mechanism for authentication and access to profiles would be useful, <strong>67% of respondents agreed</strong>, with one stating that "<em>it sounds very futuristic; it would help people with accessibility challenges all around the world access essential services on their devices</em>".
                    </p>
                    <p className="mt-3">
                      We believe that this figure will be significantly higher once more users are educated on how the mechanism works and how it can be used, as one respondent selected the "I'm not sure" option, suggesting they may not have known what the mechanism entails.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-lg p-6 border border-gray-700 my-8">
              <h3 className="text-xl font-semibold mb-4">Conclusion</h3>
              <p className="text-lg">
                The data we collected sufficiently justified the need for BLE proximity technology & facial recognition integration for auto-profile loading, as well as the implementation of an AI chatbot feature added for guidance & settings adjustments. The survey also encouraged us to use post-quantum encryption to enhance security, as many respondents highlighted slight security concerns within the "Any additional comments?" section of the questionnaire.
              </p>
            </div>
            <div className="p-6 w-full">
              <h2 className="text-2xl font-bold mb-6 text-center">Survey Evaluation</h2>
              <div className="overflow-x-auto">
                <table className="w-full rounded-xl shadow-lg overflow-hidden">
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
                      <td className="p-4">
                        <strong>⚠️ Lack of Longitudinal Data</strong>  
                        <p>The survey only captured a single point in time and did not account for changing user preferences over time. A user’s opinion on the access control mechanisms might evolve as they gain experience with new authentication technologies or encounter real-world security breaches.</p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <p className="text-lg">
              By refining the survey methodology and incorporating more neutral phrasing to reduce bias, we can further improve the survey's accuracy, allowing us to better gauge the system’s real-world effectiveness.
            </p>
          </div>
          <div id="personas">
            <h1 className="text-4xl font-bold my-6">Personas</h1>
            <p className="text-lg">
              To ensure the QPG meets the needs of different user groups, we developed detailed personas representing key stakeholders and typical users of the system. These personas help in designing features that match real-world user behaviors and challenges.
            </p>
            <p className="text-lg my-6">
              [insert pictures of personas]
            </p>
            <p className="text-lg my-6">
              Based on the surveys and personas, these are the conclusions our team came to regarding requirements:
            </p>
              <ul className="text-lg list-disc my-3 pl-6">
                  <li><strong>Seamless Authentication Across Multiple Environments: </strong>The surveys highlighted a significant frustration with manual logins, particularly in hot-desking offices, educational institutions, and accessibility-focused use cases. Users consistently expressed a need for instant, hands-free authentication without having to enter passwords repeatedly. This reinforced the necessity of Bluetooth Low Energy (BLE) proximity detection combined with real-time facial recognition to provide frictionless access to computers and shared devices.</li>
              </ul>
              <ul className="text-lg list-disc pl-6 my-3">
                <li><strong>Diverse Use Cases: </strong>Our survey results revealed a variety of use cases for the QPG authentication system, ranging from increasing productivity and reducing time wasted accessing devices in the office, to enhancing accessibility for users with disabilities. This diversity emphasises the importance of creating a versatile solution that adapts to a wide range of user needs and preferences, and as such, facial recognition must be combined with the proximity mechanism to ensure complete functionality and multi-factor authentication.</li>
              </ul>
              <ul className="text-lg list-disc pl-6 my-3">
                  <li><strong>AI Chatbot: </strong>Users appreciated the idea of AI-driven chatbot for personalising preferences. Accessibility features such as high contrast mode, larger text size, and dark mode were found to be crucial to the user experience of devices, especially to neurodivergent and eldelry users, and so this feature serves a pivotal role in ensuring the QPG is user-friendly and accessible.</li>
              </ul>
            <p className="text-lg my-6">
              Further conclusions can be found in the MoSCoW lists at the bottom of the page.
            </p>          
          </div>
          <div id="use-cases">
            <h1 className="text-4xl font-bold my-6">Use Cases</h1>
            <p className="text-lg">
              The use case diagram below shows how users can interact with the QPG to authenticate themselves and access devices seamlessly. Each use case represents a real-world scenario where the QPG enhances efficiency, security, and accessibility by dynamically adapting to user presence and intent.
            </p>
            <p className="text-lg my-6">
              [insert use case diagram]
            </p>
          </div>
            <h1 className="text-2xl font-bold my-6">Use case List</h1>
            <p className="text-lg">
              A list of use cases for our QPG system [will improve/edit during overall UI improvement, this is just a rough idea, some sound very similar to each other]. 
              </p>
              <ul className="text-lg list-disc pl-6 my-6">
              <li>
                UC1: Secure Access to Workstations via Proximity & Facial Recognition 
              </li>
              <ul className="text-lg list-disc my-6">
              <li>
                UC2: Accessibility-Focused Hands-Free Authentication 
                </li>
              </ul>
                <ul className="text-lg list-disc my-6">
              <li>
                UC3: Proximity-Based Access to Shared Tablets in Co-Working Spaces
              </li>
              </ul>
              <ul className="text-lg list-disc my-6">
              <li>
                UC4: AI-Driven Chatbot for Troubleshooting and User Assistance 
              </li>
              </ul>
              <ul className="text-lg list-disc my-6">
              <li>
                UC5: IT Admin Monitoring and Security Enforcement 
              </li>
              </ul>
            </ul>
            <h1 className="text-2xl font-bold my-6">Use case Descriptions</h1>
            <div className="space-y-8">
              {/* UC1 */}
              <div className="rounded-lg p-6 border border-gray-700">
                <div className="flex items-center mb-4">
                  <span className="bg-gray-400 text-white text-sm font-bold rounded-full w-8 h-8 flex items-center justify-center mr-3">UC1</span>
                  <h3 className="text-xl font-bold">Secure Access to Workstations via Proximity & Facial Recognition</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-lg">
                  <div className="md:col-span-1">
                    <p className="font-semibold text-blue-400">Actor</p>
                    <p>User e.g. employee</p>
                  </div>
                  
                  <div className="md:col-span-3">
                    <p className="font-semibold text-blue-400">Description</p>
                    <p>Securely log into workstation via proximity & facial recognition</p>
                      
                    <p className="font-semibold text-blue-400 mt-4">Main flow</p>
                    <ol className="list-decimal pl-6">
                      <li>User enters office and approaches workstation with QPG system.</li>
                      <li>The BLE sensor detects the user's presence.</li>
                      <li>The QPG authenticates the user automatically via facial recognition using the Raspberry Pi camera module.</li>
                      <li>If successful, the system loads the user's profile, workspace preferences, and applications. The workstation adjusts personal settings including contrast, text size and zoom based on their stored preferences.</li>
                      <li>If authentication fails, access is denied, and an alert is sent to IT security.</li>
                      <li>When the user leaves, the QPG logs them out, protects their stored preferences via post-quantum encryption and resets the desk for the next user.</li>
                    </ol>
                    
                    <p className="font-semibold text-blue-400 mt-4">Result</p>
                    <p>Secure access to workstations via proximity sensing and facial recognition.</p>
                  </div>
                </div>
              </div>

              {/* UC2 */}
              <div className="rounded-lg p-6 border border-gray-700">
                <div className="flex items-center mb-4">
                  <span className="bg-gray-400 text-white text-sm font-bold rounded-full w-8 h-8 flex items-center justify-center mr-3">UC2</span>
                  <h3 className="text-xl font-bold">Accessibility-Focused Hands-Free Authentication</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-lg">
                  <div className="md:col-span-1">
                    <p className="font-semibold text-blue-400">Actor</p>
                    <p>User with mobility impairments</p>
                  </div>
                  
                  <div className="md:col-span-3">
                    <p className="font-semibold text-blue-400">Description</p>
                    <p>A quadriplegic user logs into a device without movement</p>
                      
                    <p className="font-semibold text-blue-400 mt-4">Main flow</p>
                    <ol className="list-decimal pl-6">
                      <li>The quadriplegic user moves towards the device.</li>
                      <li>The BLE sensor detects the user's presence.</li>
                      <li>The QPG system prompts facial recognition as an alternative to manual login.</li>
                      <li>If successful, the system loads the user's profile, stored preferences and AI chatbot automatically (The automatic opening of the chatbot can be turned on or off by the user, depending on necessity).</li>
                      <li>The system automatically equips the device's in-built microphone, and prompts the user to make accessibility changes via the AI chatbot, or alternatvely, close the chatbot.</li>
                      <li>If authentication fails, access is denied, and an alert is sent to IT security.</li>
                      <li>When the user leaves, the QPG logs them out, protects their stored preferences via post-quantum encryption and resets the desk for the next user.</li>
                    </ol>
                    
                    <p className="font-semibold text-blue-400 mt-4">Result</p>
                    <p>Hands-free access to device for users with mobility issues.</p>
                  </div>
                </div>
              </div>

              {/* UC3 */}
              <div className="rounded-lg p-6 border border-gray-700">
                <div className="flex items-center mb-4">
                  <span className="bg-gray-400 text-white text-sm font-bold rounded-full w-8 h-8 flex items-center justify-center mr-3">UC3</span>
                  <h3 className="text-xl font-bold">Proximity-Based Access to Shared Tablets in Co-Working Spaces</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-lg">
                  <div className="md:col-span-1">
                    <p className="font-semibold text-blue-400">Actor</p>
                    <p>User e.g. Freelancer, Remote Worker</p>
                  </div>
                  
                  <div className="md:col-span-3">
                    <p className="font-semibold text-blue-400">Description</p>
                    <p>User has personalised short term access to a shared device</p>
                      
                    <p className="font-semibold text-blue-400 mt-4">Main flow</p>
                    <ol className="list-decimal pl-6">
                      <li>QPG detects the freelancer's presence and identifies them via BLE proximity.</li>
                      <li>The system loads their workspace preferences, such as bookmarks, cloud storage access, and custom app settings.</li>
                      <li>When the freelancer moves away, the tablet stores their preferences securely via post-quantum encryption on their profile, and automatically resets to its default state.</li>
                    </ol>
                    
                    <p className="font-semibold text-blue-400 mt-4">Result</p>
                    <p>Secure and efficient access in shared environments.</p>
                  </div>
                </div>
              </div>

              {/* UC4 */}
              <div className="rounded-lg p-6 border border-gray-700">
                <div className="flex items-center mb-4">
                  <span className="bg-gray-400 text-white text-sm font-bold rounded-full w-8 h-8 flex items-center justify-center mr-3">UC4</span>
                  <h3 className="text-xl font-bold">AI-Driven Chatbot for Troubleshooting and User Assistance</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-lg">
                  <div className="md:col-span-1">
                    <p className="font-semibold text-blue-400">Actor</p>
                    <p>User e.g. employee, student, IT Support Agent</p>
                  </div>
                  
                  <div className="md:col-span-3">
                    <p className="font-semibold text-blue-400">Description</p>
                    <p>User has trouble accessing their profile or personalising their settings, so uses AI chatbot for assistance</p>
                      
                    <p className="font-semibold text-blue-400 mt-4">Main flow</p>
                    <ol className="list-decimal pl-6">
                      <li>1.,2.,3. the same as UC1 and 2.</li>
                      <li>The user interacts with the built-in AI chatbot via voice or text input (no voice authentication available, only text-to-speech).</li>
                      <li>The chatbot analyses the issue and provides guided troubleshooting steps.</li>
                      <li>If the issue is unresolved, the chatbot escalates the case to IT support with diagnostic logs.</li>
                      <li>The chatbot can also suggest accessibility settings (e.g., adjusting text size, enabling dark mode).</li>
                    </ol>
                    
                    <p className="font-semibold text-blue-400 mt-4">Result</p>
                    <p>Self-service troubleshooting and improved accessibility.</p>
                  </div>
                </div>
              </div>

              {/* UC5 */}
              <div className="rounded-lg p-6 border border-gray-700">
                <div className="flex items-center mb-4">
                  <span className="bg-gray-400 text-white text-sm font-bold rounded-full w-8 h-8 flex items-center justify-center mr-3">UC5</span>
                  <h3 className="text-xl font-bold">IT Admin Monitoring and Security Enforcement (maybe)</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-lg">
                  <div className="md:col-span-1">
                    <p className="font-semibold text-blue-400">Actor</p>
                    <p>IT Administrator</p>
                  </div>
                  
                  <div className="md:col-span-3">
                    <p className="font-semibold text-blue-400">Description</p>
                    <p>An IT administrator monitors authentication logs and enforce access policies</p>
                      
                    <p className="font-semibold text-blue-400 mt-4">Main flow</p>
                    <ol className="list-decimal pl-6">
                      <li>The IT admin logs into the QPG dashboard.</li>
                      <li>They view real-time authentication logs, including failed login attempts and access requests.</li>
                      <li>If a security risk is detected, they can manually revoke access or enforce 2FA for specific users.</li>
                    </ol>
                    
                    <p className="font-semibold text-blue-400 mt-4">Result</p>
                    <p>Centralised security monitoring.</p>
                  </div>
                </div>
              </div>
            </div>
          <div id="moscow-list">
            <h1 className="text-4xl font-bold my-6">MoSCoW Requirements List</h1>
            <h1 className="text-2xl font-bold my-6">Functional Requirements</h1>
            <p className="text-lg">
              This list defines the core features and functionalities essential for the development of the QPG. With a strong focus on seamless authentication, secure accessibility, and adaptive user control, the QPG leverages BLE proximity detection, facial recognition, post-quantum encryption and AI-driven profile management to provide a frictionless login experience. While the primary focus remains on robust security and usability, the system also considers potential enhancements such as multi-device synchronisation, advanced directional proximity detection via signal strength, and intelligent device-switching capabilities. This structured requirement framework ensures that essential features are prioritised while leaving room for future scalability and innovation.
            </p>
            <p className="text-lg my-6">
                [insert funtional MoSCoW requirements here, will do when editing UI]
            </p>
          </div>
          <h1 className="text-2xl font-bold my-6">Non-Functional Requirements</h1>
            <p className="text-lg">
              Non-functional requirements define the quality attributes, constraints, and operational characteristics of the Quantum Proximity Gateway. Our project is strongly focused on accessibility, designed to facilitate easier device access for neurodivergent and disabled users. As such, the non-functional requirements that we prioritised include reliability, performance and usability, ensuring that all users can have swift frictionless access to their devices regardless of their physical or technical abilities. We also anticipate that the QPG system will continue to be developed for use in large-scale environments and for easy integration with future IoT devices. Therefore, scalability is another large priority of ours, which is further highlighted in the list below.
            </p>
            <p className="text-lg my-6">
              [Again, will update/edit once editing UI - Must Have - Performance, Reliability, Security, Scalability, Compatibility; Should Have - Usability, Privacy Control, Extensibility; Could Have: Multi-Language Support, Feedback Mechanisms; Won't Have: Mobile App Integration]
            </p>
        </div>
      </div>
    </main>
  )
}