import { SidebarTrigger } from "@/components/ui/sidebar"
import { Separator } from "@/components/ui/separator"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import { Metadata } from 'next';

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
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
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
            <p className="text-lg">
              The Quantum Proximity Gateway (QPG) is a cutting-edge authentication system developed in collaboration with IBM. This system aims to revolutionise user authentication and access control by eliminating manual logins and streamlining authentication through proximity detection, facial recognition, and AI-driven profile management.         
            </p>
            <h1 className="text-2xl font-bold my-6">Why is this Project Needed?</h1>
            <p className="text-lg">
              Traditional authentication methods, such as password-based logins and manual profile configurations, are slow, inefficient, and prone to security vulnerabilities. Our research has shown that employees waste an average of XX minutes per day logging into various systems, setting up profiles and ensuring access permissions are correctly assigned, which translates into hundreds of hours per year in lost productivity. More specifically, however, current authentication methods drastically fail to include all members of society, creating additional barriers for disabled, elderly and neurodivergent users, who may require a more automated, handsfree authentication process. 
            </p>
            <h1 className="text-2xl font-bold my-6">Who Benefits from the QPG?</h1>
            <p className="text-lg">
              The QPG is designed with all users in mind - from corporate employees in large enterprises, to students and faculty memnbers in educational institutions, and even individual users who frequently switch between multiple devices, this system provides seamless, context-aware authentication to improve the lives of all. By integrating IBM’s Granite 3.0 AI model and post-quantum cryptography, this solution further ensures that users experience effortless, secure, and adaptive authentication in their work environments. 
              </p>
            <p className="text-lg my-6">
              We believe the QPG will especially revolutionise the way in which neurodivergent, elderly and quadriplegic users interact with their devices. By eliminating the need for traditional passwords and reducing cognitive load, the QPG enables increased overall accessibility - for neurodivergent users, the system minimises disruptions by automatically loading personalised settings upon login, and providing intuitive, frictionless access. Elderly users benefit from simplified authentication that does not rely on memorisation of passwords or fine motor skills, ensuring security without added complexity. Quadriplegic users can authenticate effortlessly through multimodal inputs, such as facial recognition and proximity detection, eliminating barriers to device interaction. 
            </p>
          </div>
          <div id="goals">
            <h1 className="text-4xl font-bold my-6">Goals</h1>
            <p className="text-lg my-6">
              The Quantum Proximity Gateway is designed to:
            </p>
            <ul className="list-disc pl-6">
              <li>
                <strong>Enhance Accessibility & User Experience</strong>
                <ul className="list-disc my-3 pl-6">
                  <li>Eliminate manual logins by using BLE proximity sensing and real-time facial recognition.</li>
                  <li>Offer automated authentication to reduce cognitive load for neurodivergent users.</li>
                  <li>Provide customised experiences by dynamically loading user profiles and accessibility settings.</li>
                  <li>Enable easy settings configuration via an AI agent, implemented using Granite 3.0.</li>

                </ul>
              </li>
              <li>
                <strong>Improve Security & Privacy</strong>
                <ul className="list-disc my-3 pl-6">
                  <li>Implement post-quantum encryption (PQC) to safeguard sensitive user data.</li>
                  <li>Ensure zero-trust authentication by using biometric verification (facial recognition) before granting access.</li>
                  <li>Enable role-based access control (RBAC) for shared devices.</li>
                </ul>
              </li>
              <li>
                <strong>Create a Scalable IoT Ecosystem</strong>
                <ul className="list-disc my-3 pl-6">
                  <li>Establish a network of interconnected devices that communicate securely using... (may remove this) .</li>
                  <li>Develop a modular authentication system adaptable to various industries.</li>
                </ul>
              </li>
              <li>
                <strong>Increase Efficiency & Reduce Downtime</strong>
                <ul className="list-disc my-3 pl-6">
                  <li>Minimise login friction in shared spaces by automatically configuring devices upon user entry.</li>
                  <li>Improve productivity in corporate environments, education institutions, and hot-desking scenarios.</li>
                </ul>
              </li>
            </ul>
          </div>
          <div id="requirements-gathering">
            <h1 className="text-4xl font-bold my-6">Requirements Gathering</h1>
            <p className="text-lg my-6">
              In order to collect the requirements needed to design the QPG, we used a multi-phase approach to ensure that our system is user-centric and industry-relevant:
            </p>
            <ul className="list-disc pl-6">
              <li>
                <strong>User Surveys and Feedback</strong>
                <ul className="list-disc my-3 pl-6">
                  <li>We conducted structured surveys via questionnaires to assess the challenges with traditional authentication.</li>
                  <li>All participants were asked to sign a research participation consent form, which outlined the details of the survey to participants and allowed them to make an informed decision on whether to participate.</li>
                  <li>Participants were asked about hot-desking difficulties, privacy concerns, and preferred authentication methods.</li>
                  <li>We used a combination of open and closed questions, allowing us to gather both detailed, qualitative insights from open-ended questions while also getting quantifiable data and clear structure from closed-ended questions.</li>
                </ul>
              </li>
              <li>
                <strong>Stakeholder and Client Interviews</strong>
                <ul className="list-disc my-3 pl-6">
                  <li>We had several discussions with IBM engineers, IT security specialists and accessibility experts which helped to shape our security and usability priorities.</li>
                  <li>Detailed feedback was gathered on encryption protocols, AI-driven authentication, and privacy policies.</li>
                </ul>
              </li>
              <li>
                <strong>Prototyping and Iterative Testing</strong>
                <ul className="list-disc my-3 pl-6">
                  <li>Initial sketches were drawn, and prototypes were designed, which we tested with real users. [picture of sketches]</li>
                  <li>A heuristic evaluation was then conducted to refine interface design, accessibility, and user workflow.</li>
                </ul>
              </li>
            </ul>
            <h1 className="text-2xl font-bold my-6">Survey Data Analysis</h1>
            <p className="text-lg">
              Our user survey produced valuable insights:
            </p>
              <ul className="list-disc pl-6 my-6">
              <li>
                <strong>67% of respondents stated that they had trouble with hot-desking, and found manual logins inconvenient and time-consuming.</strong>
              </li>
              <ul className="list-disc my-6">
              <li>
                <strong>100% of respondents suggested that having a mechanism to automatically load up your profile and settings would be helpful, with many commenting that "it would save time by eliminating the need to log in and configure settings manually, making the process smoother and faster, especially when switching between devices".</strong>
                </li>
              </ul>
                <ul className="list-disc my-6">
              <li>
                <strong>Users with accessibility needs strongly supported AI-driven chatbot assistance to modify settings, noting that this would be "a great feature".</strong>
              </li>
              </ul>
              <ul className="list-disc my-6">
              <li>
                When asked specifically whether a proximity-based mechanism for authentication and access to profiles would be useful, <strong>67% of respondents agreed, with one stating that "[the mechanism] sounds very futuristic; it would help people with accessibility challenges all around the world access essential services on their devices”.</strong> We believe that this figure will be significantly higher once more users are educated on how the mechanism works and how it can be used, as one respondent selected the "I'm not sure" option, suggesting they may not have known what the mechanism entails.
              </li>
              </ul>
            </ul>
            <h1 className="text-2xl font-bold my-6">Evaluation of Survey Methods</h1>
            <p className="text-lg">
              The survey conducted to gather user requirements for the Quantum Proximity Gateway (QPG) was structured to identify key pain points, user expectations, and feature priorities. It included a mix of quantitative (multiple-choice) and qualitative (open-ended) questions, which allowed us to collect both statistical insights and deeper user opinions.            </p>
              <ul className="list-disc pl-6 my-6">
              <li>
                <strong>67% of respondents stated that they had trouble with hot-desking, and found manual logins inconvenient and time-consuming.</strong>
              </li>
              <ul className="list-disc my-6">
              <li>
                <strong>100% of respondents suggested that having a mechanism to automatically load up your profile and settings would be helpful, with many commenting that "it would save time by eliminating the need to log in and configure settings manually, making the process smoother and faster, especially when switching between devices".</strong>
                </li>
              </ul>
                <ul className="list-disc my-6">
              <li>
                <strong>Users with accessibility needs strongly supported AI-driven chatbot assistance to modify settings, noting that this would be "a great feature".</strong>
              </li>
              </ul>
              <ul className="list-disc my-6">
              <li>
                When asked specifically whether a proximity-based mechanism for authentication and access to profiles would be useful, <strong>67% of respondents agreed, with one stating that "[the mechanism] sounds very futuristic; it would help people with accessibility challenges all around the world access essential services on their devices”.</strong> We believe that this figure will be significantly higher once more users are educated on how the mechanism works and how it can be used, as one respondent selected the "I'm not sure" option, suggesting they may not have known what the mechanism entails.
              </li>
              </ul>
            </ul>
          </div>
          <div id="personas">
            <h1 className="text-4xl font-bold my-6">Personas</h1>
            <p className="text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div id="use-cases">
            <h1 className="text-4xl font-bold my-6">Use Cases</h1>
            <p className="text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div id="moscow-list">
            <h1 className="text-4xl font-bold my-6">MoSCoW List</h1>
            <p className="text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}