export function getCodeError(error: any) {
    if (error.code.startsWith('22')) {
        return 'FORMAT_INVALIDE';
    } else {
        return 'INDEFINI';
    }
}
