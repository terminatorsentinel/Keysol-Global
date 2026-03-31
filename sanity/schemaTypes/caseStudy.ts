import { defineField, defineType } from 'sanity';

export const caseStudy = defineType({
  name: 'caseStudy',
  title: 'Case Study',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'client',
      title: 'Client Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'industry',
      title: 'Industry',
      type: 'string',
      options: {
        list: [
          { title: 'Technology', value: 'technology' },
          { title: 'Manufacturing', value: 'manufacturing' },
          { title: 'Retail', value: 'retail' },
          { title: 'Healthcare', value: 'healthcare' },
          { title: 'Finance', value: 'finance' },
          { title: 'Education', value: 'education' },
          { title: 'Real Estate', value: 'real-estate' },
          { title: 'Logistics', value: 'logistics' },
          { title: 'Marketing', value: 'marketing' },
        ],
      },
    }),
    defineField({
      name: 'service',
      title: 'Service Category',
      type: 'string',
      options: {
        list: [
          { title: 'AI & Automation', value: 'ai-automation' },
          { title: 'Software Engineering', value: 'software-engineering' },
          { title: 'Enterprise Solutions', value: 'enterprise-solutions' },
          { title: 'Digital Growth', value: 'digital-growth' },
          { title: 'No-Code/Low-Code', value: 'no-code-low-code' },
          { title: 'Emerging Technology', value: 'emerging-tech' },
          { title: 'E-Commerce', value: 'ecommerce' },
        ],
      },
    }),
    defineField({
      name: 'description',
      title: 'Short Description',
      type: 'text',
      rows: 2,
      validation: (Rule) => Rule.required().max(200),
    }),
    defineField({
      name: 'challenge',
      title: 'The Challenge',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'solution',
      title: 'Our Solution',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'results',
      title: 'Results',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'metric', type: 'string', title: 'Metric' },
            { name: 'value', type: 'string', title: 'Value' },
            { name: 'description', type: 'string', title: 'Description' },
          ],
        },
      ],
    }),
    defineField({
      name: 'testimonial',
      title: 'Client Testimonial',
      type: 'object',
      fields: [
        { name: 'quote', type: 'text', title: 'Quote', rows: 3 },
        { name: 'author', type: 'string', title: 'Author Name' },
        { name: 'title', type: 'string', title: 'Author Title' },
      ],
    }),
    defineField({
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'technologies',
      title: 'Technologies Used',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'duration',
      title: 'Project Duration',
      type: 'string',
    }),
    defineField({
      name: 'teamSize',
      title: 'Team Size',
      type: 'string',
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      client: 'client',
      media: 'coverImage',
    },
    prepare(selection) {
      const { client } = selection;
      return { ...selection, subtitle: client && `for ${client}` };
    },
  },
});
