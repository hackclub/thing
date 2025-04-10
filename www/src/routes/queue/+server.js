import { json } from "@sveltejs/kit";
import { AIRTABLE_PAT } from "$env/static/private";

import Airtable from "airtable";

const base = new Airtable({ apiKey: AIRTABLE_PAT }).base("appc89ljZr85tsg7f");

export async function GET() {
  const queueContent = await base("Registration")
    .select({
      view: "Grid view",
    })
    .all()
    .then((recs) => recs.map((rec) => rec.fields));

  return json(queueContent);
}
