import type { Metadata } from "next";
import QuotePage, { metadata as quote } from "../get-a-quote/page";

// Same page as Get a Quote (static hosting can't redirect). Canonical points there to avoid duplicate content.
export const metadata: Metadata = { ...quote, title: "Contact" };
export default QuotePage;
