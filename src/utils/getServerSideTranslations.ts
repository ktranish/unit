import fs from "fs/promises";
import path from "path";

export async function getServerSideTranslations(
  locale: string,
  namespaces: string[] = [],
  basePath: string = path.join(process.cwd(), "locales"),
): Promise<Record<string, string>> {
  if (typeof window !== "undefined") {
    throw new Error(
      "getServerSideTranslations is a server-side utility and cannot be used in the browser.",
    );
  }

  const translations: Record<string, string> = {};

  // Check for flat file structure (e.g., locales/sv.json) when no namespaces are provided
  if (namespaces.length === 0) {
    const flatFilePath = path.join(basePath, `${locale}.json`);
    try {
      const content = await fs.readFile(flatFilePath, "utf-8");
      return JSON.parse(content); // Return the parsed flat file as the translation object
    } catch (error) {
      console.warn(`Error loading translations for locale "${locale}":`, error);
      return {}; // Return an empty object if the flat file doesn't exist
    }
  }

  // Handle namespaces with nested directory structure (e.g., locales/sv/common.json)
  for (const namespace of namespaces) {
    const filePath = path.join(basePath, locale, `${namespace}.json`);
    try {
      const content = await fs.readFile(filePath, "utf-8");
      translations[namespace] = JSON.parse(content);
    } catch (error) {
      console.warn(`Missing translations for ${locale}/${namespace}:`, error);
    }
  }

  return translations;
}
