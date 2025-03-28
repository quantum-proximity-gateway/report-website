import { SidebarTrigger } from "@/components/ui/sidebar"
import { Separator } from "@/components/ui/separator"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Metadata } from 'next';
import { BASE_PATH } from "@/config";
import Image from "next/image";


export const metadata: Metadata = {
    title: 'Appendices',
  };

export default function Appendices() {
  return (
    <main className="w-full">
      <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
        <SidebarTrigger />
        <Separator orientation="vertical" className="mr-2 h-4 hidden md:block" />
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem className="hidden md:block">
              <BreadcrumbLink href={`${BASE_PATH}/`}>Quantum Proximity Gateway</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator className="hidden md:block" />
            <BreadcrumbItem className="hidden md:block">
              <BreadcrumbPage>Appendices</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </header>
      <div className="flex flex-col items-center shrink-0 border-b p-8">
        <h1 className="text-6xl text-center my-6">Appendices</h1>
      </div>
      <div className="flex justify-center p-6">
        <div className="max-w-4xl">
          <div id="user-manual">
            <h1 className="text-4xl font-bold my-6">User Manual</h1>
            <p className="text-lg my-6">
              This section provides step-by-step instructions for setting up and using our system. The manual is organized in the order that each component should be configured, starting with the ESP32 hardware and progressing through the registration site, Raspberry Pi setup, and desktop application usage.
            </p>
            <h1 className="text-2xl font-bold my-6">ESP32</h1>
            <p className="text-lg my-6">
              To flash your ESP32, follow the guidelines written on the README.md on the ESP32 repository. Found here: <a href="https://github.com/quantum-proximity-gateway/esp32-code" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 hover:underline transition-colors">https://github.com/quantum-proximity-gateway/esp32-code</a>. This user manual assumes you have flashed your ESP32 as that is the only step there is with the ESP32 component of our system.
            </p>

            <h1 className="text-2xl font-bold my-6">Registration Site</h1>
            <p className="text-lg my-6">
              The registration website is the first step to getting setup with the Proximity Gateway, our registration website is hosted on the following link: <a href="https://registration-site-ecru.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 hover:underline transition-colors">https://registration-site-ecru.vercel.app/</a>. You will be firstly greeted with a welcome screen stating what the purpose of the website is.
            </p>

            <Card className="my-6">
              <CardHeader>
                <CardTitle className="text-2xl">Welcome Page</CardTitle>
                <Separator />
              </CardHeader>
              <CardContent className="flex flex-col items-center justify-center">
                <Image src="/appendices/reg1.gif" alt="Registration Step 1" width={1500} height={1200} className="object-contain"/>
                <p className="text-center text-md text-gray-900 mt-3">The welcome page initiates the encryption initiliasation, wait while the application establishes a secure connection with the server.</p>
              </CardContent>
            </Card>

            <Card className="my-6">
              <CardHeader>
                <CardTitle className="text-2xl">Connecting ESP32 Device</CardTitle>
                <Separator />
              </CardHeader>
              <CardContent className="flex flex-col items-center justify-center">
                <Image src="/appendices/reg2.gif" alt="Registration Step 2" width={1500} height={1200} className="object-contain"/>
                <p className="text-center text-md text-gray-900 mt-3">Connect your ESP32 via USB using the right port to your laptop and then click on Connect To Device, then select the new USB device that shows up. This should allow the website to read your MAC address.</p>
              </CardContent>
            </Card>

            <Card className="my-6">
              <CardHeader>
                <CardTitle className="text-2xl">User Details Registration</CardTitle>
                <Separator />
              </CardHeader>
              <CardContent className="flex flex-col items-center justify-center">
                <Image src="/appendices/reg3.gif" alt="Registration Step 3" width={1500} height={1200} className="object-contain"/>
                <p className="text-center text-md text-gray-900 mt-3">Enter the credentials you want the Raspberry Pi to relay, this includes your username, then your password. These will be encrypted with Post-Quantum Cryptography, once ready click the register button. This will redirect you to record your face encodings.</p>
              </CardContent>
            </Card>

            <Card className="my-6">
              <CardHeader>
                <CardTitle className="text-2xl">Facial Recognition Setup</CardTitle>
                <Separator />
              </CardHeader>
              <CardContent className="flex flex-col items-center justify-center">
                <Image src="/appendices/reg4.gif" alt="Registration Step 4" width={1500} height={1200} className="object-contain"/>
                <p className="text-center text-md text-gray-900 mt-3">Click the record button to begin the 5 second recording of your facial encodings. Once these 5 seconds are done, you can choose to re-record by clicking on the record button again, or to submit the recording to the server.</p>
              </CardContent>
            </Card>


            <h1 className="text-2xl font-bold my-6">Raspberry Pi</h1>
            <p className="text-lg my-6">
              The Raspberry Pi brings together the ESP32 and your computer, the codebase is setup in such a way that users do not need to interact with this part of the system. In case of clean installation, refer to the Deployment Manual where instructions to deploy the Raspberry Pi code are available.
            </p>

            <h1 className="text-2xl font-bold my-6">IBM Proximity Agents Application</h1>

            <p className="text-lg my-6">
              The IBM Proximity Agents application enables you to easily change your settings and set preferred applications to open on start-up depending on the user using the application. This is the final key to our system, it brings all our components together to seamlessly showcase the power that proximity brings.
            </p>
            <Card className="my-6">
              <CardHeader>
                <CardTitle className="text-2xl">Welcome Page</CardTitle>
                <Separator />
              </CardHeader>
              <CardContent className="flex flex-col items-center justify-center">
                <Image src="/appendices/pr-agents-1.gif" alt="Proximity Agents 1" width={1500} height={1200} className="object-contain rounded-lg overflow-hidden"/>
                <p className="text-center text-md text-gray-900 mt-3">Similarly to the registration page, the welcome page for the application initiates the encryption initiliasation, wait while the application establishes a secure connection with the server.</p>
              </CardContent>
            </Card>

            <Card className="my-6">
              <CardHeader>
                <CardTitle className="text-2xl">Applications Automatically Opening</CardTitle>
                <Separator />
              </CardHeader>
              <CardContent className="flex flex-col items-center justify-center">
                <Image src="/appendices/pr-agents-2.gif" alt="Proximity Agents 2" width={1500} height={1200} className="object-contain"/>
                <p className="text-center text-md text-gray-900 mt-3">As soon as the application opens, your profile applications should automatically open too, allowing you to get on with your day instantly.</p>
              </CardContent>
            </Card>

            <Card className="my-6">
              <CardHeader>
                <CardTitle className="text-2xl">Preferences</CardTitle>
                <Separator />
              </CardHeader>
              <CardContent className="flex flex-col items-center justify-center">
                <Image src="/appendices/pr-agents-3.gif" alt="Registration Step 3" width={1500} height={1200} className="object-contain"/>
                <p className="text-center text-md text-gray-900 mt-3">To check your current preferences JSON, simply click the "Preferences" button found at the top right of the application. This should display your current JSON preferences.</p>
              </CardContent>
            </Card>

            <Card className="my-6">
              <CardHeader>
                <CardTitle className="text-2xl">Model Selection</CardTitle>
                <Separator />
              </CardHeader>
              <CardContent className="flex flex-col items-center justify-center">
                <Image src="/appendices/pr-agents-4.gif" alt="Registration Step 4" width={1500} height={1200} className="object-contain"/>
                <p className="text-center text-md text-gray-900 mt-3">You can select any model you currently have installed with Ollama using the top model buttons, just simply click a new model to start a new chat with it.</p>
              </CardContent>
            </Card>
            <Card className="my-6">
              <CardHeader>
                <CardTitle className="text-2xl">LLM Prompting</CardTitle>
                <Separator />
              </CardHeader>
              <CardContent className="flex flex-col items-center justify-center">
                <Image src="/appendices/pr-agents-5.5.gif" alt="Registration Step 5" width={1500} height={1200} className="object-contain"/>
                <p className="text-center text-md text-gray-900 mt-3">Prompt the model however you want by simply typing into the text-box and clicking the send button or clicking Enter. This will then cause Ollama to infer your prompt and respond accordingly.</p>
              </CardContent>
            </Card>
            <Card className="my-6">
              <CardHeader>
                <CardTitle className="text-2xl">Command Execution</CardTitle>
                <Separator />
              </CardHeader>
              <CardContent className="flex flex-col items-center justify-center">
                <Image src="/appendices/pr-agents-5.gif" alt="Registration Step 5" width={1500} height={1200} className="object-contain"/>
                <p className="text-center text-md text-gray-900 mt-3">If the response of the model includes a command you may want to run, the UI will prompt you to either execute or cancel the command. If you choose to execute the command, the changes will be saved to your preferences and applied to your settings.</p>
              </CardContent>
            </Card>
            
          </div>
          <div id="deployment-manual">
            <h1 className="text-4xl font-bold my-6">Deployment Manual</h1>
            <div className="w-full h-[800px] border rounded-lg overflow-hidden">
              <object
                data="/appendices/deployment-manual.pdf"
                type="application/pdf"
                className="w-full h-full"
              >
                <p className="p-4">
                  It appears your browser doesn't support embedded PDFs. You can 
                  <a 
                    href="/appendices/deployment-manual.pdf" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:text-blue-700 hover:underline transition-colors"
                  > download the PDF here</a> instead.
                </p>
              </object>
            </div>
          </div>
          <div id="legal">
            <h1 className="text-4xl font-bold my-6">Legal</h1>
              <h1 className="text-2xl font-bold my-6">Source Code License</h1>
              <p className="text-lg my-6">
                This is a proof-of-concept research project, therefore we have decided to open-source all of our codebase under the MIT license to help spread awareness and pioneer the world of proximity-based computing. This MIT license allows anyone to freely use, modify, distribute, and allows for the commercialization of our code with minimal restrictions.
              </p>
              <p className="text-lg my-6">
                The MIT license also frees us from any liability associated with the use of our codebase:
              </p>
              <p className="text-lg font-mono bg-gray-100 p-4 rounded-md whitespace-pre-line">
                THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, 
                INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A 
                PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT 
                HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION 
                OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE 
                SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
              </p>
              <h1 className="text-2xl font-bold my-6">GDPR</h1>
              <p className="text-lg mb-3">
                Our server is deployed on IBM Code Engine, which is in compliance with GDPR rules. Our implementation follows the <a href="https://www.ibm.com/cloud/compliance/eu-ccoc" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 hover:underline transition-colors">EU Cloud Code of Conduct</a> that IBM adheres to.
              </p>
              <p className="text-lg mb-3">
                Our GDPR compliance measures include:
              </p>
              <ul className="text-lg list-disc pl-6 space-y-2 mb-6">
                <li>
                  <span className="font-medium">Data Minimization</span><span className="text-muted-foreground"> — We only collect essential data required for the functioning of our authentication system.</span>
                </li>
                <li>
                  <span className="font-medium">Purpose Limitation</span><span className="text-muted-foreground"> — All collected data is used solely for authentication and personalization purposes.</span>
                </li>
                <li>
                  <span className="font-medium">Storage Limitation</span><span className="text-muted-foreground"> — Facial recordings are temporarily stored and immediately deleted after generating encodings.</span>
                </li>
                <li>
                  <span className="font-medium">Security Measures</span><span className="text-muted-foreground"> — We implement Post-Quantum Cryptography for data encryption and secure transmission.</span>
                </li>
                <li>
                  <span className="font-medium">User Rights</span><span className="text-muted-foreground"> — Users can request deletion of their data by contacting any member of the team.</span>
                </li>
              </ul>
              <h1 className="text-2xl font-bold my-6">Privacy Concerns</h1>
              <p className="text-lg">
                As explained throughout the project, all data associated with the user is encrypted to the highest standards, and we only store the essential data that allows us to log users in and change their preferences. Another concern we would like to address is the face recordings, these are NOT stored and are immediately deleted once the face encodings have been generated, this allow us to ensure we store as little biometric data on users as we can. 
              </p>

          </div>
          <div id="development-blog">
            <h1 className="text-4xl font-bold my-6">Development Blog</h1>
            <p className="text-lg mb-6">
                Throughout the development of this project, we have been documenting our progress through a series of blog posts on <a href="https://qpg.hashnode.dev" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 hover:underline transition-colors">our Hashnode blog</a>. These posts talk about our key decisions, challenges, insights, and milestones from our initial planning to the final implementation of the project. We also discuss how we overcame some obstacles during the implementation, and mention how other developers can learn from our experiences.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
                <Card>
                <CardHeader>
                    <CardTitle className="text-xl">10/12/24 — Initial Blog Post</CardTitle>
                    <CardDescription>Welcome to our first blog post for the Quantum Proximity Gateway project. We're excited to share everything we've accomplished from the start of Term 1 (25/09/2024) through to 10/12/2024. In this post, we'll outline our client requirements, discuss our system design, and highlight the initial work we've done on our MVP.</CardDescription>
                </CardHeader>
                <CardFooter>
                    <a href="https://qpg.hashnode.dev/101224-initial-blog-post" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 hover:underline transition-colors">Read more →</a>
                </CardFooter>
                </Card>
                <Card>
                <CardHeader>
                    <CardTitle className="text-xl">12/01/25 — Basic Functionalities of the 5 Main Components</CardTitle>
                    <CardDescription>In this second blog for the Quantum Proximity Gateway project, we will discuss the progress we made over the winter holidays, up to 12/01/2025. As of right now, the project has 5 main parts to it: the server, the registration website, the ESP32 code, the Raspberry Pi code, and finally the desktop application. We will cover what each of these components is for, as well as what we have achieved so far for each part.</CardDescription>
                </CardHeader>
                <CardFooter>
                    <a href="https://qpg.hashnode.dev/120125-basic-functionalities-of-the-5-main-components" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 hover:underline transition-colors">Read more →</a>
                </CardFooter>
                </Card>
                <Card>
                <CardHeader>
                    <CardTitle className="text-xl">30/01/25 — Desktop App & RPi Code Troubleshooting and Progress</CardTitle>
                    <CardDescription>Since the last blog, we faced quite a few problems while working on the desktop application and the raspberry pi code, so we will discuss what these were and how we fixed them alongside some code snippets.</CardDescription>
                </CardHeader>
                <CardFooter>
                    <a href="https://qpg.hashnode.dev/300125-desktop-app-and-rpi-code-troubleshooting-and-progress" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 hover:underline transition-colors">Read more →</a>
                </CardFooter>
                </Card>
                <Card>
                <CardHeader>
                    <CardTitle className="text-xl">11/02/25 — HID Keyboard Simulation</CardTitle>
                    <CardDescription>While working on using the Raspberry Pi 5 to simulate a keyboard (in order to enter the user's username and password into the computer), we came across a plethora of different challenges. Eventually, we finally got to a point where we finally realized it would be impossible to actually accomplish this with the device, so we had to pivot to using a different device that supports HID Keyboard simulation and has USB OTG - a Raspberry Pi Pico. In this post, we will cover what we initially tried to do, what went wrong, and how this was fixed (and why) with the Raspberry Pi Pico.</CardDescription>
                </CardHeader>
                <CardFooter>
                    <a href="https://qpg.hashnode.dev/110225-hid-keyboard-simulation" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 hover:underline transition-colors">Read more →</a>
                </CardFooter>
                </Card>
                <Card>
                <CardHeader>
                    <CardTitle className="text-xl">25/02/25 — Facial Recognition & Encryption Clients</CardTitle>
                    <CardDescription>Another one of the most important features of our system was the facial recognition being used as 2-factor authentication on the Raspberry Pi 5. Initially, our plan seemed to be relatively straightforward and simple: we would just have to record a five second video, then train the model on that video, associated with the username, so the model would recognize that person's face as their username. However, reality didn't quite match our wishful thinking. In this blog post, we will talk about how we went from manually scraping a few images from the initial video recording of a user with a Bash script, to creating a fully privacy-friendly approach.</CardDescription>
                </CardHeader>
                <CardFooter>
                    <a href="https://qpg.hashnode.dev/250225-facial-recognition-and-encryption-clients" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 hover:underline transition-colors">Read more →</a>
                </CardFooter>
                </Card>
                <Card>
                <CardHeader>
                    <CardTitle className="text-xl">07/03/25 — Granite Hallucinations: NLP Fix</CardTitle>
                    <CardDescription>Have you ever had a conversation with a chatbot, and it decides to just make up some random stuff and not make any sense? That's what was happening with the IBM Granite model we were using when only feeding it a large JSON and expecting it to automatically search/sort through and filter out the unnecessary information, retrieving the correct settings (and therefore commands) relevant to a user's prompt. As a team, we referred to these random changes in the settings retrieved as “hallucinations”, because we weren't entirely sure where these changes were coming from.</CardDescription>
                </CardHeader>
                <CardFooter>
                    <a href="https://qpg.hashnode.dev/070325-granite-hallucinations-nlp-fix" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 hover:underline transition-colors">Read more →</a>
                </CardFooter>
                </Card>
                <Card>
                <CardHeader>
                    <CardTitle className="text-xl">18/03/25 — Docker Containerization & IBM Cloud Deployment</CardTitle>
                    <CardDescription>In order to deploy our server, we had to first containerize it. At first, we thought this would be relatively straightforward, but as it turned out, it was a lot more complex than we initially anticipated. First, there was the problem of building for different architectures (AMD64 vs ARM64). Then, we had to try to meet all of the requirements needed to build a Tauri app - in particular, the dlib requirement was extremely hard to satisfy. There were also a few other problems, and we will delve into our entire journey with dockerization in this blog post.</CardDescription>
                </CardHeader>
                <CardFooter>
                    <a href="https://qpg.hashnode.dev/180325-docker-containerization-and-ibm-cloud-deployment" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 hover:underline transition-colors">Read more →</a>
                </CardFooter>
                </Card>
            </div>
            <p className="text-lg mt-6">
                You can explore the full list of articles on our blog at <a href="https://qpg.hashnode.dev" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 hover:underline transition-colors">qpg.hashnode.dev</a>.
            </p>
            </div>
          <div id="monthly-videos">
            <h1 className="text-4xl font-bold my-6">Monthly Videos</h1>
            <p className="text-lg mb-6">
              Below are our four monthly update videos for our project. Each video dives deeper into our progress and challenges we faced during each month of development.
            </p>
            {/* Responsive 2-column layout for videos */}
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">December Update</CardTitle>
                </CardHeader>
                <CardContent>
                  {/* Replace VIDEO_ID with your actual YouTube video ID */}
                  <div className="overflow-hidden rounded-lg shadow">
                    <iframe
                      className="w-full aspect-video"
                      src="https://www.youtube.com/embed/2vZZyaepIAw"
                      title="December YouTube video"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">January Update</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="overflow-hidden rounded-lg shadow">
                    <iframe
                      className="w-full aspect-video"
                      src="https://www.youtube.com/embed/YmrEh3_8U_8"
                      title="January YouTube video"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">February Update</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="overflow-hidden rounded-lg shadow">
                    <iframe
                      className="w-full aspect-video"
                      src="https://www.youtube.com/embed/Lb6-CZsGs4E"
                      title="February YouTube video"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">March Update</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="overflow-hidden rounded-lg shadow">
                    <iframe
                      className="w-full aspect-video"
                      src="https://www.youtube.com/embed/gIj8c0EoBAk"
                      title="March YouTube video"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
