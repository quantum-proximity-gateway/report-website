import { SidebarTrigger } from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";
import { Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbPage } from "@/components/ui/breadcrumb";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Image from "next/image";

const teamMembers = [
    {
        name: 'Marwan Yassini Chairi El Kamel',
        role: '...',
        email: 'marwan.kamel.23@ucl.ac.uk',
        photo: 'https://media.licdn.com/dms/image/v2/D4E03AQHa0h6sDpxr4Q/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1692411237830?e=1747267200&v=beta&t=zVcEEFO-Q03raM6vkYQPUR2xewSsHqLHaj3BODjck-U',
        link: 'https://www.linkedin.com/in/marwanyassini/',
    },
    {
        name: 'Raghav Awasthi',
        role: '...',
        email: 'raghav.awasthi.23@ucl.ac.uk',
        photo: 'https://media.licdn.com/dms/image/v2/D4D03AQFuvfBp8p67OQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1693158111702?e=1747267200&v=beta&t=l5pfVphfPZRFpvKzLdh8jh31j1zey6UlGDL78Pwjeyc',
        link: 'https://www.linkedin.com/in/raghavawasthi2005/',
    },
    {
        name: 'Abdulhamid Abayomi',
        role: '...',
        email: 'abdulhamid.abayomi.23@ucl.ac.uk',
        photo: 'https://media.licdn.com/dms/image/v2/D4E03AQGYtjPToHKtZQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1690150244002?e=1747267200&v=beta&t=yDvuaZmvbWUrb8NC1fo97Px60fy0GX5tVNJ0bXin22o',
        link: 'https://www.linkedin.com/in/abdulhamid-abayomi-145593235/',
    },
    {
        name: 'Abdul Muhaymin Abdul Hafiz',
        role: '...',
        email: 'abdul.hafiz.23@ucl.ac.uk',
        photo: 'https://media.licdn.com/dms/image/v2/D4E03AQFGlo5aExH12A/profile-displayphoto-shrink_400_400/B4EZUstHvKH0Ag-/0/1740211781181?e=1747267200&v=beta&t=l8pAdQSDr3_IE98cTwWD6s0K3k_0OPM-fbP9-pnddJA',
        link: 'https://www.linkedin.com/in/abmu/',
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
              <BreadcrumbPage>Quantum Proximity Gateway</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </header>
      <div className="flex flex-col items-center shrink-0 border-b p-8">
        <h1 className="text-7xl font-bold text-center">Post-Quantum Proximity Gateway</h1>
        <h1 className="text-4xl text-center my-6">IBM Proximity Agents</h1>
        <div className="flex items-center justify-center gap-12">
          <Image src="/ibm.png" alt="IBM logo" width={200} height={100} className="object-contain" />
          <Image src="/ucl.png" alt="UCL logo" width={300} height={100} className="object-contain" />
          <Image src="/rpi.png" alt="RPi logo" width={200} height={100} className="object-contain" />
        </div>
      </div>
      <div className="flex justify-center p-6">
        <div className="max-w-4xl">
          <div id="abstract">
            <h1 className="text-4xl font-bold my-6">Abstract</h1>
            <p className="text-lg my-6">
            In today’s digital landscape, secure access to electronic devices has become more important than ever. Whether on a public computer at work, or a private laptop at home, the use of devices almost always relies on authentication mechanisms, which verify the identity of the user  and regulate entry to computer systems. Unfortunately, current log-in and verification systems remain rigid, typically requiring users to enter their passwords manually, without any consideration for their contextual and accessibility needs. While for some this may simply pose as a slight inconvenience, these systems are far more restrictive for disabled, elderly, and neurodivergent users, who may face difficulty accessing their devices without assistance. 
            </p>
            <p className="text-lg my-6">
              For this reason, we have created the <span className="font-semibold">Quantum Proximity Gateway</span>. Our solution integrates sophisticated IoT technologies with facial recognition capabilities to provide computer access based on user proximity and identity profiles. The system design centres around an ecosystem of devices, that work together to detect the presence of a user and facilitate secure system access without manual input. Alongside this, our system features a highly configurable AI chatbot powered by IBM Granite:  <span className="font-semibold"> the AI Proximity Agent</span> effectively enables users to customise their profiles and settings without having to navigate the system manually. Security and privacy were our main focus throughout the system, and therefore, the QPG utilises post-quantum encryption to ensure that sensitive user information and preferences remain protected.
            </p>
            <p className="text-lg">
            Our achievement with the Quantum Proximity Gateway represents a major advance in secure and accessible authentication. Overcoming the need for manual log-ins has not only streamlined user access, but has also enhanced digital inclusivity, so that anyone with any ability can interact with technology easliy. Our implementation of the AI Proximity Agents has transformed the way in which users personalise their digital experience, creating an intelligent computer environment that adapts to users' accessibility needs in real time. Additionally, by integrating <span className="font-semibold">post-quantum encryption</span>, we have ensured that our system remains secure from any future threats, safeguarding sensitive user information from even the most advanced cyberattacks. 
            </p>
          </div>
          <div id="video">
            <h1 className="text-4xl font-bold my-6">Video</h1>
            <p className="text-lg my-6">
              This video outlines the key finished functionalities of the Quantum Proximity Gateway and explores the technologies used.
            </p>
            <div className="flex justify-center">
              <video controls width="100%">
                <source src="path/to/video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
          <div id="development-team">
            <h1 className="text-4xl font-bold my-6">Development Team</h1>
            <div className="flex flex-wrap justify-center gap-10">
              {teamMembers.map((member) => (
                <Card key={ member.name }>
                  <CardHeader>
                    <CardTitle>{ member.name }</CardTitle>
                    <CardDescription>{ member.role }</CardDescription>
                  </CardHeader>
                  <CardContent className="flex justify-center">
                    <a href={ member.link }>
                      <Avatar className="w-32 h-32">
                        <AvatarImage src={ member.photo } />
                        <AvatarFallback></AvatarFallback>
                      </Avatar>
                    </a>
                  </CardContent>
                  <CardFooter>
                    <CardDescription>{ member.email }</CardDescription>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
          <div id="project-management">
            <h1 className="text-4xl font-bold my-6">Project Management</h1>
            <p className="text-lg">
              [INSERT GANTT-CHART]
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}