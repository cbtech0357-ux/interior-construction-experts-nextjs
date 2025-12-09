export default function Services() {
  return (
    <div
      style={{
        padding: "2rem",
        maxWidth: "800px",
        margin: "0 auto",
        lineHeight: 1.7,
      }}
    >
      <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>
        Remodeling Consulting Services
      </h1>

      <p style={{ fontSize: "1.1rem", marginBottom: "1.5rem" }}>
        Interior Construction Experts provides homeowners with clear, honest,
        and expert guidance on remodeling projects—without performing the
        construction work ourselves. We help you understand what your project
        should realistically cost, how long it should take, and whether your
        contractor is the right fit for the job.
      </p>

      <h2
        style={{
          fontSize: "1.8rem",
          marginTop: "2rem",
          marginBottom: "0.5rem",
        }}
      >
        What We Help You With
      </h2>
      <ul style={{ fontSize: "1.05rem", paddingLeft: "1.2rem" }}>
        <li>Understanding true project costs (labor + materials)</li>
        <li>Building accurate timelines for contractors</li>
        <li>Identifying red flags in contractor estimates</li>
        <li>Clarifying scope so everyone knows what is—and isn&apos;t—included</li>
        <li>
          Comparing multiple bids so you&apos;re not overpaying for the same work
        </li>
        <li>
          Making sure the work described matches industry standards and good
          practice
        </li>
      </ul>

      <h2
        style={{
          fontSize: "1.8rem",
          marginTop: "2rem",
          marginBottom: "0.5rem",
        }}
      >
        How Our Process Works
      </h2>
      <ol style={{ fontSize: "1.05rem", paddingLeft: "1.2rem" }}>
        <li>
          <strong>Initial conversation:</strong> You share your ideas, goals,
          and any quotes or drawings you already have.
        </li>
        <li>
          <strong>Scope review:</strong> We walk through what&apos;s included,
          what&apos;s missing, and what still needs to be defined.
        </li>
        <li>
          <strong>Cost and timeline guidance:</strong> You get a realistic
          expectation of what the project should cost and how long it should
          reasonably take.
        </li>
        <li>
          <strong>Contractor check:</strong> We help you evaluate whether the
          contractor you&apos;re considering is properly aligned with the job.
        </li>
      </ol>

      <h2
        style={{
          fontSize: "1.8rem",
          marginTop: "2rem",
          marginBottom: "0.5rem",
        }}
      >
        Who This Is For
      </h2>
      <ul style={{ fontSize: "1.05rem", paddingLeft: "1.2rem" }}>
        <li>Homeowners planning a remodel but unsure where to start</li>
        <li>
          Anyone who has contractor quotes and wants a second opinion before
          signing
        </li>
        <li>People who want to avoid costly surprises and change orders</li>
        <li>
          Homeowners who simply want a knowledgeable advocate on their side
        </li>
      </ul>

      <p style={{ fontSize: "1.05rem", marginTop: "2rem" }}>
        Ready to talk about your project? You can{" "}
        <a href="/meta-landing" style={{ textDecoration: "underline" }}>
          start your project intake here
        </a>{" "}
        or{" "}
        <a href="/pricing" style={{ textDecoration: "underline" }}>
          book a consultation
        </a>{" "}
        to discuss your specific remodeling plans.
      </p>
    </div>
  );
}
