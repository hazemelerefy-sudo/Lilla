# Lilla — Reference Ground Truth

This project reproduces the authorized Framer project **BOLD Designer Portfolio April (copy)** at `https://framer.com/projects/BOLD-Designer-Portfolio-April-copy--bcvWxBDlL1VDjzxIV5VV`.

## Reference Specification

The source is a light editorial portfolio with a warm off-white canvas, saturated electric cobalt-blue typography, oversized condensed display headlines, and a vertical single-page flow. The composition is intentionally asymmetrical: a large portrait occupies the hero center, while the title locks to the lower-left and supporting copy / CTA sits to the right. The sections are ordered WORKS, SERVICES, ABOUT, TESTIMONIALS, and CONTACT. The source uses sharp rectangular edges, minimal rounding, bold horizontal rules, image-led case studies, and generous vertical spacing. Navigation remains compact across the top and anchors into the page. Motion should be restrained and purposeful: reveal headlines on entry, allow image scale on hover, and preserve accessibility with reduced-motion fallbacks.

The implementation will reproduce the source content and hierarchy while using licensed/generated replacement imagery in the same visual language. It will not fabricate customer testimonials beyond the testimonial content visibly present in the source reference; the testimonial block is retained only as source-provided content.

## Style Decisions

- **Palette:** warm paper `#F2F0EB`, electric cobalt `#2615E8`, near-black `#111111`, and lilac accent `#B5A9FF`.
- **Typography:** condensed display face for headlines and a neutral sans-serif for body copy; headline scale is intentionally oversized and tightly tracked.
- **Composition:** use full-width bands, editorial offsets, and tall image frames rather than a generic centered card grid.
- **Interaction:** anchor navigation scrolls to sections; project cards lift and sharpen on hover; CTA links are visibly interactive and keyboard accessible.
- **Assets:** use the generated hero portrait, two distinct project images, and the generated symbol mark from `/home/ubuntu/webdev-static-assets/` through their project storage URLs.
- **Quality bar:** preserve contrast, responsive behavior, focus-visible states, and reduced-motion support.
