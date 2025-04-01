import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function ExplorePage() {
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
        <section className="py-12">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Explore Our Collection</h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Browse our digital collection of cultural heritage artifacts from around the world.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="py-12">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Link href="/explore/artifact-1">
                <Card className="overflow-hidden">
                  <div className="aspect-square relative">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                    <img
                      src="/placeholder.svg?height=300&width=300"
                      alt="Ancient Vase"
                      className="object-cover w-full h-full"
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
                      <h3 className="text-xl font-bold text-white">Ancient Vase</h3>
                      <p className="text-white/80">Greek, 5th Century BCE</p>
                    </div>
                  </div>
                </Card>
              </Link>
              <Link href="/explore/artifact-2">
                <Card className="overflow-hidden">
                  <div className="aspect-square relative">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                    <img
                      src="/placeholder.svg?height=300&width=300"
                      alt="Bronze Statue"
                      className="object-cover w-full h-full"
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
                      <h3 className="text-xl font-bold text-white">Bronze Statue</h3>
                      <p className="text-white/80">Roman, 2nd Century CE</p>
                    </div>
                  </div>
                </Card>
              </Link>
              <Link href="/explore/artifact-3">
                <Card className="overflow-hidden">
                  <div className="aspect-square relative">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                    <img
                      src="/placeholder.svg?height=300&width=300"
                      alt="Stone Carving"
                      className="object-cover w-full h-full"
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
                      <h3 className="text-xl font-bold text-white">Stone Carving</h3>
                      <p className="text-white/80">Mayan, 9th Century CE</p>
                    </div>
                  </div>
                </Card>
              </Link>
              <Link href="/explore/artifact-4">
                <Card className="overflow-hidden">
                  <div className="aspect-square relative">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                    <img
                      src="/placeholder.svg?height=300&width=300"
                      alt="Clay Tablet"
                      className="object-cover w-full h-full"
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
                      <h3 className="text-xl font-bold text-white">Clay Tablet</h3>
                      <p className="text-white/80">Sumerian, 3000 BCE</p>
                    </div>
                  </div>
                </Card>
              </Link>
              <Link href="/explore/artifact-5">
                <Card className="overflow-hidden">
                  <div className="aspect-square relative">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                    <img
                      src="/placeholder.svg?height=300&width=300"
                      alt="Gold Mask"
                      className="object-cover w-full h-full"
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
                      <h3 className="text-xl font-bold text-white">Gold Mask</h3>
                      <p className="text-white/80">Egyptian, 14th Century BCE</p>
                    </div>
                  </div>
                </Card>
              </Link>
              <Link href="/explore/artifact-6">
                <Card className="overflow-hidden">
                  <div className="aspect-square relative">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                    <img
                      src="/placeholder.svg?height=300&width=300"
                      alt="Jade Figurine"
                      className="object-cover w-full h-full"
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
                      <h3 className="text-xl font-bold text-white">Jade Figurine</h3>
                      <p className="text-white/80">Chinese, 12th Century CE</p>
                    </div>
                  </div>
                </Card>
              </Link>
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

