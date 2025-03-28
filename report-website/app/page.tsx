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
        role: '...',
        email: 'marwan.kamel.23@ucl.ac.uk',
        photo: '/marwan.jpg',
        link: 'https://www.linkedin.com/in/marwanyassini/',
    },
    {
        name: 'Raghav Awasthi',
        role: '...',
        email: 'raghav.awasthi.23@ucl.ac.uk',
        photo: '/raghav.jpg',
        link: 'https://www.linkedin.com/in/raghavawasthi2005/',
    },
    {
        name: 'Abdulhamid Abayomi',
        role: '...',
        email: 'abdulhamid.abayomi.23@ucl.ac.uk',
        photo: '/abdulhamid.jpg',
        link: 'https://www.linkedin.com/in/abdulhamid-abayomi-145593235/',
    },
    {
        name: 'Abdul Muhaymin Abdul Hafiz',
        role: '...',
        email: 'abdul.hafiz.23@ucl.ac.uk',
        photo: '/abdul-muhaymin.jpg',
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
              In modern computing environments, whether in the workplace or at home, seamless user-device interaction is essential for both efficiency and security. This interaction relies heavily on authentication and access control mechanisms, which verify user identity and regulate access to sensitive systems. Unfortunately, existing log-in and verification systems remain inflexible, often requiring manual input and failing to adapt dynamically to users' contextual and accessibility needs, which proves especially detrimental for disabled, elderly, or neurodivergent users. 
            </p>
            <p className="text-lg my-6">
              As such, we have created the <span className="font-semibold">Quantum Proximity Gateway</span> (QPG). Our solution integrates facial recognition technology with complex IoT infrastructure to enable effortless computer access based on user proximity and identity profiles. The system design allows for a centralised ecosystem of devices to seamlessly communicate with each other, forming a robust and interconnected network of QPG-enabled devices, across which, encrypted user profiles and settings can be interacted with using <span className="font-semibold">Proximity Agents</span>. Robust security and privacy controls are also prioritised within the system, with post-quantum encryption ensuring that users' profiles and settings remain highly protected.
            </p>
            <p className="text-lg mb-12">
              Through eliminating the need for manual logins, we have not only streamlined user access but also enhanced digital inclusivity — ensuring that individuals of all abilities can interact with technology effortlessly. Furthermore, our implementation of AI Proximity Agents, through the use of IBM Granite, has redefined how users personalise their digital experience, creating an intelligent, self-regulating ecosystem that adapts to users' accessibility needs in real time. In addition, by leveraging <span className="font-semibold">post-quantum encryption</span>, we have also future-proofed security, safeguarding sensitive data against even the most advanced threats. This project represents a transformative shift towards a smarter, more secure, and accessible digital experience.
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
            <h1 className="text-4xl font-bold my-4">Project Timeline</h1>
            <p className="text-lg">
              We used a Gantt chart in order to track our progress throughout the project.
            </p>
            <Image
              src="/Gantt-Chart.png"
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
                    src="/Gantt-Chart.png"
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
