# Color & Token Guidelines

## Source of Truth
- All color values live in `src/styles/tokens.css`. Never hard-code colors in component styles.
- Store colors in hex format. If transparency is required for backgrounds or shadows, use rgba directly in the consuming rule and reference base tokens when possible.

## Token Families
- `--color-*` tokens describe brand primitives (primary, dark, mid, light, muted). Use them for backgrounds, borders, and accents.
- `--text-*` tokens describe semantic text roles:
  - `--text-strong`: default for headings and prominent labels.
  - `--text-body`: standard body copy and long-form text.
  - `--text-secondary`: supportive text such as navigation links in their resting state.
  - `--text-muted`: tertiary copy (footers, meta data).
  - `--text-link`: interactive states (links, hover for titles).
  - `--text-link-strong`: intensified link hover/focus states.
  - `--text-page-title`: hero headline “Инженерим надежные цифровые продукты”.
  - `--text-brand-name`: company name in the header brand block.

## Usage Rules
- Text color declarations must reference `--text-*` tokens. Do not reuse `--color-*` tokens for text unless creating a new semantic token.
- Align component text styles with global semantics (e.g., blog card titles use `--text-strong`, CTA links use `--text-link`).
- Keep hover/focus states on text aligned with `--text-link`/`--text-link-strong` unless a component defines its own semantic role.
- Backgrounds, borders, and shadows can combine brand tokens with alpha variations to achieve depth, but text should not rely on rgba literals.

## Adding New Tokens
1. Confirm no existing token matches the required role; reuse before adding.
2. If a new color is needed, define a semantic name that reflects intent (e.g., `--text-alert` rather than `--text-red`).
3. Add the token to `src/styles/tokens.css` with a descriptive comment when necessary.
4. Update all relevant selectors to use the new token, and remove any hard-coded color values.
5. Verify the change in UI and, if applicable, document the new token in this file.

## Checklist Before Shipping
- [ ] Every text color uses a `--text-*` token.
- [ ] Brand primitives remain unchanged unless coordinated with design.
- [ ] New tokens use hex values and descriptive, purposeful names.
- [ ] UI states (default, hover, focus) align with the semantic token family.
