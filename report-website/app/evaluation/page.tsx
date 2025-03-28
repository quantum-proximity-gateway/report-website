import { SidebarTrigger } from "@/components/ui/sidebar"
import { Separator } from "@/components/ui/separator"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Card, CardContent, CardHeader, CardFooter, CardTitle, CardDescription } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Metadata } from 'next';
import { BASE_PATH } from "@/config";


export const metadata: Metadata = {
    title: 'Evaluation',
  };

export default function Evaluation() {
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
              <BreadcrumbPage>Evaluation</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </header>
      <div className="flex flex-col items-center shrink-0 border-b p-8">
        <h1 className="text-6xl text-center my-6">Evaluation</h1>
      </div>
      <div className="flex justify-center p-6">
        <div className="max-w-4xl">
          <div id="achievments">
            <h1 className="text-4xl font-bold my-6">Achievements</h1>
            <h1 className="text-2xl font-medium my-6">Functional Requirements</h1>
            <p className="text-lg">
              As shown in the table below, our team managed to successfully complete all of our "must have" requirements, and we had a good attempt at completing our "should have" and "could have" requirements.
            </p>
            <Table className="my-6">
              <TableHeader>
                <TableRow className="text-lg bg-gray-100 dark:bg-gray-700">
                  <TableHead>ID</TableHead>
                  <TableHead>MoSCoW</TableHead>
                  <TableHead className="w-[60%]">Requirement</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Contributors</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="text-lg">
                    1
                  </TableCell>
                  <TableCell className="text-lg">
                    Must
                  </TableCell>
                  <TableCell className="text-lg">
                    <span className="font-medium">BLE proximity connection to Raspberry Pi</span>
                  </TableCell>
                  <TableCell className="text-lg">
                    ✅
                  </TableCell>
                  <TableCell className="text-sm text-muted-foreground">
                    Marwan
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="text-lg">
                    2
                  </TableCell>
                  <TableCell className="text-lg">
                    Must
                  </TableCell>
                  <TableCell className="text-lg">
                    <span className="font-medium">Facial recognition via Raspberry Pi (using camera module)</span>
                  </TableCell>
                  <TableCell className="text-lg">
                    ✅
                  </TableCell>
                  <TableCell className="text-sm text-muted-foreground">
                    Raghav, Marwan
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="text-lg">
                    3
                  </TableCell>
                  <TableCell className="text-lg">
                    Must
                  </TableCell>
                  <TableCell className="text-lg">
                    <span className="font-medium">Accessibility settings fetching</span>
                  </TableCell>
                  <TableCell className="text-lg">
                    ✅
                  </TableCell>
                  <TableCell className="text-sm text-muted-foreground">
                    Abdul Muhaymin, Raghav
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="text-lg">
                    4
                  </TableCell>
                  <TableCell className="text-lg">
                    Must
                  </TableCell>
                  <TableCell className="text-lg">
                    <span className="font-medium">Server to host user profiles</span>
                  </TableCell>
                  <TableCell className="text-lg">
                    ✅
                  </TableCell>
                  <TableCell className="text-sm text-muted-foreground">
                    Marwan, Abdul Muhaymin
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="text-lg">
                    5
                  </TableCell>
                  <TableCell className="text-lg">
                    Must
                  </TableCell>
                  <TableCell className="text-lg">
                    <span className="font-medium">Post-quantum cryptography encryption</span>
                  </TableCell>
                  <TableCell className="text-lg">
                    ✅
                  </TableCell>
                  <TableCell className="text-sm text-muted-foreground">
                    Marwan, Abdul Muhaymin
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="text-lg">
                    6
                  </TableCell>
                  <TableCell className="text-lg">
                    Must
                  </TableCell>
                  <TableCell className="text-lg">
                    <span className="font-medium">AI chatbot assistant</span>
                  </TableCell>
                  <TableCell className="text-lg">
                    ✅
                  </TableCell>
                  <TableCell className="text-sm text-muted-foreground">
                    Raghav, Marwan
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="text-lg">
                    7
                  </TableCell>
                  <TableCell className="text-lg">
                    Should
                  </TableCell>
                  <TableCell className="text-lg">
                    <span className="font-medium">Website to register device and setup initial settings</span>
                  </TableCell>
                  <TableCell className="text-lg">
                    ⚠️
                  </TableCell>
                  <TableCell className="text-sm text-muted-foreground">
                    Marwan
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="text-lg">
                    8
                  </TableCell>
                  <TableCell className="text-lg">
                    Should
                  </TableCell>
                  <TableCell className="text-lg">
                    <span className="font-medium">Directional proximity management</span>
                  </TableCell>
                  <TableCell className="text-lg">
                    ✅
                  </TableCell>
                  <TableCell className="text-sm text-muted-foreground">
                    Abdulhamid, Marwan
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="text-lg">
                    9
                  </TableCell>
                  <TableCell className="text-lg">
                    Could
                  </TableCell>
                  <TableCell className="text-lg">
                    <span className="font-medium">API Layer to make system reproducible</span>
                  </TableCell>
                  <TableCell className="text-lg">
                    ✅
                  </TableCell>
                  <TableCell className="text-sm text-muted-foreground">
                    Raghav, Abdulhamid
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
            <Card>
              <CardContent className="p-6">
                <ul className="text-lg list-disc pl-6 space-y-1">
                  <li><span className="font-medium">100%</span> of our "must have" requirements were fully completed.</li>
                  <li><span className="font-medium">100%</span> of our "should have" requirements were partially completed.</li>
                  <li><span className="font-medium">100%</span> of our "could have" requirements were fully completed.</li>
                </ul>
              </CardContent>
            </Card>
            <h1 className="text-2xl font-medium my-6">Known Bugs</h1>
            <p className="text-lg">
              During the creation of each feature in our system, we performed extensive testing that any known bugs preventing the system from functioning as intended was dealt with immediately. However, due to time constraints some bugs remained, luckily all of these have easy remedies.
            </p>
            <Table className="mt-6">
              <TableHeader>
                <TableRow className="text-lg bg-gray-100 dark:bg-gray-700">
                  <TableHead>ID</TableHead>
                  <TableHead className="w-[70%]">Description</TableHead>
                  <TableHead>Severity</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="text-lg">
                    1
                  </TableCell>
                  <TableCell className="text-lg">
                    <span className="font-medium">UART connection issues Raspberry Pi &rarr; Pico, due to lack of soldering</span>
                  </TableCell>
                  <TableCell className="text-lg text-yellow-500">
                    🟡 Moderate
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="text-lg">
                    2
                  </TableCell>
                  <TableCell className="text-lg">
                    <span className="font-medium"> Small models hallucinating commands</span>
                  </TableCell>
                  <TableCell className="text-lg text-green-500">
                    🟢 Low
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="text-lg">
                    3
                  </TableCell>
                  <TableCell className="text-lg">
                    <span className="font-medium"> Preferences feature on IBM Proximity Agents</span>
                  </TableCell>
                  <TableCell className="text-lg text-yellow-500">
                    🟡 Moderate
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="text-lg">
                    4
                  </TableCell>
                  <TableCell className="text-lg">
                    <span className="font-medium"> BLE connections failing whilst connected to eduroam</span>
                  </TableCell>
                  <TableCell className="text-lg text-yellow-500">
                    🟡 Moderate
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
          <div id="individual-contribution">
            <h1 className="text-4xl font-bold my-6">Individual Contribution</h1>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  <h1 className="text-2xl font-medium">
                    System Artefacts
                  </h1>
                </AccordionTrigger>
                <AccordionContent>
                  <Table>
                    <TableHeader>
                      <TableRow className="text-lg bg-gray-100 dark:bg-gray-700">
                        <TableHead>Work Package</TableHead>
                        <TableHead className="w-[20%]">Marwan</TableHead>
                        <TableHead className="w-[20%]">Raghav</TableHead>
                        <TableHead className="w-[20%]">Abdulhamid</TableHead>
                        <TableHead className="w-[20%]">Abdul Muhaymin</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="text-lg">
                          <span className="font-medium">Project Partner Liaison</span>
                        </TableCell>
                        <TableCell className="text-lg">
                          90<span className="text-muted-foreground">%</span>
                        </TableCell>
                        <TableCell className="text-lg">
                          10<span className="text-muted-foreground">%</span>
                        </TableCell>
                        <TableCell className="text-lg">
                          0<span className="text-muted-foreground">%</span>
                        </TableCell>
                        <TableCell className="text-lg">
                          0<span className="text-muted-foreground">%</span>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="text-lg">
                          <span className="font-medium">Presentations</span>
                        </TableCell>
                        <TableCell className="text-lg">
                          XX<span className="text-muted-foreground">%</span>
                        </TableCell>
                        <TableCell className="text-lg">
                          XX<span className="text-muted-foreground">%</span>
                        </TableCell>
                        <TableCell className="text-lg">
                          XX<span className="text-muted-foreground">%</span>
                        </TableCell>
                        <TableCell className="text-lg">
                          XX<span className="text-muted-foreground">%</span>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="text-lg">
                          <span className="font-medium">Research</span>
                        </TableCell>
                        <TableCell className="text-lg">
                          XX<span className="text-muted-foreground">%</span>
                        </TableCell>
                        <TableCell className="text-lg">
                          XX<span className="text-muted-foreground">%</span>
                        </TableCell>
                        <TableCell className="text-lg">
                          XX<span className="text-muted-foreground">%</span>
                        </TableCell>
                        <TableCell className="text-lg">
                          XX<span className="text-muted-foreground">%</span>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="text-lg">
                          <span className="font-medium">Server</span>
                        </TableCell>
                        <TableCell className="text-lg">
                          XX<span className="text-muted-foreground">%</span>
                        </TableCell>
                        <TableCell className="text-lg">
                          XX<span className="text-muted-foreground">%</span>
                        </TableCell>
                        <TableCell className="text-lg">
                          XX<span className="text-muted-foreground">%</span>
                        </TableCell>
                        <TableCell className="text-lg">
                          XX<span className="text-muted-foreground">%</span>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="text-lg">
                          <span className="font-medium">Registration Site</span>
                        </TableCell>
                        <TableCell className="text-lg">
                          XX<span className="text-muted-foreground">%</span>
                        </TableCell>
                        <TableCell className="text-lg">
                          XX<span className="text-muted-foreground">%</span>
                        </TableCell>
                        <TableCell className="text-lg">
                          XX<span className="text-muted-foreground">%</span>
                        </TableCell>
                        <TableCell className="text-lg">
                          XX<span className="text-muted-foreground">%</span>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="text-lg">
                          <span className="font-medium">ESP32</span>
                        </TableCell>
                        <TableCell className="text-lg">
                          XX<span className="text-muted-foreground">%</span>
                        </TableCell>
                        <TableCell className="text-lg">
                          XX<span className="text-muted-foreground">%</span>
                        </TableCell>
                        <TableCell className="text-lg">
                          XX<span className="text-muted-foreground">%</span>
                        </TableCell>
                        <TableCell className="text-lg">
                          XX<span className="text-muted-foreground">%</span>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="text-lg">
                          <span className="font-medium">Raspberry Pi</span>
                        </TableCell>
                        <TableCell className="text-lg">
                          XX<span className="text-muted-foreground">%</span>
                        </TableCell>
                        <TableCell className="text-lg">
                          XX<span className="text-muted-foreground">%</span>
                        </TableCell>
                        <TableCell className="text-lg">
                          XX<span className="text-muted-foreground">%</span>
                        </TableCell>
                        <TableCell className="text-lg">
                          XX<span className="text-muted-foreground">%</span>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="text-lg">
                          <span className="font-medium">Desktop App</span>
                        </TableCell>
                        <TableCell className="text-lg">
                          XX<span className="text-muted-foreground">%</span>
                        </TableCell>
                        <TableCell className="text-lg">
                          XX<span className="text-muted-foreground">%</span>
                        </TableCell>
                        <TableCell className="text-lg">
                          XX<span className="text-muted-foreground">%</span>
                        </TableCell>
                        <TableCell className="text-lg">
                          XX<span className="text-muted-foreground">%</span>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="text-lg">
                          <span className="font-medium">Testing</span>
                        </TableCell>
                        <TableCell className="text-lg">
                          XX<span className="text-muted-foreground">%</span>
                        </TableCell>
                        <TableCell className="text-lg">
                          XX<span className="text-muted-foreground">%</span>
                        </TableCell>
                        <TableCell className="text-lg">
                          XX<span className="text-muted-foreground">%</span>
                        </TableCell>
                        <TableCell className="text-lg">
                          XX<span className="text-muted-foreground">%</span>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  <h1 className="text-2xl font-medium">
                    Report
                  </h1>
                </AccordionTrigger>
                <AccordionContent>
                  <Table>
                    <TableHeader>
                      <TableRow className="text-lg bg-gray-100 dark:bg-gray-700">
                        <TableHead>Work Package</TableHead>
                        <TableHead className="w-[20%]">Marwan</TableHead>
                        <TableHead className="w-[20%]">Raghav</TableHead>
                        <TableHead className="w-[20%]">Abdulhamid</TableHead>
                        <TableHead className="w-[20%]">Abdul Muhaymin</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="text-lg">
                          <span className="font-medium">Website Template and Setup</span>
                        </TableCell>
                        <TableCell className="text-lg">
                          XX<span className="text-muted-foreground">%</span>
                        </TableCell>
                        <TableCell className="text-lg">
                          XX<span className="text-muted-foreground">%</span>
                        </TableCell>
                        <TableCell className="text-lg">
                          XX<span className="text-muted-foreground">%</span>
                        </TableCell>
                        <TableCell className="text-lg">
                          XX<span className="text-muted-foreground">%</span>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="text-lg">
                          <span className="font-medium">Videos</span>
                        </TableCell>
                        <TableCell className="text-lg">
                          XX<span className="text-muted-foreground">%</span>
                        </TableCell>
                        <TableCell className="text-lg">
                          XX<span className="text-muted-foreground">%</span>
                        </TableCell>
                        <TableCell className="text-lg">
                          XX<span className="text-muted-foreground">%</span>
                        </TableCell>
                        <TableCell className="text-lg">
                          XX<span className="text-muted-foreground">%</span>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="text-lg">
                          <span className="font-medium">Home</span>
                        </TableCell>
                        <TableCell className="text-lg">
                          XX<span className="text-muted-foreground">%</span>
                        </TableCell>
                        <TableCell className="text-lg">
                          XX<span className="text-muted-foreground">%</span>
                        </TableCell>
                        <TableCell className="text-lg">
                          XX<span className="text-muted-foreground">%</span>
                        </TableCell>
                        <TableCell className="text-lg">
                          XX<span className="text-muted-foreground">%</span>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="text-lg">
                          <span className="font-medium">Requirements</span>
                        </TableCell>
                        <TableCell className="text-lg">
                          XX<span className="text-muted-foreground">%</span>
                        </TableCell>
                        <TableCell className="text-lg">
                          XX<span className="text-muted-foreground">%</span>
                        </TableCell>
                        <TableCell className="text-lg">
                          XX<span className="text-muted-foreground">%</span>
                        </TableCell>
                        <TableCell className="text-lg">
                          XX<span className="text-muted-foreground">%</span>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="text-lg">
                          <span className="font-medium">Research</span>
                        </TableCell>
                        <TableCell className="text-lg">
                          XX<span className="text-muted-foreground">%</span>
                        </TableCell>
                        <TableCell className="text-lg">
                          XX<span className="text-muted-foreground">%</span>
                        </TableCell>
                        <TableCell className="text-lg">
                          XX<span className="text-muted-foreground">%</span>
                        </TableCell>
                        <TableCell className="text-lg">
                          XX<span className="text-muted-foreground">%</span>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="text-lg">
                          <span className="font-medium">Algorithms</span>
                        </TableCell>
                        <TableCell className="text-lg">
                          XX<span className="text-muted-foreground">%</span>
                        </TableCell>
                        <TableCell className="text-lg">
                          XX<span className="text-muted-foreground">%</span>
                        </TableCell>
                        <TableCell className="text-lg">
                          XX<span className="text-muted-foreground">%</span>
                        </TableCell>
                        <TableCell className="text-lg">
                          XX<span className="text-muted-foreground">%</span>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="text-lg">
                          <span className="font-medium">UI Design</span>
                        </TableCell>
                        <TableCell className="text-lg">
                          XX<span className="text-muted-foreground">%</span>
                        </TableCell>
                        <TableCell className="text-lg">
                          XX<span className="text-muted-foreground">%</span>
                        </TableCell>
                        <TableCell className="text-lg">
                          XX<span className="text-muted-foreground">%</span>
                        </TableCell>
                        <TableCell className="text-lg">
                          XX<span className="text-muted-foreground">%</span>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="text-lg">
                          <span className="font-medium">System Design</span>
                        </TableCell>
                        <TableCell className="text-lg">
                          XX<span className="text-muted-foreground">%</span>
                        </TableCell>
                        <TableCell className="text-lg">
                          XX<span className="text-muted-foreground">%</span>
                        </TableCell>
                        <TableCell className="text-lg">
                          XX<span className="text-muted-foreground">%</span>
                        </TableCell>
                        <TableCell className="text-lg">
                          XX<span className="text-muted-foreground">%</span>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="text-lg">
                          <span className="font-medium">Implementation</span>
                        </TableCell>
                        <TableCell className="text-lg">
                          XX<span className="text-muted-foreground">%</span>
                        </TableCell>
                        <TableCell className="text-lg">
                          XX<span className="text-muted-foreground">%</span>
                        </TableCell>
                        <TableCell className="text-lg">
                          XX<span className="text-muted-foreground">%</span>
                        </TableCell>
                        <TableCell className="text-lg">
                          XX<span className="text-muted-foreground">%</span>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="text-lg">
                          <span className="font-medium">Testing</span>
                        </TableCell>
                        <TableCell className="text-lg">
                          XX<span className="text-muted-foreground">%</span>
                        </TableCell>
                        <TableCell className="text-lg">
                          XX<span className="text-muted-foreground">%</span>
                        </TableCell>
                        <TableCell className="text-lg">
                          XX<span className="text-muted-foreground">%</span>
                        </TableCell>
                        <TableCell className="text-lg">
                          XX<span className="text-muted-foreground">%</span>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="text-lg">
                          <span className="font-medium">Evaluation</span>
                        </TableCell>
                        <TableCell className="text-lg">
                          XX<span className="text-muted-foreground">%</span>
                        </TableCell>
                        <TableCell className="text-lg">
                          XX<span className="text-muted-foreground">%</span>
                        </TableCell>
                        <TableCell className="text-lg">
                          XX<span className="text-muted-foreground">%</span>
                        </TableCell>
                        <TableCell className="text-lg">
                          XX<span className="text-muted-foreground">%</span>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="text-lg">
                          <span className="font-medium">Appendices (Manuals, Legal, Blog, etc.)</span>
                        </TableCell>
                        <TableCell className="text-lg">
                          XX<span className="text-muted-foreground">%</span>
                        </TableCell>
                        <TableCell className="text-lg">
                          XX<span className="text-muted-foreground">%</span>
                        </TableCell>
                        <TableCell className="text-lg">
                          XX<span className="text-muted-foreground">%</span>
                        </TableCell>
                        <TableCell className="text-lg">
                          XX<span className="text-muted-foreground">%</span>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <h1 className="text-2xl font-medium my-6">Combined Overall</h1>
            <p className="text-lg my-6">
              It should be noted that some sections are not weighted equally, therefore the values below many not exactly align with the raw data given in the tables above.
            </p>
            <Card>
              <CardContent className="p-6">
                <Table>
                  <TableHeader>
                    <TableRow className="text-lg">
                    <TableHead className="w-[25%]">Marwan</TableHead>
                    <TableHead className="w-[25%]">Raghav</TableHead>
                    <TableHead className="w-[25%]">Abdulhamid</TableHead>
                    <TableHead className="w-[25%]">Abdul Muhaymin</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                    <TableCell className="text-lg">
                      <span className="font-medium">XX</span><span className="text-muted-foreground">%</span>
                    </TableCell>
                    <TableCell className="text-lg">
                      <span className="font-medium">XX</span><span className="text-muted-foreground">%</span>
                    </TableCell>
                    <TableCell className="text-lg">
                      <span className="font-medium">XX</span><span className="text-muted-foreground">%</span>
                    </TableCell>
                    <TableCell className="text-lg">
                      <span className="font-medium">XX</span><span className="text-muted-foreground">%</span>
                    </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>
          <div id="critical-evaluation">
            <h1 className="text-4xl font-bold my-6">Critical Evaluation</h1>
            <p className="text-lg my-6">
              Whilst great effort has been put into this project by all members, this project is not without fault. In the section below, we will evaluate which areas were completed to a high standard, and which areas could be improved upon given more time.
            </p>
            <Tabs defaultValue="ui-ux">
              <TabsList className="grid w-full grid-cols-7">
                <TabsTrigger value="ui-ux">UI/UX</TabsTrigger>
                <TabsTrigger value="functionality">Functionality</TabsTrigger>
                <TabsTrigger value="stability">Stability</TabsTrigger>
                <TabsTrigger value="efficiency">Efficiency</TabsTrigger>
                <TabsTrigger value="compatibility">Compatibility</TabsTrigger>
                <TabsTrigger value="maintainability">Maintainability</TabsTrigger>
                <TabsTrigger value="project-management" className="text-xs">Project Management</TabsTrigger>
              </TabsList>
              <TabsContent value="ui-ux">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">User Interface / User Experience</CardTitle>
                    <Separator />
                  </CardHeader>
                  <CardContent>
                    <p className="text-lg">
                      [...]
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="functionality">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Functionality</CardTitle>
                    <Separator />
                  </CardHeader>
                  <CardContent>
                    <p className="text-lg">
                      [...]
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="stability">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Stability</CardTitle>
                    <Separator />
                  </CardHeader>
                  <CardContent>
                    <p className="text-lg">
                      [...]
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="efficiency">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Efficiency</CardTitle>
                    <Separator />
                  </CardHeader>
                  <CardContent>
                    <p className="text-lg">
                      [...]
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="compatibility">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Compatibility</CardTitle>
                    <Separator />
                  </CardHeader>
                  <CardContent>
                    <p className="text-lg">
                      [...]
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="maintainability">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Maintainability</CardTitle>
                    <Separator />
                  </CardHeader>
                  <CardContent>
                    <p className="text-lg">
                      [...]
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="project-management">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Project Management</CardTitle>
                    <Separator />
                  </CardHeader>
                  <CardContent>
                    <p className="text-lg">
                      [...]
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
          <div id="future">
            <h1 className="text-4xl font-bold my-6">Future</h1>
            <p className="text-lg">
              [How could the project be extended if you had more time?]
            </p>
            <p className="text-lg my-6">
              [...]
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}