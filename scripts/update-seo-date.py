#!/usr/bin/env python3
"""
Bumps the recurring SEO "freshness" date-stamp (e.g. "Aug 2026" / "August 2026")
across every store page's metadata title/description, openGraph/twitter fields,
JSON-LD, and SEO body copy.

Only does two literal substring replacements per file:
  "<from-full> <year>" -> "<to-full> <year>"   (e.g. "August 2026" -> "September 2026")
  "<from-abbr> <year>" -> "<to-abbr> <year>"   (e.g. "Aug 2026" -> "Sep 2026")

Scope: every page.tsx and _components/StoreCouponsContent.tsx under app/stores/.
Never touches offers.md or any other file. Never touches dates that include a
day number (real offer promo dates), since those don't match "<month> <year>".

Optional --modified-date YYYY-MM-DD also rewrites the value of every JSON-LD
`dateModified` in page.tsx files (only stores that have one, e.g. AT&T).
datePublished is never touched.

Usage:
  python scripts/update-seo-date.py --from-full August --from-abbr Aug \
      --to-full September --to-abbr Sep --year 2026 [--modified-date 2026-09-01]
"""
import argparse
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent / "app" / "stores"


def main():
    parser = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    parser.add_argument("--from-full", required=True, help='e.g. "August"')
    parser.add_argument("--from-abbr", required=True, help='e.g. "Aug"')
    parser.add_argument("--to-full", required=True, help='e.g. "September"')
    parser.add_argument("--to-abbr", required=True, help='e.g. "Sep"')
    parser.add_argument("--year", required=True, help='e.g. "2026" (use the same year unless it also changed)')
    parser.add_argument("--to-year", default=None, help="year to write (defaults to --year if omitted)")
    parser.add_argument("--modified-date", default=None, help='e.g. "2026-10-01"; rewrites JSON-LD dateModified in page.tsx files')
    args = parser.parse_args()

    if args.modified_date and not re.fullmatch(r"\d{4}-\d{2}-\d{2}", args.modified_date):
        parser.error("--modified-date must look like YYYY-MM-DD")
    modified_re = re.compile(r'("?dateModified"?\s*:\s*")\d{4}-\d{2}-\d{2}(")')

    from_year = args.year
    to_year = args.to_year or args.year

    replacements = [
        (f"{args.__dict__['from_full']} {from_year}", f"{args.__dict__['to_full']} {to_year}"),
        (f"{args.__dict__['from_abbr']} {from_year}", f"{args.__dict__['to_abbr']} {to_year}"),
    ]

    targets = list(ROOT.glob("**/page.tsx")) + list(ROOT.glob("**/_components/StoreCouponsContent.tsx"))

    changed = []
    for path in targets:
        text = path.read_text(encoding="utf-8")
        new_text = text
        for old, new in replacements:
            new_text = new_text.replace(old, new)
        if args.modified_date and path.name == "page.tsx":
            new_text = modified_re.sub(lambda m: f"{m.group(1)}{args.modified_date}{m.group(2)}", new_text)
        if new_text != text:
            path.write_text(new_text, encoding="utf-8")
            changed.append(str(path.relative_to(ROOT.parent.parent)))

    print(f"Changed {len(changed)} file(s):")
    for c in changed:
        print(f"  {c}")


if __name__ == "__main__":
    main()
