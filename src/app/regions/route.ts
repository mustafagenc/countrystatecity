import { Region } from '@/types/TRegion';
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

    let data: Region[] = await readJsonFile('regions.json')

    if (query) {
        data = data.filter((region) =>
            region.name.toLowerCase().includes(query.toLowerCase())
        );
    }

    return handleResponse(data);
}