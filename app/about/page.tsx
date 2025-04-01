import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
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
        <section className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  About Cultural Heritage 3D
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Our mission is to preserve, digitize, and share cultural heritage for future generations.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="py-12 md:py-24 lg:py-32 bg-muted/40">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter">Our Mission</h2>
                <p className="text-muted-foreground md:text-xl">
                  Cultural Heritage 3D is dedicated to the digital preservation of cultural artifacts and historical
                  sites from around the world. We use advanced 3D scanning and modeling techniques to create accurate
                  digital representations that can be studied, shared, and experienced by anyone, anywhere.
                </p>
                <p className="text-muted-foreground md:text-xl">
                  By creating digital archives of these precious artifacts, we help ensure that our shared cultural
                  heritage is preserved for future generations, even as physical artifacts may deteriorate or become
                  inaccessible.
                </p>
              </div>
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter">Our Technology</h2>
                <p className="text-muted-foreground md:text-xl">
                  We employ cutting-edge technologies including photogrammetry, structured light scanning, and laser
                  scanning to create highly detailed 3D models of cultural artifacts and sites. Our team of experts
                  processes these scans to create accurate, interactive digital models that capture the essence of each
                  artifact.
                </p>
                <p className="text-muted-foreground md:text-xl">
                  Our web platform allows users to interact with these 3D models in ways that would be impossible in
                  traditional museums, enabling close examination from all angles and detailed study of surface features
                  and inscriptions.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Team</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Meet the experts behind Cultural Heritage 3D.
                </p>
              </div>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-8">
                <div className="flex flex-col items-center space-y-4">
                  <img
                    src="/placeholder.svg?height=200&width=200"
                    alt="Team Member"
                    className="rounded-full h-40 w-40 object-cover"
                  />
                  <div className="space-y-2 text-center">
                    <h3 className="text-xl font-bold">Dr. Emma Chen</h3>
                    <p className="text-muted-foreground">Director & Lead Archaeologist</p>
                  </div>
                </div>
                <div className="flex flex-col items-center space-y-4">
                  <img
                    src="/placeholder.svg?height=200&width=200"
                    alt="Team Member"
                    className="rounded-full h-40 w-40 object-cover"
                  />
                  <div className="space-y-2 text-center">
                    <h3 className="text-xl font-bold">Michael Rodriguez</h3>
                    <p className="text-muted-foreground">3D Scanning Specialist</p>
                  </div>
                </div>
                <div className="flex flex-col items-center space-y-4">
                  <img
                    src="/placeholder.svg?height=200&width=200"
                    alt="Team Member"
                    className="rounded-full h-40 w-40 object-cover"
                  />
                  <div className="space-y-2 text-center">
                    <h3 className="text-xl font-bold">Sarah Okafor</h3>
                    <p className="text-muted-foreground">Digital Preservation Expert</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-12 md:py-24 lg:py-32 bg-muted/40">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Partner With Us</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  We collaborate with museums, universities, and cultural institutions worldwide.
                </p>
              </div>
              <div className="mt-8">
                <Link href="/contact">
                  <Button size="lg">Get in Touch</Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t py-6 md:py-0">
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

