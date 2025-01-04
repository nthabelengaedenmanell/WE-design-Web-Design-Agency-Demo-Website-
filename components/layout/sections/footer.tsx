import { Separator } from "@/components/ui/separator"; // Importing a custom Separator component for visual division
import Link from "next/link"; // Importing the Link component from Next.js for client-side navigation

// FooterSection component definition
export const FooterSection = () => {
  return (
    // Footer container with an ID for potential linking or styling
    <footer id="footer" className="container py-24 sm:py-20">
      {/* Main content container with padding, background, border, and rounded corners */}
      <div className="p-10 bg-card border border-secondary rounded-2xl">
        {/* Grid layout for organizing footer content into columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-x-12 gap-y-8">
          {/* Branding section spanning full width on small screens and 2 columns on extra-large screens */}
          <div className="col-span-full xl:col-span-2">
            {/* Link to the homepage or main section with bold font and centered alignment */}
            <Link href="#" className="flex font-bold items-center">
              <h3 className="text-2xl">weDESIGN.</h3> {/* Brand name */}
            </Link>
          </div>

          {/* Contact section with a heading and links */}
          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">Contact</h3> {/* Section title */}
            <div>
              {/* Link to GitHub profile with hover effect for opacity change */}
              <Link href="https://www.linkedin.com/in/aeden-manell/" className="opacity-60 hover:opacity-100">
                Github
              </Link>
            </div>
            <div>
              {/* Link to Twitter profile */}
              <Link href="https://www.linkedin.com/in/aeden-manell/" className="opacity-60 hover:opacity-100">
                Twitter
              </Link>
            </div>
            <div>
              {/* Link to Instagram profile */}
              <Link href="https://www.linkedin.com/in/aeden-manell/" className="opacity-60 hover:opacity-100">
                Instagram
              </Link>
            </div>
          </div>

          {/* Platforms section with a heading and links */}
          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">Platforms</h3> {/* Section title */}
            <div>
              {/* Link to iOS platform */}
              <Link href="https://www.linkedin.com/in/aeden-manell/" className="opacity-60 hover:opacity-100">
                iOS
              </Link>
            </div>
            <div>
              {/* Link to Android platform */}
              <Link href="https://www.linkedin.com/in/aeden-manell/" className="opacity-60 hover:opacity-100">
                Android
              </Link>
            </div>
            <div>
              {/* Link to Web platform */}
              <Link href="https://www.linkedin.com/in/aeden-manell/" className="opacity-60 hover:opacity-100">
                Web
              </Link>
            </div>
          </div>

          {/* Help section with a heading and links */}
          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">Help</h3> {/* Section title */}
            <div>
              {/* Link to Contact Us page */}
              <Link href="https://www.linkedin.com/in/aeden-manell/" className="opacity-60 hover:opacity-100">
                Contact Us
              </Link>
            </div>
            <div>
              {/* Link to FAQ page */}
              <Link href="https://www.linkedin.com/in/aeden-manell/" className="opacity-60 hover:opacity-100">
                FAQ
              </Link>
            </div>
            <div>
              {/* Link to Feedback page */}
              <Link href="https://www.linkedin.com/in/aeden-manell/" className="opacity-60 hover:opacity-100">
                Feedback
              </Link>
            </div>
          </div>

          {/* Socials section with a heading and links */}
          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">Socials</h3> {/* Section title */}
            <div>
              {/* Link to Twitch profile */}
              <Link href="https://www.linkedin.com/in/aeden-manell/" className="opacity-60 hover:opacity-100">
                Twitch
              </Link>
            </div>
            <div>
              {/* Link to Discord server */}
              <Link href="https://www.linkedin.com/in/aeden-manell/" className="opacity-60 hover:opacity-100">
                Discord
              </Link>
            </div>
            <div>
              {/* Link to Dribbble profile */}
              <Link href="https://www.linkedin.com/in/aeden-manell/" className="opacity-60 hover:opacity-100">
                Dribbble
              </Link>
            </div>
          </div>
        </div>

        {/* Separator component to visually divide sections */}
        <Separator className="my-6" />

        {/* Copyright and attribution section */}
        <section className="">
          <h3 className="">
            &copy; 2024 Designed and developed by {/* Copyright text */}
            {/* Link to the developer's LinkedIn profile */}
            <Link
              target="_blank" // Opens link in a new tab
              href="https://www.linkedin.com/in/aeden-manell/"
              className="text-primary transition-all border-primary hover:border-b-2 ml-1"
            >
              Aeden Manell
            </Link>
          </h3>
        </section>
      </div>
    </footer>
  );
};
