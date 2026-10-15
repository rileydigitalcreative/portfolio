import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { Page } from "@/components/site/Nav";
import { Reveal } from "@/components/site/Reveal";
import { AssetPlaceholder, StatusTag } from "@/components/site/Work";
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { caseStudies, type CaseStudy, type StepInsideSection } from "@/content/site";

export const Route = createFileRoute("/work/$slug")({
  loader: ({ params }) => {
    const i = caseStudies.findIndex((p) => p.slug === params.slug);
    if (i < 0) throw notFound();
    return { p: caseStudies[i]!, next: caseStudies[(i + 1) % caseStudies.length]! };
  },
  head: ({ loaderData }) => {
    const t = loaderData ? `${loaderData.p.title} — Riley Hammond` : "Project — Riley Hammond";
    const d = loaderData?.p.summary ?? "Case study by Riley Hammond.";
    return {
      meta: [
        { title: t }, { name: "description", content: d },
        { property: "og:title", content: t }, { property: "og:description", content: d },
        { property: "og:type", content: "article" }, { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  notFoundComponent: () => (
    <Page><div className="mx-auto max-w-7xl px-6 py-32 md:px-10"><h1 className="font-display text-6xl">Project not found</h1><Link to="/work" className="eyebrow link-underline mt-8 inline-block pb-1">← All work</Link></div></Page>
  ),
  component: CaseStudyPage,
});

function Row({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <Reveal className="grid gap-4 border-t py-8 md:grid-cols-[1fr_2fr] md:gap-12">
      <h2 className="eyebrow text-rose">{label}</h2>
      <div className="text-lg leading-relaxed text-charcoal">{children}</div>
    </Reveal>
  );
}

function ArtifactImage({ label, src, caption, secondary = false }: { label: string; src?: string; caption?: string; secondary?: boolean }) {
  if (!src) return <AssetPlaceholder label={`${label} — image to add`} className={secondary ? "min-h-32" : undefined} />;

  return (
    <figure className={secondary ? "opacity-85" : undefined}>
      <Dialog>
        <DialogTrigger asChild>
          <button type="button" className="block w-full cursor-zoom-in text-left" aria-label={`Enlarge ${label}`}>
            <img src={src} alt={label} className="h-auto w-full rounded-lg border object-contain" />
          </button>
        </DialogTrigger>
        <DialogContent className="max-h-[95vh] max-w-[min(96vw,90rem)] overflow-auto p-4">
          <DialogTitle className="eyebrow pr-8">{label}</DialogTitle>
          <DialogDescription className="sr-only">Enlarged view of {label}</DialogDescription>
          <img src={src} alt={label} className="h-auto max-h-[80vh] w-full object-contain" />
        </DialogContent>
      </Dialog>
      {caption && <figcaption className="mt-3 text-sm leading-relaxed text-muted-foreground">{caption}</figcaption>}
    </figure>
  );
}

function AssetGrid({ assets, columns = "md:grid-cols-3" }: { assets: { label: string; image?: string; caption?: string }[]; columns?: string }) {
  return (
    <div className={`grid gap-8 ${columns}`}>
      {assets.map((asset) => <ArtifactImage key={asset.label} label={asset.label} src={asset.image} caption={asset.caption} />)}
    </div>
  );
}

function StepSection({ number, title, children }: { number: string; title: string; children: React.ReactNode }) {
  return (
    <section className="mt-24 border-t pt-8">
      <div className="mb-12">
        <span className="eyebrow text-rose">{number}</span>
        <h2 className="font-display mt-3 text-4xl md:text-6xl">{title}</h2>
      </div>
      {children}
    </section>
  );
}

function ConceptCard({ concept }: { concept: StepInsideSection["concepts"][number] }) {
  const details = [
    ["Concept summary", concept.summary],
    ["Audience", concept.audience],
    ["Intended impact", concept.impact],
    ["Design language", concept.designLanguage],
    ["Font and color", concept.fontAndColor],
    ["Pros", concept.pros],
    ["Considerations", concept.considerations],
  ];

  return (
    <article className="border-t pt-5">
      <h3 className="font-display text-3xl md:text-4xl">{concept.title}</h3>
      <div className="mt-6">
        <ArtifactImage label={`${concept.title} moodboard`} src={concept.image} />
      </div>
      <dl className="mt-7 space-y-4">
        {details.map(([label, value]) => (
          <div key={label} className="border-t pt-3">
            <dt className="eyebrow text-rose">{label}</dt>
            <dd className="mt-2 leading-relaxed text-charcoal">{value}</dd>
          </div>
        ))}
      </dl>
    </article>
  );
}

function AiExplorationCarousel({ slides }: { slides: StepInsideSection["aiExplorations"] }) {
  const [index, setIndex] = useState(0);
  const slide = slides[index]!;

  return (
    <div className="border-t pt-6">
      <div className="flex items-center justify-between gap-4">
        <span className="eyebrow text-rose">{slide.platform}</span>
        <span className="eyebrow text-muted-foreground">{index + 1} / {slides.length}</span>
      </div>
      <div className="mt-5">
        <ArtifactImage label={`AI-generated hero exploration ${index + 1}`} src={slide.image} />
      </div>
      <p className="mt-4 max-w-2xl text-charcoal">{slide.evaluation}</p>
      <div className="mt-6 flex gap-3">
        <button type="button" className="eyebrow rounded-full border px-4 py-2 transition-colors hover:bg-blush disabled:cursor-not-allowed disabled:opacity-40" onClick={() => setIndex((current) => current - 1)} disabled={index === 0} aria-label="Previous AI hero exploration">← Previous</button>
        <button type="button" className="eyebrow rounded-full border px-4 py-2 transition-colors hover:bg-blush disabled:cursor-not-allowed disabled:opacity-40" onClick={() => setIndex((current) => current + 1)} disabled={index === slides.length - 1} aria-label="Next AI hero exploration">Next →</button>
      </div>
    </div>
  );
}

function PrototypeAction({ url }: { url?: string }) {
  return url ? (
    <a href={url} target="_blank" rel="noreferrer" className="eyebrow inline-flex rounded-full bg-foreground px-5 py-3 text-background transition-opacity hover:opacity-80">Explore the Website Prototype</a>
  ) : (
    <button type="button" disabled className="eyebrow inline-flex cursor-not-allowed rounded-full bg-foreground px-5 py-3 text-background opacity-40" aria-label="Website prototype URL to be added">Explore the Website Prototype</button>
  );
}

function StepInsideCaseStudy({ p, data }: { p: CaseStudy; data: StepInsideSection }) {
  return (
    <>
      <section className="mt-12">
        {p.heroImage ? <ArtifactImage label={`${p.title} hero`} src={p.heroImage} /> : <AssetPlaceholder label={`${p.title} — hero image`} />}
        <div className="mt-6 flex flex-wrap items-center gap-4">
          <PrototypeAction url={data.prototypeUrl} />
          {!data.prototypeUrl && <span className="text-sm text-muted-foreground">Figma prototype link to be added.</span>}
        </div>
      </section>

      <StepSection number="01" title="Project overview and two concepts">
        <div className="grid gap-8 border-t pt-6 md:grid-cols-2">
          <Row label="Context & problem">{p.problem}</Row>
          <Row label="Goals & audience">{p.goals}</Row>
        </div>
        <div className="mt-12 grid gap-12 md:grid-cols-2">
          {data.concepts.map((concept) => <ConceptCard key={concept.title} concept={concept} />)}
        </div>
      </StepSection>

      <StepSection number="02" title="Exhibit walkthroughs">
        <div className="grid gap-12 md:grid-cols-2">
          {data.walkthroughs.map((walkthrough) => (
            <article key={walkthrough.title}>
              <h3 className="font-display mb-5 text-3xl">{walkthrough.title}</h3>
              <ArtifactImage label={walkthrough.title} src={walkthrough.image} caption={walkthrough.caption} />
            </article>
          ))}
        </div>
      </StepSection>

      <StepSection number="03" title="AI-generated hero image exploration">
        <p className="max-w-3xl text-lg leading-relaxed text-charcoal">Compare the generated directions and record what works for the experience. Platform names, evaluations, and additional generated images remain editable in the case-study content.</p>
        <div className="mt-10">
          <AiExplorationCarousel slides={data.aiExplorations} />
        </div>
      </StepSection>

      <StepSection number="04" title="Website hero prototypes">
        <AssetGrid assets={data.heroPrototypes} />
      </StepSection>

      <StepSection number="05" title="Website structure and information architecture">
        <div className="grid gap-12 md:grid-cols-2">
          <article>
            <h3 className="font-display mb-5 text-3xl">Sitemap</h3>
            <ArtifactImage label="Website sitemap" src={data.informationArchitecture.sitemap} caption={data.informationArchitecture.sitemapCaption} />
          </article>
          <article>
            <h3 className="font-display mb-5 text-3xl">App workflow</h3>
            <ArtifactImage label="App workflow" src={data.informationArchitecture.workflow} caption={data.informationArchitecture.workflowCaption} />
          </article>
        </div>
        <div className="mt-12">
          <ArtifactImage label="Early website wireframe sketch" src={data.informationArchitecture.wireframe} secondary />
        </div>
      </StepSection>

      <StepSection number="06" title="Low-fidelity wireframes">
        <AssetGrid assets={data.lowFidelity} />
        <div className="mt-12">
          <ArtifactImage label="Annotated low-fidelity wireframe overview" src={data.lowFidelityOverview} caption="Annotated overview — select the image to enlarge it." secondary />
        </div>
      </StepSection>

      <StepSection number="07" title="High-fidelity wireframes">
        <AssetGrid assets={data.highFidelity} />
        <div className="mt-12">
          <ArtifactImage label="Annotated high-fidelity wireframe overview" src={data.highFidelityOverview} caption="Annotated overview — select the image to enlarge it." secondary />
        </div>
      </StepSection>

      <StepSection number="08" title="Interactive website prototype">
        <AssetPlaceholder label="Interactive website prototype preview — image to add" className="min-h-64" />
        <div className="mt-6 flex flex-wrap items-center gap-4">
          <PrototypeAction url={data.prototypeUrl} />
          {!data.prototypeUrl && <span className="text-sm text-muted-foreground">The actual Figma URL is still needed before this button can be enabled.</span>}
        </div>
      </StepSection>

      <div className="mt-20"><Row label="Outcome & next steps">{p.reflection}</Row></div>
    </>
  );
}

function CaseStudyPage() {
  const { p, next } = Route.useLoaderData();
  const isCampaign = p.slug === "butterfield-farm-market";
  return (
    <Page>
      <article className="mx-auto max-w-7xl px-6 py-16 md:px-10">
        <Link to="/work" className="eyebrow link-underline pb-1">← All work</Link>
        <div className="mt-12 flex flex-wrap items-center gap-3">
          <span className="eyebrow text-rose">{p.type}</span>
          <StatusTag s={p.status} />
        </div>
        <h1 className="font-display animate-rise mt-4 max-w-5xl text-5xl md:text-7xl lg:text-8xl">{p.title}</h1>
        <p className="mt-6 max-w-2xl text-xl text-charcoal">{p.summary}</p>
        <dl className="mt-10 grid gap-6 border-y py-6 sm:grid-cols-3">
          {p.facts.map((f) => <div key={f.k}><dt className="eyebrow text-muted-foreground">{f.k}</dt><dd className="mt-1">{f.v}</dd></div>)}
        </dl>

        {p.stepInside ? <StepInsideCaseStudy p={p} data={p.stepInside} /> : p.heroImage ? (
          <img src={p.heroImage} alt={`${p.title} hero`} className="mt-12 h-auto w-full rounded-lg" />
        ) : (
          <AssetPlaceholder label={`${p.title} — hero image`} className="mt-12 aspect-[16/8]" />
        )}

        {!p.stepInside && <div className="mt-16">
          <Row label="Context & problem">{p.problem}</Row>
          <Row label="Goals & audience">{p.goals}</Row>
          <Row label="My role">
            <p>{p.role}</p>
            <ul className="mt-4 space-y-2">{p.contributions.map((c) => <li key={c}>— {c}</li>)}</ul>
          </Row>
          <Row label="Tools">{p.tools.join(" · ")}</Row>
        </div>}

        {!p.stepInside && <h2 className="font-display mt-24 text-4xl md:text-6xl">{p.chapterLabel}</h2>}

        {!p.stepInside && (p.apps ? (
          <div className="mt-12 grid gap-10 md:grid-cols-2">
            {p.apps.map((a) => (
              <Reveal key={a.title} className="border-t pt-6">
                <AssetPlaceholder label={`${a.title} — screenshots or prototype`} className="aspect-[4/3]" />
                <h3 className="font-display mt-6 text-3xl">{a.title}</h3>
                <dl className="mt-4 space-y-3 text-charcoal">
                  <div><dt className="eyebrow text-muted-foreground">Assignment</dt><dd>{a.assignment}</dd></div>
                  <div><dt className="eyebrow text-muted-foreground">Description</dt><dd>{a.description}</dd></div>
                  <div><dt className="eyebrow text-muted-foreground">Technologies</dt><dd>{a.tech.join(" · ")}</dd></div>
                  <div><dt className="eyebrow text-muted-foreground">What I learned</dt><dd>{a.learned}</dd></div>
                </dl>
              </Reveal>
            ))}
          </div>
        ) : (
          <ol className={`mt-12 grid gap-x-6 gap-y-12 ${isCampaign ? "md:grid-cols-3" : "md:grid-cols-2"}`}>
            {p.chapters.map((c, i) => (
              <Reveal key={c.title} className={!isCampaign && (c.assets?.length ?? 0) > 1 ? "md:col-span-2" : ""}>
                <li className="list-none border-t pt-5">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <span className="eyebrow text-rose">{String(i + 1).padStart(2, "0")}</span>
                    {c.status && <StatusTag s={c.status} />}
                  </div>
                  <h3 className="font-display mt-3 text-2xl md:text-3xl">{c.title}</h3>
                  {c.body && <p className="mt-3 text-charcoal">{c.body}</p>}
                  {c.assets && (
                    <div className={`mt-5 grid gap-4 ${c.assets.length > 1 ? "sm:grid-cols-2 lg:grid-cols-3" : ""}`}>
                      {c.assets.map((a) => typeof a === "object" && a.src ? (
                        <img key={a.label} src={a.src} alt={a.label} className="h-auto w-full rounded-lg" />
                      ) : (
                        <AssetPlaceholder key={typeof a === "string" ? a : a.label} label={typeof a === "string" ? a : a.label} />
                      ))}
                    </div>
                  )}
                </li>
              </Reveal>
            ))}
          </ol>
        ))}

        {!p.stepInside && <div className="mt-20"><Row label="Outcome & next steps">{p.reflection}</Row></div>}

        <div className="mt-16 flex flex-col gap-10 border-t pt-10 md:flex-row md:items-end md:justify-between">
          <Link to="/work/$slug" params={{ slug: next.slug }} className="group block">
            <span className="eyebrow text-muted-foreground">Next project</span>
            <span className="font-display mt-3 block text-4xl transition-transform group-hover:translate-x-2 md:text-6xl">{next.title} →</span>
          </Link>
          <Link to="/work" className="eyebrow link-underline pb-1">All work</Link>
        </div>
      </article>
    </Page>
  );
}
