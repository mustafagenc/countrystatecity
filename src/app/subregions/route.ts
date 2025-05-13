import { SubRegion } from '@/types/TSubRegion';
import { handleResponse, readJsonFile, verifyAuthorization } from '@/lib/utils';
import { NextRequest } from 'next/server';

export async function GET(request: NextRequest,
    { params }: { params: Promise<{ query?: string }> }) {

    verifyAuthorization(request);

    const searchParams = request.nextUrl.searchParams;
    const query = searchParams.get('query');

    let data: SubRegion[] = await readJsonFile('subregions.json')

    if (query) {
        data = data.filter((subregion) =>
            subregion.name.toLowerCase().includes(query.toLowerCase())
        );
    }

    return handleResponse(data);
}