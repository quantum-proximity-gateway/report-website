import { SidebarTrigger } from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";
import { Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbPage } from "@/components/ui/breadcrumb";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const teamMembers = [
    {
        name: 'Marwan Yassini Chairi El Kamel',
        role: '...',
        email: 'marwan.kamel.23@ucl.ac.uk',
        photo: '/path/to/photo1.jpg',
    },
    {
        name: 'Raghav Awasthi',
        role: '...',
        email: 'raghav.awasthi.23@ucl.ac.uk​',
        contribution: '...',
        photo: '/path/to/photo2.jpg',
    },
    {
        name: 'Abdulhamid Abayomi',
        role: '...',
        email: 'abdulhamid.abayomi.23@ucl.ac.uk',
        photo: '/path/to/photo3.jpg',
    },
    {
        name: 'Abdul Muhaymin Abdul Hafiz',
        role: '...',
        email: 'abdul.hafiz.23@ucl.ac.uk​',
        photo: '/path/to/photo4.jpg',
    },
];

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
              Our achievements with the Quantum Proximity Gateway mark a significant leap forward in secure and adaptive authentication. By eliminating the need for manual logins, we have not only streamlined user access but also enhanced digital inclusivity—ensuring that individuals of all abilities can interact with technology effortlessly. Our implementation of AI Proximity Agents, through the use of IBM Granite and Qiskit, has redefined how users personalise their digital experience, creating an intelligent, self-regulating ecosystem that adapts to users' accessibility needs in real time. Furthermore, with post-quantum encryption, we have future-proofed security, safeguarding sensitive data against even the most advanced threats. This innovation represents more than just convenience - it is a transformative shift towards a smarter, more secure, and universally accessible digital experience.
            </p>
          </div>
          <div id="video">
            <h1 className="text-4xl font-bold my-6">Video</h1>
            <p className="text-lg my-6">
              This video outlines the key finished functionalities of the Quantum Proximity Gateway and explores the technologies used.
            </p>
            <div className="video-container">
              <h2>Title</h2>
              <video controls width="600">
                <source src="path/to/video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
          <div id="development-team">
            <h1 className="text-4xl font-bold my-6">Development Team</h1>
            <div className="flex flex-wrap justify-center">
              {teamMembers.map((member, index) => (
                <Card>
                  <CardHeader>
                    <CardTitle>{ member.name }</CardTitle>
                    <CardDescription>{ member.role }</CardDescription>
                    <CardDescription>{ member.email }</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>Card Content</p>
                  </CardContent>
                  <CardFooter>
                    <p>Card Footer</p>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
          <div id="project-management">
            <h1 className="text-4xl font-bold my-6">Project Management</h1>
            <p className="text-lg">
              (Will create Gantt-Chart)
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}