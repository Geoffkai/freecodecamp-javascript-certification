const markdownInput = document.getElementById("markdown-input");
const htmlOutput = document.getElementById("html-output");
const preview = document.getElementById("preview");

const headingRegex = /^(#{1,3})\s(.*)$/gm;
const strongRegex = /(\*\*|__)(.*?)\1/g;
const italicRegex = /(\*|_)(.*?)\1/g;
const imgRegex = /!\[(.*?)\]\((.*?)\)/g;
const aRegex = /\[(.*?)\]\((.*?)\)/g;
const quoteRegex = /^>\s(.*)$/gm;

function convertMarkdown() {
  const input = markdownInput.value;

  const html = input
    .replace(headingRegex, (match, hashes, text) => {
      return `<h${hashes.length}>${text}</h${hashes.length}>`;
    })
    .replace(strongRegex, (match, pattern, text) => {
      return `<strong>${text}</strong>`;
    })
    .replace(italicRegex, (match, pattern, text) => {
      return `<em>${text}</em>`;
    })
    .replace(imgRegex, (match, alt, src) => {
      return `<img alt="${alt}" src="${src}">`;
    })
    .replace(aRegex, (match, linkText, url) => {
      return `<a href="${url}">${linkText}</a>`;
    })
    .replace(quoteRegex, (match, quote) => {
      return `<blockquote>${quote}</blockquote>`;
    });

  htmlOutput.textContent = html;
  preview.innerHTML = html;
  return html;
}

markdownInput.addEventListener("input", convertMarkdown);
