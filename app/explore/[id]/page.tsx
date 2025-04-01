"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, Info, Maximize, Minimize, RotateCcw } from "lucide-react"
import { Canvas } from "@react-three/fiber"
import { Environment, OrbitControls, PresentationControls, useGLTF } from "@react-three/drei"

// Sample artifact data
const artifacts = {
  "artifact-1": {
    id: "artifact-1",
    name: "Ancient Vase",
    origin: "Greek",
    period: "5th Century BCE",
    description:
      "This ancient Greek vase is a remarkable example of red-figure pottery from the Classical period. It depicts scenes from Greek mythology and was likely used for storing wine or olive oil.",
    history:
      "Discovered in 1923 during excavations near Athens, this vase has been remarkably well-preserved. It represents the high artistic achievements of Athenian pottery workshops during the Golden Age of Athens.",
    model: "/assets/3d/duck.glb", // Using sample model for demonstration
  },
  "artifact-2": {
    id: "artifact-2",
    name: "Bronze Statue",
    origin: "Roman",
    period: "2nd Century CE",
    description:
      "This bronze statue depicts a Roman emperor in heroic pose. The detailed craftsmanship shows the advanced metallurgical techniques of Roman artisans.",
    history:
      "Found in the ruins of a Roman villa in modern-day Italy, this statue likely served as a symbol of imperial authority and was prominently displayed in a public space.",
    model: "/assets/3d/duck.glb", // Using sample model for demonstration
  },
  "artifact-3": {
    id: "artifact-3",
    name: "Stone Carving",
    origin: "Mayan",
    period: "9th Century CE",
    description:
      "This intricate stone carving depicts a Mayan ruler performing a ritual. The hieroglyphic inscriptions record important historical events and dates.",
    history:
      "This carving was part of a larger stela (stone monument) from a ceremonial complex in Guatemala. It provides valuable insights into Mayan political and religious practices.",
    model: "/assets/3d/duck.glb", // Using sample model for demonstration
  },
}

function Model({ url }) {
  const { scene } = useGLTF(url)
  return <primitive object={scene} scale={2} position={[0, -1, 0]} />
}

export default function ArtifactPage({ params }) {
  const [artifact, setArtifact] = useState(null)
  const [fullscreen, setFullscreen] = useState(false)

  useEffect(() => {
    // In a real application, you would fetch this data from an API
    setArtifact(artifacts[params.id] || null)
  }, [params.id])

  if (!artifact) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p>Artifact not found</p>
      </div>
    )
  }

  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b">
        <div className="container flex h-16 items-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-lg font-semibold">Cultural Heritage 3D</h1>
          <nav className="ml-auto flex gap-4">
            <Link href="/">
              <Button variant="ghost">Home</Button>
            </Link>
            <Link href="/explore">
              <Button variant="ghost">Explore</Button>
            </Link>
            <Link href="/about">
              <Button variant="ghost">About</Button>
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <div className="container px-4 py-6 md:px-6 md:py-12">
          <div className="mb-6">
            <Link href="/explore">
              <Button variant="ghost" size="sm" className="gap-1">
                <ArrowLeft className="h-4 w-4" />
                Back to Explore
              </Button>
            </Link>
          </div>

          <div className="grid gap-6 lg:grid-cols-5">
            <div className={`lg:col-span-3 ${fullscreen ? "fixed inset-0 z-50 bg-background p-4" : ""}`}>
              <div
                className="relative bg-muted rounded-lg overflow-hidden"
                style={{ height: fullscreen ? "calc(100vh - 2rem)" : "500px" }}
              >
                <Button
                  variant="outline"
                  size="icon"
                  className="absolute top-4 right-4 z-10"
                  onClick={() => setFullscreen(!fullscreen)}
                >
                  {fullscreen ? <Minimize className="h-4 w-4" /> : <Maximize className="h-4 w-4" />}
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="absolute top-4 left-4 z-10"
                  onClick={() => {
                    // Reset camera position
                  }}
                >
                  <RotateCcw className="h-4 w-4" />
                </Button>
                <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
                  <ambientLight intensity={0.5} />
                  <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
                  <PresentationControls
                    global
                    zoom={0.8}
                    rotation={[0, 0, 0]}
                    polar={[-Math.PI / 4, Math.PI / 4]}
                    azimuth={[-Math.PI / 4, Math.PI / 4]}
                  >
                    <Model url={artifact.model} />
                  </PresentationControls>
                  <OrbitControls enableZoom={true} enablePan={true} />
                  <Environment preset="studio" />
                </Canvas>
              </div>
              {fullscreen && (
                <Button
                  variant="default"
                  className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-50"
                  onClick={() => setFullscreen(false)}
                >
                  Exit Fullscreen
                </Button>
              )}
            </div>

            <div className="lg:col-span-2">
              <div className="space-y-6">
                <div>
                  <h1 className="text-3xl font-bold">{artifact.name}</h1>
                  <p className="text-muted-foreground">
                    {artifact.origin}, {artifact.period}
                  </p>
                </div>

                <Tabs defaultValue="info">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="info">Information</TabsTrigger>
                    <TabsTrigger value="history">History</TabsTrigger>
                    <TabsTrigger value="details">Details</TabsTrigger>
                  </TabsList>
                  <TabsContent value="info" className="space-y-4 pt-4">
                    <p>{artifact.description}</p>
                    <div className="grid grid-cols-2 gap-4">
                      <Card>
                        <CardContent className="p-4">
                          <div className="flex items-center gap-2">
                            <Info className="h-4 w-4 text-muted-foreground" />
                            <span className="text-sm font-medium">Origin</span>
                          </div>
                          <p className="mt-1">{artifact.origin}</p>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardContent className="p-4">
                          <div className="flex items-center gap-2">
                            <Info className="h-4 w-4 text-muted-foreground" />
                            <span className="text-sm font-medium">Period</span>
                          </div>
                          <p className="mt-1">{artifact.period}</p>
                        </CardContent>
                      </Card>
                    </div>
                  </TabsContent>
                  <TabsContent value="history" className="pt-4">
                    <p>{artifact.history}</p>
                  </TabsContent>
                  <TabsContent value="details" className="pt-4">
                    <div className="space-y-4">
                      <div>
                        <h3 className="font-medium">Materials</h3>
                        <p className="text-muted-foreground">Clay with red and black pigments</p>
                      </div>
                      <div>
                        <h3 className="font-medium">Dimensions</h3>
                        <p className="text-muted-foreground">Height: 45cm, Diameter: 30cm</p>
                      </div>
                      <div>
                        <h3 className="font-medium">Conservation Status</h3>
                        <p className="text-muted-foreground">Excellent, minor restoration to handle</p>
                      </div>
                      <div>
                        <h3 className="font-medium">Acquisition</h3>
                        <p className="text-muted-foreground">Donated to the museum in 1965</p>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>

                <div className="flex gap-4">
                  <Button>Download 3D Model</Button>
                  <Button variant="outline">Share</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className={`border-t py-6 md:py-0 ${fullscreen ? "hidden" : ""}`}>
        <div className="container flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-muted-foreground">© 2025 Cultural Heritage 3D. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="#" className="text-sm text-muted-foreground hover:underline">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:underline">
              Terms of Service
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:underline">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

