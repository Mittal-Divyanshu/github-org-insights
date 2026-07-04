export type LanguageMap = Record<string, number>;

export function aggregateLanguages(
  languages: LanguageMap[]
): LanguageMap {

  const result: LanguageMap = {};

  for (const repoLanguages of languages) {

    for (const language in repoLanguages) {

      result[language] =
        (result[language] || 0) +
        repoLanguages[language];

    }

  }

  return result;
}