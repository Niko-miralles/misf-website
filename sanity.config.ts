import { defineConfig, defineField, defineType } from 'sanity'
import { visionTool } from '@sanity/vision'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'az62wb6s'
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'

const seoFields = [
  defineField({ name: 'metaTitle', title: 'Page title', type: 'string', validation: (rule) => rule.max(60) }),
  defineField({ name: 'metaDescription', title: 'Meta description', type: 'text', rows: 3, validation: (rule) => rule.max(160) }),
]

export default defineConfig({
  name: 'misf',
  title: 'Marshall Islands Soccer Federation',
  projectId,
  dataset,
  basePath: '/studio',
  plugins: [visionTool()],
  schema: {
    types: [
      defineType({
        name: 'page', title: 'Pages', type: 'document',
        fields: [
          defineField({ name: 'title', title: 'Internal title', type: 'string', validation: (rule) => rule.required() }),
          defineField({ name: 'slug', title: 'URL path', type: 'slug', options: { source: 'title', maxLength: 96 }, validation: (rule) => rule.required() }),
          defineField({ name: 'heroTitle', title: 'Hero heading', type: 'string' }),
          defineField({ name: 'heroImage', title: 'Hero image', type: 'image', options: { hotspot: true } }),
          defineField({ name: 'content', title: 'Page content', type: 'array', of: [{ type: 'block' }, { type: 'image', options: { hotspot: true } }] }),
          defineField({ name: 'seo', title: 'SEO', type: 'object', fields: seoFields }),
        ],
      }),
      defineType({
        name: 'article', title: 'News articles', type: 'document',
        fields: [
          defineField({ name: 'title', type: 'string', validation: (rule) => rule.required() }),
          defineField({ name: 'slug', type: 'slug', options: { source: 'title' }, validation: (rule) => rule.required() }),
          defineField({ name: 'publishedAt', title: 'Publish date', type: 'datetime' }),
          defineField({ name: 'excerpt', type: 'text', rows: 3 }),
          defineField({ name: 'image', title: 'Featured image', type: 'image', options: { hotspot: true } }),
          defineField({ name: 'body', type: 'array', of: [{ type: 'block' }, { type: 'image', options: { hotspot: true } }] }),
          defineField({ name: 'seo', title: 'SEO', type: 'object', fields: seoFields }),
        ],
      }),
      defineType({
        name: 'person', title: 'People (staff and players)', type: 'document',
        fields: [
          defineField({ name: 'name', type: 'string', validation: (rule) => rule.required() }),
          defineField({ name: 'role', title: 'Role / position', type: 'string' }),
          defineField({ name: 'team', type: 'string', options: { list: ['Federation staff', "Men's soccer", "Men's futsal", "Women's futsal"] } }),
          defineField({ name: 'image', type: 'image', options: { hotspot: true } }),
          defineField({ name: 'bio', type: 'array', of: [{ type: 'block' }] }),
          defineField({ name: 'order', type: 'number' }),
        ],
      }),
      defineType({
        name: 'redirect', title: 'Redirects', type: 'document',
        fields: [
          defineField({ name: 'from', title: 'Old URL path', type: 'string', validation: (rule) => rule.required() }),
          defineField({ name: 'to', title: 'Destination URL', type: 'string', validation: (rule) => rule.required() }),
          defineField({ name: 'permanent', title: 'Permanent (301)', type: 'boolean', initialValue: true }),
        ],
      }),
      defineType({
        name: 'siteSettings', title: 'Site settings', type: 'document',
        fields: [
          defineField({ name: 'title', title: 'Site name', type: 'string' }),
          defineField({ name: 'description', title: 'Default meta description', type: 'text', rows: 3 }),
          defineField({ name: 'footerText', title: 'Footer text', type: 'text', rows: 3 }),
          defineField({ name: 'socialLinks', title: 'Social links', type: 'array', of: [{ type: 'object', fields: [defineField({ name: 'label', type: 'string' }), defineField({ name: 'url', type: 'url' })] }] }),
        ],
      }),
    ],
  },
})
