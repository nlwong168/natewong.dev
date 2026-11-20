/**
 * Experience timeline on the About page.
 * One row per job from the `experience` array, newest first.
 */

import Container from "@/app/components/container";

export default function AboutExperience() {
    return (
        <section className="py-6 md:py-12">
            <Container>

                {/* start of experience section */}
                <div className="flex flex-col md:flex-row">

                    {/* Header of experience section */}
                    <h2 className="text-3xl font-bold mb-4 md:w-1/3">Experience</h2>
                    
                    
                    {/* Container of experience array mapping */}
                    <div className="md:1-2/3">
                        <ul>

                        {/* start of experience array mapping */}
                        {experience.map((job) => (
                            <li key={job.role} className=" mb-4 pb-4 border-b border-grey-300 last:border-b-0">

                                {/* start of experience item container*/}
                                <div className="flex">
                                    <p className="min-w-[150px] lg:min-w-[250px]">{job.dates}</p>
                                    <div>
                                        <h4 className="text-lg font-semibold mb-2">{job.role}</h4>
                                        <p className="mb-2">{job.description}</p>
                                        <p className="text-sm text-gray-600">{job.tags}</p>
                                    </div>
                                </div>
                            </li>
                        ))}
                        </ul>
                    </div>
                </div>
            </Container>
        </section>
    );
}

// Experience Array
const experience = [
  {
    dates: "[YEAR] — Now",
    role: "Founder · Wong Media",
    description:
      "A small Chicago studio for web development and photography.",
    tags: "WordPress · React · Next.js · Photography",
  },
  {
    dates: "[YEAR] — [YEAR]",
    role: "Web manager · Cars.com",
    description: "[What you owned and one result you’re proud of.]",
    tags: "Team leadership · Web operations",
  },
  {
    dates: "[YEAR] — [YEAR]",
    role: "Frontend web developer · Cars.com",
    description: "[What you built and who used it.]",
    tags: "HTML · CSS · JavaScript",
  },
];