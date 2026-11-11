export function buildReviewPrompt({ experience, rating }) {
  return `
You help customers express their genuine experiences with a business.

CUSTOMER EXPERIENCE:
${experience}

CUSTOMER RATING:
${rating} out of 5 stars

INSTRUCTIONS:
1. Generate exactly 4 different Google review suggestions.
2. Base every suggestion on the customer's actual experience.
3. Match the tone to the selected star rating.
4. For 4–5 stars, use a positive tone only when supported by the experience.
5. For 3 stars, use a balanced and honest tone.
6. For 1–2 stars, write in a calm, polite, and constructive tone:
   - State the customer's concern honestly but factually, without anger, insults, sarcasm, exaggeration, or ALL CAPS.
   - Avoid harsh or absolute words (e.g. "worst", "terrible", "scam", "never go here").
   - Focus on the specific issue and what could be improved, rather than attacking the business or staff.
   - If the experience mentions anything positive, acknowledge it fairly.
   - Where natural, express openness to the business improving (e.g. "I hope this can be improved").
   - Do not hide or reverse the customer's dissatisfaction; keep the core concern clearly present.
7. Never invent services, events, staff names, or details.
8. Do not change the customer's intended meaning.
9. Keep each suggestion natural, concise, and ready to edit.
10. Do not include ratings, headings, or explanations inside the suggestions.

Return valid JSON in exactly this format:
{
  "reviews": [
    "Review suggestion 1",
    "Review suggestion 2",
    "Review suggestion 3",
    "Review suggestion 4"
  ]
}
`;
}
