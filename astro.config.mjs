import { defineConfig } from 'astro/config';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

// https://astro.build/config
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  integrations: [mdx()],
  markdown: {
    remarkPlugins: [
      remarkMath
    ],
    rehypePlugins: [
      [rehypeKatex, {
        macros: {
          '\\E': '\\mathbb{E}',
          '\\C': '\\mathbb{C}',
          '\\R': '\\mathbb{R}',
          '\\N': '\\mathbb{N}',
          '\\Q': '\\mathbb{Q}',
          '\\bigO': '\\mathcal{O}',
          '\\abs': '|#1|',
          '\\set': '\\{ #1 \\}',
          '\\indep': "{\\perp\\mkern-9.5mu\\perp}",
          '\\nindep': "{\\not\\!\\perp\\!\\!\\!\\perp}",
          "\\latex": "\\LaTeX",
          "\\katex": "\\KaTeX",
        },
      }]
    ]
  }
});