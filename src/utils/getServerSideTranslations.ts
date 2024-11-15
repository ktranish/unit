import fs from "fs/promises";
import path from "path";

export async function getServerSideTranslations(
  locale: string,
  namespaces: string[] = [],
) {
  const translations: Record<string, string> = {};

  if (namespaces.length === 0) {
    // If no namespaces are provided, load all files in the locale directory
    const localeDir = path.join(process.cwd(), "locales", locale);
    try {
      const files = await fs.readdir(localeDir);
      for (const file of files) {
        if (file.endsWith(".json")) {
          const namespace = file.replace(".json", "");
          const content = await fs.readFile(
            path.join(localeDir, file),
            "utf-8",
          );
          translations[namespace] = JSON.parse(content);
        }
      }
    } catch (error) {
      console.warn(`Error loading translations for locale "${locale}":`, error);
    }
  } else {
    // Load only the specified namespaces
    for (const namespace of namespaces) {
      const filePath = path.join(
        process.cwd(),
        "locales",
        locale,
        `${namespace}.json`,
      );
      try {
        const content = await fs.readFile(filePath, "utf-8");
        translations[namespace] = JSON.parse(content);
      } catch (error) {
        console.warn(
          `Missing translations for ${locale}/${namespace} - ${error}`,
        );
      }
    }
  }

  return translations;
}
