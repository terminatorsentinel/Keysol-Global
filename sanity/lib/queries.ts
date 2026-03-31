import { groq } from 'next-sanity';

// Posts queries
export const postsQuery = groq`*[_type == "post" && publishedAt < now()] | order(publishedAt desc) {
  _id,
  title,
  slug,
  excerpt,
  coverImage,
  category->,
  author->,
  publishedAt,
  readTime,
  featured
}`;

export const postQuery = groq`*[_type == "post" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  excerpt,
  content,
  coverImage,
  category->,
  author->,
  publishedAt,
  readTime,
  tags,
  metaTitle,
  metaDescription
}`;

export const featuredPostQuery = groq`*[_type == "post" && featured == true && publishedAt < now()] | order(publishedAt desc)[0] {
  _id,
  title,
  slug,
  excerpt,
  coverImage,
  category->,
  author->,
  publishedAt,
  readTime
}`;

// Case studies queries
export const caseStudiesQuery = groq`*[_type == "caseStudy"] | order(publishedAt desc) {
  _id,
  title,
  slug,
  client,
  industry,
  service,
  description,
  coverImage,
  results,
  publishedAt
}`;

export const caseStudyQuery = groq`*[_type == "caseStudy" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  client,
  industry,
  service,
  description,
  challenge,
  solution,
  results,
  testimonial,
  coverImage,
  technologies,
  duration,
  teamSize,
  publishedAt
}`;

// Testimonials queries
export const testimonialsQuery = groq`*[_type == "testimonial"] | order(order asc) {
  _id,
  quote,
  author,
  title,
  company,
  avatar,
  featured
}`;

export const featuredTestimonialsQuery = groq`*[_type == "testimonial" && featured == true] | order(order asc) {
  _id,
  quote,
  author,
  title,
  company,
  avatar
}`;

// Categories query
export const categoriesQuery = groq`*[_type == "category"] | order(title asc) {
  _id,
  title,
  slug,
  description
}`;

// Authors query
export const authorsQuery = groq`*[_type == "author"] | order(name asc) {
  _id,
  name,
  slug,
  image,
  role,
  bio
}`;
