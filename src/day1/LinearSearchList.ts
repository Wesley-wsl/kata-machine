export default function linear_search(
    haystack: number[],
    needle: number,
): boolean {
    const found = haystack.indexOf(needle);
    if (found !== -1) return true;
    return false;
}
