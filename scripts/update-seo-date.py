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

Usage:
  python scripts/update-seo-date.py --from-full August --from-abbr Aug \
      --to-full September --to-abbr Sep --year 2026
"""
import argparse
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
    args = parser.parse_args()

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
        if new_text != text:
            path.write_text(new_text, encoding="utf-8")
            changed.append(str(path.relative_to(ROOT.parent.parent)))

    print(f"Changed {len(changed)} file(s):")
    for c in changed:
        print(f"  {c}")


if __name__ == "__main__":
    main()
