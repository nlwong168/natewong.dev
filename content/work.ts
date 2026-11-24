import type { StaticImageData } from "next/image";
import nwpEx1 from "@/public/nw_photography/nwp_portraits_5.jpg";

// Work Type Layout
export type WorkItem = {
  photo: StaticImageData;
  alt: string;
  slug: string;
  type: "Case study" | "Project" | "Note";
  title: string;
  date: string;
  summary: string;
  tags: string[];
};

// The Work
export const work: WorkItem[] = [
  // Sugar international
  {
    photo: nwpEx1,
    alt: "test image",
    slug: "sugars-international",
    type: "Case study",
    title: "Sugars International: a cleaner site that loads faster",
    date: "2026-11-20",
    summary:
      "A small-business redesign in WordPress, plus a performance audit.",
    tags: ["WordPress", "Bricks", "Performance"],
  },
  // Another Example project
  {
    photo: nwpEx1,
    alt: "test image",
    slug: "property-listing-site",
    type: "Project",
    title: "A property listing site, built with WordPress",
    date: "2026-11-25",
    summary: "Custom post types, ACF fields, and a JavaScript filter.",
    tags: ["WordPress", "ACF", "Bootstrap", "JavaScript"],
  },
  {
    photo: nwpEx1,
    alt: "test image",
    slug: "property-listing-site2",
    type: "Project",
    title: "A property listing site, built with WordPress",
    date: "2026-11-25",
    summary: "Custom post types, ACF fields, and a JavaScript filter.",
    tags: ["WordPress", "ACF", "Bootstrap", "JavaScript"],
  },
  {
    photo: nwpEx1,
    alt: "test image",
    slug: "property-listing-site3",
    type: "Project",
    title: "A property listing site, built with WordPress",
    date: "2026-11-25",
    summary: "Custom post types, ACF fields, and a JavaScript filter.",
    tags: ["WordPress", "ACF", "Bootstrap", "JavaScript"],
  },
  {
    photo: nwpEx1,
    alt: "test image",
    slug: "property-listing-site4",
    type: "Project",
    title: "A property listing site, built with WordPress",
    date: "2026-11-25",
    summary: "Custom post types, ACF fields, and a JavaScript filter.",
    tags: ["WordPress", "ACF", "Bootstrap", "JavaScript"],
  },
];
