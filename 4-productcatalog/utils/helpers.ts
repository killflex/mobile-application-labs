/**
 * Format number to Indonesian Rupiah currency
 * @param price - The price in number format
 * @returns Formatted price string (e.g., "Rp 75.000")
 */
export const formatPrice = (price: number): string => {
  return `Rp ${price.toLocaleString('id-ID')}`;
};

/**
 * Get category display name with proper capitalization
 * @param category - The category key
 * @returns Formatted category name
 */
export const getCategoryName = (
  category: 'culinary' | 'fashion' | 'instrument' | 'handicraft'
): string => {
  const categoryNames = {
    culinary: 'Culinary',
    fashion: 'Fashion',
    instrument: 'Instrument',
    handicraft: 'Handicraft',
  };
  return categoryNames[category];
};

/**
 * Get category color for badges
 * @param category - The category key
 * @returns Tailwind color class
 */
export const getCategoryColor = (
  category: 'culinary' | 'fashion' | 'instrument' | 'handicraft'
): string => {
  const colors = {
    culinary: 'bg-orange-500',
    fashion: 'bg-purple-500',
    instrument: 'bg-blue-500',
    handicraft: 'bg-green-500',
  };
  return colors[category];
};

/**
 * Truncate text to specified length
 * @param text - The text to truncate
 * @param maxLength - Maximum length before truncation
 * @returns Truncated text with ellipsis
 */
export const truncateText = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength).trim() + '...';
};

/**
 * Generate unique ID for new products
 * @returns Unique timestamp-based ID
 */
export const generateId = (): string => {
  return Date.now().toString();
};

/**
 * Format date to readable string
 * @param date - The date object
 * @returns Formatted date string
 */
export const formatDate = (date: Date): string => {
  return new Intl.DateTimeFormat('id-ID', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(new Date(date));
};
