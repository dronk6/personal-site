export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Resume
      </h1>
      <div className="h-screen"> 
        <object data="/assets/drew-resume.pdf" type="application/pdf" width="100%" height="100%" title="object-resume" />
      </div>
    </section>
  )
}
