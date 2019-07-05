import { markdown } from 'markdown';

const initMarkdown = () => {
  const markdownEls = document.querySelectorAll('markdown-container');
  const preview     = document.getElementById('preview');
  const html        = markdown.toHTML(markdownEls.innerHTML);
  console.log(html)
};

export { initMarkdown };
