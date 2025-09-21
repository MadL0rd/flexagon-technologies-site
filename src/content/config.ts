import { defineCollection, z } from 'astro:content';

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
    services: z.array(
      z.object({
        title: z.string(),
        description: z.string(),
        illustration: z.string(),
        bullets: z.array(z.string()).optional()
      })
    ),
    techStack: z.array(
      z.object({
        title: z.string(),
        illustration: z.string().optional(),
        items: z.array(z.string())
      })
    ),
    values: z.array(
      z.object({
        title: z.string(),
        description: z.string(),
        illustration: z.string().optional()
      })
    ),
    process: z.array(
      z.object({
        title: z.string(),
        description: z.string(),
        illustration: z.string().optional()
      })
    ),
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
