import { SidebarTrigger } from "@/components/ui/sidebar"
import { Separator } from "@/components/ui/separator"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import { Metadata } from 'next';

export default function Home() {
  return (
    <main className="w-full">
      <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
        <SidebarTrigger />
        <Separator orientation="vertical" className="mr-2 h-4 hidden md:block" />
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem className="hidden md:block">
              <BreadcrumbPage>Home</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </header>
      <div className="flex flex-col items-center shrink-0 border-b p-8">
        <h1 className="text-8xl font-bold text-center my-6">Quantum Proximity Gateway</h1>
        <h1 className="text-6xl text-center my-6">IBM + UCL</h1>
      </div>
      <div className="flex justify-center p-6">
        <div className="max-w-4xl">
          <div id="abstract">
            <h1 className="text-4xl font-bold my-6">Abstract</h1>
            <p className="text-lg my-6">
              In modern computing environments, whether in the workplace or at home, seamless user-device interaction is essential for both efficiency and security. This interaction relies heavily on authentication and access control mechanisms, which verify user identity and regulate access to sensitive systems. Unfortunately, existing log-in and verification systems remain inflexible, often requiring manual input and failing to adapt dynamically to users' contextual and accessibility needs, which proves especially detrimental for disabled, elderly, or neurodivergent users. 
            </p>
            <p className="text-lg my-6">
              As such, we have created the Quantum Proximity Gateway. Our solution integrates facial recognition technology with complex IoT infrastructure to enable effortless computer access based on user proximity and identity profiles. The system design allows for a centralised ecosystem of devices to seamlessly communicate with each other, forming a robust and interconnected network of QPG-enabled devices, across which, encrypted user profiles and settings can be interacted with using AI Proximity Agents. Robust security and privacy controls are also prioritised within the system, with post-quantum encryption ensuring that users' profiles and settings remain highly protected.
            </p>
            <p className="text-lg">
              Our achievements with the Quantum Proximity Gateway mark a significant leap forward in secure and adaptive authentication. By eliminating the need for manual logins, we have not only streamlined user access but also enhanced digital inclusivity—ensuring that individuals of all abilities can interact with technology effortlessly. Our implementation of AI Proximity Agents, through the use of IBM Granite ansd Qiskit, has redefined how devices communicate, creating an intelligent, self-regulating ecosystem that adapts to users' accessibiity needs in real time. Furthermore, with post-quantum encryption, we have future-proofed security, safeguarding sensitive data against even the most advanced threats. This innovation represents more than just convenience - it is a transformative shift towards a smarter, more secure, and universally accessible digital experience.
            </p>
          </div>
          <div id="video">
            <h1 className="text-4xl font-bold my-6">Video</h1>
            <p className="text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div id="development-team">
            <h1 className="text-4xl font-bold my-6">Development Team</h1>
            <p className="text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div id="project-management">
            <h1 className="text-4xl font-bold my-6">Project Management</h1>
            <p className="text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}