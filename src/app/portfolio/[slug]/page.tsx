import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ExternalLink, CheckCircle2 } from "lucide-react"
import { projects } from "@/lib/projects"
import { Badge, BackgroundElements } from "@/components/ui"
import { Button } from "@/components/ui/button"

interface PageProps {
    params: Promise<{
        slug: string
    }>
}

export async function generateStaticParams() {
    return projects.map((project) => ({
        slug: project.slug,
    }))
}

export default async function CaseStudyPage({ params }: PageProps) {
    const { slug } = await params
    const project = projects.find((p) => p.slug === slug)

    if (!project) {
        notFound()
    }

    return (
        <div className="min-h-screen bg-slate-50">
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-slate-900 py-20 lg:py-32">
                <BackgroundElements variant="hero" />

                <div className="relative container mx-auto px-4">
                    <Link
                        href="/portfolio"
                        className="inline-flex items-center text-gray-400 hover:text-white mb-8 transition-colors"
                    >
                        <ArrowLeft className="h-4 w-4 mr-2" />
                        Back to Portfolio
                    </Link>

                    <div className="max-w-4xl">
                        <Badge
                            variant="default"
                            className="mb-6"
                            icon={<span className="flex h-2 w-2 rounded-full bg-purple-500 mr-2"></span>}
                        >
                            {project.category}
                        </Badge>
                        <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-white leading-tight">{project.title}</h1>
                        <p className="text-xl text-gray-300 max-w-2xl mb-8">{project.description}</p>

                        <div className="flex flex-wrap gap-4">
                            <Button size="lg" className="bg-white text-slate-900 hover:bg-gray-100" asChild>
                                <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                                    <ExternalLink className="h-4 w-4 mr-2" />
                                    Visit Live Site
                                </Link>
                            </Button>
                          
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-3 gap-12">
                        {/* Left Column - Content */}
                        <div className="lg:col-span-2 space-y-12">
                            {/* Project Image */}
                            <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-100">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    width={1200}
                                    height={800}
                                    className="w-full h-auto"
                                    priority
                                />
                            </div>

                            {/* Challenge */}
                            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                                <h2 className="text-2xl font-bold mb-4 text-slate-900">The Challenge</h2>
                                <p className="text-gray-600 leading-relaxed">{project.caseStudy.challenge}</p>
                            </div>

                            {/* Solution */}
                            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                                <h2 className="text-2xl font-bold mb-4 text-slate-900">The Solution</h2>
                                <p className="text-gray-600 leading-relaxed mb-6">{project.caseStudy.solution}</p>

                                <h3 className="text-lg font-semibold mb-4 text-slate-900">Key Features</h3>
                                <div className="grid sm:grid-cols-2 gap-4">
                                    {project.caseStudy.features.map((feature, index) => (
                                        <div key={index} className="flex items-start">
                                            <CheckCircle2 className="h-5 w-5 text-purple-500 mr-3 mt-0.5 flex-shrink-0" />
                                            <span className="text-gray-600">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Right Column - Sidebar */}
                        <div className="space-y-8">
                            {/* Tech Stack */}
                            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                                <h3 className="text-lg font-bold mb-6 text-slate-900">Technologies Used</h3>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag, index) => (
                                        <span
                                            key={index}
                                            className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-medium"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Outcomes */}
                            <div className="bg-gradient-to-br from-slate-900 to-purple-900 rounded-2xl p-8 shadow-lg text-white">
                                <h3 className="text-lg font-bold mb-6">Project Outcomes</h3>
                                <div className="space-y-6">
                                    {project.caseStudy.outcomes.map((outcome, index) => (
                                        <div key={index} className="relative pl-6 border-l-2 border-purple-400/30">
                                            <p className="text-gray-200">{outcome}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* CTA */}
                            <div className="bg-purple-50 rounded-2xl p-8 border border-purple-100 text-center">
                                <h3 className="text-xl font-bold mb-4 text-purple-900">Have a similar project?</h3>
                                <p className="text-purple-700 mb-6">Let&apos;s discuss how we can help you achieve similar results.</p>
                                <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white" asChild>
                                    <Link href="/contact">Start a Project</Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
