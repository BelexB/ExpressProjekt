import forEach from "lodash/forEach";
import { BoulderType } from "../models/boulderType";
import getConnection from "../database/connectionPool";

export function newScrapedSection(cragName: string): Promise<void> {
  //Saves the areas and date of the scraped section to the "scraped" table. Date defaults to now()
  return getConnection().then((client) => {
    client
      .query(
        "INSERT INTO webscraped_area (name) VALUES ($1) ON CONFLICT (name) DO NOTHING",
        [cragName]
      )
      .then(() => client.release());
  });
}
export function existingScrapedSection(cragName: string): Promise<void> {
  //Updates the date of the section in the "scraped" database
  return getConnection().then((client) => {
    client
      .query(
        "UPDATE webscraped_area SET scraping_date = now() WHERE name = ($1)",
        [cragName]
      )
      .then(() => client.release());
  });
}