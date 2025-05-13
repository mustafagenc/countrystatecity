import { SubRegion } from '@/types/TSubRegion';
import { handleResponse, readJsonFile, verifyAuthorization } from '@/lib/utils';
import { NextRequest } from 'next/server';

export async function GET(request: NextRequest,
    { params }: { params: Promise<{ query?: string }> }) {

    const authHeader = request.headers.get('authorization');
    if (authHeader !== `Bearer ${process.env.AUTH_SECRET}`) {
        return new Response('Unauthorized', {
            status: 401,
        });
    }

    const searchParams = request.nextUrl.searchParams;
    const query = searchParams.get('query');
    const region_id = searchParams.get('region_id');

    let data: SubRegion[] = await readJsonFile('subregions.json');
    data = data.filter((subregion) => subregion.region_id === Number(region_id));

    if (query) {
        data = data.filter((subregion) =>
            subregion.name.toLowerCase().includes(query.toLowerCase())
        );
    }

    return handleResponse(data);
}