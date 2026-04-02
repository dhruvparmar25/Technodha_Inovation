export default function ContactHeader() {
  return (
    <div data-theme="light" className="contact-header-section px-[15px] pt-16 xl:px-30  ">
      <div className="text-center">
        <span className="section-title">START HERE </span>

        <div className="heading-primary ">
          Have a{" "}
          <span className="italic text-(--color-primary)">
            Requirement
          </span>
          ? We’re
          <span className="italic text-(--color-secondary) mx-2">
            Listening
          </span>
          !
        </div>

        <p className="text-support ">
          Submit your requirement and we’ll respond with a clear plan. Email us
          anytime at{" "}
          <span     href="mailto:support@technodha.com"
 className="italic text-(--color-primary)">
            {" "}
            support@technodha.com
          </span>
        </p>
      </div>
    </div>
  );
}
