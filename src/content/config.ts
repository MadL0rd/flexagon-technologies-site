import { defineCollection, z } from 'astro:content';

const contentSectionItem = z.object({
  title: z.string(),
  description: z.string().optional(),
  bullets: z.array(z.string()).optional(),
  items: z.array(z.string()).optional(),
  illustration: z.string().optional()
});

const contentSection = z.object({
  title: z.string(),
  layout: z.enum(['two', 'three']).optional(),
  tag: z.string().optional(),
  items: z.array(contentSectionItem)
});

const home = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    tagline: z.string(),
    heroBadge: z.string().optional(),
    description: z.string(),
    cta: z.object({
      label: z.string(),
      href: z.string().default('#contact')
    }),
    secondaryCta: z
      .object({
        label: z.string(),
        href: z.string()
      })
      .optional(),
    sections: z.object({
      services: contentSection,
      techStack: contentSection,
      values: contentSection,
      process: contentSection
    }),
    blogTeaser: z.object({
      title: z.string(),
      description: z.string()
    }),
    contact: z.object({
      email: z.string(),
      phone: z.string(),
      telegram: z.string(),
      address: z.string(),
      illustration: z.string().optional(),
      actionIllustration: z.string().optional()
    }),
    seo: z
      .object({
        title: z.string(),
        description: z.string()
      })
      .optional()
  })
});

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    author: z.string(),
    tags: z.array(z.string()).default([]),
    heroImage: z.string().optional()
  })
});

export const collections = { home, blog };
