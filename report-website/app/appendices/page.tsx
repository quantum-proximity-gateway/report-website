import { SidebarTrigger } from "@/components/ui/sidebar"
import { Separator } from "@/components/ui/separator"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Metadata } from 'next';
import { BASE_PATH } from "@/config";


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
            <p className="text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div id="deployment-manual">
            <h1 className="text-4xl font-bold my-6">Deployment Manual</h1>
            <p className="text-lg">
              Same as README? Copy content from README or link it?
            </p>
          </div>
          <div id="legal">
            <h1 className="text-4xl font-bold my-6">Legal</h1>
            <p className="text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
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
            <p className="text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
