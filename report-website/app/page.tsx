"use client";

import { SidebarTrigger } from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";
import { Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbPage } from "@/components/ui/breadcrumb";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Image from "next/image";
import { useState } from "react";

const teamMembers = [
    {
        name: 'Marwan Yassini Chairi El Kamel',
        role: 'Project Lead, Lead Programmer',
        email: 'marwan.kamel.23@ucl.ac.uk',
        photo: '/home/marwan.jpg',
        link: 'https://www.linkedin.com/in/marwanyassini/',
    },
    {
        name: 'Raghav Awasthi',
        role: 'Software Developer, NLP Lead',
        email: 'raghav.awasthi.23@ucl.ac.uk',
        photo: '/home/raghav.jpg',
        link: 'https://www.linkedin.com/in/raghavawasthi2005/',
    },
    {
        name: 'Abdulhamid Abayomi',
        role: 'UI/UX Designer, Report Website Lead',
        email: 'abdulhamid.abayomi.23@ucl.ac.uk',
        photo: '/home/abdulhamid.jpg',
        link: 'https://www.linkedin.com/in/abdulhamid-abayomi-145593235/',
    },
    {
        name: 'Abdul Muhaymin Abdul Hafiz',
        role: 'Software Developer, Encryption Lead',
        email: 'abdul.hafiz.23@ucl.ac.uk',
        photo: '/home/abdul-muhaymin.jpg',
        link: 'https://www.linkedin.com/in/abmu/',
    },
];

export default function Home() {
    const [isModalOpen, setIsModalOpen] = useState(false);

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
      <div className="flex flex-col items-center shrink-0 border-b px-8 py-16">
        <h1 className="text-8xl font-bold text-center">Quantum Proximity Gateway</h1>
        <h1 className="text-4xl text-center my-6">+ Proximity Agents</h1>
      </div>
      <div className="flex flex-col items-center shrink-0 border-b px-8 py-4">
        <div className="flex flex-wrap items-center justify-center gap-12">
          <Image src="/home/ibm.png" alt="IBM logo" width={200} height={100} className="object-contain" />
          <Image src="/home/ucl.png" alt="UCL logo" width={300} height={100} className="object-contain" />
          <Image src="/home/rpi.png" alt="RPi logo" width={200} height={100} className="object-contain" />
        </div>
      </div>
      <div className="flex justify-center px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6 max-w-4xl">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-bold">Proximity Detection</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Intelligent proximity sensing that automatically locks and unlocks devices based on user presence, enhancing both security and convenience.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-bold">Proximity Agents</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">AI-powered assistants that learn user preferences and accessibility needs, automatically adjusting device settings when a user approaches.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-bold">Facial Recognition</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Advanced facial recognition technology that authenticates users based on their unique facial features, providing secure and seamless access without passwords.</p>
            </CardContent>
          </Card>  
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-bold">Post-Quantum Encryption</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Future-proof security using encryption algorithms resistant to quantum computing attacks, ensuring long-term protection of sensitive user data.</p>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="flex justify-center p-6">
        <div className="max-w-4xl">
          <div id="abstract">
            <h1 className="text-4xl font-bold my-6">Abstract</h1>
            <p className="text-lg my-6">
              In modern computing environments, whether in the workplace or at home, seamless user-device interaction is essential for both efficiency and security. This interaction relies heavily on authentication and access control mechanisms, which verify user identity and regulate access to sensitive systems. Unfortunately, existing log-in and verification systems remain inflexible, often requiring manual input and failing to adapt dynamically to users' contextual and accessibility needs, which proves especially detrimental for disabled, elderly, or neurodivergent users. 
            </p>
            <p className="text-lg my-6">
              As such, we have created the <span className="font-semibold">Quantum Proximity Gateway</span> (QPG). Our solution integrates facial recognition technology with complex IoT infrastructure to enable effortless computer access based on user proximity and identity profiles. The system design allows for a centralised ecosystem of devices to seamlessly communicate with each other, forming a robust and interconnected network of QPG-enabled devices, across which, encrypted user profiles and settings can be interacted with using <span className="font-semibold">Proximity Agents</span>. Robust security and privacy controls are also prioritised within the system, with post-quantum encryption ensuring that users' profiles and settings remain highly protected.
            </p>
            <p className="text-lg">
              Through eliminating the need for manual logins, we have not only streamlined user access but also enhanced digital inclusivity — ensuring that individuals of all abilities can interact with technology effortlessly. Furthermore, our implementation of AI Proximity Agents, through the use of IBM Granite, has redefined how users personalise their digital experience, creating an intelligent, self-regulating ecosystem that adapts to users' accessibility needs in real time. In addition, by leveraging <span className="font-semibold">post-quantum encryption</span>, we have also future-proofed security, safeguarding sensitive data against even the most advanced threats. This project represents a transformative shift towards a smarter, more secure, and accessible digital experience.
            </p>
          </div>
          <div id="video">
            <h1 className="text-4xl font-bold my-6">Video</h1>
            <p className="text-lg my-6">
              This video outlines the key finished functionalities of the Quantum Proximity Gateway and explores the technologies used.
            </p>
            <div className="flex justify-center">
              <iframe 
                className="w-full aspect-video"
                src="https://youtube.com/embed/mxV79edzIuk" 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
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
            <h1 className="text-4xl font-bold my-4">Project Timeline</h1>
            <p className="text-lg">
              We used a Gantt chart in order to track our progress throughout the project.
            </p>
            <Image
              src="/home/gantt-chart.png"
              alt="Gantt chart"
              width={1000}
              height={500}
              className="object-contain my-4 cursor-pointer"
              onClick={() => setIsModalOpen(true)}
            />

            {isModalOpen && (
              <div
                className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
                onClick={() => setIsModalOpen(false)}
              >
                <div onClick={(e) => e.stopPropagation()}>
                  <Image
                    src="/home/gantt-chart.png"
                    alt="Gantt chart enlarged"
                    width={1250}
                    height={750}
                    className="object-contain"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  )
}
