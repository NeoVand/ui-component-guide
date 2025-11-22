import type { Registry, ComponentFamily, ComponentItem } from '../types/registry';

export interface SearchResult {
  componentName: string;
  familyName: string;
  description?: string;
  libraryId: string;
}

/**
 * Search for components within a specific library
 * @param registry - The full registry object
 * @param libraryId - The ID of the library to search in
 * @param query - The search query string
 * @returns Array of search results
 */
export function searchComponents(
  registry: Registry,
  libraryId: string | null,
  query: string
): SearchResult[] {
  if (!query.trim() || !libraryId || !registry[libraryId]) {
    return [];
  }

  const normalizedQuery = query.toLowerCase().trim();
  const results: SearchResult[] = [];
  const library = registry[libraryId];

  // Search through all families and components in the selected library
  library.families.forEach((family: ComponentFamily) => {
    family.components.forEach((component: ComponentItem) => {
      const componentNameMatch = component.name.toLowerCase().includes(normalizedQuery);
      const descriptionMatch = component.description?.toLowerCase().includes(normalizedQuery);
      const familyNameMatch = family.name.toLowerCase().includes(normalizedQuery);

      if (componentNameMatch || descriptionMatch || familyNameMatch) {
        results.push({
          componentName: component.name,
          familyName: family.name,
          description: component.description,
          libraryId,
        });
      }
    });
  });

  // Sort results: exact matches first, then starts with, then contains
  return results.sort((a, b) => {
    const aNameLower = a.componentName.toLowerCase();
    const bNameLower = b.componentName.toLowerCase();
    
    const aExact = aNameLower === normalizedQuery;
    const bExact = bNameLower === normalizedQuery;
    if (aExact && !bExact) return -1;
    if (!aExact && bExact) return 1;
    
    const aStartsWith = aNameLower.startsWith(normalizedQuery);
    const bStartsWith = bNameLower.startsWith(normalizedQuery);
    if (aStartsWith && !bStartsWith) return -1;
    if (!aStartsWith && bStartsWith) return 1;
    
    return a.componentName.localeCompare(b.componentName);
  });
}

