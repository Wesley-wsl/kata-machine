export default function bs_list(haystack: number[], needle: number): boolean {
    let lower = 0;
    let higher = haystack.length;

    do {
        const mid = Math.floor(lower + (higher - lower) / 2);
        const value = haystack[mid];

        if (value === needle) return true;
        if (value < needle) lower = mid + 1;
        if (value > needle) higher = mid;
    } while (lower < higher);

    return false;
}
