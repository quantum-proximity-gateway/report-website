'use client'

import { SidebarTrigger } from "@/components/ui/sidebar"
import { Separator } from "@/components/ui/separator"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import Prism from 'prismjs';
import 'prismjs/components/prism-python';
import 'prismjs/themes/prism-okaidia.css';
import { useEffect } from 'react';
import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";


export default function Testing() {

  useEffect(() => {
    if (typeof window !== 'undefined') {
      Prism.highlightAll();
    }
  }, []);

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
              <BreadcrumbPage>Testing</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </header>
      <div className="flex flex-col items-center shrink-0 border-b p-8">
        <h1 className="text-6xl text-center my-6">Testing</h1>
      </div>
      <div className="flex justify-center p-6">
        <div className="max-w-4xl">
          <div id="testing-strategy">
            <h1 className="text-4xl font-bold my-6">Testing Strategy</h1>
            <p className="text-lg">
              TALK ABOUT DIFFERENT UIs, DIFFERENT BACKEND SERVICES AND PYTEST
            </p>
          </div>
          <div id="unit-testing">
            <h1 className="text-4xl font-bold my-6">Unit/Integration Testing</h1>
            <p className="text-lg my-6">
              ADD INTEGRATION TESTING PARAGRAPH
            </p>
            <p className="text-lg my-6">
              Our unit tests are performed utilising a comprehensive suite of unit tests for a secure device management API that implements post-quantum cryptography. The tests verify core functionality including device registration, credential management, and preferences handling - all protected by encrypted communications. Each test follows a consistent pattern of setting up test data on our database, performing different API operations through a test client, and verifying the expected responses. The suite also includes cleanup procedures that ensure test isolation by removing the test database after each test run.
            </p>
            <p className="text-lg my-6">
              Our test suite uses pytest's fixture mechanism for dependency injection, this helps us easily create test clients for our server before every test, inject them into the test function as a dependency and automatically handle the test cleanup.
            </p>
            <pre className="bg-gray-900 p-4 rounded-md overflow-x-auto">
              <code className="language-python">
{`@pytest_asyncio.fixture(scope='function')
async def test_client() -> AsyncIterator[AsyncTestClient[Litestar]]:
    async with AsyncTestClient(app=app) as client:
        yield client

    # Delete test database after each test
    os.remove(TEST_DB_FILENAME)`}
              </code>
            </pre>
            <p className="text-lg my-6">
               The <code>@pytest_asyncio.fixture</code> decorator registers this as an asynchronous fixture with function scope. Whenever a test requests this fixture, it automatically creates a new test client which is connected to our application and then yields it to the test function. After the test finishes, it cleans up by removing the test database file. Ensuring that each test runs with a fresh environment, preventing test interference and maintaining consistent results across test runs.
            </p>
            <p className="text-lg my-6">
              The most sophisticated part of these tests focuses on the key encapsulation mechanism (KEM) using quantum-resistant cryptography via the OQS library with ML-KEM-512. These tests validate the server's ability to initiate secure key exchange, generate appropriate public keys, and successfully complete the key exchange process by decapsulating client-provided ciphertexts to establish shared secrets. The comprehensive test coverage ensures the API provides secure device management capabilities while maintaining data confidentiality through end-to-end encryption - critical for a system that stores sensitive credentials and device information.
            </p>
            <p className="text-lg">
              GIVE EXAMPLE CODE OF TEST
            </p>
            <p className="text-lg my-6">
              Having a large and critical part of our project like the core server being unit tested allows us to easily improve functionality in future iteration without the worries of additional bugs and vulnerabilities being introduced.
            </p>
          </div>
          <div id="compatibility-testing">
            <h1 className="text-4xl font-bold my-6">Compatibility Testing</h1>
            <h1 className="text-2xl font-medium my-6">IBM Proximity Agents</h1>
            <p className="text-lg mb-4">
              Our IBM Proximity Agents application was tested across multiple operating systems to ensure broad compatibility, although due to the limitations and restrictions of some operating systems, some features are not fully avaliable. However, the core functionality of the proximity-based agent is retained on all operating systems.
            </p>
            <p className="text-lg mb-4">
              The high rate of compatibility was enabled by Tauri, which allowed us to easily create native applications on all platforms leveraging one single codebase.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md my-4">
                <thead>
                  <tr className="bg-gray-100 dark:bg-gray-700 text-left">
                    <th className="py-3 px-4 font-semibold border-b">Operating System</th>
                    <th className="py-3 px-4 font-semibold border-b">Compatibility</th>
                    <th className="py-3 px-4 font-semibold border-b">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b hover:bg-gray-50 dark:hover:bg-gray-700">
                    <td className="py-3 px-4">MacOS</td>
                    <td className="py-3 px-4 text-green-500">✅ Compatible</td>
                    <td className="py-3 px-4">Accessibility commands not available</td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50 dark:hover:bg-gray-700">
                    <td className="py-3 px-4">Linux</td>
                    <td className="py-3 px-4 text-green-500">✅ Compatible</td>
                    <td className="py-3 px-4">Full functionality utilising gsettings</td>
                  </tr>
                  <tr className="hover:bg-gray-50 dark:hover:bg-gray-700">
                    <td className="py-3 px-4">Windows</td>
                    <td className="py-3 px-4 text-green-500">✅ Compatible</td>
                    <td className="py-3 px-4">Accessibility commands not available</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <p className="text-sm text-gray-500 mt-2">
              Table 1: Operating System Compatibility for IBM Proximity Agents
            </p>

            <h1 className="text-2xl font-medium my-6">Registration Site</h1>
            <p className="text-lg mb-4">
              We have also tested our registration site across multiple different environments. However, there are some issues regarding certain out-of-date browsers not natively supporting the Web Serial API, which is a core functionality of our website. This API allows us to directly communicate with the ESP32 during the registration process to share secret keys for TOTP and to read the MAC address of your device.
            </p>
            <p className="text-lg mb-4">
              Fortunately, there are simple solutions available by using widely available extensions that expose the Web Serial API. For example, for Firefox users, we recommend using the <a href="https://addons.mozilla.org/en-GB/firefox/addon/webserial-for-firefox/" className="text-blue-500 hover:text-blue-700 underline transition-colors" target="_blank" rel="noopener noreferrer">WebSerial for Firefox</a> extension.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md my-4">
                <thead>
                  <tr className="bg-gray-100 dark:bg-gray-700 text-left">
                    <th className="py-3 px-4 font-semibold border-b">Browser</th>
                    <th className="py-3 px-4 font-semibold border-b">Compatibility</th>
                    <th className="py-3 px-4 font-semibold border-b">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b hover:bg-gray-50 dark:hover:bg-gray-700">
                    <td className="py-3 px-4">Chrome</td>
                    <td className="py-3 px-4 text-green-500">✅ Compatible</td>
                    <td className="py-3 px-4">Full functionality utilising Web Serial API</td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50 dark:hover:bg-gray-700">
                    <td className="py-3 px-4">Edge</td>
                    <td className="py-3 px-4 text-green-500">✅ Compatible</td>
                    <td className="py-3 px-4">Full functionality utilising Web Serial API</td>
                  </tr>
                  <tr className="hover:bg-gray-50 dark:hover:bg-gray-700">
                    <td className="py-3 px-4">Firefox</td>
                    <td className="py-3 px-4 text-yellow-500">⚠️ Lacking functionality</td>
                    <td className="py-3 px-4">Communication using Web Serial API not natively supported. Extensions avaliable to fix this.</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-500 mt-2">
              Table 2: Browser Compatibility for Registration Site
            </p>
          </div>
          <div id="responsive-design-testing">
            <h1 className="text-4xl font-bold my-6">Responsive Design Testing</h1>
            <p className="text-lg my-6">
              As all of our frontends have been designed with accessibility in mind, the choice of utilising frameworks like Next.js have allowed us to keep a consistent design throughout multiple platforms and devices. We've implemented responsive layouts that automatically adjust to different screen sizes, from large desktop monitors to mobile devices. This approach ensures that both of our applications remain usable and visually coherent regardless of the device being used.
            </p>
            <p className="text-lg my-6">
              During development, we regularly tested our interfaces across various viewport sizes using development tools like <a href="https://responsively.app/" className="text-blue-500 hover:text-blue-700 underline transition-colors" target="_blank" rel="noopener noreferrer">ResponsivelyApp</a> and other browser emulation tools. For our IBM Proximity Agents desktop application, we ensured the interface scaled appropriately with different window sizes, while our registration site was tested on multiple physical devices to verify its responsiveness in real-world conditions.
            </p>
            <div className="flex flex-col items-center my-6">
              <Image
                src="/testing/responsive-site.png" 
                alt="Responsiveness Test" 
                width={750} 
                height={600}
                className="max-w-full object-contain bg-white"
                style={{borderRadius:'10px'}}
              />
              <p className="text-center text-sm text-gray-500">Figure 1: Registration Site - Responsive Design Test</p>
            </div>
            <div className="flex flex-col items-center">
              <Image
                src="/testing/responsive-app.png" 
                alt="Responsiveness Test" 
                width={750} 
                height={600}
                className="max-w-full object-contain bg-white"
                style={{borderRadius:'10px'}}
              />
              <p className="text-center text-sm text-gray-500">Figure 2: IBM Proximity Agents - Responsive Design Test</p>
            </div>
          </div>
          <div id="performance-testing">
            <h1 className="text-4xl font-bold my-6">Performance Testing</h1>
            <p className="text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div id="user-acceptance-testing">
            <h1 className="text-4xl font-bold my-6">User Acceptance Testing</h1>
            <p className="text-lg my-6">
              Throughout the project, we have prioritised ease of use to ensure our system remains as user-friendly as possible. To achieve this, we involved multiple stakeholders in the development process, utilising different opportunities provided by outreach events to carry out structured testing sessions where we could gather actionable feedback and iteratively improve our designs.
            </p>
            <p className="text-lg my-6">
              We ensured our testing groups encompassed a diverse range of participants, from secondary school students to industry professionals, providing us with perspectives from both technical and non-technical users across different age groups and experience levels. This also allowed us to gain a wide range of perspectives on the usability of our project in different enviroments.
            </p>
            <div className="flex justify-center">
            <Carousel className="my-6 w-full max-w-4xl">
              <CarouselContent>
                <CarouselItem key={1}>
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex items-center justify-center p-6">
                        <Image 
                          src="/testing/user-testing-3.jpg" 
                          alt="User Testing 3" 
                          width={1636} 
                          height={1169} 
                          className="object-contain max-h-[560px] w-auto" 
                        />
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
                <CarouselItem key={2}>
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex items-center justify-center p-6">
                        <Image 
                          src="/testing/user-testing-5.jpg" 
                          alt="User Testing 5" 
                          width={1636} 
                          height={1169} 
                          className="object-contain max-h-[560px] w-auto" 
                        />
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
                <CarouselItem key={3}>
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex items-center justify-center p-6">
                        <Image 
                          src="/testing/user-testing-4.jpg" 
                          alt="User Testing 4" 
                          width={1636} 
                          height={1169} 
                          className="object-contain max-h-[560px] w-auto" 
                        />
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
              <p className="text-center text-sm text-gray-500 mt-2">User Testing Sessions</p>
            </Carousel>
            </div>

            <h1 className="text-2xl font-bold my-6">User Testing Methodology</h1>
            <p className="text-lg my-6">
              We employed a structured approach to user testing that combined task-based evaluation with qualitative feedback collection:
            </p>
            <Carousel>
              <CarouselContent>
                <CarouselItem key={1} className="basis-1/3">
                  <Card className="h-full">
                    <CardHeader>
                      <CardTitle className="text-2xl font-bold text-primary">Contextual Inquiry</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <ul className="text-base text-muted-foreground list-disc pl-2 space-y-1">
                        <li>We gave a quick overview of the project to participants to ensure they were given minimal instructions.</li>
                        <li>We observed participants as they attempted to complete tasks with our system, such as registering, interacting with the offline model and logging in.</li>
                        <li>This approach helped identify different interaction patterns and unexpected obstacles users face.</li>
                      </ul>
                    </CardContent>
                  </Card>
                </CarouselItem>
                <CarouselItem key={2} className="basis-1/3">
                  <Card className="h-full">
                    <CardHeader>
                      <CardTitle className="text-2xl font-bold text-primary">Task Completion Analysis</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <ul className="text-base text-muted-foreground list-disc pl-2 space-y-1">
                        <li>We tracked the time users required to complete each task and noted where users got stuck.</li>
                        <li>This data really helped identify the most problematic areas of our interface and allowed us to gain insight into the issues with our UI design.</li>
                      </ul>
                    </CardContent>
                  </Card>
                </CarouselItem>
                <CarouselItem key={3} className="basis-1/3">
                  <Card className="h-full">
                    <CardHeader>
                      <CardTitle className="text-2xl font-bold text-primary">Think-Aloud Protocols</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <ul className="text-base text-muted-foreground list-disc pl-2 space-y-1">
                        <li>We encouraged participants to verbalize their thoughts and expectations as they navigated the interface.</li>
                        <li>This revealed mental models and assumptions that influenced how users approached our system.</li>
                      </ul>
                    </CardContent>
                  </Card>
                </CarouselItem>
                <CarouselItem key={4} className="basis-1/3">
                  <Card className="h-full">
                    <CardHeader>
                      <CardTitle className="text-2xl font-bold text-primary">Post-Task Interviews</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <ul className="text-base text-muted-foreground list-disc pl-2 space-y-1">
                        <li>We debriefed with users and conducted short interviews after testing sessions.</li>
                        <li>We gathered detailed insights on user experience and satisfaction with specific features.</li>
                        <li>This helped us prioritize improvements based on user impact and expectations.</li>
                      </ul>
                    </CardContent>
                  </Card>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
            <p className="text-lg my-6">
              This methodology allowed us to identify both obvious usability issues and more subtle pain points that we may have missed with our perspective as technical users.
            </p>

            <h1 className="text-2xl font-bold my-6">User Feedback</h1>
            <p className="text-lg my-6">
              Key insights from our user testing sessions revealed both positive aspects and areas for improvement:
            </p>
            <p className="text-lg my-6">
              MAYBE ADD USER INTERVIEW AND JOHN MCNAMARA MENTION
            </p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md my-4">
                <thead>
                  <tr className="bg-gray-100 dark:bg-gray-700 text-left">
                    <th className="py-3 px-4 font-semibold border-b">Positive Feedback</th>
                    <th className="py-3 px-4 font-semibold border-b">Areas for Improvement</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b hover:bg-gray-50 dark:hover:bg-gray-700">
                    <td className="py-3 px-4">
                      <div className="flex items-start gap-2">
                        <span className="text-green-500 font-bold mt-0.5">✓</span>
                        <p>"Straight out of Star Trek" - impressive integration of technologies</p>
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex items-start gap-2">
                        <span className="text-red-500 font-bold mt-0.5">✗</span>
                        <p>ESP32 registration process was confusing/buggy during first-time setup</p>
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50 dark:hover:bg-gray-700">
                    <td className="py-3 px-4">
                      <div className="flex items-start gap-2">
                        <span className="text-green-500 font-bold mt-0.5">✓</span>
                        <p>Strong perceived security benefits that users appreciated</p>
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex items-start gap-2">
                        <span className="text-red-500 font-bold mt-0.5">✗</span>
                        <p>Technical error messages were cluttered and difficult to understand</p>
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50 dark:hover:bg-gray-700">
                    <td className="py-3 px-4">
                      <div className="flex items-start gap-2">
                        <span className="text-green-500 font-bold mt-0.5">✓</span>
                        <p>Convenient authentication once properly configured</p>
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex items-start gap-2">
                        <span className="text-red-500 font-bold mt-0.5">✗</span>
                        <p>Technical terminology like "quantum-resistant cryptography" and "TOTP" confused non-technical users</p>
                      </div>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50 dark:hover:bg-gray-700">
                    <td className="py-3 px-4">
                      <div className="flex items-start gap-2">
                        <span className="text-green-500 font-bold mt-0.5">✓</span>
                        <p>Time-saving capabilities praised</p>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-500 mt-2">
              Table 3: Summary of User Feedback
            </p>

            <p className="text-lg mt-6">
              Overall, users were impressed by the innovative technology, praising it's ease of use and seamlessness once installed on computers. Our main focus for improvements was making the system more intuitive and user-friendly, especially for non-technical users.
            </p>

            <h1 className="text-2xl font-bold my-6">Closing the Feedback Loop</h1>
            <p className="text-lg my-6">
              Based on user feedback, we implemented several significant improvements:
            </p>
            <ul className="list-disc ml-8 text-lg my-6">
              <li className="mb-2">
                <strong>Restrictions:</strong> A few users found workarounds the registration website, which allowed them to sign up with an empty MAC address. We implemented stricter rules on the registration website and instructions to explain these restrictions.
              </li>
              <li className="mb-2">
                <strong>Error handling:</strong> Cleared up a lot of unnecessary debugging information on the Raspberry Pi and improved the logging framework by utilising the ColoredLogs library.
              </li>
              <li className="mb-2">
                <strong>Visual feedback:</strong> We added clear visual indicators for successful authentication and other system states.
              </li>
            </ul>
            <p className="text-lg my-6">
              After implementing these changes, follow-up testing showed significant improvements in task completion rates and user satisfaction scores, particularly among non-technical users who had previously struggled with the system.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}